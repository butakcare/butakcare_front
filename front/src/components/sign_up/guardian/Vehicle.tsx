"use client";
import TitleText from "@/components/common/TitleText";
import { useState } from "react";

interface GuardianStep5Props {
  onVehicleChange: (value: string) => void;
}

export default function GuardiunStep5({ onVehicleChange }: GuardianStep5Props) {
  const [selected, setSelected] = useState<string | null>(null);

  const handleClick = (value: string) => {
    setSelected(value);
    onVehicleChange(value);
  };
  return (
    <div>
      <TitleText text1="차량을 소유하고 계신가요?" text2="" on={true} />

      <form className="flex flex-col justify-center items-center align-center pt-[25px]">
        <div className="flex gap-4 w-[354px]">
          <button
            type="button"
            onClick={() => handleClick("no")}
            className={`flex-1 h-[52px] rounded-[10px] font-semibold text-[18px] ${
              selected === "no"
                ? "bg-sub text-black border-key"
                : "bg-white text-black border-[#666666]"
            } border`}
          >
            아니오
          </button>
          <button
            type="button"
            onClick={() => handleClick("yes")}
            className={`flex-1 h-[52px] rounded-[10px] font-semibold text-[18px] ${
              selected === "yes"
                ? "bg-sub text-black border-key"
                : "bg-white text-black border-[#666666]"
            } border`}
          >
            예
          </button>
        </div>
        <div className="h-[267px]" />
      </form>
    </div>
  );
}
