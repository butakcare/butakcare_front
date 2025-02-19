"use client";
import TitleText from "@/components/common/TitleText";
import React, { useState } from "react";
import CheckIcon from "@/../public/assets/icons/ei_check.svg";
import GreenCheckIcon from "@/../public/assets/icons/green_check.svg";
import Image from "next/image";

interface WorkStep3Props {
  min_wage: number;
  max_wage: number;
  onMinWageChange: (value: number) => void;
  onMaxWageChange: (value: number) => void;
}

export default function WorkStep3({
  min_wage,
  max_wage,
  onMinWageChange,
  onMaxWageChange,
}: WorkStep3Props) {
  const [rangeValues, setRangeValues] = useState([min_wage, max_wage]);
  const [noWagePreference, setNoWagePreference] = useState(false);

  const handleMinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/[^0-9]/g, "");
    if (value === "") {
      onMinWageChange(10030);
      setRangeValues([10030, max_wage]);
    } else {
      const numValue = Math.round(parseInt(value) / 500) * 500;
      if (numValue <= max_wage) {
        onMinWageChange(numValue);
        setRangeValues([numValue, max_wage]);
      }
    }
  };

  const handleMaxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/[^0-9]/g, "");
    if (value === "") {
      onMaxWageChange(100000);
      setRangeValues([min_wage, 100000]);
    } else {
      const numValue = Math.round(parseInt(value) / 500) * 500;
      if (numValue >= min_wage) {
        onMaxWageChange(numValue);
        setRangeValues([min_wage, numValue]);
      }
    }
  };

  const handleRangeChange = (value: number, index: number) => {
    const roundedValue = Math.round(value / 500) * 500;
    const constrainedValue =
      index === 0
        ? Math.max(10030, Math.min(roundedValue, max_wage))
        : Math.min(100000, Math.max(roundedValue, min_wage));

    const newValues = [...rangeValues];
    newValues[index] = constrainedValue;
    setRangeValues(newValues);

    if (index === 0) {
      onMinWageChange(constrainedValue);
    } else {
      onMaxWageChange(constrainedValue);
    }
  };

  const handleNoWagePreferenceChange = () => {
    const newValue = !noWagePreference;
    setNoWagePreference(newValue);
    if (newValue) {
      onMinWageChange(10030);
      onMaxWageChange(100000);
      setRangeValues([10030, 100000]);
    }
  };

  return (
    <div>
      <div className="flex flex-col w-[354px] ">
        <div className="inline">
          <TitleText
            text1="희망 급여(최대~최소)를"
            text2="입력해주세요."
            on={true}
          />
        </div>

        <div className="text-[18px] text-key font-bold">
          당사는 &apos;최저임급법&apos;을 준수합니다.
        </div>
      </div>

      <form className="flex flex-col justify-center items-center align-center pt-[25px] font-semibold text-[18px]">
        <div className="w-[354px] flex items-center gap-[22px] mb-[24px]">
          <div className="flex-1">
            <span className="text-black mr-[10px]">시급</span>
            <input
              type="text"
              value={min_wage}
              onChange={handleMinChange}
              className=" w-[105px] p-[15.5px_17.5px] border border-[#666666] rounded-[10px] text-center"
              placeholder="최소"
              disabled={noWagePreference}
            />
          </div>
          <span className="text-black">~</span>
          <div className="flex-1">
            <input
              type="text"
              value={max_wage}
              onChange={handleMaxChange}
              className="w-[105px] p-[15.5px_17.5px] border border-[#666666] rounded-[10px] text-center"
              placeholder="최대"
              disabled={noWagePreference}
            />
            <span className="text-black ml-[10px]">원</span>
          </div>
        </div>

        <div className="w-[354px]">
          <div className="relative pt-1">
            <div className="relative">
              <div className="absolute w-[354px] h-2 bg-gray-200 rounded-[10px]" />

              <div
                className="absolute h-[10px] bg-key rounded-[10px]"
                style={{
                  left: `${
                    ((rangeValues[0] - 10030) / (100000 - 10030)) * 354
                  }px`,
                  width: `${
                    ((rangeValues[1] - rangeValues[0]) / (100000 - 10030)) * 354
                  }px`,
                }}
              />

              <input
                type="range"
                min={10030}
                max={100000}
                step={500}
                value={Math.max(10030, Math.min(rangeValues[0], max_wage))}
                onChange={(e) => handleRangeChange(parseInt(e.target.value), 0)}
                className="absolute w-[354px] h-2 appearance-none cursor-pointer bg-transparent z-10"
                disabled={noWagePreference}
              />
              <input
                type="range"
                min={10030}
                max={100000}
                step={500}
                value={Math.max(min_wage, Math.min(rangeValues[1], 100000))}
                onChange={(e) => handleRangeChange(parseInt(e.target.value), 1)}
                className="absolute w-[354px] h-2 appearance-none cursor-pointer bg-transparent z-10"
                disabled={noWagePreference}
              />
            </div>
            <style jsx>{`
              input[type="range"] {
                -webkit-appearance: none;
                pointer-events: none;
              }
              input[type="range"]::-webkit-slider-thumb {
                -webkit-appearance: none;
                pointer-events: auto;
                width: 24px;
                height: 24px;
                border-radius: 100px;
                background: #fff;
                box-shadow: 0px 0.5px 4px 0px rgba(0, 0, 0, 0.12),
                  0px 6px 13px 0px rgba(0, 0, 0, 0.12);
                cursor: pointer;
                z-index: 20;
              }
              input[type="range"]::-moz-range-thumb {
                width: 24px;
                height: 24px;
                border-radius: 100px;
                background: #fff;
                box-shadow: 0px 0.5px 4px 0px rgba(0, 0, 0, 0.12),
                  0px 6px 13px 0px rgba(0, 0, 0, 0.12);
                cursor: pointer;
                border: none;
                z-index: 20;
              }
            `}</style>
          </div>
        </div>
        <div
          className="w-[354px] flex flex-row pt-[25px] items-center text-[18px] text-[#666666] gap-[5px] cursor-pointer"
          onClick={handleNoWagePreferenceChange}
        >
          <Image
            src={noWagePreference ? GreenCheckIcon : CheckIcon}
            alt="check"
          />{" "}
          급여 상관 없음
        </div>
      </form>
    </div>
  );
}
