"use client";

import Image from "next/image";
import { useState } from "react";
import Chat from "./Chat";
import GuardianList from "./GuardianList";

export default function RequestList() {
  const datas = [
    {
      id: 1,
      profile: "",
      name: "김복순",
      grade: 2,
      gender: "여",
      schedules: ["화", "수", "목", "금"],
      time: "09:00 ~ 12:00",
      location: "종로구 낙원동",
      matching: "매칭 완료",
      requests: 3,
      new: true,
    },
    {
      id: 2,
      profile: "",
      name: "김복순",
      grade: 3,
      gender: "여",
      schedules: ["월", "화", "수", "목", "금"],
      time: "09:00 ~ 12:00",
      location: "종로구 낙원동",
      matching: "매칭 완료",
      requests: 1,
      new: true,
    },
    {
      id: 3,
      profile: "",
      name: "김복순",
      grade: 3,
      gender: "여",
      schedules: ["월", "화", "목", "금"],
      time: "18:00 ~ 21:00",
      location: "종로구 낙원동",
      matching: "조율 중",
      requests: 2,
      new: false,
    },
    {
      id: 4,
      profile: "",
      name: "김복순",
      grade: 1,
      gender: "여",
      schedules: ["월"],
      time: "09:00 ~ 12:00",
      location: "종로구 낙원동",
      matching: "매칭 완료",
      requests: 4,
      new: false,
    },
    {
      id: 5,
      profile: "",
      name: "김복순",
      grade: 3,
      gender: "남",
      schedules: ["월", "화", "수", "목", "금"],
      time: "09:00 ~ 12:00",
      location: "종로구 낙원동",
      matching: "조율 중",
      requests: 3,
      new: false,
    },
    {
      id: 6,
      profile: "",
      name: "김복순",
      grade: 3,
      gender: "남",
      schedules: ["월", "화", "수", "목", "금"],
      time: "09:00 ~ 12:00",
      location: "종로구 낙원동",
      matching: "조율 중",
      requests: 5,
      new: false,
    },
    {
      id: 7,
      profile: "",
      name: "김복순",
      grade: 3,
      gender: "여",
      schedules: ["월", "화", "수"],
      time: "12:00 ~ 18:00",
      location: "종로구 낙원동",
      matching: "매칭 전",
      requests: 1,
      new: false,
    },
    {
      id: 8,
      profile: "",
      name: "김복순",
      grade: 2,
      gender: "남",
      schedules: ["월", "화", "수", "목", "금"],
      time: "12:00 ~ 18:00",
      location: "종로구 낙원동",
      matching: "매칭 전",
      requests: 1,
      new: false,
    },
  ];
  const [text, setText] = useState<string>("");
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [searchText, setSearchText] = useState<string>("");
  const [selectedElder, setSelectedElder] = useState<number>(0);

  const handleInput = () => {
    setSearchText(text);
    setText("");
  };
  return (
    <div className="w-full h-full flex">
      <div>
        {selectedElder == 0 ? (
          <div className="flex flex-col items-center w-[362px] border-r-[1px] border-[#909090]">
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
                <span className="text-[#CCCCCC] ml-[98px]">19명</span>
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
              {datas.map((data, idx) => (
                <div
                  key={idx + 1}
                  onClick={() => setSelectedElder(idx + 1)}
                  className={`w-[330px] h-[126px] flex gap-[17px] items-center justify-center hover:bg-[#EFEFEF] rounded-[14px]`}
                >
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
                      <p className="text-[26px] text-[#484848] font-[600]">
                        {data.name}
                      </p>
                      <p className="text-[22px] text-[#858585] font-[600]">
                        {data.gender}성
                      </p>
                    </div>
                    <p className="text-[22px] text-[#C0C0C0] fon-[500]">
                      5분 전
                    </p>
                  </div>
                  <div>
                    <div className="w-[44px] h-[44px] relative flex justify-center items-center bg-[#CDCDCD] rounded-[10px] ml-[13px]">
                      <p className="text-[22px] font-[700] text-[#FFFFFF]">
                        {data.requests}
                      </p>
                      {data.new && (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          className="absolute bottom-[30px] left-[30px]"
                        >
                          <circle cx="12" cy="12" r="12" fill="#818181" />
                        </svg>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center w-[362px] h-full border-r-[1px] border-[#909090]">
            <GuardianList
              selectedElder={selectedElder}
              setSelectedElder={setSelectedElder}
            />
          </div>
        )}
      </div>
      <Chat selectedElder={selectedElder} />
    </div>
  );
}
