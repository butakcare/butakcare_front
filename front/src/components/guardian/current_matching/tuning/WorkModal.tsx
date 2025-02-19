"use client";

import React, { SetStateAction } from "react";

interface Prop {
  onClose: React.Dispatch<SetStateAction<boolean>>;
  selectedDays: string[];
  setSelectedDays: React.Dispatch<SetStateAction<string[]>>;
  selectedTimes: string[];
  setSelectedTimes: React.Dispatch<SetStateAction<string[]>>;
  wage: number;
  setWage: React.Dispatch<SetStateAction<number>>;
  startDay: string;
  setStartDay: React.Dispatch<SetStateAction<string>>;
}

export default function WorkModal({
  onClose,
  selectedDays,
  setSelectedDays,
  selectedTimes,
  setSelectedTimes,
  startDay,
  setStartDay,
  wage,
  setWage,
}: Prop) {
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

  const calculateMonthlySalary = () => {
    const hoursPerSession = 3; // 시간대당 근무 시간
    const weeklyHours =
      selectedDays.length * selectedTimes.length * hoursPerSession;
    const monthlyHours = weeklyHours * 4;
    return Math.round(wage * monthlyHours);
  };

  const formatCurrency = (value: number) => {
    return value.toLocaleString("ko-kr");
  };
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg w-full h-full flex flex-col items-center overflow-y-auto">
        <h2 className="text-[26px] h-[31px] font-[700] text-[#191A1C] mb-4">
          근무 조건 수정
        </h2>

        {/* 시작 날짜 */}
        <div className="mb-4">
          <p className="font-[700] text-[#000000] text-[22px]">시작날짜</p>
          <div className="flex items-center gap-2">
            <input
              value={startDay}
              placeholder="YYYY.MM.DD"
              onChange={(e) => setStartDay(e.target.value)}
              className="w-[354px] h-[52px] flex items-center text-[#191A1C] text-[18px] mt-[25px] font-[600] pl-[18px] justify-start bg-[#FFFFFF] border rounded-[10px] border-[#191A1C]"
            />
          </div>
        </div>
        {/* 요일 선택 */}
        <div className="mb-4">
          <p className="font-[700] text-[#000000] text-[22px] ml-[10px]">
            요일 (복수선택 가능)
          </p>
          <div className="flex gap-2 ">
            {days.map((day) => (
              <button
                key={day}
                onClick={() =>
                  toggleSelection(day, selectedDays, setSelectedDays)
                }
                className={`w-[47px] h-[52px] mt-[25px] px-[16px] py-[15px] border rounded-[10px] ${
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
        <div className="mb-4">
          <p className="font-[700] text-[#000000] text-[22px] ml-[10px]">
            시간 (복수선택 가능)
          </p>
          <div className="flex flex-col gap-2 mt-[10px]">
            {times.map((time) => (
              <button
                key={time}
                onClick={() =>
                  toggleSelection(time, selectedTimes, setSelectedTimes)
                }
                className={`w-[350px] h-[52px] px-[16px] py-[15px] border border-[#666666] rounded-[10px] ${
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
          <p className="text-[22px] font-[700] text-[#000000]">급여</p>
          <div className="flex items-center gap-2">
            <div className="w-[355px] h-[143px] bg-[#F7F8FA] rounded-[14px]">
              <div className="flex items-center mt-[20px] ml-[9px] gap-[5px]">
                <span className="text-[18px] text-[#191A1C] font-[600]">
                  시급
                </span>
                <input
                  value={wage}
                  maxLength={5}
                  onChange={(e) => setWage(Number(e.target.value))}
                  className="w-[105px] pl-[20px] h-[52px] flex items-center text-[18px] text-[#191A1C] font-[600] justify-center rounded-[10px] border border-[#191A1C]"
                />
                <span className="text-[18px] text-[#191A1C] font-[600]">
                  원
                </span>
              </div>
              <div className="flex justify-end mr-[20px] mt-[20px] gap-[10px]">
                <p className="text-[18px] font-[600] text-[#2D8859]">월급 </p>
                <p className="text-[18px] font-[600] text-[#191A1C]">
                  {formatCurrency(calculateMonthlySalary())}
                </p>
                <p className="text-[18px] font-[600] text-[#191A1C]">원</p>
              </div>
            </div>
          </div>
        </div>

        {/* 완료 버튼 */}
        <div>
          <button
            onClick={() => onClose(false)}
            className="w-[354px] h-[52px] bg-[#58C185] text-[#FFFFFF] rounded-[10px] text-[18px] font-[600]"
          >
            완료
          </button>
        </div>
      </div>
    </div>
  );
}
