import Image from "next/image";
import { useState } from "react";
import GuardianProfile from "./GuardianProfile";
import GuardianTuning from "./GuardianTuning";
import AcceptModal from "./AcceptModal";
import RefusaltModal from "./RefusalModal";

interface Prop {
  selectedElder: number;
}

export default function Chat({ selectedElder }: Prop) {
  const [isAcceptModal, setIsAcceptModal] = useState<boolean>(false);
  const [isRefusalModal, setIsRefusalModal] = useState<boolean>(false);
  const [isProfileModal, setIsProfileModal] = useState<boolean>(false);
  const [isTuningModal, setIsTuningModal] = useState<boolean>(false);
  const data = {
    name: "김요양",
    gender: "여",
    schedules: ["월", "화", "수", "목", "금"],
    time: "09:00 ~ 12:00",
    location: "종로구 낙원동",
    tuning: {
      filters: ["3등급", "이동보조", "일상보조"],
      schedules: ["월", "수", "금"],
      time: "12:00 ~ 18:00",
      location: "서울특별시 종로구",
      salary: "시급 16,000원",
    },
  };

  return (
    <div className="w-full h-full">
      {selectedElder == 0 ? (
        <div className="flex flex-col w-full h-full items-center justify-center">
          <p className="text-[24px] font-[600] text-[#000000] text-center">
            요청 보낸 어르신 목록에서
            <br />
            어르신을 선택해주세요.
          </p>
          <div className="w-[330px] h-[126px] mt-[23px] flex gap-[17px] relative items-center justify-center bg-[#EFEFEF] rounded-[14px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="78"
              height="78"
              viewBox="0 0 78 78"
              fill="none"
            >
              <circle cx="39" cy="39" r="39" fill="#D9D9D9" />
            </svg>
            <div>
              <div className="flex gap-[9px] items-center">
                <p className="text-[26px] text-[#484848] font-[600]">어르신</p>
                <p className="text-[22px] text-[#858585] font-[600]">여성</p>
              </div>
              <p className="text-[22px] text-[#C0C0C0] fon-[500]">0시간 전</p>
            </div>
            <div>
              <div className="w-[44px] h-[44px] relative flex justify-center items-center bg-[#CDCDCD] rounded-[10px] ml-[13px]">
                <p className="text-[22px] font-[700] text-[#FFFFFF]">0</p>
              </div>
            </div>
            {/* 말풍선 본체 */}
            <div className="bg-[#BCBCBC] text-white text-[22px] whitespace-nowrap font-bold text-center py-4 px-6 rounded-lg absolute top-[100px] left-[190px]">
              요청 보낸
              <br />
              요양보호사 명수
              {/* 말풍선 삼각형 */}
              <div
                className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-full 
                    w-0 h-0 border-l-8 border-r-8 border-b-8 border-transparent 
                    border-b-[#BCBCBC]"
              />
            </div>
          </div>
        </div>
      ) : (
        <div className="w-full h-full">
          <div className="flex w-full items-center justify-center gap-[80px] h-[151px] border-b-[1px] border-[#909090]">
            <div className="flex ml-[29px] gap-[17px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="78"
                height="78"
                viewBox="0 0 78 78"
                fill="none"
              >
                <circle cx="39" cy="39" r="39" fill="#D9D9D9" />
              </svg>
              <div>
                <p className="text-[22px] text-[#A0A0A0] font-[500]">
                  요양보호사
                </p>
                <p className="text-[26px] text-[#484848] font-[600]">
                  김요양{" "}
                  <span className="text-[22px] text-[#858585] font-[600]">
                    여성
                  </span>
                </p>
              </div>
            </div>
            <div className="">
              <div className="flex items-center gap-[4px] mt-[6px]">
                <Image
                  src="/assets/icons/icon_calendar.svg"
                  alt="달력"
                  width={24}
                  height={24}
                />
                <div className="flex">
                  {data.schedules.map((schedule, idx) => (
                    <p
                      className="text-[22px] text-[#858585] font-[500]"
                      key={idx}
                    >
                      {schedule}
                      {idx < data.schedules.length - 1 && ","}
                    </p>
                  ))}
                </div>
              </div>
              <div className="flex items-center gap-[4px]">
                <Image
                  src="/assets/icons/icon_alarm.svg"
                  alt="시계"
                  width={24}
                  height={24}
                />
                <p className="whitespace-nowrap text-[22px] text-[#858585] font-[500]">
                  {data.time}
                </p>
              </div>
              <div className="flex items-center gap-[4px]">
                <Image
                  src="/assets/icons/location.svg"
                  alt="위치"
                  width={24}
                  height={24}
                />
                <p className="text-[22px] text-[#858585] font-[500]">
                  {data.location}
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-[6px]">
              <button
                onClick={() => setIsProfileModal(true)}
                className="w-[141px] h-[48px] bg-[#FFFFFF] border border-[1px] rounded-[10px] text-[22px] text-[#58C185] font-[500]"
              >
                프로필 보기
              </button>
              <button
                onClick={() => alert("이 기능은 모바일에서만 가능합니다.")}
                className="w-[141px] h-[48px] bg-[#FFFFFF] border border-[1px] rounded-[10px] text-[22px] text-[#58C185] font-[500]"
              >
                전화 걸기
              </button>
            </div>
          </div>
          <div>
            <div className="flex items-center justify-center gap-[73px] mt-[21px]">
              <div className="w-[178px] h-[2px] bg-[#CFCFCF]"></div>
              <p className="text-[18px] text-[#8E8E8E] font-[600]">
                2025년 2월 12일
              </p>
              <div className="w-[178px] h-[2px] bg-[#CFCFCF]"></div>
            </div>
          </div>
          <div className="mt-[33px] ml-[30px]">
            <div className="w-[541px] bg-[#F0F0F0] rounded-[14px] pl-[23px] pt-[19px] pb-[24px]">
              <strong className="text-[30px] text-[#000000] font-[600]">
                조율을 요청했어요.
              </strong>
              <div className="flex gap-[6px] mt-[13px]">
                {data.tuning.filters.map((filter, idx) => (
                  <div
                    className="px-[10px] py-[5px] bg-[#D7F3D1] rounded-[8px] text-[22px] text-[#58C185] font-[500]"
                    key={idx}
                  >
                    {filter}
                  </div>
                ))}
              </div>
              <div className="flex items-center mt-[29px]">
                <div className="w-[270px] flex">
                  <p className="text-[22px] text-[#9A9A9A] font-[500] mr-[6px]">
                    요일
                  </p>
                  {data.tuning.schedules.map((schdule, idx) => (
                    <p className="text-[22px] font-[500] mr-[2px]" key={idx}>
                      {schdule}
                      {idx < data.tuning.schedules.length - 1 && ", "}
                    </p>
                  ))}
                </div>
                <div className="flex items-center">
                  <p className="text-[22px] text-[#9A9A9A] font-[500] mr-[6px]">
                    장소
                  </p>
                  <p className="text-[22px] text-[#000000] font-[500]">
                    {data.tuning.location}
                  </p>
                </div>
              </div>
              <div className="flex items-center mt-[12px]">
                <div className="w-[270px] flex">
                  <p className="text-[22px] text-[#9A9A9A] font-[500] mr-[6px]">
                    시간
                  </p>
                  <p className="text-[22px] text-[#000000] font-[500]">
                    {data.tuning.time}
                  </p>
                </div>
                <div className="flex items-center">
                  <p className="text-[22px] text-[#9A9A9A] font-[500] mr-[6px]">
                    급여
                  </p>
                  <p className="text-[22px] text-[#000000] font-[500]">
                    {data.tuning.salary}
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsTuningModal(true)}
                className="mt-[20px] text-[22px] font-[600] text-[#000000] w-[153px] h-[52px] flex items-center justify-center bg-[#FFFFFF] rounded-[10px]"
              >
                자세히 보기
              </button>
            </div>

            <p className="text-[18px] font-[500] text-[#9A9A9A] mt-[13px]">
              오전 10:34
            </p>
          </div>
          <div className="flex justify-end pr-[36px]">
            <div className="flex flex-col gap-[6px]">
              <button
                onClick={() => setIsAcceptModal(true)}
                className="text-[22px] text-[#828282] font-[600] hover:bg-[#58C185] hover:text-[#FFFFFF] w-[353px] h-[50px] border border-[#D1D1D1] rounded-[10px] flex items-center justify-center"
              >
                수락하기
              </button>
              <button className="text-[22px] text-[#828282] font-[600] hover:bg-[#58C185] hover:text-[#FFFFFF] w-[353px] h-[50px] border border-[#D1D1D1] rounded-[10px] flex items-center justify-center">
                조율 요청하기
              </button>
              <button
                onClick={() => setIsRefusalModal(true)}
                className="text-[22px] text-[#828282] font-[600] hover:bg-[#58C185] hover:text-[#FFFFFF] w-[353px] h-[50px] border border-[#D1D1D1] rounded-[10px] flex items-center justify-center"
              >
                거절하기
              </button>
            </div>
          </div>
        </div>
      )}
      {isProfileModal && (
        <GuardianProfile setIsProfileModal={setIsProfileModal} />
      )}
      {isTuningModal && <GuardianTuning setIsTuningModal={setIsTuningModal} />}
      {isAcceptModal && <AcceptModal setIsAcceptModal={setIsAcceptModal} />}
      {isRefusalModal && (
        <RefusaltModal setIsRefusalModal={setIsRefusalModal} />
      )}
    </div>
  );
}
