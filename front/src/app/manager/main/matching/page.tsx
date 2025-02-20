"use client";

import Navigation from "@/components/main/matching/Navigation";
import { useRouter, useSearchParams } from "next/navigation";
import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import ElderModal from "@/components/main/matching/ElderModal";
import Check from "@/../public/assets/icons/icon_green_check.svg";
import NoCheck from "@/../public/assets/icons/icon_no_check.svg";
import GuardianProfile from "@/components/main/GuardianProfile";
import Matching from "@/components/main/matching/Matching";
import axios from "axios";

interface ElderData {
  id: number;
  name: string;
  gender: string;
  birth: string;
  address: string;
  address_detail: string;
  care_details: CareDetails;
  care_grade: string;
  center: string | null;
  days: string[];
  detail: string;
  start_hour: number;
  start_minute: number;
  end_hour: number;
  end_minute: number;
  wage: number | null;
  weight: number | null;
  matching_status: string;
  photo: string | null;
}
interface CareDetails {
  [key: string]: string[];
}

interface AvailableArea {
  id: number;
  name: string;
}

interface Person {
  address: string;
  address_detail: string;
  available_area: AvailableArea[];
  birth: string; // YYYY-MM-DD 형식
  career_content: string | null;
  career_month: number | null;
  career_year: number | null;
  caregiver_qualification: string;
  days: string[]; // ['금', '일', '목', '수', '월', '토', '화']
  description: string | null;
  gender: string; // 남자 혹은 여자
  has_car: boolean;
  has_dementia_training: boolean;
  id: string;
  max_wage: number;
  min_wage: number;
  name: string;
  nursing_assistant_qualification: string | null;
  phone: string;
  photo: string | null;
  social_worker_qualification: string | null;
  times: string[]; // ['오전(09:00~12:00)', '저녁(18:00~21:00)', '오후(12:00-18:00)']
}

interface Requests {
  days: string;
  end_hour: string;
  end_minute: string;
  start_hour: string;
  start_minute: string;
  wage: string;
}

