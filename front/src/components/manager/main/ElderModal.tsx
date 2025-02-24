import Image from "next/image";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import ElderConditionModal from "../../sign_up/manager/ElderConditionModal";
import { ElderData } from "@/types/ElderData";
import Profile from "@/../public/assets/images/profile.png";

interface ElderModalProps {
  data: ElderData;
  onClose: () => void;
}

export default function ElderModal({ data, onClose }: ElderModalProps) {
  const [isElderConditionModal, setIsElderConditionModal] =
    useState<boolean>(false);
  const [selectedDays, setSelectedDays] = useState<string[]>(data?.days || []);
  const [salaryWeek, setSalaryWeek] = useState<number>(0);
  const [salaryMonth, setSalaryMonth] = useState<number>(0);
  const [startHour, setStartHour] = useState<string>("");
  const [startMinute, setStartMinute] = useState<string>("");
  const [endHour, setEndHour] = useState<string>("");
  const [endMinute, setEndMinute] = useState<string>("");
  const [startDay, setStartDay] = useState<string>("");
  const router = useRouter();
  if (!data) return null;

  const handleBackgroundClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const formatCurrency = (value: number) => {
    return value.toLocaleString("ko-kr");
  };

  return (
    <div
      onClick={handleBackgroundClick}
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
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
            {data.photo ? (
              data.photo
            ) : (
              <Image src={Profile} alt="프로필" width={106} height={106} />
            )}

            <p className="text-[34px] font-[700] text-[#484848] ml-4">
              {data.name}
            </p>
          </div>
          <div className="flex items-center mr-[26px] gap-[8px]">
            <Image
              src="/assets/icons/icon_tuning.svg"
              alt="수정"
              width={24}
              height={24}
            />
            <p className="text-[24px] text-[#AFAFAF] font-[600]">수정하기</p>
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
                  생년월일
                </p>
                <p className="text-[22px] whitespace-nowrap font-[500] text-[#191A1C]">
                  {data.birth}
                </p>
              </div>

              <div className="flex gap-[16px] h-[26px]">
                <p className="w-[75px] text-[22px] whitespace-nowrap font-[500] text-[#9A9A9A]">
                  성별
                </p>
                <p className="text-[22px] whitespace-nowrap font-[500] text-[#191A1C]">
                  {data.gender}성
                </p>
              </div>
              <div className="flex gap-[16px] h-[26px]">
                <p className="w-[75px] text-[22px] whitespace-nowrap font-[500] text-[#9A9A9A]">
                  몸무게
                </p>
                <p className="text-[22px] whitespace-nowrap font-[500] text-[#191A1C]">
                  {data.weight ? `${data.weight}kg` : "모름"}
                </p>
              </div>
              <div className="flex gap-[16px] h-[26px]">
                <p className="w-[75px] text-[22px] whitespace-nowrap font-[500] text-[#9A9A9A]">
                  요양등급
                </p>
                <p className="text-[22px] whitespace-nowrap font-[500] text-[#191A1C]">
                  {data.care_grade}
                </p>
              </div>
              <div className="flex gap-[16px] h-[26px]">
                <p className="w-[75px] text-[22px] whitespace-nowrap font-[500] text-[#9A9A9A]">
                  요일
                </p>
                <p className="text-[22px] whitespace-nowrap font-[500] text-[#191A1C]">
                  {data.days.join(", ")}
                </p>
              </div>
              <div className="flex gap-[16px]">
                <p className="w-[75px] text-[22px] whitespace-nowrap font-[500] text-[#9A9A9A]">
                  시간
                </p>
                <p className="whitespace-nowrap text-[22px] text-[#191A1C] font-[500]">
                  {`${String(data.start_hour).padStart(2, "0")}:${String(
                    data.start_minute
                  ).padStart(2, "0")}
    ~ ${String(data.end_hour).padStart(2, "0")}:${String(
                    data.end_minute
                  ).padStart(2, "0")}`}
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
                {data.address}
              </p>
            </div>
            <div className="flex items-end justify-between">
              <strong className="text-[26px] font-[700] text-[#000000] leading-[31px] mt-[28px]">
                근무 조건
              </strong>
              <div
                onClick={() => setIsElderConditionModal(true)}
                className="flex items-center cursor-pointer "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="26"
                  height="27"
                  viewBox="0 0 26 27"
                  fill="none"
                >
                  <path
                    d="M13 2.9375C7.176 2.9375 2.4375 7.676 2.4375 13.5C2.4375 19.324 7.176 24.0625 13 24.0625C18.824 24.0625 23.5625 19.324 23.5625 13.5C23.5625 7.676 18.824 2.9375 13 2.9375ZM13 4.5625C17.9457 4.5625 21.9375 8.55431 21.9375 13.5C21.9375 18.4457 17.9457 22.4375 13 22.4375C8.05431 22.4375 4.0625 18.4457 4.0625 13.5C4.0625 8.55431 8.05431 4.5625 13 4.5625ZM12.1875 8.625V12.6875H8.125V14.3125H12.1875V18.375H13.8125V14.3125H17.875V12.6875H13.8125V8.625H12.1875Z"
                    fill="#2D8859"
                  />
                </svg>
                <p>등록하기</p>
              </div>
            </div>
            <div className="flex flex-col w-[313px] py-[20px] h-auto bg-[#F0F0F0] items-start justify-center pl-[22px] gap-[10px] rounded-[14px] mt-4">
              <div className="flex gap-[16px] h-[26px]">
                <p className="w-[75px] text-[22px] whitespace-nowrap font-[500] text-[#9A9A9A]">
                  날짜
                </p>
                <p className="text-[22px] whitespace-nowrap font-[500] text-[#000000]">
                  {startDay || "-"}
                </p>
              </div>
              <div className="flex gap-[16px] h-[26px]">
                <p className="w-[75px] text-[22px] whitespace-nowrap font-[500] text-[#9A9A9A]">
                  요일
                </p>
                <p className="text-[22px] whitespace-nowrap font-[500] text-[#000000]">
                  {selectedDays.join(", ")}
                </p>
              </div>
              <div className="flex gap-[16px] h-[26px]">
                <p className="w-[75px] text-[22px] whitespace-nowrap font-[500] text-[#9A9A9A]">
                  시간
                </p>
                {startHour ? (
                  <>
                    <p className="text-[22px] whitespace-nowrap font-[500] text-[#000000]">
                      {`${startHour}:${startMinute} ~ ${endHour}:${endMinute}`}
                    </p>
                  </>
                ) : (
                  <p className="text-[22px] whitespace-nowrap font-[500] text-[#000000]">
                    -
                  </p>
                )}
              </div>
              <div className="flex gap-[16px]">
                <p className="w-[75px] text-[22px] whitespace-nowrap font-[500] text-[#9A9A9A]">
                  급여
                </p>
                <div className="flex flex-col">
                  <p className="text-[22px] whitespace-nowrap font-[500] text-[#191A1C]">
                    {`시급 ${formatCurrency(salaryWeek)}원`}
                    <br />
                    {`월급 ${formatCurrency(Math.floor(salaryMonth))}원`}
                  </p>
                </div>
              </div>
            </div>
            {salaryMonth == 0 ? (
              <p className="text-[22px] text-[#2D8859] font-[600]">
                * 먼저 근무 조건을 등록해주세요.
              </p>
            ) : (
              <></>
            )}
          </div>
        </div>
        <strong className="text-[26px] font-[700] text-[#000000] leading-[31px] mt-[36px]">
          케어 필요 항목
        </strong>
        <div className="flex flex-col w-[683px] h-auto bg-[#F0F0F0] pl-[23px] pt-[14px] gap-[10px] rounded-[14px] mt-4 pb-[26px]">
          {Object.entries(data.care_details).map(([category, details]) => (
            <div key={category}>
              <p className="text-[22px] font-[700] text-[#676767]">
                {category}
              </p>
              <div className="flex flex-wrap gap-[10px]">
                {(details as unknown as string[]).map((detail, idx) => (
                  <div
                    key={idx}
                    className="px-[10px] py-[5px] h-[34px] flex justify-center items-center bg-[#D7F3D1] rounded-[8px]"
                  >
                    <p className="text-[20px] font-[500] text-[#58C185]">
                      {detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
          <p className="text-[22px] font-[700] text-[#676767]">건강상태</p>
          <div className="flex flex-wrap gap-[10px]">
            <div className="px-[4px] py-[5px] h-[34px] flex justify-center items-center rounded-[8px]">
              <p className="text-[20px] font-[500] text-[#191A1C]">
                {data.detail}
              </p>
            </div>
          </div>
        </div>
        <div className="mt-[30px] w-[683px] flex items-center justify-end mb-[32px]">
          <button
            onClick={() =>
              salaryMonth &&
              router.push(
                `/manager/main/matching?id=${data.id}&gender=${data.gender}&wage=${salaryWeek}&days=${selectedDays}&start_hour=${startHour}&start_minute=${startMinute}&end_hour=${endHour}&end_minute=${endMinute}`
              )
            }
            className={`w-[248px] h-[58px] ${
              salaryMonth != 0 ? "bg-[#D7F3D1]" : "bg-[#D9D9D9]"
            } rounded-[14px] text-[30px] text-[#666666] font-[600]`}
          >
            매칭하기
          </button>
        </div>
      </div>
      {isElderConditionModal && (
        <ElderConditionModal
          setIsElderConditionModal={setIsElderConditionModal}
          selectedDays={selectedDays}
          setSelectedDays={setSelectedDays}
          startHour={startHour}
          setStartHour={setStartHour}
          startMinute={startMinute}
          setStartMinute={setStartMinute}
          endHour={endHour}
          setEndHour={setEndHour}
          endMinute={endMinute}
          setEndMinute={setEndMinute}
          salaryWeek={salaryWeek}
          setSalaryWeek={setSalaryWeek}
          salaryMonth={salaryMonth}
          setSalaryMonth={setSalaryMonth}
          startDay={startDay}
          setStartDay={setStartDay}
        />
      )}
    </div>
  );
}
