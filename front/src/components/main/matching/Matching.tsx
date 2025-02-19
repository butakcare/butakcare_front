"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";

interface Props {
  selectedId: string[];
  elderData: ElderData;
  caregiver: Person[];
  request: Requests;
}

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

export default function Matching({
  selectedId,
  elderData,
  caregiver,
}: // request,
Props) {
  const router = useRouter();

  const filteredGuardians = caregiver.filter((ca) =>
    selectedId.includes(ca.id)
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
                {elderData.name} 어르신
              </p>
              <div className="text-[22px] text-[#666666] font-[600] gap-[18px] flex">
                <p>{elderData.birth}</p>
                <p>{elderData.gender}성</p>
                <p>{elderData.care_grade}</p>
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
                    <div className="flex items-center">
                      <Image
                        src="/assets/icons/icon_calendar.svg"
                        alt="달력"
                        width={24}
                        height={24}
                      />
                      <p className="text-[22px] w-[192px] font-[500] text-[#666666] line-clamp-1 ml-[10px]">
                        {guardian.days[0].split("").join(", ")}
                      </p>
                    </div>
                    <div className="flex items-center">
                      <Image
                        src="/assets/icons/location.svg"
                        alt="위치"
                        width={24}
                        height={24}
                      />
                      <p className="text-[22px] font-[500] text-[#666666] line-clamp-1">
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
                      <div className="flex items-center ml-[5px]">
                        <p className="text-[22px] font-[500] text-[#666666]">
                          {guardian.min_wage.toLocaleString()} ~{" "}
                          {guardian.max_wage.toLocaleString()}원
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <button
          onClick={() => router.push("/manager/main")}
          className={`absolute bottom-[50px] right-[200px] w-[254px] h-[58px] rounded-[10px] bg-[#58C185] flex justify-center items-center text-[#FFFFFF] mr-[20px] cursor-pointer`}
        >
          첫 페이지로 돌아가기
        </button>
      </div>
    </>
  );
}
