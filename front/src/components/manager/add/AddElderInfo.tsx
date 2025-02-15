"use client";

import { useState } from "react";
import Image from "next/image";

interface Props {
  selectedOne: number;
  setElderName: React.Dispatch<React.SetStateAction<string>>;
  setElderBirth: React.Dispatch<React.SetStateAction<string>>;
  setElderGender: React.Dispatch<React.SetStateAction<string>>;
  setElderGrade: React.Dispatch<React.SetStateAction<number>>;
  setElderAddress: React.Dispatch<React.SetStateAction<string>>;
}

export default function AddElder({
  selectedOne,
  setElderName,
  setElderBirth,
  setElderGender,
  setElderGrade,
  setElderAddress,
}: Props) {
  const [showCareGradeDropdown, setShowCareGradeDropdown] = useState(false);
  const [selectedGender, setSelectedGender] = useState<string | null>(null);
  const [careGrade, setCareGrade] = useState<number>(0);

  const careGrades = [1, 2, 3, 4, 5];

  const handleGenderSelect = (gender: string) => {
    setElderGender(gender);
    setSelectedGender(gender);
  };

  const handleCareGradeChange = (grade: number) => {
    setCareGrade(grade);
    setElderGrade(grade);
    setShowCareGradeDropdown(false);
  };

  return (
    <div className="h-[539px] mt-[31px] w-full ml-[31px]">
      <strong className="text-[30px] font-[700] text-[#2E2E2E]">
        1. 어르신 기본 정보 등록하기
      </strong>
      {selectedOne == 0 ? (
        <div>
          <p className="text-[30px] text-[#000000] font-[600] mt-[45px]">
            어르신 성함을 입력해주세요.
            <span className="w-[12px] text-[#FF602B] text-[30px] font-[600]">
              *
            </span>
          </p>
          <input
            placeholder="어르신 성함을 입력해주세요.(필수)"
            onChange={(e) => setElderName(e.target.value)}
            className="placeholder:text-[#909090] placeholder:text-[22px] text-[22px] font-[600] placeholder:font-[600] mt-[25px] w-[516px] p-[16px] rounded-[10px] bg-[#FFFFFF] border border-[#909090]"
          />
        </div>
      ) : selectedOne == 1 ? (
        <div>
          <p className="text-[30px] text-[#000000] font-[600] mt-[45px]">
            어르신 생년월일을 입력해주세요.
            <span className="w-[12px] text-[#FF602B] text-[30px] font-[600]">
              *
            </span>
          </p>
          <input
            placeholder="어르신 생년월일을 입력해주세요.(필수)"
            onChange={(e) => setElderBirth(e.target.value)}
            className="placeholder:text-[#909090] placeholder:text-[22px] text-[22px] font-[600] placeholder:font-[600] mt-[25px] w-[516px] p-[16px] rounded-[10px] bg-[#FFFFFF] border border-[#909090]"
          />
          <p className="text-[30px] text-[#000000] font-[600] mt-[45px]">
            어르신 성별을 선택해주세요.
            <span className="w-[12px] text-[#FF602B] text-[30px] font-[600]">
              *
            </span>
          </p>
          <div className="flex gap-[8px] mt-[25px]">
            <button
              onClick={() => handleGenderSelect("여")}
              className={`text-[22px] font-[600] w-[254px] h-[58px] flex justify-center items-center rounded-[10px] border border-[#909090] transition-all duration-200 ${
                selectedGender === "여"
                  ? "bg-[#CFCFCF] text-[#FFFFFF]"
                  : "bg-[#FFFFFF] text-[#909090]"
              }`}
            >
              여성
            </button>
            <button
              onClick={() => handleGenderSelect("남")}
              className={`text-[22px] font-[600] w-[254px] h-[58px] flex justify-center items-center rounded-[10px] border border-[#909090] transition-all duration-200 ${
                selectedGender === "남"
                  ? "bg-[#CFCFCF] text-[#FFFFFF]"
                  : "bg-[#FFFFFF] text-[#909090]"
              }`}
            >
              남성
            </button>
          </div>
        </div>
      ) : selectedOne == 2 ? (
        <div>
          <p className="text-[30px] text-[#000000] font-[600] mt-[45px]">
            장기 요양 등급을 선택해주세요.
            <span className="w-[12px] text-[#FF602B] text-[30px] font-[600]">
              *
            </span>
          </p>
          <div className="relative mt-[25px]">
            <button
              onClick={() => setShowCareGradeDropdown(!showCareGradeDropdown)}
              className="flex items-center justify-center w-[174px] h-[47px] border border-[#909090] rounded-[10px] text-[22px] font-[600] gap-[30px] text-[#C6C6C6]"
            >
              <span>{careGrade == 0 ? "요양등급" : `${careGrade}등급`}</span>
              <Image
                src="/assets/icons/icon_down_arrow.svg"
                alt="화살표"
                width={24}
                height={24}
              />
            </button>

            {showCareGradeDropdown && (
              <div className="absolute left-0 mt-2 w-[174px] bg-white border border-gray-300 shadow-md rounded-[10px] p-2 z-10">
                {careGrades.map((grade) => (
                  <div
                    key={grade}
                    className="p-1 hover:bg-gray-100 cursor-pointer text-[#C6C6C6]"
                    onClick={() => handleCareGradeChange(grade)}
                  >
                    {grade}등급
                  </div>
                ))}
              </div>
            )}
          </div>
          <p className="text-[30px] text-[#000000] font-[600] mt-[45px]">
            어르신 주소를 입력해주세요.
            <span className="w-[12px] text-[#FF602B] text-[30px] font-[600]">
              *
            </span>
          </p>
          <input
            placeholder="어르신 주소를 입력해주세요.(필수)"
            onChange={(e) => setElderAddress(e.target.value)}
            className="placeholder:text-[#909090] placeholder:text-[22px] text-[22px] font-[600] placeholder:font-[600] mt-[25px] w-[516px] p-[16px] rounded-[10px] bg-[#FFFFFF] border border-[#909090]"
          />
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}
