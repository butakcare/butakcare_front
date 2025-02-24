import Image from "next/image";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import ElderConditionModal from "../../sign_up/manager/ElderConditionModal";

interface ElderModalProps {
  data: {
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
  };
  onClose: () => void;
}

interface CareDetails {
  [key: string]: string;
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
