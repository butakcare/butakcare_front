"use client";

import { useState } from "react";
import Image from "next/image";

interface Filter {
  schedules: string[];
  time: string;
  grade: number;
  address: string;
}

interface FilterProps {
  filter: Filter;
  setFilter: (filter: Filter) => void;
}

export default function Filter({ filter, setFilter }: FilterProps) {
  const [selectedDays, setSelectedDays] = useState<string[]>([]);
  const [showDaysDropdown, setShowDaysDropdown] = useState(false);
  const [showWorkingHoursDropdown, setShowWorkingHoursDropdown] =
    useState(false);
  const [showCareGradeDropdown, setShowCareGradeDropdown] = useState(false);
  const [showAddressDropdown, setShowAddressDropdown] = useState(false);

  const [workingHours, setWorkingHours] = useState<string>("");
  const [careGrade, setCareGrade] = useState<number>(0);
  const [address, setAddress] = useState<string>("");

  const days = ["월", "화", "수", "목", "금", "토", "일"];
  const workingHoursOptions = [
    "09:00 ~ 12:00",
    "12:00 ~ 18:00",
    "18:00 ~ 21:00",
  ];
  const careGrades = [1, 2, 3];

  const toggleDay = (day: string) => {
    setFilter({
      ...filter,
      schedules: filter.schedules.includes(day)
        ? filter.schedules.filter((d) => d !== day)
        : [...filter.schedules, day],
    });
    setSelectedDays((prevSelectedDays) => {
      if (prevSelectedDays.includes(day)) {
        return prevSelectedDays.filter((d) => d !== day);
      }
      return [...prevSelectedDays, day];
    });
  };

  const handleWorkingHoursChange = (option: string) => {
    setFilter({ ...filter, time: option });
    setWorkingHours(option);
    setShowWorkingHoursDropdown(false);
  };

  const handleCareGradeChange = (grade: number) => {
    setFilter({ ...filter, grade });
    setCareGrade(grade);
    setShowCareGradeDropdown(false);
  };

  const handleAddressChange = (address: string) => {
    setFilter({ ...filter, address });
    setAddress(address);
    setShowAddressDropdown(false);
  };

  return (
    <div className="flex items-center gap-[12px] w-[1041px] mt-[51px]">
      <Image
        src="/assets/icons/icon_filter.svg"
        alt="필터"
        width={40}
        height={40}
      />
      {/* 근무 요일 필터 */}
      <div className="relative">
        <button
          onClick={() => setShowDaysDropdown(!showDaysDropdown)}
          className="flex items-center justify-center w-[141px] h-[47px] border border-[#909090] rounded-[10px]"
        >
          <span className="text-[22px] text-[#C6C6C6] font-[600] line-clamp-1">
            {selectedDays.length > 0 ? selectedDays.join(", ") : "근무 요일"}
          </span>
          <Image
            src="/assets/icons/icon_down_arrow.svg"
            alt="화살표"
            width={24}
            height={24}
          />
        </button>

        {showDaysDropdown && (
          <div className="absolute left-0 mt-2 w-[141px] bg-white border border-gray-300 shadow-md rounded-md p-2 z-10">
            {days.map((day) => (
              <div
                key={day}
                className="flex items-center gap-2 p-1 hover:bg-gray-100 cursor-pointer"
                onClick={() => toggleDay(day)}
              >
                <input
                  type="checkbox"
                  checked={selectedDays.includes(day)}
                  readOnly
                  className="hidden"
                />
                <span
                  className={`${
                    selectedDays.includes(day)
                      ? "text-[#464646] font-[700]"
                      : "text-[#C6C6C6]"
                  }`}
                >
                  {day}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* 근무 시간 */}
      <div className="relative">
        <button
          onClick={() => setShowWorkingHoursDropdown(!showWorkingHoursDropdown)}
          className="flex items-center justify-center w-[141px] h-[47px] border border-[#909090] rounded-[10px] text-[22px] font-[600] text-[#C6C6C6]"
        >
          <span className="line-clamp-1">{workingHours || "근무 시간"}</span>
          <Image
            src="/assets/icons/icon_down_arrow.svg"
            alt="화살표"
            width={24}
            height={24}
          />
        </button>

        {showWorkingHoursDropdown && (
          <div className="absolute left-0 mt-2 w-[141px] bg-white border border-gray-300 shadow-md rounded-[10px] p-2 z-10">
            {workingHoursOptions.map((option) => (
              <div
                key={option}
                className="p-1 hover:bg-gray-100 cursor-pointer text-[#C6C6C6]"
                onClick={() => handleWorkingHoursChange(option)}
              >
                {option}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* 장기요양등급 */}
      <div className="relative">
        <button
          onClick={() => setShowCareGradeDropdown(!showCareGradeDropdown)}
          className="flex items-center justify-center w-[174px] h-[47px] border border-[#909090] rounded-[10px] text-[22px] font-[600] text-[#C6C6C6]"
        >
          <span>{careGrade == 0 ? "장기요양등급" : `${careGrade}등급`}</span>
          <Image
            src="/assets/icons/icon_down_arrow.svg"
            alt="화살표"
            width={24}
            height={24}
          />
        </button>

        {showCareGradeDropdown && (
          <div className="absolute left-0 mt-2 w-[174px] bg-white border border-gray-300 shadow-md rounded-[10px] p-2 z-10">
            {careGrades.map((grade) => (
              <div
                key={grade}
                className="p-1 hover:bg-gray-100 cursor-pointer text-[#C6C6C6]"
                onClick={() => handleCareGradeChange(grade)}
              >
                {grade}등급
              </div>
            ))}
          </div>
        )}
      </div>

      {/* 주소 검색 */}
      <div className="relative">
        <button
          onClick={() => setShowAddressDropdown(!showAddressDropdown)}
          className="flex items-center justify-between w-[424px] h-[47px] px-[15px] border border-[#909090] rounded-[10px] text-[22px] font-[600] text-[#C6C6C6]"
        >
          <span>주소</span>
          <Image
            src="/assets/icons/icon_down_arrow.svg"
            alt="화살표"
            width={24}
            height={24}
          />
        </button>

        {showAddressDropdown && (
          <div className="absolute left-0 mt-2 w-[424px] bg-white border border-gray-300 shadow-md rounded-md p-2 z-10">
            {careGrades.map((grade) => (
              <div
                key={grade}
                className="p-1 hover:bg-gray-100 cursor-pointer text-[#C6C6C6]"
                onClick={() => handleAddressChange(address)}
              >
                {grade}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
