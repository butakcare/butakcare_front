import Image from "next/image";
import React from "react";

interface Prop {
  setIsProfileModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function GuardianProfile({ setIsProfileModal }: Prop) {
  const data = {
    name: "김요양",
    profile: {
      qualifications: "요양보호사 1급",
      gender: "여",
      age: 48,
      isCar: "예",
      isDementia: "예",
    },
    location: [
      "서울특별시 종로 전체",
      "서울특별시 성북구 성북동",
      "성북동 1가",
      "돈암동",
      "동소문동 1가",
      "동소문동 2가",
      "동소문동 3가",
    ],
    condition: {
      schedules: ["월", "화", "수", "목", "금"],
      time: ["09:00 ~ 12:00", "12:00 ~ 18:00"],
      salary: "시급 15,000원",
    },
  };
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div
        className="flex flex-col bg-[#FCFCFB] rounded-[20px] w-[742px] max-h-[95vh] overflow-y-auto pl-[30px] pt-[30px]"
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
        <div className="flex items-center justify-between mb-4">
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
        </div>
        <div className="flex items-start gap-[18px]">
          <div className="flex flex-col">
            <strong className="text-[26px] font-[700] text-[#000000] leading-[31px] mt-[12px]">
              요양보호사 정보
            </strong>
            <div className="flex flex-col w-[355px] h-auto pt-[18px] bg-[#F0F0F0] items-start pl-[23px] gap-[14px] rounded-[14px] pb-[26px] mt-[12px]">
              <div className="flex gap-[20px] h-[26px]">
                <p className="w-[75px] text-[22px] whitespace-nowrap font-[500] text-[#9A9A9A]">
                  자격증
                </p>
                <p className="text-[22px] whitespace-nowrap font-[500] text-[#000000]">
                  {data.profile.qualifications}
                </p>
              </div>
              <div className="flex gap-[20px] h-[26px]">
                <p className="w-[75px] text-[22px] whitespace-nowrap font-[500] text-[#9A9A9A]">
                  성별
                </p>
                <p className="text-[22px] whitespace-nowrap font-[500] text-[#000000]">
                  {data.profile.gender}성
                </p>
              </div>
              <div className="flex gap-[20px] h-[26px]">
                <p className="w-[75px] text-[22px] whitespace-nowrap font-[500] text-[#9A9A9A]">
                  나이
                </p>
                <p className="text-[22px] whitespace-nowrap font-[500] text-[#000000]">
                  {data.profile.age}세
                </p>
              </div>
              <div className="flex gap-[20px] h-[52px]">
                <p className="w-[75px] text-[22px] whitespace-nowrap font-[500] text-[#9A9A9A]">
                  차량
                  <br />
                  소유 여부
                </p>
                <p className="text-[22px] whitespace-nowrap font-[500] text-[#000000]">
                  {data.profile.isCar}
                </p>
              </div>
              <div className="flex gap-[20px] h-[52px] justify-start mt-[4px]">
                <p className="w-[75px] text-[22px] whitespace-nowrap font-[500] text-[#9A9A9A]">
                  치매교육
                  <br />
                  이수여부
                </p>
                <p className="text-[22px] whitespace-nowrap font-[500] text-[#000000]">
                  {data.profile.isDementia}
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
                {data.location.map((locat, idx) => (
                  <span key={idx} className="whitespace-nowrap">
                    {locat}
                    {idx !== data.location.length - 1 && ","}
                  </span>
                ))}
              </div>
            </div>
            <strong className="text-[26px] font-[700] text-[#000000] leading-[31px] mt-[28px]">
              희망 근무 조건
            </strong>
            <div className="flex flex-col w-[313px] py-[20px] h-auto bg-[#F0F0F0] items-start justify-center pl-[22px] gap-[10px] rounded-[14px] mt-4">
              <div className="flex gap-[16px] h-[26px]">
                <p className="w-[75px] text-[22px] whitespace-nowrap font-[500] text-[#9A9A9A]">
                  기간
                </p>
                <p className="text-[22px] whitespace-nowrap font-[500] text-[#000000]">
                  {data.condition.schedules.join(", ")}
                </p>
              </div>
              <div className="flex gap-[16px]">
                <p className="w-[75px] text-[22px] whitespace-nowrap font-[500] text-[#9A9A9A]">
                  시간
                </p>
                <div className="text-[22px] whitespace-nowrap font-[500] text-[#000000]">
                  {data.condition.time.map((t, idx) => (
                    <p key={idx}>
                      {t}
                      {idx < data.condition.time.length - 1 && ", "}
                    </p>
                  ))}
                </div>
              </div>
              <div className="flex gap-[16px] h-[26px]">
                <p className="w-[75px] text-[22px] whitespace-nowrap font-[500] text-[#9A9A9A]">
                  희망급여
                </p>
                <p className="text-[22px] whitespace-nowrap font-[600] text-[#000000]">
                  {data.condition.salary}
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
