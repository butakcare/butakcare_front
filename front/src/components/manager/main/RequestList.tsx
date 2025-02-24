"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import Chat from "./Chat";
import GuardianList from "./GuardianList";
import ChatAccept from "./ChatAccept";
import ChatRefusal from "./ChatRefusal";
import axios from "axios";
import { ElderData } from "@/types/ElderData";
import Profile from "@/../public/assets/images/profile.png";

export default function RequestList() {
  const [elderData, setElderData] = useState<ElderData[]>([]);
  useEffect(() => {
    const fetchGet = async () => {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL_KEY}/api/profiles/elderly/?matching=true`
      );
      setElderData(response.data);
    };
    fetchGet();
  }, []);

  const [text, setText] = useState<string>("");
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [searchText, setSearchText] = useState<string>("");
  const [selectedGuardianId, setSelectedGuardianId] = useState<number>(0);
  const [guardianName, setGuardianName] = useState<string>("");
  const [guardianStatus, setGuardianStatus] = useState<string>("");
  const [elderId, setElderId] = useState<number>(0);

  const handleInput = () => {
    setSearchText(text);
    setText("");
  };
  return (
    <div className="w-full h-auto flex">
      <div>
        {elderId == 0 ? (
          <div className="flex flex-col items-center w-[362px] h-auto border-r-[1px] border-[#909090]">
            <div className="mt-[20px] w-[318px] pl-[15px] rounded-[10px] h-[44px] flex items-center border-[1px] border-[#CCCCCC]">
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
                  {data.photo ? (
                    data.photo
                  ) : (
                    <Image
                      src={Profile}
                      alt="프로필"
                      width={106}
                      height={106}
                    />
                  )}
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
                        {data.total_matching + 1}
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
              setGuardianName={setGuardianName}
              selectedGuardianId={selectedGuardianId}
              setSelectedGuardianId={setSelectedGuardianId}
              setGuardianStatus={setGuardianStatus}
            />
          </div>
        )}
      </div>
      {elderId !== 0 ? (
        guardianStatus === "조율" ? (
          <Chat
            elderId={elderId}
            selectedGuardianId={selectedGuardianId}
            setGuardianStatus={setGuardianStatus}
          />
        ) : guardianStatus === "수락" ? (
          <ChatAccept
            elderName={elderData[0]?.name}
            guardianName={guardianName}
          />
        ) : (
          <ChatRefusal />
        )
      ) : (
        <Chat
          elderId={elderId}
          selectedGuardianId={selectedGuardianId}
          setGuardianStatus={setGuardianStatus}
        />
      )}
    </div>
  );
}
