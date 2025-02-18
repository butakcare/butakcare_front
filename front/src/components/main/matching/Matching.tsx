"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";

interface Props {
  selectedId: number[];
}

export default function Matching({ selectedId }: Props) {
  const router = useRouter();

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
    guardianList: [
      {
        id: 1,
        name: "김요양",
        gender: "여",
        isCar: true,
        isDementia: true,
        schedules: ["월", "화", "수", "목", "금"],
        location: ["종로구 낙원동"],
        times: ["09:00 ~ 12:00", "12:00 ~ 18:00", "18:00 ~ 21:00"],
        minWage: 12000,
        maxWage: 16000,
      },
      {
        id: 2,
        name: "김옥자",
        gender: "남",
        isCar: true,
        isDementia: false,
        schedules: ["월", "화", "수", "목", "금"],
        location: ["종로구 낙원동"],
        times: ["09:00 ~ 12:00", "12:00 ~ 18:00", "18:00 ~ 21:00"],
        minWage: 12000,
        maxWage: 16000,
      },
      {
        id: 3,
        name: "김요양",
        gender: "여",
        isCar: true,
        isDementia: true,
        schedules: ["월", "화", "수", "목", "금"],
        location: ["종로구 낙원동"],
        times: ["09:00 ~ 12:00", "12:00 ~ 18:00", "18:00 ~ 21:00"],
        minWage: 12000,
        maxWage: 16000,
      },
      {
        id: 4,
        name: "김옥자",
        gender: "남",
        isCar: true,
        isDementia: false,
        schedules: ["월", "화", "수", "목", "금"],
        location: ["종로구 낙원동"],
        times: ["09:00 ~ 12:00", "12:00 ~ 18:00", "18:00 ~ 21:00"],
        minWage: 12000,
        maxWage: 16000,
      },
    ],
  };

  const filteredGuardians = data.guardianList.filter((guardian) =>
    selectedId.includes(guardian.id)
  );

  return (
    <>
      <div className="flex flex-col">
        <div className="flex flex-col w-full h-[220px] bg-[#F7F8FA] pl-[31px] pt-[24px]">
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
              <p className="text-[26px] font-[600] text-[#191A1C]">매칭완료</p>
              <p className="text-[30px] font-[600] text-[#191A1C] mt-[20px]">
                {`매칭 요청을 성공적으로 보냈습니다 :)`}
              </p>
              <p className="text-[22px] font-[600] text-[#666666] mt-[20px]">
                요청 목록에서 요양보호사들과의
                <br />
                매칭 진행과정을 확인할 수 있습니다.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col mt-[38px] ml-[30px]">
        <p className="text-[32px] font-[600] text-[#191A1C]">요청 내역</p>
        <div className="flex items-center">
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
          <div className="flex">
            <div className="ml-[25px] ">
              <p className="text-[34px] font-[700] text-[#191A1C]">
                {data.name} 어르신
              </p>
              <div className="text-[22px] text-[#666666] font-[600] gap-[18px] flex">
                <p>{data.birth}</p>
                <p>{data.gender}성</p>
                <p>{data.grade}등급</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <p className="text-[26px] font-[600] text-[#191A1C] mt-[47px]">
            요청 보낸 요양보호사 목록
          </p>
          <div className="h-[300px] overflow-y-auto ">
            {filteredGuardians.map((guardian, idx) => (
              <div key={idx} className="flex mt-[50px] items-center pl-[17px]">
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
                    <div className="flex ">
                      <Image
                        src="/assets/icons/icon_calendar.svg"
                        alt="달력"
                        width={24}
                        height={24}
                      />
                      <p className="text-[22px] w-[192px] font-[500] text-[#666666]">
                        {guardian.schedules.join(", ")}
                      </p>
                    </div>
                    <div className="flex">
                      <Image
                        src="/assets/icons/location.svg"
                        alt="위치"
                        width={24}
                        height={24}
                      />
                      <p className="text-[22px] font-[500] text-[#666666]">
                        {guardian.location}
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
                          {guardian.minWage.toLocaleString()} ~{" "}
                          {guardian.maxWage.toLocaleString()}원
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
