import React, { SetStateAction, useEffect, useState } from "react";
import GuardianProfile from "./GuardianProfile";
import GuardianTuning from "./GuardianTuning";
import AcceptModal from "./AcceptModal";
import RefusaltModal from "./RefusalModal";
import CoordinationRequestModal from "./CoordinationRequestModal";
import axios from "axios";
import ReqModal from "./ReqModal";
import Image from "next/image";
import Profile from "@/../public/assets/images/profile.png";
import { Person } from "@/types/Person";

interface Prop {
  elderId: number;
  selectedGuardianId: number;
  setGuardianStatus: React.Dispatch<SetStateAction<string>>;
}

interface Area {
  id: number;
  name: string;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
interface Caregiver {
  id: string;
  name: string;
  photo: string | null;
  phone: string;
  has_car: boolean;
  has_dementia_training: boolean;
  address: string;
  address_detail: string;
  available_area: Area[];
  times: string[];
  days: string[];
  min_wage: number;
  max_wage: number;
  caregiver_qualification: string;
  social_worker_qualification: string;
  nursing_assistant_qualification: string;
  career_year: number;
  career_month: number | null;
  career_content: string;
  description: string;
}

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

export default function Chat({
  elderId,
  selectedGuardianId,
  setGuardianStatus,
}: Prop) {
  // const [guardianData, setGuardianData] = useState<Caregiver>();
  const [guardian, setGuardian] = useState<Person>();
  const [message, setMessage] = useState<CareRequest[]>([]);
  const [isAcceptModal, setIsAcceptModal] = useState<boolean>(false);
  const [isRefusalModal, setIsRefusalModal] = useState<boolean>(false);
  const [isProfileModal, setIsProfileModal] = useState<boolean>(false);
  const [isTuningModal, setIsTuningModal] = useState<boolean>(false);
  const [isCoordination, setIsCoordination] = useState<boolean>(false);
  const [reqModal, setReqModal] = useState<boolean>(false);

  useEffect(() => {
    const fetchGet = async () => {
      if (selectedGuardianId != 0) {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL_KEY}/api/matching/8/`
        );

        console.log(response.data);
        setMessage(response.data);
        // setGuardianData(response.data);
      }
    };
    fetchGet();
  }, [selectedGuardianId]);

  useEffect(() => {
    const fetchGet = async () => {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL_KEY}/api/profiles/caregivers/sjh121476/?full=true`
      );
      console.log(response.data);
      setGuardian(response.data);
    };
    fetchGet();
  }, [selectedGuardianId]);

  const calculateMonthlySalary = (wage: number) => {
    const start = message[5].start_hour + message[5].start_minute / 60;
    const end = message[5].end_hour + message[5].end_minute / 60;
    const workHours = end - start;
    const weeklySalary = wage * workHours * message[5].days.length;
    const monthlySalary = weeklySalary * 4; // 4주 기준

    return monthlySalary;
  };

  const formatCurrency = (value: number) => {
    return value.toLocaleString("ko-KR");
  };

  function formatDateToKorean(dateString: string): string {
    const date = new Date(dateString);
    return date
      .toLocaleDateString("ko-KR", {
        year: "numeric",
        month: "long", // 'long'을 사용하면 월 이름이 제대로 나오게 됩니다.
        day: "numeric",
      })
      .replace(/ /g, " "); // 필요시 공백 제거
  }

