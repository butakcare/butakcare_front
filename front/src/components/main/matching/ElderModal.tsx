"use client";

import Image from "next/image";
import React, { SetStateAction, useState, useEffect } from "react";

interface ElderModalProps {
  data: {
    id: number;
    name: string;
    gender: string;
    birth: string;
    address: string;
    address_detail: string;
    care_details: CareDetails;
    care_grade: string;
    center: string | null;
    days: string[];
    detail: string;
    start_hour: number;
    start_minute: number;
    end_hour: number;
    end_minute: number;
    wage: number | null;
    weight: number | null;
    matching_status: string;
    photo: string | null;
  };
  onClose: React.Dispatch<SetStateAction<boolean>>;
  request: Requests;
}

interface CareDetails {
  [key: string]: string[];
}

interface Requests {
  days: string;
  end_hour: string;
  end_minute: string;
  start_hour: string;
  start_minute: string;
  wage: string;
}

export default function ElderModal({
  data,
  onClose,
  request,
}: ElderModalProps) {
  const [salaryMonth, setSalaryMonth] = useState<number>(0);

  useEffect(() => {
    const calculateMonthlySalary = () => {
      const start =
        Number(request.start_hour) + Number(request.start_minute) / 60;
      const end = Number(request.end_hour) + Number(request.end_minute) / 60;
      const workHours = end - start;
      const daysArray = request.days.split(",");
      const weeklySalary =
        (Number(request.wage) ?? 0) * workHours * (daysArray.length ?? 0);
      const monthlySalary = weeklySalary * 4; // 4주 기준
      setSalaryMonth(monthlySalary);
    };

    calculateMonthlySalary();
  }, [request]);

  if (!data) return null;

  const handleBackgroundClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose(false);
    }
  };

  const getAge = (birthDate: string): number => {
    const birthYear = Number(birthDate.split("-")[0]); // 출생 연도 가져오기
    const currentYear = new Date().getFullYear(); // 현재 연도 가져오기
    return currentYear - birthYear;
  };

  const formatCurrency = (value: number) => {
    return value.toLocaleString("ko-kr");
  };

  return (
    <div
      onClick={handleBackgroundClick}
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-[5]"
    >
      <div
        className="flex flex-col bg-[#FCFCFB] rounded-[20px] w-[742px] max-h-[95vh] overflow-y-auto pl-[30px] pt-[30px]"
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        <style jsx>{`
          div::-webkit-scrollbar {
            display: none;
          }
        `}</style>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="112"
              height="112"
              viewBox="0 0 112 112"
              fill="none"
            >
              <circle
                cx="56"
                cy="56"
                r="54.5"
                fill="white"
                stroke="white"
                strokeWidth="3"
              />
              <mask
                id="mask0_649_3336"
                maskUnits="userSpaceOnUse"
                x="3"
                y="3"
                width="106"
                height="106"
              >
                <circle cx="56" cy="56" r="53" fill="#DFDDDB" />
              </mask>
              <g mask="url(#mask0_649_3336)">
                <path
                  d="M35.991 42.9062C23.2807 42.9062 12.9771 53.2099 12.9771 65.9202C12.9771 74.9654 18.1953 82.7919 25.7857 86.5533C18.1953 90.3147 12.9771 98.1412 12.9771 107.186C12.9771 119.897 23.2807 130.2 35.991 130.2C45.0362 130.2 52.8627 124.982 56.6241 117.392C60.3855 124.982 68.212 130.2 77.2573 130.2C89.9675 130.2 100.271 119.897 100.271 107.186C100.271 98.1412 95.0529 90.3147 87.4626 86.5533C95.0529 82.7919 100.271 74.9654 100.271 65.9202C100.271 53.2099 89.9675 42.9062 77.2573 42.9062C68.212 42.9062 60.3855 48.1245 56.6241 55.7149C52.8627 48.1245 45.0362 42.9062 35.991 42.9062Z"
                  fill="#191A1C"
                />
                <path
                  d="M42.9071 58.4936C42.9071 60.9042 40.953 62.8583 38.5424 62.8583C36.1319 62.8583 34.1777 60.9042 34.1777 58.4936C34.1777 56.0831 36.1319 54.1289 38.5424 54.1289C40.953 54.1289 42.9071 56.0831 42.9071 58.4936Z"
                  fill="white"
                />
                <path
                  d="M79.0712 58.4936C79.0712 60.9042 77.1171 62.8583 74.7065 62.8583C72.2959 62.8583 70.3418 60.9042 70.3418 58.4936C70.3418 56.0831 72.2959 54.1289 74.7065 54.1289C77.1171 54.1289 79.0712 56.0831 79.0712 58.4936Z"
                  fill="white"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M52.8855 62.8133C51.6381 62.3143 50.3892 61.3781 50.3892 59.7402H51.6362C51.6362 60.5965 52.2579 61.2191 53.3487 61.6554C54.4205 62.0842 55.7383 62.2344 56.6245 62.2344C57.5106 62.2344 58.8284 62.0842 59.9002 61.6554C60.991 61.2191 61.6127 60.5965 61.6127 59.7402H62.8597C62.8597 61.3781 61.6108 62.3143 60.3634 62.8133C59.097 63.3198 57.6089 63.4814 56.6245 63.4814C55.64 63.4814 54.1519 63.3198 52.8855 62.8133Z"
                  fill="white"
                />
              </g>
            </svg>
            <p className="text-[34px] font-[700] text-[#484848] ml-4">
              {data.name}
            </p>
          </div>
        </div>
        <div className="flex items-start gap-[18px]">
          <div className="flex flex-col">
            <strong className="text-[26px] font-[700] text-[#000000] leading-[31px] mt-[12px]">
              어르신 정보
            </strong>
            <div className="flex flex-col w-[355px] h-auto pt-[18px] bg-[#F0F0F0] items-start pl-[23px] gap-[14px] rounded-[14px] pb-[19px] mt-[12px]">
              <div className="flex gap-[16px] h-[26px]">
                <p className="w-[75px] text-[22px] whitespace-nowrap font-[500] text-[#9A9A9A]">
                  성별
                </p>
                <p className="text-[22px] whitespace-nowrap font-[500] text-[#000000]">
                  {data.gender}성
                </p>
              </div>
              <div className="flex gap-[16px] h-[26px]">
                <p className="w-[75px] text-[22px] whitespace-nowrap font-[500] text-[#9A9A9A]">
                  나이
                </p>
                <p className="text-[22px] whitespace-nowrap font-[500] text-[#000000]">
                  {getAge(data.birth)}세
                </p>
              </div>
              <div className="flex gap-[16px] h-[26px]">
                <p className="w-[75px] text-[22px] whitespace-nowrap font-[500] text-[#9A9A9A]">
                  몸무게
                </p>
                <p className="text-[22px] whitespace-nowrap font-[500] text-[#000000]">
                  {data.weight}kg
                </p>
              </div>
              <div className="flex gap-[16px] h-[26px]">
                <p className="w-[75px] text-[22px] whitespace-nowrap font-[500] text-[#9A9A9A]">
                  요양등급
                </p>
                <p className="text-[22px] whitespace-nowrap font-[500] text-[#000000]">
                  {data.care_grade}
                </p>
              </div>
              <div className="flex gap-[16px] h-[26px]">
                <p className="w-[75px] text-[22px] whitespace-nowrap font-[500] text-[#9A9A9A]">
                  요일
                </p>
                <p className="text-[22px] whitespace-nowrap font-[500] text-[#191A1C]">
                  {data.days.join(", ")}
                </p>
              </div>
              <div className="flex gap-[16px]">
                <p className="w-[75px] text-[22px] whitespace-nowrap font-[500] text-[#9A9A9A]">
                  시간
                </p>
                <p className="whitespace-nowrap text-[22px] text-[#191A1C] font-[500]">
                  {`${String(request?.start_hour).padStart(2, "0")}:${String(
                    request?.start_minute
                  ).padStart(2, "0")}
    ~ ${String(request?.end_hour).padStart(2, "0")}:${String(
                    request?.end_minute
                  ).padStart(2, "0")}`}
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-[313px]">
            <strong className="text-[26px] font-[700] text-[#000000] leading-[31px] mt-[12px]">
              근무 위치
            </strong>
            <div className="flex w-[313px] h-auto bg-[#F0F0F0] items-center pl-[17px] gap-[10px] rounded-[14px] mt-4">
              <Image
                src="/assets/icons/location.svg"
                alt="위치"
                width={30}
                height={30}
              />
              <p className="text-[22px] font-[500] text-[#000000] line-clamp-2 py-[14px]">
                {data.address}
              </p>
            </div>
            <strong className="text-[26px] font-[700] text-[#000000] leading-[31px] mt-[28px]">
              근무 조건
            </strong>
            <div className="flex flex-col w-[313px] py-[20px] h-auto bg-[#F0F0F0] items-start justify-center pl-[22px] gap-[10px] rounded-[14px] mt-4">
              <div className="flex gap-[16px] h-[26px]">
                <p className="w-[75px] text-[22px] whitespace-nowrap font-[500] text-[#9A9A9A]">
                  기간
                </p>
                <p className="text-[22px] whitespace-nowrap font-[500] text-[#000000]">
                  {request.days}
                </p>
              </div>
              <div className="flex gap-[16px] h-[26px]">
                <p className="w-[75px] text-[22px] whitespace-nowrap font-[500] text-[#9A9A9A]">
                  시간
                </p>
                <p className="text-[22px] whitespace-nowrap font-[500] text-[#000000]">
                  {`${request?.start_hour}:${request?.start_minute} ~`}{" "}
                  {`${request?.end_hour}:${request?.end_minute}`}
                </p>
              </div>
              <div className="flex gap-[16px]">
                <p className="w-[75px] text-[22px] whitespace-nowrap font-[500] text-[#9A9A9A]">
                  급여
                </p>
                <div className="flex flex-col">
                  <p className="text-[22px] whitespace-nowrap font-[500] text-[#191A1C]">
                    {`시급 ${formatCurrency(Number(request.wage))}원`}
                    <br />
                    {`월급 ${formatCurrency(Math.floor(salaryMonth))}원`}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <strong className="text-[26px] font-[700] text-[#000000] leading-[31px] mt-[36px]">
          케어 필요 항목
        </strong>
        <div className="flex flex-col w-[683px] h-auto bg-[#F0F0F0] pl-[23px] pt-[14px] gap-[10px] rounded-[14px] mt-4 pb-[26px]">
          {Object.entries(data.care_details).map(([category, details]) => (
            <div key={category}>
              <p className="text-[22px] font-[700] text-[#676767]">
                {category}
              </p>
              <div className="flex flex-wrap gap-[10px]">
                {(details as unknown as string[]).map((detail, idx) => (
                  <div
                    key={idx}
                    className="px-[10px] py-[5px] h-[34px] flex justify-center items-center bg-[#D7F3D1] rounded-[8px]"
                  >
                    <p className="text-[20px] font-[500] text-[#58C185]">
                      {detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
          <p className="text-[22px] font-[700] text-[#676767]">건강상태</p>
          <div className="flex flex-wrap gap-[10px]">
            <div className="px-[4px] py-[5px] h-[34px] flex justify-center items-center rounded-[8px]">
              <p className="text-[20px] font-[500] text-[#191A1C]">
                {data.detail}
              </p>
            </div>
          </div>
        </div>
        <div className="mt-[30px] w-[683px] flex items-center justify-end mb-[32px]">
          <button
            onClick={() => onClose(false)}
            className="w-[248px] h-[84px] bg-[#58C185] rounded-[14px] text-[30px] text-[#FFFFFF] font-[600]"
          >
            닫기
          </button>
        </div>
      </div>
    </div>
  );
}
