"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import ElderModal from "./ElderModal";
import Link from "next/link";

interface FilterProps {
  schedules: string[];
  grade: number;
  gender: string;
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
      name: "한정자",
      grade: 3,
      gender: "여",
      birth: "1944.05.20",
      schedules: ["월", "수", "금"],
      times: ["09:00 ~ 13:00"],
      location: "은평구 불광동",
      matching: "매칭 완료",
    },
    {
      id: 2,
      profile: "",
      name: "박영호",
      grade: 2,
      gender: "남",
      birth: "1942.02.03",
      schedules: ["화", "목"],
      times: ["14:00 ~ 18:00"],
      location: "강서구 등촌동",
      matching: "매칭 완료",
    },
    {
      id: 3,
      profile: "",
      name: "김순자",
      grade: 4,
      gender: "여",
      birth: "1942.02.03",
      schedules: ["월", "화", "수"],
      times: ["10:00 ~ 14:00"],
      location: "송파구 잠실동",
      matching: "조율 중",
    },
    {
      id: 4,
      profile: "",
      name: "이대철",
      grade: 1,
      gender: "여",
      birth: "1942.11.25",
      schedules: ["월", "화", "수", "목", "금"],
      times: ["13:00 ~ 17:00"],
      location: "노원구 중계동",
      matching: "매칭 완료",
    },
    {
      id: 5,
      profile: "",
      name: "정영희",
      grade: 3,
      gender: "남",
      birth: "1950.07.01",
      schedules: ["월", "화", "수", "목", "금"],
      times: ["08:00 ~ 12:00"],
      location: "관악구 봉천동",
      matching: "조율 중",
    },
    {
      id: 6,
      profile: "",
      name: "최병철",
      grade: 2,
      gender: "남",
      birth: "1938.12.05",
      schedules: ["월", "수", "금"],
      times: ["09:00 ~ 12:00"],
      location: "마포구 아현동",
      matching: "조율 중",
    },
    {
      id: 7,
      profile: "",
      name: "박정숙",
      grade: 3,
      gender: "여",
      birth: "1945.9.15",
      schedules: ["월", "수", "금"],
      times: ["14:00 ~ 18:00"],
      location: "성북구 길음동",
      matching: "매칭 전",
    },
    {
      id: 8,
      profile: "",
      name: "이민수",
      grade: 2,
      gender: "남",
      birth: "1942.02.03",
      schedules: ["월", "화", "수", "목", "금"],
      times: ["12:00 ~ 18:00"],
      location: "광진구 구의동",
      matching: "매칭 전",
    },
    {
      id: 9,
      profile: "",
      name: "김미경",
      grade: 4,
      gender: "여",
      birth: "1948.02.28",
      schedules: ["수", "목", "금"],
      times: ["10:00 ~ 14:00"],
      location: "중랑구 상봉동",
      matching: "매칭 전",
    },
    {
      id: 10,
      profile: "",
      name: "강동원",
      grade: 1,
      gender: "남",
      birth: "1937.11.11",
      schedules: ["월", "화", "수", "목", "금"],
      times: ["09:00 ~ 13:00"],
      location: "구로구 개봉동",
      matching: "매칭 전",
    },
    {
      id: 11,
      profile: "",
      name: "윤혜숙",
      grade: 3,
      gender: "여",
      birth: "1943.08.08",
      schedules: ["화", "목"],
      times: ["12:00 ~ 18:00"],
      location: "강북구 미아동",
      matching: "매칭 전",
    },
    {
      id: 12,
      profile: "",
      name: "임철호",
      grade: 2,
      gender: "남",
      birth: "1939.04.15",
      schedules: ["월", "수", "금"],
      times: ["14:00 ~ 18:00"],
      location: "서초구 서초동",
      matching: "매칭 전",
    },
    {
      id: 13,
      profile: "",
      name: "송영자",
      grade: 4,
      gender: "여",
      birth: "1942.2.3",
      schedules: ["월", "화", "수", "목", "금"],
      times: ["12:00 ~ 18:00"],
      location: "종로구 낙원동",
      matching: "매칭 전",
    },
    {
      id: 14,
      profile: "",
      name: "오정수",
      grade: 2,
      gender: "남",
      birth: "1942.2.3",
      schedules: ["월", "화", "수", "목", "금"],
      times: ["12:00 ~ 18:00"],
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
    birth: string;
    schedules: string[];
    times: string[];
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

      // 3️⃣ gender 필터 (Filter.gender가 존재할 때만 적용)
      if (Filter.gender && data.gender !== Filter.gender) {
        return false;
      }

      // 4️⃣ grade 필터 (Filter.grade가 0이 아니면 적용)
      if (Filter.grade !== 0 && data.grade !== Filter.grade) {
        return false;
      }

      return true;
    });
  }, [datas, filter, Filter.schedules, Filter.gender, Filter.grade]);

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
              <div className="w-[67px] h-[34px] mt-[15px] bg-[#D7F3D1] rounded-[8px] flex items-center justify-center text-[20px] font-[500] text-[#58C185]">
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
                {data.times.map((time, idx) => (
                  <p
                    key={idx}
                    className="whitespace-nowrap text-[22px] text-[#858585] font-[500]"
                  >
                    {time}
                  </p>
                ))}
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
