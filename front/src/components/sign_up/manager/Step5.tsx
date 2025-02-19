"use client";
import TitleText from "@/components/common/TitleText";
import { useState } from "react";
interface ManagerStep5Props {
  onVehicleChange: (value: string) => void;
}

export default function ManagerStep5({ onVehicleChange }: ManagerStep5Props) {
  const [selected, setSelected] = useState<boolean>(false);

  const handleNoClick = () => {
    setSelected(false);
    onVehicleChange("false");
  };

  const handleYesClick = () => {
    setSelected(true);
    onVehicleChange("true");
  };

  return (
    <div>
      <div className="h-[31px]">
        <TitleText text1="목욕 차량을 소유하고 계신가요?" text2="" on={true} />
      </div>

      <form className="flex flex-col justify-center items-center align-center pt-[25px]">
        <div className="flex flex-row gap-[4px]">
          <button
            type="button"
            className={`w-[175px] h-[52px] rounded-[10px] font-semibold text-[18px] transition-all border ${
              selected === false
                ? "border-key bg-sub text-black"
                : "bg-white border border-stroke text-[#666666]"
            }`}
            onClick={handleNoClick}
          >
            아니요
          </button>
          <button
            type="button"
            className={`w-[175px] h-[52px] rounded-[10px] font-semibold text-[18px] transition-all border ${
              selected === true
                ? "border-key bg-sub text-black"
                : " bg-white border border-stroke text-[#666666]"
            }`}
            onClick={handleYesClick}
          >
            예
          </button>
        </div>
        <div className="h-[455px]" />
      </form>
    </div>
  );
}
