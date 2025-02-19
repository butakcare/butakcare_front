import TitleText from "@/components/common/TitleText";
import Image from "next/image";
import CheckIcon from "@/../public/assets/icons/ei_check.svg";
import GreenCheckIcon from "@/../public/assets/icons/green_check.svg";
import { useState } from "react";

interface GuardianStep8Props {
  years: number | null;
  months: number | null;
  description: string;
  onYearsChange: (value: number) => void;
  onMonthsChange: (value: number) => void;
  onDescriptionChange: (value: string) => void;
}

export default function GuardianStep8({
  years,
  months,
  description,
  onYearsChange,
  onMonthsChange,
  onDescriptionChange,
}: GuardianStep8Props) {
  const [noWagePreference, setNoWagePreference] = useState(false);

  const handleYearsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!noWagePreference) {
      const value = e.target.value.replace(/[^0-9]/g, "");
      onYearsChange(parseInt(value, 10));
    }
  };

  const handleMonthsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!noWagePreference) {
      const value = e.target.value.replace(/[^0-9]/g, "");
      if (
        value === "" ||
        (parseInt(value, 10) >= 0 && parseInt(value, 10) <= 12)
      ) {
        onMonthsChange(parseInt(value, 10));
      }
    }
  };

  const handleNoWagePreferenceChange = () => {
    const newValue = !noWagePreference;
    setNoWagePreference(newValue);
    if (newValue) {
      onYearsChange(0);
      onMonthsChange(0);
    }
  };

  return (
    <div>
      <TitleText text1="경력을 입력해주세요." text2="" on={true} />
      <p className=" font-semibold text-[18px] text-key mt-[7px]">
        경력을 입력하면 더 많은 기회를 얻을 수 있어요!
      </p>
      <form className=" font-semibold flex flex-col justify-center items-center align-center pt-[25px]">
        <div className="flex flex-row items-center w-[354px] text-[18px] text-black pb-[10px] gap-[10px]">
          <div>경력 기간</div>
          <div
            className="flex flex-row items-center text-[18px] text-[#666666] gap-[5px] cursor-pointer"
            onClick={handleNoWagePreferenceChange}
          >
            <Image
              src={noWagePreference ? GreenCheckIcon : CheckIcon}
              alt="check"
            />{" "}
            경력 상관 없음
          </div>
        </div>

        <div className="w-[354px] h-[52px] flex justify-between gap-4">
          <div className="relative flex-1">
            <input
              type="number"
              value={years || ""}
              onChange={handleYearsChange}
              placeholder="0(년)"
              className="w-full h-[52px] px-4 border border-[#666666] rounded-[10px] focus:outline-none text-left"
              maxLength={3}
              disabled={noWagePreference}
            />
          </div>
          <div className="relative flex-1">
            <input
              type="number"
              value={months || ""}
              onChange={handleMonthsChange}
              placeholder="0(개월)"
              className="w-full h-[52px] px-4 border border-[#666666] rounded-[10px] focus:outline-none text-left"
              maxLength={2}
              disabled={noWagePreference}
            />
          </div>
        </div>

        <div className="pt-[25px]">
          <div className="w-[354px] text-[18px] text-black pb-[10px]">
            주요 경력
          </div>
          <div className="relative w-[354px]">
            <textarea
              className="w-full h-[174px] p-[18px_15px] border rounded-[10px] resize-none focus:outline-none text-black border-[#666666] "
              placeholder="주요 경력을 간략하게 작성해 주세요.                           예) 주간보호 2년, 방문요양 1년  "
              value={description}
              onChange={(e) => onDescriptionChange(e.target.value)}
              maxLength={100}
            />
            <div className="absolute bottom-[15px] right-4 text-[18px] text-[#666666] font-semibold">
              {description.length} / 100
            </div>
          </div>
        </div>
        <div className="h-[166px]" />
      </form>
    </div>
  );
}
