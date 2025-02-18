import { useState } from "react";
import Checked from "@/../public/assets/icons/icon_check.svg";

export default function AddElderSchedule() {
  const [selectedDays, setSelectedDays] = useState<string[]>([]);

  const handleCheckboxChange = (day: string) => {
    setSelectedDays((prevSelectedDays) => {
      if (prevSelectedDays.includes(day)) {
        return prevSelectedDays.filter((d) => d !== day);
      } else {
        return [...prevSelectedDays, day];
      }
    });
  };

  return (
    <div className="h-[600px] w-full ml-[31px] mt-[45px]">
      <p className="text-[30px] text-[#000000] font-[600]">
        희망 요일을 선택해주세요. (복수선택 가능)
        <span className="w-[12px] text-[#FF602B] text-[30px] font-[600]">
          *
        </span>
      </p>
      <div className="flex mt-[20px] gap-[23px]">
        {["월", "화", "수", "목", "금", "토", "일"].map((day) => (
          <label
            key={day}
            className="text-[22px] font-[600] text-[#909090] flex items-center"
          >
            <input
              type="checkbox"
              value={day}
              checked={selectedDays.includes(day)}
              onChange={() => handleCheckboxChange(day)}
              className="mr-[10px] w-[21px] h-[21px] appearance-none border border-solid checked:bg-[#65CCB2]"
              style={{
                backgroundImage: selectedDays.includes(day)
                  ? `url(${Checked.src})`
                  : "none",
                backgroundSize: "16px 16px",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            />
            {day}
          </label>
        ))}
      </div>

      <p className="text-[30px] text-[#000000] font-[600] mt-[45px]">
        시작 시간과 종료 시간을 선택해주세요.
        <span className="w-[12px] text-[#FF602B] text-[30px] font-[600]">
          *
        </span>
      </p>
    </div>
  );
}
