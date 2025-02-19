import Image from "next/image";
import React from "react";

interface Prop {
  setIsProfileModal: React.Dispatch<React.SetStateAction<boolean>>;
  data: Person;
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

interface AvailableArea {
  id: number;
  name: string;
}

export default function GuardianProfile({ setIsProfileModal, data }: Prop) {
  const getAge = (birthDate: string): number => {
    const birthYear = Number(birthDate.split("-")[0]); // 출생 연도 가져오기
    const currentYear = new Date().getFullYear(); // 현재 연도 가져오기
    return currentYear - birthYear;
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-[5]">
      <div
        className="flex flex-col bg-[#FCFCFB] rounded-[20px] w-[774px] max-h-[90vh] overflow-y-auto pl-[30px] pt-[30px]"
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        <style jsx>{`
          div::-webkit-scrollbar {
            display: none;
          }
        `}</style>
        <div className="flex flex-col items-start justify-between mb-4 gap-[30px]">
          <div className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="78"
              height="78"
              viewBox="0 0 78 78"
              fill="none"
            >
              <circle cx="39" cy="39" r="39" fill="#D9D9D9" />
            </svg>
            <p className="text-[34px] font-[700] text-[#484848] ml-4">
              {data.name}
            </p>
          </div>
          <div>
            <p className="text-[26px] font-[700] text-[#191A1C]">한 줄 소개</p>
            <p className="text-[22px] font-[500] text-[#666666]">
              {data.description}
            </p>
          </div>
        </div>
        <div className="flex items-start gap-[18px]">
          <div className="flex flex-col">
            <strong className="text-[26px] font-[700] text-[#000000] leading-[31px] mt-[12px]">
              요양보호사 정보
            </strong>
            <div className="flex flex-col w-[352px] h-auto pt-[18px] bg-[#F0F0F0] items-start pl-[23px] gap-[14px] rounded-[14px] pb-[26px] mt-[12px]">
              <div className="flex gap-[20px] h-[26px]">
                <p className="w-[75px] text-[22px] whitespace-nowrap font-[500] text-[#9A9A9A]">
                  자격증
                </p>
                <p className="text-[22px] whitespace-nowrap font-[500] text-[#000000]">
                  {data.caregiver_qualification}
                </p>
              </div>
              <div className="flex gap-[20px] h-[26px]">
                <p className="w-[75px] text-[22px] whitespace-nowrap font-[500] text-[#9A9A9A]">
                  성별
                </p>
                <p className="text-[22px] whitespace-nowrap font-[500] text-[#000000]">
                  {data.gender}성
                </p>
              </div>
              <div className="flex gap-[20px] h-[26px]">
                <p className="w-[75px] text-[22px] whitespace-nowrap font-[500] text-[#9A9A9A]">
                  나이
                </p>
                <p className="text-[22px] whitespace-nowrap font-[500] text-[#000000]">
                  {getAge(data.birth)}세
                </p>
              </div>
              <div className="flex gap-[20px] h-[52px]">
                <p className="w-[75px] text-[22px] whitespace-nowrap font-[500] text-[#9A9A9A]">
                  차량
                  <br />
                  소유 여부
                </p>
                <p className="text-[22px] whitespace-nowrap font-[500] text-[#000000]">
                  {data.has_car ? "예" : "아니요"}
                </p>
              </div>
              <div className="flex gap-[20px] h-[52px] justify-start mt-[4px]">
                <p className="w-[75px] text-[22px] whitespace-nowrap font-[500] text-[#9A9A9A]">
                  치매교육
                  <br />
                  이수여부
                </p>
                <p className="text-[22px] whitespace-nowrap font-[500] text-[#000000]">
                  {data.has_dementia_training ? "예" : "아니요"}
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-[313px]">
            <strong className="text-[26px] font-[700] text-[#000000] leading-[31px] mt-[12px]">
              희망 근무 위치
            </strong>
            <div className="flex w-[313px] h-auto bg-[#F0F0F0] items-start px-[17px] gap-[10px] rounded-[14px] mt-[16px] pb-[16px]">
              <Image
                src="/assets/icons/location.svg"
                alt="위치"
                width={30}
                height={30}
                className="mt-[17px]"
              />
              <div className="text-[22px] font-[500] text-[#000000] py-[14px] flex flex-wrap gap-[6px]">
                {data.available_area.map((locat, idx) => (
                  <span key={idx} className="whitespace-nowrap">
                    {locat.name}
                    {idx !== data.available_area.length - 1 && ","}
                  </span>
                ))}
              </div>
            </div>
            <strong className="text-[26px] font-[700] text-[#000000] leading-[31px] mt-[28px]">
              희망 근무 조건
            </strong>
            <div className="flex flex-col w-[352px] py-[20px] h-auto bg-[#F0F0F0] items-start justify-center pl-[22px] gap-[10px] rounded-[14px] mt-4">
              <div className="flex gap-[16px] h-[26px]">
                <p className="w-[75px] text-[22px] whitespace-nowrap font-[500] text-[#9A9A9A]">
                  기간
                </p>
                <p className="text-[22px] whitespace-nowrap font-[500] text-[#000000]">
                  {data.days.join(", ")}
                </p>
              </div>
              <div className="flex gap-[16px]">
                <p className="w-[75px] text-[22px] whitespace-nowrap font-[500] text-[#9A9A9A]">
                  시간
                </p>
                <div className="text-[22px] whitespace-nowrap font-[500] text-[#000000]">
                  {data.times.map((t, idx) => (
                    <p key={idx}>
                      {t}
                      {idx < data.times.length - 1 && ", "}
                    </p>
                  ))}
                </div>
              </div>
              <div className="flex gap-[16px] h-[26px]">
                <p className="w-[75px] text-[22px] whitespace-nowrap font-[500] text-[#9A9A9A]">
                  희망급여
                </p>
                <p className="text-[22px] whitespace-nowrap font-[600] text-[#000000]">
                  {data.min_wage}원 ~ {data.max_wage}원
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-[30px] w-[683px] flex items-center justify-end mb-[32px]">
          <button
            onClick={() => setIsProfileModal(false)}
            className="w-[196px] h-[84px] bg-[#D7F3D1] rounded-[14px] text-[30px] text-[#000000] font-[700]"
          >
            닫기
          </button>
        </div>
      </div>
    </div>
  );
}
