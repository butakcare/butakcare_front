"use client";

import React, { SetStateAction, useState, useEffect } from "react";
import Checked from "@/../public/assets/icons/icon_check.svg";

interface Prop {
  setIsCoordination: React.Dispatch<SetStateAction<boolean>>;
  setMessage: React.Dispatch<SetStateAction<CareRequest[]>>;
}

interface CareRequest {
  id: number;
  care_details: CareDetails;
  days: string[];
  sender: string;
  status: string; // 상태는 제한된 값만 가능하므로 문자열 리터럴 타입으로 설정
  start_hour: number;
  start_minute: number;
  end_hour: number;
  end_minute: number;
  detail: string;
  wage: number | null;
  created_at: string;
  matching: number;
}

interface CareDetails {
  [key: string]: string[]; // care_details 내의 항목들이 배열이므로 이와 같이 정의
}

export default function CoordinationRequestModal({
  setIsCoordination,
  setMessage,
}: Prop) {
  const [selectedDays, setSelectedDays] = useState<string[]>([]);
  const [salaryWeek, setSalaryWeek] = useState<number>(0);
  const [salaryMonth, setSalaryMonth] = useState<number>(0);
  const [isStartOpen, setIsStartOpen] = useState<boolean>(false);
  const [isEndOpen, setIsEndOpen] = useState<boolean>(false);
  const [startHour, setStartHour] = useState("");
  const [startMinute, setStartMinute] = useState("");
  const [endHour, setEndHour] = useState("");
  const [endMinute, setEndMinute] = useState("");
  const [req, setReq] = useState<string>("");

  const hours = Array.from({ length: 13 }, (_, i) =>
    (i + 9).toString().padStart(2, "0")
  );
  const minutes = Array.from({ length: 6 }, (_, i) =>
    (i * 10).toString().padStart(2, "0")
  );

  const handleCheckboxChange = (day: string) => {
    setSelectedDays((prevSelectedDays) => {
      if (prevSelectedDays.includes(day)) {
        return prevSelectedDays.filter((d) => d !== day);
      } else {
        return [...prevSelectedDays, day];
      }
    });
  };

  const formatTime = (hour: string, minute: string) => {
    if (!hour && !minute) return "";
    return `${hour || "00"}:${minute || "00"}`;
  };

  const formatCurrency = (value: number) => {
    return value.toLocaleString("ko-kr");
  };

  const calculateMonthlySalary = () => {
    const start = parseInt(startHour) + parseInt(startMinute) / 60;
    const end = parseInt(endHour) + parseInt(endMinute) / 60;
    const workHours = end - start;
    const weeklySalary = salaryWeek * workHours * selectedDays.length;
    const monthlySalary = weeklySalary * 4; // 4주 기준
    if (monthlySalary) {
      setSalaryMonth(monthlySalary);
    } else {
      setSalaryMonth(0);
    }

    return monthlySalary;
  };

  const handleSalaryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (/^\d*$/.test(value)) {
      setSalaryWeek(Number(value));
    }
  };

  useEffect(() => {
    calculateMonthlySalary();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [salaryWeek, selectedDays, startHour, startMinute, endHour, endMinute]);

  const handleClick = () => {
    const newMessage: CareRequest = {
      id: 10,
      care_details: { details: ["3등급", "이동보조", "생활보조"] },
      days: ["수", "목", "금"],
      sender: "관리자",
      status: "조율",
      start_hour: Number(startHour),
      start_minute: Number(startMinute),
      end_hour: Number(endHour),
      end_minute: Number(endMinute),
      detail: req,
      wage: salaryWeek,
      created_at: "2025년 2월 20일",
      matching: 10,
    };
    setIsCoordination(false);
    setMessage((prev) => [...prev, newMessage]);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="flex flex-col bg-[#FCFCFB] items-center rounded-[20px] w-[742px] h-[802px] px-[23px] py-[13px] overflow-y-auto">
        <div className="w-[742px] flex justify-between items-center mt-[49px] px-[30px]">
          {" "}
          <strong className="text-[34px] text-[#000000] font-[700] ">
            근무조건
          </strong>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            onClick={() => setIsCoordination(false)}
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M3.9298 0.641627C3.49871 0.225266 2.92133 -0.00512141 2.32203 8.6406e-05C1.72272 0.00529422 1.14943 0.24568 0.725645 0.66947C0.301855 1.09326 0.0614688 1.66655 0.056261 2.26585C0.0510531 2.86516 0.28144 3.44254 0.697802 3.87363L12.7961 15.9719L0.697802 28.0702C0.479493 28.281 0.305362 28.5333 0.18557 28.8121C0.0657779 29.091 0.0027236 29.3909 8.63011e-05 29.6944C-0.00255099 29.9979 0.0552815 30.2989 0.170209 30.5798C0.285137 30.8607 0.454858 31.1159 0.66947 31.3305C0.884082 31.5451 1.13929 31.7149 1.42019 31.8298C1.7011 31.9447 2.00208 32.0026 2.30558 31.9999C2.60907 31.9973 2.909 31.9342 3.18787 31.8144C3.46674 31.6946 3.71895 31.5205 3.9298 31.3022L16.0281 19.2039L28.1264 31.3022C28.5575 31.7186 29.1348 31.9489 29.7341 31.9437C30.3335 31.9385 30.9067 31.6981 31.3305 31.2744C31.7543 30.8506 31.9947 30.2773 31.9999 29.678C32.0051 29.0787 31.7747 28.5013 31.3584 28.0702L19.2601 15.9719L31.3584 3.87363C31.7747 3.44254 32.0051 2.86516 31.9999 2.26585C31.9947 1.66655 31.7543 1.09326 31.3305 0.66947C30.9067 0.24568 30.3335 0.00529422 29.7341 8.6406e-05C29.1348 -0.00512141 28.5575 0.225266 28.1264 0.641627L16.0281 12.7399L3.9298 0.641627Z"
              fill="black"
            />
          </svg>
        </div>
        <p className="text-[26px] text-[#000000] font-[700] w-[742px] ml-[60px] mt-[48px]">
          구인 요일
        </p>
        <div className="flex items-center justify-start gap-[23px] w-[682px] h-[86px] rounded-[14px] bg-[#F7F8FA] pl-[23px] mt-[13px]">
          {["월", "화", "수", "목", "금", "토", "일"].map((day) => (
            <label
              key={day}
              className="text-[22px] font-[600] text-[#909090] flex items-center"
            >
              <input
                type="checkbox"
                value={day}
                checked={selectedDays.includes(day)}
                onChange={() => handleCheckboxChange(day)}
                className="mr-[10px] w-[21px] h-[21px] appearance-none border border-solid checked:bg-[#58C185]"
                style={{
                  backgroundImage: selectedDays.includes(day)
                    ? `url(${Checked.src})`
                    : "none",
                  backgroundSize: "16px 16px",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              />
              {day}
            </label>
          ))}
        </div>

        <p className="text-[26px] text-[#000000] font-[700] mt-[27px] w-[742px] ml-[70px]">
          시작 시간 ~ 종료 시간
        </p>
        <div className="flex items-center gap-4 mt-[13px] w-[682px] h-[86px] bg-[#F7F8FA] rounded-[14px] pl-[23px]">
          {/* Start Time Section */}
          <div className="relative w-[156px]">
            <button
              onClick={() => {
                setIsStartOpen(!isStartOpen);
                setIsEndOpen(false);
              }}
              className="w-[156px] p-3 border rounded-lg flex justify-between items-center bg-white"
            >
              <span className="text-lg">
                {formatTime(startHour, startMinute) || "시작 시간"}
              </span>
              {isStartOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="10"
                  viewBox="0 0 18 10"
                  fill="none"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M1.12447 10L0 8.83872L8.24823 0.319686C8.44973 0.114657 8.71935 0 9 0C9.28065 0 9.55027 0.114657 9.75176 0.319686L18 8.83872L16.8745 10L9 1.86769L1.12447 10Z"
                    fill="#191A1C"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="10"
                  viewBox="0 0 18 10"
                  fill="none"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M16.8755 0L18 1.16128L9.75177 9.68031C9.55027 9.88534 9.28065 10 9 10C8.71935 10 8.44973 9.88534 8.24824 9.68031L0 1.16128L1.12553 0L9 8.13231L16.8755 0Z"
                    fill="#191A1C"
                  />
                </svg>
              )}
            </button>

            {isStartOpen && (
              <div className="absolute mt-1 w-full bg-white border rounded-lg shadow-lg z-20 flex">
                {/* Hours Column */}
                <div
                  className="flex-1 max-h-64 overflow-y-auto border-r"
                  style={{
                    scrollbarWidth: "none", // Firefox 대응
                    msOverflowStyle: "none", // IE/Edge 대응
                  }}
                >
                  <style jsx>{`
                    div::-webkit-scrollbar {
                      display: none; // Chrome, Safari 대응
                    }
                  `}</style>
                  {hours.map((hour) => (
                    <button
                      key={hour}
                      onClick={() => {
                        setStartHour(hour);
                        if (!startMinute) setStartMinute("00");
                      }}
                      className={`w-full p-3 text-left hover:bg-gray-100 ${
                        startHour === hour ? "bg-[#58C185]" : ""
                      }`}
                    >
                      {hour}
                    </button>
                  ))}
                </div>

                {/* Minutes Column */}
                <div
                  className="flex-1 max-h-64 overflow-y-auto"
                  style={{
                    scrollbarWidth: "none", // Firefox 대응
                    msOverflowStyle: "none", // IE/Edge 대응
                  }}
                >
                  <style jsx>{`
                    div::-webkit-scrollbar {
                      display: none; // Chrome, Safari 대응
                    }
                  `}</style>
                  {minutes.map((minute) => (
                    <button
                      key={minute}
                      onClick={() => {
                        setStartMinute(minute);
                        if (!startHour) setStartHour("00");
                        setIsStartOpen(false);
                      }}
                      className={`w-full p-3 text-left hover:bg-gray-100 ${
                        startMinute === minute ? "bg-[#58C185]" : ""
                      }`}
                    >
                      {minute}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="text-2xl">~</div>

          {/* End Time Section */}
          <div className="relative w-[156px] ">
            <button
              onClick={() => {
                setIsEndOpen(!isEndOpen);
                setIsStartOpen(false);
              }}
              className="w-[156px] p-3 border rounded-lg flex justify-between items-center bg-white"
            >
              <span className="text-lg">
                {formatTime(endHour, endMinute) || "종료 시간"}
              </span>
              {isEndOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="10"
                  viewBox="0 0 18 10"
                  fill="none"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M1.12447 10L0 8.83872L8.24823 0.319686C8.44973 0.114657 8.71935 0 9 0C9.28065 0 9.55027 0.114657 9.75176 0.319686L18 8.83872L16.8745 10L9 1.86769L1.12447 10Z"
                    fill="#191A1C"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="10"
                  viewBox="0 0 18 10"
                  fill="none"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M16.8755 0L18 1.16128L9.75177 9.68031C9.55027 9.88534 9.28065 10 9 10C8.71935 10 8.44973 9.88534 8.24824 9.68031L0 1.16128L1.12553 0L9 8.13231L16.8755 0Z"
                    fill="#191A1C"
                  />
                </svg>
              )}
            </button>

            {isEndOpen && (
              <div className="absolute mt-1 w-full bg-white border rounded-lg shadow-lg z-20 flex">
                {/* Hours Column */}
                <div
                  className="flex-1 max-h-64 overflow-y-auto border-r"
                  style={{
                    scrollbarWidth: "none", // Firefox 대응
                    msOverflowStyle: "none", // IE/Edge 대응
                  }}
                >
                  <style jsx>{`
                    div::-webkit-scrollbar {
                      display: none; // Chrome, Safari 대응
                    }
                  `}</style>
                  {hours.map((hour) => (
                    <button
                      key={hour}
                      onClick={() => {
                        setEndHour(hour);
                        if (!endMinute) setEndMinute("00");
                      }}
                      className={`w-full p-3 text-left hover:bg-gray-100 ${
                        endHour === hour ? "bg-[#58C185]" : ""
                      }`}
                    >
                      {hour}
                    </button>
                  ))}
                </div>

                {/* Minutes Column */}
                <div
                  className="flex-1 max-h-64 overflow-y-auto"
                  style={{
                    scrollbarWidth: "none", // Firefox 대응
                    msOverflowStyle: "none", // IE/Edge 대응
                  }}
                >
                  <style jsx>{`
                    div::-webkit-scrollbar {
                      display: none; // Chrome, Safari 대응
                    }
                  `}</style>
                  {minutes.map((minute) => (
                    <button
                      key={minute}
                      onClick={() => {
                        setEndMinute(minute);
                        if (!endHour) setEndHour("00");
                        setIsEndOpen(false);
                      }}
                      className={`w-full p-3 text-left hover:bg-gray-100 ${
                        endMinute === minute ? "bg-[#58C185]" : ""
                      }`}
                    >
                      {minute}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
        <div>
          <p className="text-[26px] text-[#000000] font-[700] mt-[29px]">
            구인 급여
          </p>
          <div className="w-[682px] h-[123px] bg-[#F7F8FA] rounded-[14px] mt-[30px] flex pl-[23px]">
            <p className="text-[22px] text-[#191A1C] font-[600] mt-[30px] whitespace-nowrap">
              시급
            </p>
            <input
              value={salaryWeek}
              onChange={(e) => handleSalaryChange(e)}
              maxLength={5}
              className="w-[156px] mt-[13px] ml-[14px] pl-[40px] h-[58px] items-center justify-center rounded-[10px] border border-[#666666] text-[#666666] text-[22px] font-[600]"
            />
            <p className="text-[22px] text-[#191A1C] font-[600] mt-[30px] ml-[32px]">
              원
            </p>
            <p className="text-[26px] whitespace-nowrap font-[600] text-[#909090] ml-[179px] mt-[74px]">
              월급{" "}
              <span className="text-[#191A1C]">
                {formatCurrency(salaryMonth) || "-"}원
              </span>
            </p>
          </div>
          <p className="text-[26px] font-[700] text-[#191A1C] mt-[22px]">
            추가 요청사항
          </p>
          <textarea
            placeholder="0/500"
            maxLength={500}
            onChange={(e) => setReq(e.target.value)}
            className="w-[677px] h-[115px] bg-[#F7F8FA] rounded-[14px] text-[22px] font-[500] px-[21px] py-[15px]"
          />
          <p className="text-[22px] font-[500] text-[#666666] mt-[27px]">
            꼼꼼히 확인하셨나요?
            <br />
            조율 요청을 하면 보내면 관리자에게 바로 알람이 가요.
          </p>
        </div>
        <div className="mt-[17px]  flex w-[742px] justify-end gap-[8px] mr-[30px]">
          <button
            onClick={() => handleClick()}
            className="w-[269px] h-[84px] bg-[#58C185] rounded-[10px] text-[22px] text-[#FFFFFF] font-[600]"
          >
            근무 조건 등록
          </button>
        </div>
      </div>
    </div>
  );
}
