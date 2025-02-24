"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import { ElderData } from "@/types/ElderData";
import { Person } from "@/types/Person";
import Profile from "@/../public/assets/images/profile.png";

interface Props {
  selectedId: string[];
  elderData: ElderData;
  caregiver: Person[];
  request: Requests;
}

interface Requests {
  days: string;
  end_hour: string;
  end_minute: string;
  start_hour: string;
  start_minute: string;
  wage: string;
}

export default function Matching({
  selectedId,
  elderData,
  caregiver,
}: // request,
Props) {
  const router = useRouter();

  const filteredGuardians = caregiver.filter((ca) =>
    selectedId.includes(ca.id)
  );

  return (
    <>
      <div className="flex flex-col">
        <div className="flex flex-col w-full h-[220px] bg-[#F7F8FA] pl-[31px] pt-[24px]">
          <div className="flex items-start ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              onClick={() => router.push("/manager/main")}
            >
              <mask
                id="mask0_611_2984"
                maskUnits="userSpaceOnUse"
                x="0"
                y="0"
                width="24"
                height="24"
              >
                <rect width="24" height="24" fill="#D9D9D9" />
              </mask>
              <g mask="url(#mask0_611_2984)">
                <path
                  d="M9 18L3 12L9 6L10.4 7.4L6.8 11H21V13H6.8L10.4 16.6L9 18Z"
                  fill="#191A1C"
                />
              </g>
            </svg>
            <div className="ml-[11px]">
              <p className="text-[26px] font-[600] text-[#191A1C]">매칭완료</p>
              <p className="text-[30px] font-[600] text-[#191A1C] mt-[20px]">
                {`매칭 요청을 성공적으로 보냈습니다 :)`}
              </p>
              <p className="text-[22px] font-[600] text-[#666666] mt-[20px]">
                요청 목록에서 요양보호사들과의
                <br />
                매칭 진행과정을 확인할 수 있습니다.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col mt-[38px] ml-[30px]">
        <p className="text-[32px] font-[600] text-[#191A1C]">요청 내역</p>
        <div className="flex items-center">
          {elderData.photo ? (
            elderData.photo
          ) : (
            <Image src={Profile} alt="프로필" width={106} height={106} />
          )}
          <div className="flex">
            <div className="ml-[25px] ">
              <p className="text-[34px] font-[700] text-[#191A1C]">
                {elderData.name} 어르신
              </p>
              <div className="text-[22px] text-[#666666] font-[600] gap-[18px] flex">
                <p>{elderData.birth}</p>
                <p>{elderData.gender}성</p>
                <p>{elderData.care_grade}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <p className="text-[26px] font-[600] text-[#191A1C] mt-[47px]">
            요청 보낸 요양보호사 목록
          </p>
          <div className="h-[300px] overflow-y-auto ">
            {filteredGuardians.map((guardian, idx) => (
              <div key={idx} className="flex mt-[50px] items-center pl-[17px]">
                <div className="ml-[46px]">
                  {guardian.photo ? (
                    guardian.photo
                  ) : (
                    <Image
                      src={Profile}
                      alt="프로필"
                      width={106}
                      height={106}
                    />
                  )}
                  <div className="flex items-center mt-[22px]">
                    <p className="text-[26px] text-[#191A1C] font-[600]">
                      {guardian.name}
                    </p>
                    <p className="text-[26px] text-[#666666] font-[600] ml-[9px]">
                      {guardian.gender}성
                    </p>
                  </div>
                </div>
                <div className="w-[507px] ml-[24px] h-[173px] bg-[#F7F8FA] rounded-[14px] flex flex-col gap-[22px] items-start justify-center  pl-[24px]">
                  <div className="flex gap-[46px]">
                    <div className="flex items-center">
                      <Image
                        src="/assets/icons/icon_calendar.svg"
                        alt="달력"
                        width={24}
                        height={24}
                      />
                      <p className="text-[22px] w-[192px] font-[500] text-[#666666] line-clamp-1 ml-[10px]">
                        {guardian.days[0].split("").join(", ")}
                      </p>
                    </div>
                    <div className="flex items-center">
                      <Image
                        src="/assets/icons/location.svg"
                        alt="위치"
                        width={24}
                        height={24}
                      />
                      <p className="text-[22px] font-[500] text-[#666666] line-clamp-1">
                        {guardian.address}
                      </p>
                    </div>
                  </div>
                  <div className="flex  gap-[46px]">
                    <div className="flex items-start">
                      <Image
                        src="/assets/icons/icon_alarm.svg"
                        alt="시계"
                        width={24}
                        height={24}
                        className="mt-[5px]"
                      />
                      <div className="flex flex-col w-[192px]">
                        {guardian.times.map((time, idx) => (
                          <p
                            key={idx}
                            className="text-[22px] font-[500] text-[#666666]"
                          >
                            {time}
                          </p>
                        ))}
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Image
                        src="/assets/icons/icon_salary.svg"
                        alt="급여"
                        width={24}
                        height={24}
                        className="mt-[5px]"
                      />
                      <div className="flex items-center ml-[5px]">
                        <p className="text-[22px] font-[500] text-[#666666]">
                          {guardian.min_wage.toLocaleString()} ~{" "}
                          {guardian.max_wage.toLocaleString()}원
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <button
          onClick={() => router.push("/manager/main")}
          className={`absolute bottom-[50px] right-[200px] w-[254px] h-[58px] rounded-[10px] bg-[#58C185] flex justify-center items-center text-[#FFFFFF] mr-[20px] cursor-pointer`}
        >
          첫 페이지로 돌아가기
        </button>
      </div>
    </>
  );
}
