"use client";

import AddElder from "@/components/manager/add/AddElderInfo";
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
        setSelected(1);
      }
    } else if (selected === 1) {
      if (selectedTwo < maxSteps) {
        setSelectedTwo((prev) => prev + 1);
      } else {
        setSelected(2);
      }
    } else if (selected === 2) {
      if (selectedThree < maxSteps) {
        setSelectedThree((prev) => prev + 1);
      } else {
        setSelected(3);
      }
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
      <div className="flex flex-col items-center justify-between">
        {selected == 0 ? (
          <AddElder
            selectedOne={selectedOne}
            setElderName={setElderName}
            setElderBirth={setElderBirth}
            setElderGender={setElderGender}
            setElderGrade={setElderGrade}
            setElderAddress={setElderAddress}
          />
        ) : (
          <></>
        )}
        <div className="flex flex-col ml-[30px] gap-[20px]">
          <div className="w-[516px] h-[6px] bg-[#DFE0E3] rounded-[3px] relative overflow-hidden">
            <div
              className="h-full bg-[#4A90E2] transition-all duration-300"
              style={{ width: progressWidth }}
            ></div>
          </div>
          <button
            onClick={handleGauge}
            className="mb-[55px] w-[516px] h-[58px] flex items-center justify-center bg-[#CFCFCF] rounded-[10px] text-[22px] text-[#FFFFFF] font-[600]"
          >
            다음
          </button>
        </div>
      </div>
    </div>
  );
}
