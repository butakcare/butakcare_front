"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import ElderModal from "./ElderModal";

interface FilterProps {
  schedules: string[];
  time: string;
  grade: number;
  address: string;
}

interface Props {
  Filter: FilterProps;
  setSize: React.Dispatch<React.SetStateAction<number>>;
}

export default function ElderInfo({ Filter, setSize }: Props) {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const datas = [
    {
      id: 1,
      profile: "",
      name: "김복순",
      grade: 2,
      gender: "여",
      schedules: ["화", "수", "목", "금"],
      time: "09:00 ~ 12:00",
      location: "종로구 낙원동",
      matching: "매칭 완료",
    },
    {
      id: 2,
      profile: "",
      name: "김복순",
      grade: 3,
      gender: "여",
      schedules: ["월", "화", "수", "목", "금"],
      time: "09:00 ~ 12:00",
      location: "종로구 낙원동",
      matching: "매칭 완료",
    },
    {
      id: 3,
      profile: "",
      name: "김복순",
      grade: 3,
      gender: "여",
      schedules: ["월", "화", "목", "금"],
      time: "18:00 ~ 21:00",
      location: "종로구 낙원동",
      matching: "조율 중",
    },
    {
      id: 4,
      profile: "",
      name: "김복순",
      grade: 1,
      gender: "여",
      schedules: ["월"],
      time: "09:00 ~ 12:00",
      location: "종로구 낙원동",
      matching: "매칭 조율",
    },
    {
      id: 5,
      profile: "",
      name: "김복순",
      grade: 3,
      gender: "남",
      schedules: ["월", "화", "수", "목", "금"],
      time: "09:00 ~ 12:00",
      location: "종로구 낙원동",
      matching: "조율 중",
    },
    {
      id: 6,
      profile: "",
      name: "김복순",
      grade: 3,
      gender: "남",
      schedules: ["월", "화", "수", "목", "금"],
      time: "09:00 ~ 12:00",
      location: "종로구 낙원동",
      matching: "조율 중",
    },
    {
      id: 7,
      profile: "",
      name: "김복순",
      grade: 3,
      gender: "여",
      schedules: ["월", "화", "수"],
      time: "12:00 ~ 18:00",
      location: "종로구 낙원동",
      matching: "매칭 전",
    },
    {
      id: 8,
      profile: "",
      name: "김복순",
      grade: 2,
      gender: "남",
      schedules: ["월", "화", "수", "목", "금"],
      time: "12:00 ~ 18:00",
      location: "종로구 낙원동",
      matching: "매칭 전",
    },
  ];

  useEffect(() => {
    setSize(datas.length);
  }, [datas.length, setSize]);

  const [filter, setFilter] = useState<string>("전체");
  const [activeButton, setActiveButton] = useState<string>("");
  const [selectedElder, setSelectedElder] = useState<{
    id: number;
    profile: string;
    name: string;
    grade: number;
    gender: string;
    schedules: string[];
    time: string;
    location: string;
    matching: string;
  } | null>(null);

  const filteredData = useMemo(() => {
    return datas.filter((data) => {
      // 1️⃣ 매칭 상태 필터 (filter === "전체"이면 무시)
      if (filter !== "전체" && data.matching !== filter) {
        return false;
      }

      // 2️⃣ schedules 필터 (Filter.schedules가 비어있지 않을 때만 필터 적용)
      if (
        Filter.schedules.length > 0 &&
        !Filter.schedules.every((day) => data.schedules.includes(day))
      ) {
        return false;
      }

      // 3️⃣ time 필터 (Filter.time이 존재할 때만 적용)
      if (Filter.time && data.time !== Filter.time) {
        return false;
      }

      // 4️⃣ grade 필터 (Filter.grade가 0이 아니면 적용)
      if (Filter.grade !== 0 && data.grade !== Filter.grade) {
        return false;
      }

      // 5️⃣ address 필터 (Filter.address가 존재할 때만 적용)
      if (Filter.address && !data.location.includes(Filter.address)) {
        return false;
      }

      return true;
    });
  }, [
    datas,
    filter,
    Filter.schedules,
    Filter.time,
    Filter.grade,
    Filter.address,
  ]);

  const matchingCounts = useMemo(() => {
    return {
      "매칭 전": datas.filter((data) => data.matching === "매칭 전").length,
      "조율 중": datas.filter((data) => data.matching === "조율 중").length,
      "매칭 완료": datas.filter((data) => data.matching === "매칭 완료").length,
    };
  }, [datas]);

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
    <div className="flex flex-col w-[1041px] mt-[25px]">
      <div className="flex">
        <div className="flex gap-[12px]">
          {buttonData.map((button) => (
            <button
              key={button.label}
              onClick={() => handleFilter(button.label)}
              className={`w-[158px] h-[46px] rounded-[10px] text-[22px] font-[600] ${
                activeButton === button.label
                  ? "bg-[#CCC]"
                  : "bg-[#DEDEDE] text-[#FFFFFF]"
              }`}
            >
              {button.label} ({button.count})
            </button>
          ))}
        </div>
        <div className="w-[197px] h-[46px] flex justify-center items-center bg-[#E8E8E8] rounded-[10px] ml-[250px]">
          <button className="text-[22px] font-[600] text-[#454545]">
            + 어르신 추가하기
          </button>
        </div>
      </div>
      <div className="w-[980px] h-[520px] grid grid-cols-3 gap-[23px] mt-[15px] p-[0px] overflow-y-auto">
        {filteredData.map((data, idx) => (
          <div
            key={idx}
            onClick={() => setSelectedElder(data)}
            className="flex items-center justify-center w-[299px] h-[227px] p-[22px] bg-[#F2F2F2] rounded-[10px] gap-[19px] cursor-pointer"
          >
            <div className="flex flex-col items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="78"
                height="78"
                viewBox="0 0 78 78"
                fill="none"
              >
                <circle cx="39" cy="39" r="39" fill="#D9D9D9" />
              </svg>
              <div className="w-[67px] h-[34px] mt-[15px] bg-[#B3B3B3] rounded-[8px] flex items-center justify-center text-[20px] font-[500] text-[#FFFFFF]">
                {data.grade}등급
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
                  {data.schedules.map((schedule, idx) => (
                    <p
                      className="text-[22px] text-[#858585] font-[500]"
                      key={idx}
                    >
                      {schedule}
                      {idx < data.schedules.length - 1 && ","}
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
                  {data.time}
                </p>
              </div>
              <div className="flex items-center gap-[4px]">
                <Image
                  src="/assets/icons/location.svg"
                  alt="위치"
                  width={24}
                  height={24}
                />
                <p className="text-[22px] text-[#858585] font-[500]">
                  {data.location}
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
