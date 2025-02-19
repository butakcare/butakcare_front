"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import ElderModal from "./ElderModal";
import Link from "next/link";

interface FilterProps {
  days: string[];
  grade: string;
  gender: string;
}

interface Props {
  Filter: FilterProps;
  setSize: React.Dispatch<React.SetStateAction<number>>;
  elderData: ElderData[];
}

interface ElderData {
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
}
interface CareDetails {
  [key: string]: string;
}

export default function ElderInfo({ Filter, setSize, elderData }: Props) {
  useEffect(() => {
    setSize(elderData.length);
  }, [elderData.length, setSize]);

  const [filter, setFilter] = useState<string>("전체");
  const [activeButton, setActiveButton] = useState<string>("");
  const [selectedElder, setSelectedElder] = useState<{
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
  } | null>(null);

  const filteredData = useMemo(() => {
    return elderData.filter((data) => {
      // 1️⃣ 매칭 상태 필터 (filter === "전체"이면 무시)
      if (filter !== "전체" && data.matching_status !== filter) {
        return false;
      }

      // 2️⃣ schedules 필터 (Filter.schedules가 비어있지 않을 때만 필터 적용)
      if (
        Filter.days.length > 0 &&
        !Filter.days.every((day) => data.days.includes(day))
      ) {
        return false;
      }

      // 3️⃣ gender 필터 (Filter.gender가 존재할 때만 적용)
      if (Filter.gender && data.gender !== Filter.gender) {
        return false;
      }

      // 4️⃣ grade 필터 (Filter.grade가 0이 아니면 적용)
      if (Filter.grade !== "" && data.care_grade !== Filter.grade) {
        return false;
      }

      return true;
    });
  }, [elderData, filter, Filter.days, Filter.gender, Filter.grade]);

  const matchingCounts = useMemo(() => {
    return {
      "매칭 전": elderData.filter((data) => data.matching_status === "매칭 전")
        .length,
      "조율 중": elderData.filter((data) => data.matching_status === "조율 중")
        .length,
      "매칭 완료": elderData.filter(
        (data) => data.matching_status === "매칭 완료"
      ).length,
    };
  }, [elderData]);

  const calculateMonthlySalary = (data: ElderData) => {
    const start = data.start_hour + data?.start_minute / 60;
    const end = data?.end_hour + data.end_minute / 60;
    const workHours = end - start;
    const weeklySalary = (data?.wage ?? 0) * workHours * data.days.length;
    const monthlySalary = weeklySalary * 4; // 4주 기준

    return monthlySalary;
  };

  const formatCurrency = (value: number) => {
    return value.toLocaleString("ko-KR");
  };

  const handleFilter = (status: string) => {
    if (filter === status) {
      setFilter("전체");
      setActiveButton("");
    } else {
      setFilter(status);
      setActiveButton(status);
    }
  };

  const buttonData = [
    { label: "매칭 전", count: matchingCounts["매칭 전"] },
    { label: "조율 중", count: matchingCounts["조율 중"] },
    { label: "매칭 완료", count: matchingCounts["매칭 완료"] },
  ];

  return (
    <div className="flex flex-col w-[1061px] pl-[20px] pt-[20px] mt-[25px] bg-[#F7F8FA] ">
      <div className="flex">
        <div className="flex gap-[12px]">
          {buttonData.map((button) => (
            <button
              key={button.label}
              onClick={() => handleFilter(button.label)}
              className={`w-[158px] h-[46px] rounded-[10px] text-[22px] font-[600] ${
                activeButton === button.label
                  ? "bg-[#58C185] text-[#FFFFFF]"
                  : "bg-[#DEDEDE] text-[#FFFFFF]"
              }`}
            >
              {button.label} ({button.count})
            </button>
          ))}
        </div>
        <div className="w-[197px] h-[46px] flex justify-center items-center bg-[#D7F3D1] rounded-[10px] ml-[250px]">
          <Link
            href="/manager/add"
            className="text-[22px] font-[600] text-[#2D8859] flex items-center gap-[5px]"
          >
            <div className="w-[24px] h-[24px] rounded-[48px] bg-[#58C185] text-[#FFFFFF] flex items-center justify-center">
              +
            </div>{" "}
            어르신 추가하기
          </Link>
        </div>
      </div>
      <div className="w-[980px] h-[520px] grid grid-cols-3 gap-[23px] mt-[15px] p-[0px] overflow-y-auto">
        {filteredData.map((data, idx) => (
          <div
            key={idx}
            onClick={() => setSelectedElder(data)}
            className="flex items-center justify-center w-[310px] h-[227px] p-[22px] bg-[#FFFFFF] rounded-[10px] gap-[19px] cursor-pointer"
          >
            <div className="flex flex-col items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="84"
                height="84"
                viewBox="0 0 84 84"
                fill="none"
              >
                <circle
                  cx="42"
                  cy="42"
                  r="40.5"
                  fill="white"
                  stroke="white"
                  strokeWidth="3"
                />
                <mask
                  id="mask0_803_10858"
                  maskUnits="userSpaceOnUse"
                  x="3"
                  y="3"
                  width="78"
                  height="78"
                >
                  <circle cx="42" cy="42" r="39" fill="#DFDDDB" />
                </mask>
                <g mask="url(#mask0_803_10858)">
                  <path
                    d="M27.2766 32.3633C17.9237 32.3633 10.3418 39.9452 10.3418 49.298C10.3418 55.954 14.1817 61.7131 19.767 64.4809C14.1817 67.2488 10.3418 73.0079 10.3418 79.6638C10.3418 89.0166 17.9237 96.5986 27.2766 96.5986C33.9325 96.5986 39.6916 92.7587 42.4594 87.1734C45.2273 92.7587 50.9864 96.5986 57.6423 96.5986C66.9951 96.5986 74.5771 89.0166 74.5771 79.6638C74.5771 73.0079 70.7372 67.2488 65.1519 64.4809C70.7372 61.7131 74.5771 55.954 74.5771 49.298C74.5771 39.9452 66.9951 32.3633 57.6423 32.3633C50.9864 32.3633 45.2273 36.2032 42.4594 41.7885C39.6916 36.2032 33.9325 32.3633 27.2766 32.3633Z"
                    fill="#191A1C"
                  />
                  <path
                    d="M32.3649 43.8329C32.3649 45.6067 30.927 47.0446 29.1532 47.0446C27.3794 47.0446 25.9414 45.6067 25.9414 43.8329C25.9414 42.059 27.3794 40.6211 29.1532 40.6211C30.927 40.6211 32.3649 42.059 32.3649 43.8329Z"
                    fill="white"
                  />
                  <path
                    d="M58.9782 43.8329C58.9782 45.6067 57.5403 47.0446 55.7665 47.0446C53.9926 47.0446 52.5547 45.6067 52.5547 43.8329C52.5547 42.059 53.9926 40.6211 55.7665 40.6211C57.5403 40.6211 58.9782 42.059 58.9782 43.8329Z"
                    fill="white"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M39.708 47.0113C38.7901 46.6441 37.8711 45.9552 37.8711 44.75H38.7887C38.7887 45.3801 39.2462 45.8382 40.0488 46.1593C40.8376 46.4748 41.8073 46.5853 42.4593 46.5853C43.1114 46.5853 44.0811 46.4748 44.8698 46.1593C45.6725 45.8382 46.1299 45.3801 46.1299 44.75H47.0476C47.0476 45.9552 46.1285 46.6441 45.2106 47.0113C44.2788 47.384 43.1837 47.5029 42.4593 47.5029C41.7349 47.5029 40.6399 47.384 39.708 47.0113Z"
                    fill="white"
                  />
                </g>
              </svg>
              <div className="w-[67px] h-[34px] mt-[15px] bg-[#D7F3D1] rounded-[8px] flex items-center justify-center text-[20px] font-[500] text-[#58C185]">
                {data.care_grade}
              </div>
            </div>
            <div className="flex flex-col gap-[9px]">
              <div className="flex items-center gap-[6px]">
                <p className="text-[26px] text-[#484848] font-[600]">
                  {data.name}
                </p>
                <p className="text-[22px] text-[#858585] font-[600]">
                  {data.gender}성
                </p>
              </div>
              <div className="flex items-center gap-[4px] mt-[6px]">
                <Image
                  src="/assets/icons/icon_calendar.svg"
                  alt="달력"
                  width={24}
                  height={24}
                />
                <div className="flex">
                  {data.days.map((day, idx) => (
                    <p
                      className="text-[22px] text-[#858585] font-[500]"
                      key={idx}
                    >
                      {day}
                      {idx < data.days.length - 1 && ","}
                    </p>
                  ))}
                </div>
              </div>
              <div className="flex items-center gap-[4px]">
                <Image
                  src="/assets/icons/icon_alarm.svg"
                  alt="시계"
                  width={24}
                  height={24}
                />
                <p className="whitespace-nowrap text-[22px] text-[#858585] font-[500]">
                  {`${String(data.start_hour).padStart(2, "0")}:${String(
                    data.start_minute
                  ).padStart(2, "0")}
    ~ ${String(data.end_hour).padStart(2, "0")}:${String(
                    data.end_minute
                  ).padStart(2, "0")}`}
                </p>
              </div>
              <div className="flex items-start gap-[4px]">
                <Image
                  src="/assets/icons/icon_salary.svg"
                  alt="시급"
                  width={24}
                  height={24}
                  className="mt-[4px]"
                />
                <p className="text-[22px] text-[#858585] font-[500] whitespace-nowrap">
                  시급 {data.wage !== null ? formatCurrency(data.wage) : "0"}원{" "}
                  <br />
                  월급 {formatCurrency(calculateMonthlySalary(data))}원
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      {selectedElder && (
        <ElderModal
          data={selectedElder}
          onClose={() => setSelectedElder(null)}
        />
      )}
    </div>
  );
}
