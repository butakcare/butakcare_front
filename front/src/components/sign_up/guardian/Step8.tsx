import TitleText from "@/components/common/TitleText";
import Image from "next/image";
import CheckIcon from "@/../public/assets/icons/ei_check.svg";
import GreenCheckIcon from "@/../public/assets/icons/green_check.svg";
import { useState } from "react";

interface GuardianStep8Props {
  years: number;
  months: number;
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
  const [noPreference, setNoPreference] = useState(false);

  const handleYearsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/[^0-9]/g, "");
    onYearsChange(parseInt(value, 10));
  };

  const handleMonthsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/[^0-9]/g, "");
    if (value === "" || (parseInt(value) >= 0 && parseInt(value) <= 12)) {
      onMonthsChange(parseInt(value, 10));
    }
  };

  const handleNoPreferenceChange = () => {
    const newValue = !noPreference;
    setNoPreference(newValue);
    if (newValue) {
      onMonthsChange(0);
      onYearsChange(0);
    }
  };

  return (
    <div>
      <TitleText text1="경력을 입력해주세요." text2="" on={true} />
      <p className=" font-semibold text-[18px] text-key mt-[7px]">
        경력을 입력하면 더 많은 기회를 얻을 수 있어요!
      </p>
      <form className=" font-semibold flex flex-col justify-center items-center align-center pt-[25px]">
        <div className="w-[354px] text-[18px] text-black pb-[10px]">
          경력 기간
        </div>
        <div
          className="w-[354px] flex flex-row pt-[25px] items-center text-[18px] text-[#666666] gap-[5px] cursor-pointer"
          onClick={() => handleNoPreferenceChange()}
        >
          <Image src={noPreference ? GreenCheckIcon : CheckIcon} alt="check" />{" "}
          급여 상관 없음
        </div>
        <div className="w-[354px] h-[52px] flex justify-between gap-4">
          <div className="relative flex-1">
            <input
              type="text"
              value={years}
              onChange={handleYearsChange}
              placeholder="0(년)"
              className="w-full h-[52px] px-4 border border-[#666666] rounded-[10px] focus:outline-none text-left"
              maxLength={3}
            />
          </div>
          <div className="relative flex-1">
            <input
              type="text"
              value={months}
              onChange={handleMonthsChange}
              placeholder="0(개월)"
              className="w-full h-[52px] px-4 border border-[#666666] rounded-[10px] focus:outline-none text-left"
              maxLength={2}
            />
          </div>
        </div>

        {/* Main Experience */}
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
