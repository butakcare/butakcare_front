"use client";
import TitleText from "@/components/common/TitleText";
import React, { useState } from "react";

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
    // 500 단위로 반올림
    const roundedValue = Math.round(value / 500) * 500;

    // 최소값과 최대값 제한
    const constrainedValue =
      index === 0
        ? Math.max(10030, Math.min(roundedValue, max_wage)) // 최소값은 10030 이상
        : Math.min(100000, Math.max(roundedValue, min_wage)); // 최대값은 100000 이하

    const newValues = [...rangeValues];
    newValues[index] = constrainedValue;
    setRangeValues(newValues);

    if (index === 0) {
      onMinWageChange(constrainedValue);
    } else {
      onMaxWageChange(constrainedValue);
    }
  };

  return (
    <div>
      <div className="flex flex-col w-[354px] ">
        <TitleText
          text1="희망 급여(최대~최소)를"
          text2="입력해주세요."
          on={true}
        />
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
                value={Math.max(10030, Math.min(rangeValues[0], max_wage))} // 최소값 제한
                onChange={(e) => handleRangeChange(parseInt(e.target.value), 0)}
                className="absolute w-[354px] h-2 appearance-none cursor-pointer bg-transparent z-10"
              />
              <input
                type="range"
                min={10030}
                max={100000}
                step={500}
                value={Math.max(min_wage, Math.min(rangeValues[1], 100000))} // 최대값 제한
                onChange={(e) => handleRangeChange(parseInt(e.target.value), 1)}
                className="absolute w-[354px] h-2 appearance-none cursor-pointer bg-transparent z-10"
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
      </form>
    </div>
  );
}
