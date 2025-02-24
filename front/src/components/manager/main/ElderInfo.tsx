"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import ElderModal from "./ElderModal";
import Link from "next/link";
import { ElderData } from "@/types/ElderData";
import Profile from "@/../public/assets/images/profile.png";

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

export default function ElderInfo({ Filter, setSize, elderData }: Props) {
  useEffect(() => {
    setSize(elderData.length);
  }, [elderData.length, setSize]);

  const [filter, setFilter] = useState<string>("전체");
  const [activeButton, setActiveButton] = useState<string>("");
  const [selectedElder, setSelectedElder] = useState<ElderData>();

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
              {data.photo ? (
                data.photo
              ) : (
                <Image src={Profile} alt="프로필" width={106} height={106} />
              )}
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
          onClose={() => setSelectedElder(undefined)}
        />
      )}
    </div>
  );
}