  return (
    <div className="w-full h-full">
      {elderId == 0 ? (
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
          <div className="flex w-full items-center justify-between px-[30px] gap-[80px] h-[151px] border-b-[1px] bg-[#F7F8FA] border-[#909090]">
            <div className="flex ml-[29px] gap-[17px]">
              {guardian?.photo ? (
                guardian.photo
              ) : (
                <Image src={Profile} alt="프로필" width={106} height={106} />
              )}
              <div>
                <p className="text-[22px] text-[#A0A0A0] font-[500]">
                  요양보호사
                </p>
                <p className="text-[26px] text-[#484848] font-[600]">
                  {guardian?.name}{" "}
                  <span className="text-[22px] text-[#858585] font-[600]">
                    {guardian?.gender}성
                  </span>
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
          <div className="ml-[35px] h-[650px] overflow-y-auto">
            <div className="h-[50px]">
              <div className="flex items-center justify-center gap-[73px] mt-[21px]">
                <div className="w-[178px] h-[2px] bg-[#CFCFCF]"></div>
                <p className="text-[18px] text-[#8E8E8E] font-[600]">
                  {formatDateToKorean(message[0]?.created_at)}
                </p>
                <div className="w-[178px] h-[2px] bg-[#CFCFCF]"></div>
              </div>
            </div>
            <div className="mt-[33px] ml-[px]">
              <div className="w-[541px] bg-[#F7F8FA] rounded-[14px] pl-[23px] pt-[19px] pb-[24px] ">
                <strong className="text-[30px] text-[#000000] font-[600]">
                  조율을 요청했어요.
                </strong>
                <div className="flex gap-[6px] mt-[13px]">
                  {["3등급", "이동보조", "생활보조"].map((t, idx) => (
                    <div
                      key={idx}
                      className="px-[10px] py-[5px] bg-[#D7F3D1] rounded-[8px] text-[22px] text-[#58C185] font-[500]"
                    >
                      {t}
                    </div>
                  ))}
                </div>
                <div className="flex items-center mt-[29px]">
                  <div className="w-[270px] flex">
                    <p className="text-[22px] text-[#9A9A9A] font-[500] mr-[6px]">
                      요일
                    </p>
                    <p className="text-[22px] font-[500] mr-[2px]">
                      {message[4]?.days?.join(", ")}
                    </p>
                  </div>
                  <div className="flex items-center">
                    <p className="text-[22px] text-[#9A9A9A] font-[500] mr-[6px]">
                      장소
                    </p>
                    <p className="text-[22px] text-[#000000] font-[500]">
                      서울특별시 동작구
                    </p>
                  </div>
                </div>
                <div className="flex items-center mt-[12px]">
                  <div className="w-[270px] flex">
                    <p className="text-[22px] text-[#9A9A9A] font-[500] mr-[6px]">
                      시간
                    </p>
                    <p className="text-[22px] text-[#000000] font-[500]">
                      09:00 ~ 12:00
                    </p>
                  </div>
                  <div className="flex">
                    <p className="text-[22px] text-[#9A9A9A] font-[500] mr-[6px]">
                      급여
                    </p>
                    <p className="text-[22px] text-[#000000] font-[500]">
                      {message[4]?.wage ? message[4].wage : "시급 15,000원"}
                      <br />
                      월급 540,000원
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setIsTuningModal(true)}
                  className="mt-[20px] text-[22px] font-[600] text-[#000000] w-[153px] h-[52px] flex items-center justify-center bg-[#DFE3E2] rounded-[10px]"
                >
                  자세히 보기
                </button>
              </div>

              <p className="text-[18px] font-[500] text-[#9A9A9A] mt-[13px]">
                오전 10:34
              </p>
            </div>
            {message.length > 5 ? (
              <div className="mt-[33px] ml-[300px]">
                <div className="w-[541px] bg-[#F7F8FA] rounded-[14px] pl-[23px] pt-[19px] pb-[24px]">
                  <strong className="text-[30px] text-[#000000] font-[600]">
                    조율 요청을 보냈어요.
                  </strong>
                  <div className="flex gap-[6px] mt-[13px]">
                    {["3등급", "이동보조", "생활보조"].map((t, idx) => (
                      <div
                        key={idx}
                        className="px-[10px] py-[5px] bg-[#D7F3D1] rounded-[8px] text-[22px] text-[#58C185] font-[500]"
                      >
                        {t}
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center mt-[29px]">
                    <div className="w-[270px] flex">
                      <p className="text-[22px] text-[#9A9A9A] font-[500] mr-[6px]">
                        요일
                      </p>
                      <p className="text-[22px] font-[500] mr-[2px]">
                        {message[5]?.days?.join(", ")}
                      </p>
                    </div>
                    <div className="flex items-center">
                      <p className="text-[22px] text-[#9A9A9A] font-[500] mr-[6px]">
                        장소
                      </p>
                      <p className="text-[22px] text-[#000000] font-[500]">
                        서울특별시 동작구
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center mt-[12px]">
                    <div className="w-[270px] flex">
                      <p className="text-[22px] text-[#9A9A9A] font-[500] mr-[6px]">
                        시간
                      </p>
                      <p className="text-[22px] text-[#000000] font-[500]">
                        {`${String(message[5].start_hour).padStart(
                          2,
                          "0"
                        )}:${String(message[5].start_minute).padStart(2, "0")}
    ~ ${String(message[5].end_hour).padStart(2, "0")}:${String(
                          message[5].end_minute
                        ).padStart(2, "0")}`}
                      </p>
                    </div>
                    <div className="flex">
                      <p className="text-[22px] text-[#9A9A9A] font-[500] mr-[6px]">
                        급여
                      </p>
                      <p className="text-[22px] text-[#000000] font-[500]">
                        {message[5]?.wage
                          ? `시급 ${formatCurrency(message[5].wage)}원`
                          : "시급 15,000원"}
                        <br />
                        {message[5]?.wage
                          ? `월급 ${formatCurrency(
                              calculateMonthlySalary(message[5].wage)
                            )}원`
                          : " 월급 540,000원"}
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => setReqModal(true)}
                    className="mt-[20px] text-[22px] font-[600] text-[#000000] w-[153px] h-[52px] flex items-center justify-center bg-[#DFE3E2] rounded-[10px]"
                  >
                    자세히 보기
                  </button>
                </div>

                <p className="text-[18px] font-[500] text-[#9A9A9A] mt-[13px]">
                  오후 01:30
                </p>
              </div>
            ) : (
              <></>
            )}
            {message.length > 5 ? (
              <></>
            ) : (
              <div className="flex justify-end pr-[36px]">
                <div className="flex flex-col gap-[6px]">
                  <button
                    onClick={() => setIsAcceptModal(true)}
                    className="text-[22px] text-[#828282] font-[600] hover:bg-[#58C185] hover:text-[#FFFFFF] w-[353px] h-[50px] border border-[#D1D1D1] rounded-[10px] flex items-center justify-center"
                  >
                    수락하기
                  </button>
                  <button
                    onClick={() => setIsCoordination(true)}
                    className="text-[22px] text-[#828282] font-[600] hover:bg-[#58C185] hover:text-[#FFFFFF] w-[353px] h-[50px] border border-[#D1D1D1] rounded-[10px] flex items-center justify-center"
                  >
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
            )}
          </div>
        </div>
      )}
      {isProfileModal && guardian && (
        <GuardianProfile
          data={guardian}
          setIsProfileModal={setIsProfileModal}
        />
      )}
      {isTuningModal && <GuardianTuning setIsTuningModal={setIsTuningModal} />}
      {reqModal && <ReqModal message={message[5]} setReqModal={setReqModal} />}
      {isAcceptModal && (
        <AcceptModal
          setIsAcceptModal={setIsAcceptModal}
          setGuardianStatus={setGuardianStatus}
        />
      )}
      {isRefusalModal && (
        <RefusaltModal
          setIsRefusalModal={setIsRefusalModal}
          setGuardianStatus={setGuardianStatus}
        />
      )}
      {isCoordination && (
        <CoordinationRequestModal
          setIsCoordination={setIsCoordination}
          setMessage={setMessage}
        />
      )}
    </div>
  );
}
