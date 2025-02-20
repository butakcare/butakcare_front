import React, { SetStateAction } from "react";

interface Prop {
  setIsAcceptModal: React.Dispatch<SetStateAction<boolean>>;
  setGuardianStatus: React.Dispatch<SetStateAction<string>>;
}

export default function AcceptModal({
  setIsAcceptModal,
  setGuardianStatus,
}: Prop) {
  const data = {
    schedules: ["수", "목", "금"],
    time: ["09:00 ~ 12:00"],
    location: ["서울특별시 동작구"],
    salaryWeek: 15000,
  };

  const formatCurrency = (value: number) => {
    return value.toLocaleString("ko-kr");
  };

  const calculateMonthlySalary = () => {
    const [start, end] = data.time[0].split(" ~ ").map((t) => parseInt(t));
    const workHours = end - start;
    const weeklySalary = data.salaryWeek * workHours * data.schedules.length;
    const monthlySalary = weeklySalary * 4; // 4주 기준
    return monthlySalary;
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="flex flex-col bg-[#FCFCFB] items-center rounded-[20px] w-[589px] h-[387px] px-[23px] py-[13px]">
        <strong className="text-[34px] text-[#484848] font-[700]">
          조율 요청을 수락할까요?
        </strong>
        <div className="flex items-start gap-[18px]">
          <div className="flex flex-col w-[490px] h-[135px] py-[13px] items-center h-auto bg-[#F0F0F0] items-start justify-center gap-[10px] rounded-[14px] mt-[17px]">
            <div className="flex gap-[34px] h-[26px]">
              <div className="flex gap-[23px] w-[188px]">
                <p className="text-[22px] whitespace-nowrap font-[500] text-[#9A9A9A]">
                  요일
                </p>
                <p className="text-[22px] whitespace-nowrap font-[500] text-[#000000]">
                  {data.schedules.join(", ")}
                </p>
              </div>
              <div className="flex gap-[23px] w-[222px]">
                <p className="text-[22px] whitespace-nowrap font-[500] text-[#9A9A9A]">
                  장소
                </p>
                <p className="text-[22px] whitespace-nowrap font-[500] text-[#000000]">
                  {data.location}
                </p>
              </div>
            </div>
            <div className="flex gap-[34px]">
              <div className="flex gap-[23px] w-[188px]">
                <p className="text-[22px] whitespace-nowrap font-[500] text-[#9A9A9A]">
                  시간
                </p>
                <p className="text-[22px] whitespace-nowrap font-[500] text-[#000000]">
                  {data.time}
                </p>
              </div>
              <div className="flex gap-[23px] w-[222px]">
                <p className="text-[22px] whitespace-nowrap font-[500] text-[#9A9A9A]">
                  급여
                </p>
                <p className="text-[22px] whitespace-nowrap font-[500] text-[#000000]">
                  시급 {formatCurrency(data.salaryWeek)}원
                  <br />
                  월급 {formatCurrency(calculateMonthlySalary())}원
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-[16px]">
          <p className="text-center text-[22px] font-[500] text-[#666666]">
            수락하기를 누르시면
            <br />
            관리자에게 바로 알림이 가요.
          </p>
        </div>
        <div className="mt-[17px]  flex items-center gap-[8px]">
          <button
            onClick={() => {
              setIsAcceptModal(false);
            }}
            className="w-[269px] h-[52px] bg-[#DFE3E2] rounded-[10px] text-[22px] text-[#666666] font-[600]"
          >
            아니요
          </button>
          <button
            onClick={() => {
              setIsAcceptModal(false);
              setGuardianStatus("수락");
            }}
            className="w-[269px] h-[52px] bg-[#58C185] rounded-[10px] text-[22px] text-[#FFFFFF] font-[600]"
          >
            수락하기
          </button>
        </div>
      </div>
    </div>
  );
}
