"use client";

import AddElderCare from "@/components/manager/add/AddElderCare";
import AddElder from "@/components/manager/add/AddElderInfo";
import AddElderSchedule from "@/components/manager/add/AddElderSchedule";
import Navigation from "@/components/manager/add/Navigation";
import { useState, useEffect } from "react";

export default function Home() {
  const [elderName, setElderName] = useState<string>("");
  const [elderBirth, setElderBirth] = useState<string>("");
  const [elderGender, setElderGender] = useState<string>("");
  const [elderGrade, setElderGrade] = useState<number>(0);
  const [elderAddress, setElderAddress] = useState<string>("");
  const [selected, setSelected] = useState<number>(0);
  const [selectedOne, setSelectedOne] = useState<number>(0);
  const [selectedTwo, setSelectedTwo] = useState<number>(0);
  const [selectedThree, setSelectedThree] = useState<number>(0);
  const [image, setImage] = useState<string | null>(null);

  const maxSteps = 2;

  // 현재 선택된 단계에 따라 게이지 값 가져오기
  const getSelectedValue = () => {
    if (selected === 0) return selectedOne;
    if (selected === 1) return selectedTwo;
    if (selected === 2) return selectedThree;
    return 0;
  };

  const progressWidth = `${(getSelectedValue() / maxSteps) * 516}px`;

  const handleGauge = () => {
    if (selected === 0) {
      if (selectedOne < maxSteps) {
        setSelectedOne((prev) => prev + 1);
      } else {
        if (
          elderName &&
          elderAddress &&
          elderBirth.length == 10 &&
          elderGender &&
          elderGrade
        ) {
          setSelected(1);
        } else {
          alert("필수 항목을 다 채워주시기 바랍니다.");
        }
      }
    } else if (selected === 1) {
      setSelected(2);
    } else if (selected === 2) {
      setSelected(3);
    }
  };

  // selected가 바뀌면 해당 단계의 게이지 초기화
  useEffect(() => {
    if (selected === 1) setSelectedOne(0);
    if (selected === 2) setSelectedTwo(0);
    if (selected === 3) setSelectedThree(0);
  }, [selected]);

  return (
    <div className="h-full w-full flex">
      <Navigation selected={selected} />
      <div className="flex flex-col items-start">
        <strong className="text-[30px] font-[700] text-[#2E2E2E] mt-[31px] ml-[20px]">
          {selected == 0
            ? "1. 어르신 기본 정보 등록하기"
            : selected == 1
            ? "2. 어르신 일정 정보 등록하기"
            : "3. 어르신 케어 필요 항목 등록하기"}
        </strong>
        {selected == 0 && (
          <div className="w-[726px] h-[6px] bg-[#DFE0E3] rounded-[3px] mt-[20px] ml-[20px] [relative overflow-hidden">
            <div
              className="h-full bg-[#65CCB2] transition-all duration-300"
              style={{ width: progressWidth }}
            ></div>
          </div>
        )}

        <div className="flex flex-col items-center justify-between">
          {selected == 0 ? (
            <AddElder
              selectedOne={selectedOne}
              elderName={elderName}
              setElderName={setElderName}
              elderBirth={elderBirth}
              setElderBirth={setElderBirth}
              setElderGender={setElderGender}
              setElderGrade={setElderGrade}
              elderAddress={elderAddress}
              setElderAddress={setElderAddress}
              image={image}
              setImage={setImage}
            />
          ) : selected == 1 ? (
            <AddElderSchedule />
          ) : (
            <AddElderCare />
          )}
          <div className="flex w-[726px] justify-between relative">
            {selectedOne !== 0 && (
              <button
                onClick={() => setSelectedOne((prev) => prev - 1)}
                className="absolute left-[30px] w-[254px] h-[58px] flex items-center justify-center bg-[#FFFFFF] rounded-[10px] border border-[1px] border-[#000000] text-[22px] text-[#191A1C] font-[600]"
              >
                이전
              </button>
            )}

            <button
              onClick={handleGauge}
              className="absolute right-[0px] w-[254px] h-[58px] flex items-center justify-center bg-[#CFCFCF] rounded-[10px] text-[22px] text-[#FFFFFF] font-[600]"
            >
              다음
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
