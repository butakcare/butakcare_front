"use client";

import Navigation from "@/components/main/matching/Navigation";
import { useRouter, useSearchParams } from "next/navigation";
import Image from "next/image";
import { useState } from "react";
import ElderModal from "@/components/main/matching/ElderModal";

export default function Home() {
  const router = useRouter();
  const [isGender, setIsGender] = useState<boolean>(false);
  const [selectedGender, setSelectedGender] = useState<string>("");
  const [isCar, setIsCar] = useState<boolean>(false);
  const [selectedCar, setSelectedCar] = useState<boolean>(false);
  const [isDementia, setIsDementia] = useState<boolean>(false);
  const [selectedDementia, setSelectedDementia] = useState<boolean>(false);
  const [isProfileModal, setIsProfileModal] = useState<boolean>(false);

  const data = {
    id: 1,
    profile: "",
    name: "김복순",
    birth: "85세",
    gender: "여",
    grade: 3,
    location: "서울특별시 종로구 창신동 702 창신쌍용1단지아파트",
    schedules: ["월", "화", "수", "목"],
    times: ["09:00 ~ 12:00"],
    salaryWeek: 15000,
    salaryMonth: 1500000,
    matching: "매칭 안료",
  };
  const searchParams = useSearchParams();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const id = searchParams.get("id");

  const formatCurrency = (value: number) => {
    return value.toLocaleString("ko-KR");
  };

  const handleGender = (gender: string) => {
    setSelectedGender(gender);
    setIsGender(false);
  };

  const handleCar = (car: string) => {
    setSelectedGender(gender);
    setIsCar(false);
  };

  const handleDementia = (dementia: string) => {
    setSelectedGender(gender);
    setIsDementia(false);
  };

  return (
    <div className="w-full h-full flex">
      <Navigation />
      <div className="w-full flex flex-col">
        <div className="flex flex-col w-full h-[320px] bg-[#F7F8FA] pl-[31px] pt-[24px]">
          <div className="flex items-start ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              onClick={() => router.push("/manager/main")}
            >
              <mask
                id="mask0_611_2984"
                maskUnits="userSpaceOnUse"
                x="0"
                y="0"
                width="24"
                height="24"
              >
                <rect width="24" height="24" fill="#D9D9D9" />
              </mask>
              <g mask="url(#mask0_611_2984)">
                <path
                  d="M9 18L3 12L9 6L10.4 7.4L6.8 11H21V13H6.8L10.4 16.6L9 18Z"
                  fill="#191A1C"
                />
              </g>
            </svg>
            <div className="ml-[11px]">
              <p className="text-[26px] font-[600] text-[#191A1C]">매칭하기</p>
              <p className="text-[22px] font-[600] text-[#666666]">
                매칭 요청을 보내고싶은 요양보호사를 선택해주세요.
              </p>
            </div>
          </div>
          <div className="flex mt-[38px] items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="112"
              height="112"
              viewBox="0 0 112 112"
              fill="none"
            >
              <circle
                cx="56"
                cy="56"
                r="54.5"
                fill="white"
                stroke="white"
                strokeWidth="3"
              />
              <mask
                id="mask0_649_3336"
                maskUnits="userSpaceOnUse"
                x="3"
                y="3"
                width="106"
                height="106"
              >
                <circle cx="56" cy="56" r="53" fill="#DFDDDB" />
              </mask>
              <g mask="url(#mask0_649_3336)">
                <path
                  d="M35.991 42.9062C23.2807 42.9062 12.9771 53.2099 12.9771 65.9202C12.9771 74.9654 18.1953 82.7919 25.7857 86.5533C18.1953 90.3147 12.9771 98.1412 12.9771 107.186C12.9771 119.897 23.2807 130.2 35.991 130.2C45.0362 130.2 52.8627 124.982 56.6241 117.392C60.3855 124.982 68.212 130.2 77.2573 130.2C89.9675 130.2 100.271 119.897 100.271 107.186C100.271 98.1412 95.0529 90.3147 87.4626 86.5533C95.0529 82.7919 100.271 74.9654 100.271 65.9202C100.271 53.2099 89.9675 42.9062 77.2573 42.9062C68.212 42.9062 60.3855 48.1245 56.6241 55.7149C52.8627 48.1245 45.0362 42.9062 35.991 42.9062Z"
                  fill="#191A1C"
                />
                <path
                  d="M42.9071 58.4936C42.9071 60.9042 40.953 62.8583 38.5424 62.8583C36.1319 62.8583 34.1777 60.9042 34.1777 58.4936C34.1777 56.0831 36.1319 54.1289 38.5424 54.1289C40.953 54.1289 42.9071 56.0831 42.9071 58.4936Z"
                  fill="white"
                />
                <path
                  d="M79.0712 58.4936C79.0712 60.9042 77.1171 62.8583 74.7065 62.8583C72.2959 62.8583 70.3418 60.9042 70.3418 58.4936C70.3418 56.0831 72.2959 54.1289 74.7065 54.1289C77.1171 54.1289 79.0712 56.0831 79.0712 58.4936Z"
                  fill="white"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M52.8855 62.8133C51.6381 62.3143 50.3892 61.3781 50.3892 59.7402H51.6362C51.6362 60.5965 52.2579 61.2191 53.3487 61.6554C54.4205 62.0842 55.7383 62.2344 56.6245 62.2344C57.5106 62.2344 58.8284 62.0842 59.9002 61.6554C60.991 61.2191 61.6127 60.5965 61.6127 59.7402H62.8597C62.8597 61.3781 61.6108 62.3143 60.3634 62.8133C59.097 63.3198 57.6089 63.4814 56.6245 63.4814C55.64 63.4814 54.1519 63.3198 52.8855 62.8133Z"
                  fill="white"
                />
              </g>
            </svg>
            <div className="ml-[25px]">
              <p className="text-[34px] font-[700] text-[#191A1C]">
                {data.name} 어르신
              </p>
              <div className="text-[22px] text-[#666666] font-[600] gap-[18px] flex justify-center">
                <p>{data.birth}</p>
                <p>{data.gender}성</p>
                <p>{data.grade}등급</p>
              </div>
            </div>
            <div className="ml-[48px] flex flex-col gap-[11px]">
              <div className="flex gap-[3px] text-[22px] font-[500] text-[#535252]">
                <Image
                  src="/assets/icons/icon_calendar.svg"
                  width={24}
                  height={24}
                  alt="달력"
                />
                {data.schedules.map((schedule, idx) => (
                  <p
                    className="text-[22px] font-[500] text-[#535252]"
                    key={idx}
                  >
                    {schedule}
                  </p>
                ))}
              </div>
              <div className="flex gap-[3px] text-[22px] font-[500] text-[#535252]">
                <Image
                  src="/assets/icons/icon_alarm.svg"
                  width={24}
                  height={24}
                  alt="시계"
                />
                {data.times.map((time, idx) => (
                  <p
                    className="text-[22px] font-[500] text-[#535252]"
                    key={idx}
                  >
                    {time}
                  </p>
                ))}
              </div>
              <div className="flex gap-[3px] text-[22px] font-[500] text-[#535252]">
                <Image
                  src="/assets/icons/location.svg"
                  width={24}
                  height={24}
                  alt="위치"
                />
                <p className="text-[22px] font-[500] text-[#535252]">
                  {data.location}
                </p>
              </div>
              <div className="flex gap-[3px] text-[22px] font-[500] text-[#535252]">
                <Image
                  src="/assets/icons/icon_salary.svg"
                  width={24}
                  height={24}
                  alt="시급"
                />
                <p>{`시급 ${formatCurrency(
                  data.salaryWeek
                )}원, 월급 ${formatCurrency(data.salaryMonth)}원`}</p>
              </div>
            </div>
            <button
              onClick={() => setIsProfileModal(true)}
              className="ml-[24px] bg-[#FFFFFF] rounded-[10px] w-[141px] h-[48px] text-[22px] text-[#58C185] text-[500]"
            >
              프로필 보기
            </button>
          </div>
        </div>
        <div className="flex flex-col">
          <p className="text-[26px] font-[600] text-[#000000]">
            {data.name} 어르신 딱 맞는 요양보호사
          </p>
          <div className="flex relative">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
            >
              <mask
                id="mask0_820_14754"
                maskUnits="userSpaceOnUse"
                x="0"
                y="0"
                width="40"
                height="40"
              >
                <rect width="40" height="40" fill="#D9D9D9" />
              </mask>
              <g mask="url(#mask0_820_14754)">
                <path
                  d="M18.3342 34.8176C17.862 34.8176 17.4661 34.651 17.1467 34.3177C16.8272 33.9845 16.6675 33.5716 16.6675 33.079V22.6474L6.80626 9.52097C6.40821 8.99939 6.35043 8.44883 6.63293 7.8693C6.91515 7.28977 7.37113 7 8.00085 7H32.0008C32.6306 7 33.0865 7.28977 33.3688 7.8693C33.6513 8.44883 33.5935 8.99939 33.1954 9.52097L23.3342 22.6474V33.079C23.3342 33.5716 23.1745 33.9845 22.855 34.3177C22.5356 34.651 22.1397 34.8176 21.6675 34.8176H18.3342ZM20.0008 22.3575L29.4175 9.89781H10.5842L20.0008 22.3575Z"
                  fill="#909090"
                />
              </g>
            </svg>
            <button
              onClick={() => setIsGender(true)}
              className="flex items-center w-[111px] gap-[20px] justify-center border rounded-[10px] bg-[#FFFFFF]"
            >
              {selectedGender ? `${selectedGender}성` : "성별"}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <mask
                  id="mask0_820_14751"
                  maskUnits="userSpaceOnUse"
                  x="0"
                  y="0"
                  width="24"
                  height="24"
                >
                  <rect width="24" height="24" fill="#D9D9D9" />
                </mask>
                <g mask="url(#mask0_820_14751)">
                  <path d="M12 14L7 9H17L12 14Z" fill="#909090" />
                </g>
              </svg>
            </button>
            {isGender && (
              <div className="absolute left-[40px] mt-[42px] w-[111px] bg-white border rounded-lg shadow-md">
                <button
                  className="w-full px-4 py-2 text-left hover:bg-[#58C185] rounded-[10px]"
                  onClick={() => handleGender("남")}
                >
                  남
                </button>
                <button
                  className="w-full px-4 py-2 text-left hover:bg-[#58C185] rounded-[10px]"
                  onClick={() => handleGender("여")}
                >
                  여
                </button>
              </div>
            )}
            <button
              onClick={() => setIsGender(true)}
              className="flex items-center w-[111px] gap-[20px] justify-center border rounded-[10px] bg-[#FFFFFF]"
            >
              {selectedGender ? `${selectedGender}성` : "성별"}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <mask
                  id="mask0_820_14751"
                  maskUnits="userSpaceOnUse"
                  x="0"
                  y="0"
                  width="24"
                  height="24"
                >
                  <rect width="24" height="24" fill="#D9D9D9" />
                </mask>
                <g mask="url(#mask0_820_14751)">
                  <path d="M12 14L7 9H17L12 14Z" fill="#909090" />
                </g>
              </svg>
            </button>
            {isGender && (
              <div className="absolute left-[40px] mt-[42px] w-[111px] bg-white border rounded-lg shadow-md">
                <button
                  className="w-full px-4 py-2 text-left hover:bg-[#58C185] rounded-[10px]"
                  onClick={() => handleCar(true)}
                >
                  남
                </button>
                <button
                  className="w-full px-4 py-2 text-left hover:bg-[#58C185] rounded-[10px]"
                  onClick={() => handleGender("여")}
                >
                  여
                </button>
              </div>
            )}
            <button
              onClick={() => setIsGender(true)}
              className="flex items-center w-[111px] gap-[20px] justify-center border rounded-[10px] bg-[#FFFFFF]"
            >
              {selectedGender ? `${selectedGender}성` : "성별"}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <mask
                  id="mask0_820_14751"
                  maskUnits="userSpaceOnUse"
                  x="0"
                  y="0"
                  width="24"
                  height="24"
                >
                  <rect width="24" height="24" fill="#D9D9D9" />
                </mask>
                <g mask="url(#mask0_820_14751)">
                  <path d="M12 14L7 9H17L12 14Z" fill="#909090" />
                </g>
              </svg>
            </button>
            {isGender && (
              <div className="absolute left-[40px] mt-[42px] w-[111px] bg-white border rounded-lg shadow-md">
                <button
                  className="w-full px-4 py-2 text-left hover:bg-[#58C185] rounded-[10px]"
                  onClick={() => handleGender("예")}
                >
                  예
                </button>
                <button
                  className="w-full px-4 py-2 text-left hover:bg-[#58C185] rounded-[10px]"
                  onClick={() => handleGender("아니요")}
                >
                  아니요
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {isProfileModal && <ElderModal data={data} onClose={setIsProfileModal} />}
    </div>
  );
}
