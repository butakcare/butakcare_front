"use client";

import { useState, useEffect } from "react";

interface WorkStep2Props {
  onDaysChange: (value: string[]) => void;
  onTimesChange: (value: string[]) => void;
}

export default function WorkStep2({
  onDaysChange,
  onTimesChange,
}: WorkStep2Props) {
  const [selectedDays, setSelectedDays] = useState<string[]>([]);
  const [selectedTimes, setSelectedTimes] = useState<string[]>([]);

  const days = ["월", "화", "수", "목", "금", "토", "일"];
  const times = ["오전(09:00~12:00)", "오후(12:00~18:00)", "저녁(18:00~21:00)"];

  const toggleSelection = (
    item: string,
    list: string[],
    setList: (value: string[]) => void
  ) => {
    setList(
      list.includes(item) ? list.filter((i) => i !== item) : [...list, item]
    );
  };

  useEffect(() => {
    onDaysChange(selectedDays);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedDays]);

  useEffect(() => {
    onTimesChange(selectedTimes);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedTimes]);

  return (
    <div>
      <div className="flex flex-col w-[354px]">
        <div className="text-[26px] font-bold flex items-center">
          근무 가능한 시간을
        </div>
        <div className="text-[26px] font-bold flex items-center">
          선택해주세요.
          <div className="flex items-end">
            <span className="font-semibold text-[#FF602B] text-[26px]">*</span>
          </div>
        </div>
      </div>

      <form
        className="flex flex-col justify-center items-center align-center pt-[25px]"
        onSubmit={(e) => e.preventDefault()}
      >
        <div className="mb-[25px]">
          <p className="font-semibold text-black mb-[10px] text-[18px]">
            근무 요일 (복수선택 가능)
          </p>
          <div className="flex gap-[4px] w-[354px] font-semibold">
            {days.map((day) => (
              <button
                key={day}
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  toggleSelection(day, selectedDays, setSelectedDays);
                }}
                className={`w-[47px] h-[52px] px-[16px] py-[15px] border border-[#666666] text-[#666666] rounded-[10px] ${
                  selectedDays.includes(day)
                    ? "bg-sub border-key text-black"
                    : "bg-[#FFFFFF] text-[#666666]"
                }`}
              >
                {day}
              </button>
            ))}
          </div>
        </div>

        <div className="mb-[25px] w-full">
          <p className="font-semibold text-black mb-[10px] text-[18px]">
            근무 시간 (복수 선택 가능)
          </p>
          <div className="flex flex-col gap-[10px]">
            {times.map((time) => (
              <button
                key={time}
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  toggleSelection(time, selectedTimes, setSelectedTimes);
                }}
                className={` font-semibold w-[354px] h-[52px] px-[16px] py-[15px] border border-[#666666] rounded-[10px] ${
                  selectedTimes.includes(time)
                    ? "bg-sub border-key text-black"
                    : "bg-[#FFFFFF] text-[#666666]"
                }`}
              >
                {time}
              </button>
            ))}
          </div>
        </div>
      </form>
    </div>
  );
}
