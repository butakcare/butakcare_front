"use client";

import AddElderCare from "@/components/manager/add/AddElderCare";
import AddElder from "@/components/manager/add/AddElderInfo";
import AddElderSchedule from "@/components/manager/add/AddElderSchedule";
import Navigation from "@/components/manager/add/Navigation";
import axios from "axios";
import { useState, useEffect } from "react";

export default function Home() {
  //1. 기본 정보
  const [elderName, setElderName] = useState<string>("");
  const [elderBirth, setElderBirth] = useState<string>("");
  const [elderGender, setElderGender] = useState<string>("");
  const [elderGrade, setElderGrade] = useState<string>("");
  const [elderAddress, setElderAddress] = useState<string>("");
  const [elderAddress2, setElderAddress2] = useState<string>("");
  const [selected, setSelected] = useState<number>(0);
  const [elderWeight, setElderWeight] = useState<number | null>(null);

  const [selectedTwo, setSelectedTwo] = useState<number>(0);

  const [image, setImage] = useState<string | null>(null);

  // 2. 일정정보
  const [selectedDays, setSelectedDays] = useState<string[]>([]);
  const [startHour, setStartHour] = useState("");
  const [startMinute, setStartMinute] = useState("");
  const [endHour, setEndHour] = useState("");
  const [endMinute, setEndMinute] = useState("");
  const [selectedOne, setSelectedOne] = useState<number>(0);

  // 3. 케어 필요 항목
  const [selectedThree, setSelectedThree] = useState<number>(0);
  const [selectedCareDetails, setSelectedCareDetails] = useState<number[]>([]);
  const [disease, setDisease] = useState<string>("");

  const maxSteps = 2;

  // 현재 선택된 단계에 따라 게이지 값 가져오기
  const getSelectedValue = () => {
    if (selected === 0) return selectedOne;
    if (selected === 1) return selectedTwo;
    if (selected === 2) return selectedThree;
    return 0;
  };

  const progressWidth = `${(getSelectedValue() / maxSteps) * 724}px`;

  // selected가 바뀌면 해당 단계의 게이지 초기화
  useEffect(() => {
    if (selected === 1) setSelectedOne(0);
    if (selected === 2) setSelectedTwo(0);
  }, [selected]);

  const PostAdd = () => {
    const fetchPost = async () => {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL_KEY}/api/profiles/elderly/`,
        {
          name: elderName,
          birth: elderBirth,
          gender: elderGender,
          cares: selectedCareDetails,
          days: selectedDays,
          start_hour: startHour,
          start_minute: startMinute,
          end_hour: endHour,
          weight: elderWeight,
          end_minute: endMinute,
          care_grade: elderGrade,
          address: elderAddress,
          address_detail: elderAddress2,
        }
      );
      console.log(response.data);
    };
    fetchPost();
  };
  return (
    <div className="h-full w-full flex">
      <Navigation selected={selected} />
      <div className="flex flex-col items-start">
        <strong className="text-[30px] font-[700] text-[#2E2E2E] mt-[31px] ml-[20px]">
          {selected == 0
            ? "1. 어르신 기본 정보 등록하기"
            : selected == 1
            ? "2. 어르신 근무 정보 등록하기"
            : selected == 2
            ? "3. 어르신 케어 필요 항목 등록하기"
            : "어르신 정보 등록 완료"}
        </strong>
        {(selected == 0 || selected == 2) && (
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
              setSelected={setSelected}
              selectedOne={selectedOne}
              setSelectedOne={setSelectedOne}
              elderName={elderName}
              setElderName={setElderName}
              elderBirth={elderBirth}
              setElderBirth={setElderBirth}
              elderGender={elderGender}
              setElderGender={setElderGender}
              elderGrade={elderGrade}
              setElderGrade={setElderGrade}
              elderAddress={elderAddress}
              setElderAddress={setElderAddress}
              image={image}
              setImage={setImage}
              elderAddress2={elderAddress2}
              setElderAddress2={setElderAddress2}
              elderWeight={elderWeight}
              setElderWeight={setElderWeight}
            />
          ) : selected == 1 ? (
            <AddElderSchedule
              selectedDays={selectedDays}
              setSelectedDays={setSelectedDays}
              startHour={startHour}
              setStartHour={setStartHour}
              startMinute={startMinute}
              setStartMinute={setStartMinute}
              endHour={endHour}
              setEndHour={setEndHour}
              endMinute={endMinute}
              setEndMinute={setEndMinute}
              setSelected={setSelected}
            />
          ) : (
            <AddElderCare
              selectedThree={selectedThree}
              setSelected={setSelected}
              setSelectedThree={setSelectedThree}
              disease={disease}
              setDisease={setDisease}
              selectedCareDetails={selectedCareDetails}
              setSelectedCareDetails={setSelectedCareDetails}
              PostAdd={PostAdd}
            />
          )}
        </div>
      </div>
    </div>
  );
}
