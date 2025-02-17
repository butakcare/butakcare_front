"use client";
import TitleText from "@/components/common/TitleText";
import { useState } from "react";

interface GuardianStep5Props {
  onVehicleChange: (value: string) => void;
}

export default function GuardiunStep5({ onVehicleChange }: GuardianStep5Props) {
  const [disabled, setDisabled] = useState(false);

  const handleClick = () => {
    setDisabled(!disabled);
    onVehicleChange(disabled ? "no" : "yes");
  };
  return (
    <div>
      <TitleText text1="차량을 소유하고 계신가요?" text2="" on={true} />

      <form className="flex flex-col justify-center items-center align-center pt-[25px]">
        <button
          type="button"
          className={`w-[354px] h-[52px] rounded-[10px] font-semibold text-[18px] transition-all
        ${
          disabled
            ? "bg-white border border-stroke cursor-not-allowed"
            : "bg-key text-white"
        }`}
          onClick={handleClick}
        >
          예 (필수)
        </button>
        <div className="h-[267px]" />
      </form>
    </div>
  );
}
