import TitleText from "@/components/common/TitleText";
import Image from "next/image";
import DownIcon from "@/../public/assets/icons/DownVector.svg";
import { useState } from "react";

interface ManagerStep7Props {
  years: number;
  months: number;
  description: string;
  onYearsChange: (value: string) => void;
  onMonthsChange: (value: string) => void;
  onDescriptionChange: (value: string) => void;
}

export default function ManagerStep7({
  years,
  months,
  description,
  onYearsChange,
  onMonthsChange,
  onDescriptionChange,
}: ManagerStep7Props) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const grades = ["A", "B", "C", "D", "E"];

  const handleYearsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/[^0-9]/g, "");
    onYearsChange(value);
  };

  const handleMonthsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/[^0-9]/g, "");
    if (parseInt(value) <= 12) {
      onMonthsChange(value);
    }
  };

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleGradeSelect = (grade: string) => {
    onDescriptionChange(grade);
    setIsDropdownOpen(false);
  };

  return (
    <div>
      <div className="flex">
        <TitleText text1="센터 등급을 선택해주세요." text2="" on={false} />
      </div>
      <div className="hidden sm:block flex-row">
        <div className="text-[30px] leading-[50px] font-bold flex items-center">
          센터 등급을 선택해주세요.
          <div className="flex items-end">
            <span className="font-semibold text-black text-[22px] ml-[10px]">
              (선택)
            </span>
          </div>
        </div>
      </div>

      <form className="flex flex-col tablet:items-start justify-center items-center align-center pt-[21px]">
        <div className="w-[354px]">
          <div className="relative">
            <div
              className="w-[105px] tablet:w-[156px] tablet:h-[58px] h-[51px] px-4 border border-[#666666] rounded-[10px] flex items-center justify-between cursor-pointer"
              onClick={handleDropdownToggle}
            >
              <span className="tablet:text-[22px] font-semibold">
                {description || "등급"}
              </span>
              <Image
                src={DownIcon}
                alt="down"
                className={`w-4 h-4 transition-transform ${
                  isDropdownOpen ? "transform rotate-180" : ""
                }`}
              />
            </div>
            {isDropdownOpen && (
              <div className=" font-semibold  tablet:w-[156px]  tablet:text-[22px]  absolute z-10 w-[105px] bg-white border border-[#666666] rounded-[10px] mt-1">
                {grades.map((grade) => (
                  <div
                    key={grade}
                    className={`px-[18px] py-[14px] cursor-pointer ${
                      description === grade
                        ? "bg-key text-white rounded-[10px]"
                        : "hover:bg-key hover:text-white hover:rounded-[10px]"
                    }`}
                    onClick={() => handleGradeSelect(grade)}
                  >
                    {grade}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
        <div className="h-[54px]" />
        <TitleText text1="운영 기간을 입력해주세요." text2="" on={false} />
        <div className="hidden sm:block flex-row">
          <div className="text-[30px] leading-[50px] font-bold flex items-center">
            운영기간을 입력해주세요.
            <div className="flex items-end">
              <span className="font-semibold text-black text-[22px] ml-[10px]">
                (선택)
              </span>
            </div>
          </div>
        </div>
        <div className="h-[21px]" />
        <div className="  font-semibold  w-[354px] tablet:w-[516px] tablet:h-[58px] tablet:text-[22px] tablet:gap-[8px] h-[52px] flex justify-between gap-4">
          <div className="relative flex-1">
            <input
              type="text"
              value={years}
              onChange={handleYearsChange}
              placeholder="0년"
              className="w-full h-[52px] px-8 border border-[#666666] rounded-[10px] focus:outline-none text-left"
              maxLength={3}
            />
            <span className=" absolute right-4 top-[25px] transform -translate-y-1/2 text-gray-500">
              (년)
            </span>
          </div>
          <div className="relative flex-1">
            <input
              type="text"
              value={months}
              onChange={handleMonthsChange}
              placeholder="0"
              className=" w-full h-[52px] px-8 border border-[#666666] rounded-[10px] focus:outline-none text-left"
              maxLength={2}
            />
            <span className="font-semibold absolute right-4 top-[25px] transform -translate-y-1/2 text-gray-500">
              (개월)
            </span>
          </div>
        </div>
        <div className="h-[294px]" />
      </form>
    </div>
  );
}
