"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import Chat from "./Chat";
import GuardianList from "./GuardianList";
import ChatAccept from "./ChatAccept";
import ChatRefusal from "./ChatRefusal";
import axios from "axios";

interface ElderData {
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
  total_matching: number;
}
interface CareDetails {
  [key: string]: string;
}

export default function RequestList() {
  const [elderData, setElderData] = useState<ElderData[]>([]);
  useEffect(() => {
    const fetchGet = async () => {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL_KEY}/api/profiles/elderly/?matching=true`
      );

      console.log(response.data);
      setElderData(response.data);
    };
    fetchGet();
  }, []);

  const [text, setText] = useState<string>("");
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [searchText, setSearchText] = useState<string>("");
  const [selectedGuardianId, setSelectedGuardianId] = useState<number>(0);
  const [guardianStatus, setGuardianStatus] = useState<string>("");
  const [elderId, setElderId] = useState<number>(0);

  const handleInput = () => {
    setSearchText(text);
    setText("");
  };
  return (
    <div className="w-full h-full flex">
      <div>
        {elderId == 0 ? (
          <div className="flex flex-col items-center w-[362px] h-[820px] border-r-[1px] border-[#909090]">
            <div className="mt-[20px] flex w-[318px] pl-[15px] rounded-[10px] h-[44px] flex items-center border-[1px] border-[#CCCCCC]">
              <input
                placeholder="검색하기"
                type="text"
                className="w-[268px] h-[24px]"
                onChange={(e) => setText(e.target.value)}
              />
              <Image
                src="/assets/icons/icon_search.svg"
                alt="검색"
                width={24}
                height={24}
                onClick={() => handleInput()}
              />
            </div>
            <div className="flex w-[330px] justify-start mt-[21px] mb-[21px]">
              <p className="text-[22px] text-[#000000] font-[600]">
                요청 보낸 어르신 목록
                <span className="text-[#CCCCCC] ml-[98px]">
                  {elderData.length}명
                </span>
              </p>
            </div>
            <div
              className="h-[800px] overflow-y-auto"
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
              {elderData.map((data, idx) => (
                <div
                  key={idx + 1}
                  onClick={() => setElderId(data.id)}
                  className={`w-[330px] h-[126px] flex gap-[17px] items-center justify-center hover:bg-[#D7F3D1] group rounded-[14px]`}
                >
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
                  <div>
                    <div className="flex gap-[9px] items-center">
                      <p className="text-[26px] text-[#484848] font-[600]">
                        {data.name}
                      </p>
                      <p className="text-[22px] text-[#858585] font-[600]">
                        {data.gender}성
                      </p>
                    </div>
                    <p className="text-[22px] text-[#C0C0C0] fon-[500] group-hover:text-[#2D8859]">
                      5분 전
                    </p>
                  </div>
                  <div>
                    <div className="w-[44px] h-[44px] relative flex justify-center items-center bg-[#F7F8FA] group-hover:bg-[#58C185] rounded-[10px] ml-[13px]">
                      <p className="text-[22px] font-[700] text-[#58C185] group-hover:text-[#FFFFFF]">
                        {data.total_matching}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center w-[362px] h-full border-r-[1px] border-[#909090]">
            <GuardianList
              elderId={elderId}
              setElderId={setElderId}
              selectedGuardianId={selectedGuardianId}
              setSelectedGuardianId={setSelectedGuardianId}
              setGuardianStatus={setGuardianStatus}
            />
          </div>
        )}
      </div>
      {elderId !== 0 ? (
        guardianStatus === "조율" ? (
          <Chat elderId={elderId} selectedGuardianId={selectedGuardianId} />
        ) : guardianStatus === "수락" ? (
          <ChatAccept
            elderName={elderData[0]?.name}
            guardianName={elderData[selectedGuardianId]?.name}
          />
        ) : (
          <ChatRefusal />
        )
      ) : (
        <Chat elderId={elderId} selectedGuardianId={selectedGuardianId} />
      )}
    </div>
  );
}
