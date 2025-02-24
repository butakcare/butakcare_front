import React from "react";

interface CareDetails {
  [key: string]: string[]; // care_details 내의 항목들이 배열이므로 이와 같이 정의
}

interface CareRequest {
  id: number;
  care_details: CareDetails;
  days: string[];
  sender: string;
  status: string; // 상태는 제한된 값만 가능하므로 문자열 리터럴 타입으로 설정
  start_hour: number;
  start_minute: number;
  end_hour: number;
  end_minute: number;
  detail: string;
  wage: number | null;
  created_at: string;
  matching: number;
}

interface Prop {
  setReqModal: React.Dispatch<React.SetStateAction<boolean>>;
  message: CareRequest;
}

export default function ReqModal({ setReqModal, message }: Prop) {
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
      text: "",
    },
    assistance: {
      walk: ["휠체어 이동보조"],
      daily: ["청소", "빨래 도움", "말벗 등 정서지원", "산책 등 간단한 운동"],
    },
  };

  const calculateMonthlySalary = (wage: number) => {
    const start = message.start_hour + message.start_minute / 60;
    const end = message.end_hour + message.end_minute / 60;
    const workHours = end - start;
    const weeklySalary = wage * workHours * message.days.length;
    const monthlySalary = weeklySalary * 4; // 4주 기준

    return monthlySalary;
  };

  const formatCurrency = (value: number) => {
    return value.toLocaleString("ko-KR");
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
              width="84"
              height="84"
              viewBox="0 0 84 84"
              fill="none"
            >
              <circle
                cx="42"
                cy="42"
                r="40.5"
                fill="white"
                stroke="white"
                strokeWidth="3"
              />
              <mask
                id="mask0_803_10858"
                maskUnits="userSpaceOnUse"
                x="3"
                y="3"
                width="78"
                height="78"
              >
                <circle cx="42" cy="42" r="39" fill="#DFDDDB" />
              </mask>
              <g mask="url(#mask0_803_10858)">
                <path
                  d="M27.2766 32.3633C17.9237 32.3633 10.3418 39.9452 10.3418 49.298C10.3418 55.954 14.1817 61.7131 19.767 64.4809C14.1817 67.2488 10.3418 73.0079 10.3418 79.6638C10.3418 89.0166 17.9237 96.5986 27.2766 96.5986C33.9325 96.5986 39.6916 92.7587 42.4594 87.1734C45.2273 92.7587 50.9864 96.5986 57.6423 96.5986C66.9951 96.5986 74.5771 89.0166 74.5771 79.6638C74.5771 73.0079 70.7372 67.2488 65.1519 64.4809C70.7372 61.7131 74.5771 55.954 74.5771 49.298C74.5771 39.9452 66.9951 32.3633 57.6423 32.3633C50.9864 32.3633 45.2273 36.2032 42.4594 41.7885C39.6916 36.2032 33.9325 32.3633 27.2766 32.3633Z"
                  fill="#191A1C"
                />
                <path
                  d="M32.3649 43.8329C32.3649 45.6067 30.927 47.0446 29.1532 47.0446C27.3794 47.0446 25.9414 45.6067 25.9414 43.8329C25.9414 42.059 27.3794 40.6211 29.1532 40.6211C30.927 40.6211 32.3649 42.059 32.3649 43.8329Z"
                  fill="white"
                />
                <path
                  d="M58.9782 43.8329C58.9782 45.6067 57.5403 47.0446 55.7665 47.0446C53.9926 47.0446 52.5547 45.6067 52.5547 43.8329C52.5547 42.059 53.9926 40.6211 55.7665 40.6211C57.5403 40.6211 58.9782 42.059 58.9782 43.8329Z"
                  fill="white"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M39.708 47.0113C38.7901 46.6441 37.8711 45.9552 37.8711 44.75H38.7887C38.7887 45.3801 39.2462 45.8382 40.0488 46.1593C40.8376 46.4748 41.8073 46.5853 42.4593 46.5853C43.1114 46.5853 44.0811 46.4748 44.8698 46.1593C45.6725 45.8382 46.1299 45.3801 46.1299 44.75H47.0476C47.0476 45.9552 46.1285 46.6441 45.2106 47.0113C44.2788 47.384 43.1837 47.5029 42.4593 47.5029C41.7349 47.5029 40.6399 47.384 39.708 47.0113Z"
                  fill="white"
                />
              </g>
            </svg>
            <p className="text-[34px] font-[700] text-[#484848] ml-4">관리자</p>
          </div>
        </div>
        <div className="flex items-start gap-[18px]">
          <div className="mt-[30px]">
            <strong className="text-[26px] font-[700] text-[#000000] leading-[31px] mt-[28px]">
              근무 조건
            </strong>
            <div className="flex flex-col w-[352px] py-[20px] h-auto bg-[#F7F8FA] items-start justify-center pl-[22px] gap-[10px] rounded-[14px] mt-4">
              <div className="flex gap-[53px] h-[26px]">
                <p className="text-[22px] whitespace-nowrap font-[500] text-[#9A9A9A]">
                  요일
                </p>
                <p className="text-[22px] whitespace-nowrap font-[500] text-[#000000]">
                  {message.days.join(", ")}
                </p>
              </div>
              <div className="flex gap-[53px]">
                <p className="text-[22px] whitespace-nowrap font-[500] text-[#9A9A9A]">
                  시간
                </p>
                <div className="text-[22px] whitespace-nowrap font-[500] text-[#000000]">
                  {`${String(message.start_hour).padStart(2, "0")}:${String(
                    message.start_minute
                  ).padStart(2, "0")}
    ~ ${String(message.end_hour).padStart(2, "0")}:${String(
                    message.end_minute
                  ).padStart(2, "0")}`}
                </div>
              </div>
              <div className="flex gap-[53px]">
                <p className="text-[22px] whitespace-nowrap font-[500] text-[#9A9A9A]">
                  급여
                </p>
                <p className="text-[22px] whitespace-nowrap font-[600] text-[#000000]">
                  {message?.wage
                    ? `시급 ${formatCurrency(message.wage)}원`
                    : "시급 15,000원"}
                  <br />
                  {message?.wage
                    ? `월급 ${formatCurrency(
                        calculateMonthlySalary(message.wage)
                      )}원`
                    : " 월급 540,000원"}
                </p>
              </div>
            </div>
            <div className="mt-[12px]">
              <strong className="text-[26px] font-[700] text-[#000000] leading-[31px] mt-[28px]">
                추가 요청사항
              </strong>
              <div className="flex flex-col w-[352px] px-[20px] py-[16px] min-h-[115px] bg-[#F7F8FA] rounded-[14px] mt-4">
                <p className="text-[22px] text-[#676767] font-[500]">
                  {message.detail}
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-[352px] mt-[30px]">
            <strong className="text-[26px] font-[700] text-[#000000] leading-[31px] mt-[12px]">
              케어 필요 항목
            </strong>
            <div className="flex w-[352px] mt-[14px] h-auto bg-[#F7F8FA] items-start px-[12px] gap-[10px] rounded-[14px] py-[14px]">
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
            onClick={() => setReqModal(false)}
            className="w-[196px] h-[84px] bg-[#D7F3D1] rounded-[14px] text-[30px] text-[#000000] font-[700]"
          >
            닫기
          </button>
        </div>
      </div>
    </div>
  );
}
