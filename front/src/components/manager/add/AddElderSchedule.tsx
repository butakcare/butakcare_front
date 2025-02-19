"use client";

import { useState } from "react";
import Checked from "@/../public/assets/icons/icon_check.svg";

interface AddElderScheduleProps {
  selectedDays: string[];
  setSelectedDays: React.Dispatch<React.SetStateAction<string[]>>;
  startHour: string;
  setStartHour: React.Dispatch<React.SetStateAction<string>>;
  startMinute: string;
  setStartMinute: React.Dispatch<React.SetStateAction<string>>;
  endHour: string;
  setEndHour: React.Dispatch<React.SetStateAction<string>>;
  endMinute: string;
  setEndMinute: React.Dispatch<React.SetStateAction<string>>;
  setSelected: React.Dispatch<React.SetStateAction<number>>;
}

export default function AddElderSchedule({
  selectedDays,
  setSelectedDays,
  startHour,
  setStartHour,
  startMinute,
  setStartMinute,
  endHour,
  setEndHour,
  endMinute,
  setEndMinute,
  setSelected,
}: AddElderScheduleProps) {
  const [isStartOpen, setIsStartOpen] = useState<boolean>(false);
  const [isEndOpen, setIsEndOpen] = useState<boolean>(false);
  const [isLimit, setIsLimit] = useState<boolean>(false);

  const hours = Array.from({ length: 13 }, (_, i) =>
    (i + 9).toString().padStart(2, "0")
  );
  const minutes = Array.from({ length: 6 }, (_, i) =>
    (i * 10).toString().padStart(2, "0")
  );
  const formatTime = (hour: string, minute: string) => {
    if (!hour && !minute) return "";
    return `${hour || "00"}:${minute || "00"}`;
  };

  const handleCheckboxChange = (day: string) => {
    setSelectedDays((prevSelectedDays) => {
      if (prevSelectedDays.includes(day)) {
        return prevSelectedDays.filter((d) => d !== day);
      } else {
        return [...prevSelectedDays, day];
      }
    });
  };

  const handleLimitButton = () => {
    setIsLimit((prev: boolean) => !prev);
    setStartHour("09");
    setStartMinute("00");
    setEndHour("21");
    setEndMinute("00");
  };

  const handleGauge1 = () => {
    if (
      selectedDays.length > 0 &&
      startHour &&
      startMinute &&
      endHour &&
      endMinute
    ) {
      setSelected(2);
    }
  };

  return (
    <div className="h-[600px] w-full ml-[31px] mt-[45px]">
      <>
        <p className="text-[30px] text-[#000000] font-[600]">
          희망 요일을 선택해주세요. (복수선택 가능)
          <span className="w-[12px] text-[#FF602B] text-[30px] font-[600]">
            *
          </span>
        </p>
        <div className="flex mt-[20px] gap-[23px]">
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

        <p className="text-[30px] text-[#000000] font-[600] mt-[72px]">
          시작 시간과 종료 시간을 선택해주세요.
          <span className="w-[12px] text-[#FF602B] text-[30px] font-[600]">
            *
          </span>
        </p>
        <div className="flex items-center gap-4 mt-[25px]">
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

          {/* No Limit Button */}
          <button className="flex items-center gap-2 text-gray-500">
            <div
              className={`w-6 h-6 rounded-full border flex items-center justify-center ${
                isLimit ? "bg-[#58C185]" : "#666666"
              }`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="35"
                height="35"
                viewBox="0 0 35 35"
                fill="none"
                onClick={() => handleLimitButton()}
              >
                <path
                  d="M17.4996 29.3996C10.9196 29.3996 5.59961 24.0796 5.59961 17.4996C5.59961 10.9196 10.9196 5.59961 17.4996 5.59961C24.0796 5.59961 29.3996 10.9196 29.3996 17.4996C29.3996 24.0796 24.0796 29.3996 17.4996 29.3996ZM17.4996 6.99961C11.6896 6.99961 6.99961 11.6896 6.99961 17.4996C6.99961 23.3096 11.6896 27.9996 17.4996 27.9996C23.3096 27.9996 27.9996 23.3096 27.9996 17.4996C27.9996 11.6896 23.3096 6.99961 17.4996 6.99961Z"
                  fill={`${isLimit ? "#58C185" : "#FFFFFF"}`}
                />
                <path
                  d="M16.0998 22.6805L10.0098 16.5905L10.9898 15.6105L16.0998 20.7205L24.0098 12.8105L24.9898 13.7905L16.0998 22.6805Z"
                  fill={`${isLimit ? "#FFFFFF" : "#666666"}`}
                />
              </svg>
            </div>
            <span>무관</span>
          </button>
        </div>
        <div className="flex w-[726px] justify-between relative">
          <button
            onClick={() => handleGauge1()}
            className={`absolute right-[0px] bottom-[-364px] w-[254px] h-[58px] flex items-center justify-center ${
              selectedDays.length > 0 &&
              startHour &&
              startMinute &&
              endHour &&
              endMinute
                ? "bg-[#58C185]"
                : "bg-[#CFCFCF]"
            } rounded-[10px] text-[22px] text-[#FFFFFF] font-[600]`}
          >
            다음
          </button>
        </div>
      </>
    </div>
  );
}
