"use client";

interface WorkStep2Props {
  available_area: string[];
  available_areaChange: (value: string[]) => void;
}

export default function WorkStep2({}: WorkStep2Props) {
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

      <form className="flex flex-col justify-center items-center align-center pt-[25px]"></form>
    </div>
  );
}
