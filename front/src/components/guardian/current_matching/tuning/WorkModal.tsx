"use client";

import React, { SetStateAction, useState } from "react";
interface Prop {
  onClose: React.Dispatch<SetStateAction<boolean>>;
}

export default function WorkModal({ onClose }: Prop) {
  const [selectedDays, setSelectedDays] = useState<string[]>([]);
  const [selectedTimes, setSelectedTimes] = useState<string[]>([]);
  const [wage, setWage] = useState<number>(10300);
  const [noWageLimit, setNoWageLimit] = useState<boolean>(false);

  const days = ["월", "화", "수", "목", "금", "토", "일"];
  const times = [
    "오전 (09:00~12:00)",
    "오후 (12:00~18:00)",
    "저녁 (18:00~21:00)",
  ];

  const toggleSelection = (
    item: string,
    list: string[],
    setList: (value: string[]) => void
  ) => {
    setList(
      list.includes(item) ? list.filter((i) => i !== item) : [...list, item]
    );
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg w-full flex flex-col items-center">
        <h2 className="text-[26px] font-[700] text-[#191A1C] mb-4">
          근무 조건 수정
        </h2>

        {/* 요일 선택 */}
        <div className="mb-4">
          <p className="text-[22px] font-[500] text-[#9A9A9A]">요일</p>
          <p className="font-[600] text-[#666666] mb-2 text-[18px]">
            근무 요일 (복수선택 가능)
          </p>
          <div className="flex gap-2">
            {days.map((day) => (
              <button
                key={day}
                onClick={() =>
                  toggleSelection(day, selectedDays, setSelectedDays)
                }
                className={`w-[47px] h-[52px] px-[16px] py-[15px] border rounded-[10px] ${
                  selectedDays.includes(day)
                    ? "bg-[#58C185] text-[#FFFFFF]"
                    : "bg-[#FFFFFF]"
                }`}
              >
                {day}
              </button>
            ))}
          </div>
        </div>

        {/* 시간 선택 */}
        <div className="mb-4 w-full">
          <p className="text-[22px] font-[500] text-[#9A9A9A]">시간</p>
          <p className="font-[600] text-[#666666] mb-2 text-[18px]">
            근무 시간 (복수 선택 가능)
          </p>
          <div className="flex flex-col gap-2">
            {times.map((time) => (
              <button
                key={time}
                onClick={() =>
                  toggleSelection(time, selectedTimes, setSelectedTimes)
                }
                className={`w-[354px] h-[52px] px-[16px] py-[15px] border border-[#666666] rounded-[10px] ${
                  selectedTimes.includes(time)
                    ? "bg-[#58C185] text-[#FFFFFF]"
                    : "bg-[#FFFFFF] text-[#666666]"
                }`}
              >
                {time}
              </button>
            ))}
          </div>
        </div>

        {/* 급여 설정 */}
        <div className="mb-4">
          <p className="font-semibold mb-2">급여</p>
          <div className="flex items-center gap-2">
            <span>시급</span>
            <input
              type="number"
              value={wage}
              onChange={(e) => setWage(Number(e.target.value))}
              className="border px-2 py-1 w-24 rounded"
              disabled={noWageLimit}
            />
            <span>원</span>
          </div>
          <div className="mt-2">
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={noWageLimit}
                onChange={() => setNoWageLimit(!noWageLimit)}
              />
              급여 상관없음
            </label>
          </div>
        </div>

        {/* 완료 버튼 */}
        <button
          onClick={() => onClose(false)}
          className="w-[354px] h-[52px] bg-[#58C185] text-[#FFFFFF] rounded-[10px] text-[18px] font-[600]"
        >
          완료
        </button>
      </div>
    </div>
  );
}