export default function Home() {
  const router = useRouter();
  const [caregivers, setCaregivers] = useState<Person[]>([]);
  const [selectedCaregivers, setSelectedCaregivers] = useState<Person>();
  const [requests, setRequests] = useState<Requests>();
  const [elderData, setElderData] = useState<ElderData>();
  const [isGender, setIsGender] = useState<boolean>(false);
  const [selectedGender, setSelectedGender] = useState<string>("");
  const [isCar, setIsCar] = useState<boolean>(false);
  const [matching, setMatching] = useState<boolean>(false);
  const [selectedCar, setSelectedCar] = useState<boolean>(false);
  const [ownCar, setOwnCar] = useState<boolean>(false);
  const [isDementia, setIsDementia] = useState<boolean>(false);
  const [ownDementia, setOwnDementia] = useState<boolean>(false);
  const [selectedDementia, setSelectedDementia] = useState<boolean>(false);
  const [isProfileModal, setIsProfileModal] = useState<boolean>(false);
  const [selectedId, setSelectedId] = useState<string[]>([]);
  const [isGuardianModal, setIsGuardianModal] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  const wage = searchParams.get("wage");
  const days = searchParams.get("days");
  const start_hour = searchParams.get("start_hour");
  const start_minute = searchParams.get("start_minute");
  const end_hour = searchParams.get("end_hour");
  const end_minute = searchParams.get("end_minute");

  const getAge = (birthDate: string): number => {
    const birthYear = Number(birthDate.split("-")[0]); // 출생 연도 가져오기
    const currentYear = new Date().getFullYear(); // 현재 연도 가져오기
    return currentYear - birthYear;
  };
  useEffect(() => {
    const fetchGet = async () => {
      try {
        const response = await axios.post(
          `${process.env.NEXT_PUBLIC_API_URL_KEY}/api/recommendation/elderly/${id}/caregiver-list/`,
          {
            days: days,
            start_hour: Number(start_hour),
            start_minute: Number(start_minute),
            end_hour: Number(end_hour),
            end_minute: Number(end_minute),
            wage: Number(wage),
          }
        );
        console.log(response.data);
        setElderData(response.data.elderly);
        setCaregivers(response.data.caregivers);
        setRequests(response.data.request);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchGet();
  }, [days, end_hour, end_minute, id, start_hour, start_minute, wage]);

  const formatCurrency = (value: number) => {
    return value.toLocaleString("ko-KR");
  };

  const handleGender = (gender: string) => {
    setSelectedGender(gender);
    setIsGender(false);
  };

  const handleCar = (car: boolean) => {
    setOwnCar(true);
    setSelectedCar(car);
    setIsCar(false);
  };

  const handleDementia = (dementia: boolean) => {
    setOwnDementia(true);
    setSelectedDementia(dementia);
    setIsDementia(false);
  };

  const handleSelect = (id: string) => {
    setSelectedId((prevSelectedId) =>
      prevSelectedId.includes(id)
        ? prevSelectedId.filter((selected) => selected !== id)
        : [...prevSelectedId, id]
    );
  };

  const filteredGuardians = useMemo(() => {
    return caregivers.filter((guardian) => {
      if (selectedGender && guardian.gender !== selectedGender) {
        return false;
      }
      if (ownCar && guardian.has_car !== selectedCar) {
        return false;
      }
      if (ownDementia && guardian.has_dementia_training !== selectedDementia) {
        return false;
      }
      return true;
    });
  }, [
    caregivers,
    selectedGender,
    ownCar,
    selectedCar,
    ownDementia,
    selectedDementia,
  ]);

  const handleClick = (guardian: Person) => {
    setSelectedCaregivers(guardian);
    setIsGuardianModal(true);
  };

  const calculateMonthlySalary = () => {
    const start =
      Number(requests?.start_hour) + Number(requests?.start_minute) / 60;
    const end = Number(requests?.end_hour) + Number(requests?.end_minute) / 60;
    const workHours = end - start;
    const daysArray = days?.split(",");
    const weeklySalary =
      (Number(requests?.wage) ?? 0) * workHours * (daysArray?.length ?? 0);
    const monthlySalary = weeklySalary * 4; // 4주 기준

    return monthlySalary;
  };

  const postAdd = () => {
    const fetchPost = async () => {
      try {
        const response = await axios.post(
          `${process.env.NEXT_PUBLIC_API_URL_KEY}/api/matching/`,
          {
            wage: Number(requests?.wage),
            elderly: elderData?.id,
            start_hour: Number(requests?.start_hour),
            start_minute: Number(requests?.start_minute),
            end_hour: Number(requests?.end_hour),
            end_minute: Number(requests?.end_minute),
            days: [],
          }
        );
        console.log(response.data);
        setMatching(true);
      } catch {
        console.error();
      }
    };
    fetchPost();
  };

  if (typeof window === "undefined") {
    return null; // Prevent SSR
  }

  if (isLoading) {
    return (
      <div className="w-full h-screen flex items-center justify-center">
        <p className="text-xl">Loading...</p>
      </div>
    );
  }

  return (
    <div className="w-full h-full flex relative">
      <Navigation />
      <div className="w-full flex flex-col">
        {matching ? (
          <Matching
            elderData={elderData as ElderData}
            caregiver={caregivers}
            request={requests as Requests}
            selectedId={selectedId}
          />
        ) : (
          <>
            <div className="flex flex-col w-full h-[350px] bg-[#F7F8FA] pl-[31px] pt-[24px]">
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
                  <p className="text-[26px] font-[600] text-[#191A1C]">
                    매칭하기
                  </p>
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
                    {elderData?.name} 어르신
                  </p>
                  <div className="text-[22px] text-[#666666] font-[600] gap-[18px] flex justify-center">
                    <p>
                      {elderData?.birth
                        ? `${getAge(elderData.birth)}세`
                        : "00세"}
                    </p>
                    <p>{elderData?.gender}성</p>
                    <p>{elderData?.care_grade}</p>
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
                    <p className="text-[22px] font-[500] text-[#535252]">
                      {requests?.days}
                    </p>
                  </div>
                  <div className="flex gap-[3px] text-[22px] font-[500] text-[#535252]">
                    <Image
                      src="/assets/icons/icon_alarm.svg"
                      width={24}
                      height={24}
                      alt="시계"
                    />
                    <p className="whitespace-nowrap text-[22px] text-[#858585] font-[500]">
                      {`${String(requests?.start_hour).padStart(
                        2,
                        "0"
                      )}:${String(requests?.start_minute).padStart(2, "0")}
    ~ ${String(requests?.end_hour).padStart(2, "0")}:${String(
                        requests?.end_minute
                      ).padStart(2, "0")}`}
                    </p>
                  </div>
                  <div className="flex gap-[3px] text-[22px] font-[500] text-[#535252]">
                    <Image
                      src="/assets/icons/location.svg"
                      width={24}
                      height={24}
                      alt="위치"
                    />
                    <p className="text-[22px] font-[500] text-[#535252]">
                      {elderData?.address}
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
                      Number(requests?.wage)
                    )}원, 월급 ${formatCurrency(
                      Number(calculateMonthlySalary())
                    )}원`}</p>
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
            <div className="flex flex-col pl-[30px] pt-[30px]">
              <p className="text-[26px] font-[600] text-[#000000]">
                {elderData?.name} 어르신과 딱 맞는 요양보호사
              </p>
              <div className="flex relative mt-[20px] gap-[8px]">
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
                  className="flex items-center w-[111px]  h-[47px] gap-[20px] justify-center border rounded-[10px] bg-[#FFFFFF] text-[22px] font-[600] text-[#A7ABA5] whitespace-nowrap"
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
                  <div className="absolute left-[47px] mt-[50px] w-[111px] bg-white border rounded-lg shadow-md">
                    <button
                      className="w-full px-4 py-2 text-left hover:bg-[#58C185] hover:text-[#FFFFFF] rounded-[10px] text-[22px] font-[600] text-[#A7ABA5]"
                      onClick={() => handleGender("남")}
                    >
                      남
                    </button>
                    <button
                      className="w-full px-4 py-2 text-left hover:bg-[#58C185] hover:text-[#FFFFFF] rounded-[10px] text-[22px] font-[600] text-[#A7ABA5]"
                      onClick={() => handleGender("여")}
                    >
                      여
                    </button>
                  </div>
                )}
                <button
                  onClick={() => setIsCar(true)}
                  className="flex items-center w-[183px] h-[47px] gap-[20px] justify-center border rounded-[10px] bg-[#FFFFFF] text-[22px] font-[600] text-[#A7ABA5]"
                >
                  <p className=" whitespace-nowrap">
                    {ownCar
                      ? selectedCar
                        ? "예"
                        : "아니요"
                      : "차량 소유 여부"}
                  </p>
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
                {isCar && (
                  <div className="absolute left-[168px] mt-[50px] w-[183px] bg-white border rounded-lg shadow-md">
                    <button
                      className="w-full px-4 py-2 text-left hover:bg-[#58C185] hover:text-[#FFFFFF] rounded-[10px] text-[22px] font-[600] text-[#A7ABA5]"
                      onClick={() => handleCar(true)}
                    >
                      예
                    </button>
                    <button
                      className="w-full px-4 py-2 text-left hover:bg-[#58C185] hover:text-[#FFFFFF] rounded-[10px] text-[22px] font-[600] text-[#A7ABA5]"
                      onClick={() => handleCar(false)}
                    >
                      아니요
                    </button>
                  </div>
                )}
                <button
                  onClick={() => setIsDementia(true)}
                  className="flex items-center w-[200px] justify-center border rounded-[10px] bg-[#FFFFFF] text-[22px] font-[600] text-[#A7ABA5]"
                >
                  <p className="whitespace-nowrap">
                    {ownDementia
                      ? selectedDementia
                        ? "예"
                        : "아니요"
                      : "치매 교육 이수 여부"}
                  </p>
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
                {isDementia && (
                  <div className="absolute left-[358px] mt-[50px] w-[200px] bg-white border rounded-lg shadow-md">
                    <button
                      className="w-full px-4 py-2 text-left hover:bg-[#58C185] hover:text-[#FFFFFF] rounded-[10px] text-[22px] font-[600] text-[#A7ABA5]"
                      onClick={() => handleDementia(true)}
                    >
                      예
                    </button>
                    <button
                      className="w-full px-4 py-2 text-left hover:bg-[#58C185] hover:text-[#FFFFFF] rounded-[10px] text-[22px] font-[600] text-[#A7ABA5]"
                      onClick={() => handleDementia(false)}
                    >
                      아니요
                    </button>
                  </div>
                )}
              </div>
              <div className="h-[400px] overflow-y-auto pb-[100px]">
                {filteredGuardians.map((guardian, idx) => (
                  <div
                    key={idx}
                    className="flex mt-[50px] items-center pl-[17px]"
                  >
                    <button onClick={() => handleSelect(guardian.id)}>
                      {selectedId.includes(guardian.id) ? (
                        <Image src={Check} alt="체크" width={26} height={26} />
                      ) : (
                        <Image
                          src={NoCheck}
                          alt="노체크"
                          width={26}
                          height={26}
                        />
                      )}
                    </button>
                    <div className="ml-[46px]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="79"
                        height="78"
                        viewBox="0 0 79 78"
                        fill="none"
                      >
                        <circle cx="39.5" cy="39" r="39" fill="#D9D9D9" />
                      </svg>
                      <div className="flex items-center mt-[22px]">
                        <p className="text-[26px] text-[#191A1C] font-[600]">
                          {guardian.name}
                        </p>
                        <p className="text-[26px] text-[#666666] font-[600] ml-[9px]">
                          {guardian.gender}성
                        </p>
                      </div>
                    </div>
                    <div className="w-[507px] ml-[24px] h-[173px] bg-[#F7F8FA] rounded-[14px] flex flex-col gap-[22px] items-start justify-center  pl-[24px]">
                      <div className="flex gap-[46px]">
                        <div className="flex items-center">
                          <Image
                            src="/assets/icons/icon_calendar.svg"
                            alt="달력"
                            width={24}
                            height={24}
                          />
                          <p className="text-[22px] w-[192px] font-[500] text-[#666666] whitespace-nowrap">
                            {guardian.days.join(", ")}
                          </p>
                        </div>
                        <div className="flex">
                          <Image
                            src="/assets/icons/location.svg"
                            alt="위치"
                            width={24}
                            height={24}
                          />
                          <p className="text-[22px] font-[500] text-[#666666] w-[192px] line-clamp-1">
                            {guardian.address}
                          </p>
                        </div>
                      </div>
                      <div className="flex  gap-[46px]">
                        <div className="flex items-start">
                          <Image
                            src="/assets/icons/icon_alarm.svg"
                            alt="시계"
                            width={24}
                            height={24}
                            className="mt-[5px]"
                          />
                          <div className="flex flex-col w-[192px]">
                            {guardian.times.map((time, idx) => (
                              <p
                                key={idx}
                                className="text-[22px] font-[500] text-[#666666]"
                              >
                                {time}
                              </p>
                            ))}
                          </div>
                        </div>
                        <div className="flex items-start">
                          <Image
                            src="/assets/icons/icon_salary.svg"
                            alt="급여"
                            width={24}
                            height={24}
                            className="mt-[5px]"
                          />
                          <div className="flex items-center">
                            <p className="text-[22px] font-[500] text-[#666666]">
                              {formatCurrency(guardian.min_wage)} ~
                            </p>

                            <p className="text-[22px] font-[500] text-[#666666]">
                              {formatCurrency(guardian.max_wage)}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <button
                      onClick={() => handleClick(guardian)}
                      className="ml-[89px] w-[141px] h-[48px] bg-[#D7F3D1] rounded-[10px] text-[22px] font-[500] text-[#2D8859]"
                    >
                      프로필 보기
                    </button>
                  </div>
                ))}
              </div>
            </div>
            <div className="absolute w-[1000px] h-[100px] bottom-[-20px] z-[1] bg-[#FFFFFF] flex items-center justify-between">
              <p className="ml-[34px] text-[24px] font-[600] text-[#666] w-[250px]">
                선택한 요양보호사 :{" "}
                <span className="ml-[10px] text-[32px] font-[600] text-[#58C185]">
                  {`${selectedId.length}명`}
                </span>
              </p>

              <button
                onClick={() => selectedId.length && postAdd()}
                className={`w-[254px] h-[58px] ${
                  selectedId.length > 0 ? "bg-[#58C185]" : "bg-[#D9D9D9]"
                } rounded-[10px] flex justify-center items-center text-[#FFFFFF] mr-[20px]`}
              >
                매칭 요청 보내기
              </button>
            </div>
          </>
        )}

        {isProfileModal && elderData && (
          <ElderModal
            data={elderData}
            request={requests || ({} as Requests)}
            onClose={setIsProfileModal}
          />
        )}
        {isGuardianModal && selectedCaregivers && (
          <GuardianProfile
            data={selectedCaregivers}
            setIsProfileModal={setIsGuardianModal}
          />
        )}
      </div>
    </div>
  );
}
