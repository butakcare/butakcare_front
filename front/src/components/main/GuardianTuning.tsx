import React from "react";

interface Prop {
  setIsTuningModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function GuardianTuning({ setIsTuningModal }: Prop) {
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
      time: ["09:00 ~ 12:00"],
      salary: "시급 16,000원",
    },
    tuning: {
      text: "휠체어 종류를 같이 알려주세요",
    },
    assistance: {
      walk: ["휠체어 이동보조"],
      daily: ["청소", "빨래 도움", "말벗 등 정서지원", "산책 등 간단한 운동"],
    },
  };
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div
        className="flex flex-col bg-[#FCFCFB] rounded-[20px] w-[774px] max-h-[95vh] overflow-y-auto pl-[30px] pt-[30px]"
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
        <strong className="text-[34px] text-[#484848] font-[700]">
          조율 요청 내역
        </strong>
        <div className="flex items-center justify-between mb-4 mt-[30px]">
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
          <div className="mt-[30px]">
            <strong className="text-[26px] font-[700] text-[#000000] leading-[31px] mt-[28px]">
              근무 조건
            </strong>
            <div className="flex flex-col w-[352px] py-[20px] h-auto bg-[#F0F0F0] items-start justify-center pl-[22px] gap-[10px] rounded-[14px] mt-4">
              <div className="flex gap-[53px] h-[26px]">
                <p className="text-[22px] whitespace-nowrap font-[500] text-[#9A9A9A]">
                  요일
                </p>
                <p className="text-[22px] whitespace-nowrap font-[500] text-[#000000]">
                  {data.condition.schedules.join(", ")}
                </p>
              </div>
              <div className="flex gap-[53px]">
                <p className="text-[22px] whitespace-nowrap font-[500] text-[#9A9A9A]">
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
              <div className="flex gap-[53px] h-[26px]">
                <p className="text-[22px] whitespace-nowrap font-[500] text-[#9A9A9A]">
                  급여
                </p>
                <p className="text-[22px] whitespace-nowrap font-[600] text-[#000000]">
                  {data.condition.salary}
                </p>
              </div>
            </div>
            <div className="mt-[12px]">
              <strong className="text-[26px] font-[700] text-[#000000] leading-[31px] mt-[28px]">
                추가 요청사항
              </strong>
              <div className="flex flex-col w-[352px] px-[20px] py-[16px] min-h-[115px] bg-[#F0F0F0] rounded-[14px] mt-4">
                <p className="text-[22px] text-[#676767] font-[500]">
                  {data.tuning.text}
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-[352px] mt-[30px]">
            <strong className="text-[26px] font-[700] text-[#000000] leading-[31px] mt-[12px]">
              케어 필요 항목
            </strong>
            <div className="flex w-[352px] mt-[14px] h-auto bg-[#F0F0F0] items-start px-[12px] gap-[10px] rounded-[14px] py-[14px]">
              <div className="flex flex-col w-[300px] bg-[#F0F0F0] gap-[10px] rounded-[14px] inline-flex">
                <p className="text-[22px] font-[700] text-[#676767] ">
                  이동보조
                </p>
                <div className="flex flex-wrap gap-[10px]">
                  <div className="px-[10px]  h-[36px] flex justify-center items-center bg-[#D7F3D1] rounded-[8px]">
                    {data.assistance.walk.map((w, idx) => (
                      <p
                        key={idx}
                        className="text-[20px] font-[500] text-[#58C185]"
                      >
                        {w}
                      </p>
                    ))}
                  </div>
                </div>
                <p className="text-[22px] font-[700] text-[#676767]">
                  생활보조
                </p>
                <div className="flex flex-wrap gap-[6px]">
                  {data.assistance.daily.map((d, idx) => (
                    <div
                      key={idx}
                      className="px-[10px] py-[5px] h-[36px] flex justify-center items-center bg-[#D7F3D1] rounded-[8px]"
                    >
                      <p className="text-[20px] font-[500] text-[#58C185]">
                        {d}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-[30px] w-[683px] flex items-center justify-end mb-[32px]">
          <button
            onClick={() => setIsTuningModal(false)}
            className="w-[196px] h-[84px] bg-[#D7F3D1] rounded-[14px] text-[30px] text-[#000000] font-[700]"
          >
            닫기
          </button>
        </div>
      </div>
    </div>
  );
}
