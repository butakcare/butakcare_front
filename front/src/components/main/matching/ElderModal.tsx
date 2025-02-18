import Image from "next/image";
import React, { SetStateAction } from "react";

interface ElderModalProps {
  data: {
    id: number;
    profile: string;
    name: string;
    grade: number;
    gender: string;
    schedules: string[];
    times: string[];
    location: string;
    matching: string;
  } | null;
  onClose: React.Dispatch<SetStateAction<boolean>>;
}

export default function ElderModal({ data, onClose }: ElderModalProps) {
  if (!data) return null;

  const handleBackgroundClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose(false);
    }
  };

  return (
    <div
      onClick={handleBackgroundClick}
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-[5]"
    >
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
              어르신 정보
            </strong>
            <div className="flex flex-col w-[355px] h-auto pt-[18px] bg-[#F0F0F0] items-start pl-[23px] gap-[14px] rounded-[14px] pb-[19px] mt-[12px]">
              <div className="flex gap-[16px] h-[26px]">
                <p className="w-[75px] text-[22px] whitespace-nowrap font-[500] text-[#9A9A9A]">
                  요양등급
                </p>
                <p className="text-[22px] whitespace-nowrap font-[500] text-[#000000]">
                  {data.grade}등급
                </p>
              </div>
              <div className="flex gap-[16px] h-[26px]">
                <p className="w-[75px] text-[22px] whitespace-nowrap font-[500] text-[#9A9A9A]">
                  성별
                </p>
                <p className="text-[22px] whitespace-nowrap font-[500] text-[#000000]">
                  {data.gender}성
                </p>
              </div>
              <div className="flex gap-[16px] h-[26px]">
                <p className="w-[75px] text-[22px] whitespace-nowrap font-[500] text-[#9A9A9A]">
                  나이
                </p>
                <p className="text-[22px] whitespace-nowrap font-[500] text-[#000000]">
                  85세
                </p>
              </div>
              <div className="flex gap-[16px] h-[26px]">
                <p className="w-[75px] text-[22px] whitespace-nowrap font-[500] text-[#9A9A9A]">
                  몸무게
                </p>
                <p className="text-[22px] whitespace-nowrap font-[500] text-[#000000]">
                  58kg
                </p>
              </div>
              <div className="flex gap-[16px] h-[26px]">
                <p className="w-[75px] text-[22px] whitespace-nowrap font-[500] text-[#9A9A9A]">
                  질병
                </p>
                <p className="text-[22px] whitespace-nowrap font-[500] text-[#000000]">
                  난청, 관절
                </p>
              </div>
              <div className="flex gap-[16px] h-[26px]">
                <p className="w-[75px] text-[22px] whitespace-nowrap font-[500] text-[#9A9A9A]">
                  인지상태
                </p>
                <p className="text-[22px] whitespace-nowrap font-[500] text-[#000000]">
                  정상(치매 증상 없음)
                </p>
              </div>
              <div className="flex gap-[16px] h-[26px]">
                <p className="w-[75px] text-[22px] whitespace-nowrap font-[500] text-[#9A9A9A]">
                  동거여부
                </p>
                <p className="text-[22px] whitespace-nowrap font-[500] text-[#000000]">
                  독거 중
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-[313px]">
            <strong className="text-[26px] font-[700] text-[#000000] leading-[31px] mt-[12px]">
              근무 위치
            </strong>
            <div className="flex w-[313px] h-auto bg-[#F0F0F0] items-center pl-[17px] gap-[10px] rounded-[14px] mt-4">
              <Image
                src="/assets/icons/location.svg"
                alt="위치"
                width={30}
                height={30}
              />
              <p className="text-[22px] font-[500] text-[#000000] line-clamp-2 py-[14px]">
                {data.location}
              </p>
            </div>
            <strong className="text-[26px] font-[700] text-[#000000] leading-[31px] mt-[28px]">
              근무 조건
            </strong>
            <div className="flex flex-col w-[313px] py-[20px] h-auto bg-[#F0F0F0] items-start justify-center pl-[22px] gap-[10px] rounded-[14px] mt-4">
              <div className="flex gap-[16px] h-[26px]">
                <p className="w-[75px] text-[22px] whitespace-nowrap font-[500] text-[#9A9A9A]">
                  기간
                </p>
                <p className="text-[22px] whitespace-nowrap font-[500] text-[#000000]">
                  {data.schedules.join(", ")}
                </p>
              </div>
              <div className="flex gap-[16px] h-[26px]">
                <p className="w-[75px] text-[22px] whitespace-nowrap font-[500] text-[#9A9A9A]">
                  시간
                </p>
                {data.times.map((time, idx) => (
                  <p
                    key={idx}
                    className="text-[22px] whitespace-nowrap font-[500] text-[#000000]"
                  >
                    {time}
                  </p>
                ))}
              </div>
              <div className="flex gap-[16px] h-[26px]">
                <p className="w-[75px] text-[22px] whitespace-nowrap font-[500] text-[#9A9A9A]">
                  급여
                </p>
                <p className="text-[22px] whitespace-nowrap font-[500] text-[#000000]">
                  시급 15,000원
                </p>
              </div>
            </div>
          </div>
        </div>
        <strong className="text-[26px] font-[700] text-[#000000] leading-[31px] mt-[36px]">
          케어 필요 항목
        </strong>
        <div className="flex flex-col w-[683px] h-auto bg-[#F0F0F0] pl-[23px] pt-[14px] gap-[10px] rounded-[14px] mt-4 pb-[26px]">
          <p className="text-[22px] font-[700] text-[#676767]">이동보조</p>
          <div className="flex flex-wrap gap-[10px]">
            <div className="px-[10px] py-[5px] h-[34px] flex justify-center items-center bg-[#B3B3B3] rounded-[8px] bg-[#D7F3D1]">
              <p className="text-[20px] font-[500] text-[#58C185]">
                휠체어 이동보조
              </p>
            </div>
          </div>
          <p className="text-[22px] font-[700] text-[#676767]">생활보조</p>
          <div className="flex flex-wrap gap-[6px]">
            <div className="px-[10px] py-[5px] h-[34px] flex justify-center items-center bg-[#B3B3B3] rounded-[8px] bg-[#D7F3D1]">
              <p className="text-[20px] font-[500] text-[#58C185]">청소</p>
            </div>
            <div className="px-[10px] py-[5px] h-[34px] flex justify-center items-center bg-[#B3B3B3] rounded-[8px] bg-[#D7F3D1]">
              <p className="text-[20px] font-[500] text-[#58C185]">빨래 도움</p>
            </div>
            <div className="px-[10px] py-[5px] h-[34px] flex justify-center items-center bg-[#B3B3B3] rounded-[8px] bg-[#D7F3D1]">
              <p className="text-[20px] font-[500] text-[#58C185]">
                말벗 등 정서지원
              </p>
            </div>
            <div className="px-[10px] py-[5px] h-[34px] flex justify-center items-center bg-[#B3B3B3] rounded-[8px] bg-[#D7F3D1]">
              <p className="text-[20px] font-[500] text-[#58C185]">
                산책 등 간단한 운동
              </p>
            </div>
          </div>
        </div>
        <div className="mt-[30px] w-[683px] flex items-center justify-end mb-[32px]">
          <button
            onClick={() => onClose(false)}
            className="w-[248px] h-[84px] bg-[#58C185] rounded-[14px] text-[30px] text-[#FFFFFF] font-[600]"
          >
            닫기
          </button>
        </div>
      </div>
    </div>
  );
}
