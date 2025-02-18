"use client";
import TitleText from "@/components/common/TitleText";
import { useState } from "react";

interface GuardianStep6Props {
  onExperienceChange: (value: boolean) => void;
}

export default function GuardianStep6({
  onExperienceChange,
}: GuardianStep6Props) {
  const [selected, setSelected] = useState<boolean | null>(null);

  const handleClick = (value: boolean) => {
    setSelected(value);
    onExperienceChange(value);
  };

  return (
    <div>
      <TitleText text1="치매 교육을 이수하셨나요?" text2="" on={true} />

      <form className="flex flex-col justify-center items-center align-center pt-[25px]">
        <div className="flex gap-4 w-[354px]">
          <button
            type="button"
            onClick={() => handleClick(false)}
            className={`flex-1 h-[52px] rounded-[10px] font-semibold text-[18px] ${
              selected === false
                ? "bg-sub text-black border-key"
                : "bg-white text-black border-[#666666]"
            } border`}
          >
            아니오
          </button>
          <button
            type="button"
            onClick={() => handleClick(true)}
            className={`flex-1 h-[52px] rounded-[10px] font-semibold text-[18px] ${
              selected === true
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
