"use client";

import React, { SetStateAction, useEffect, useState } from "react";

interface Prop {
  selectedElder: number;
  setSelectedElder: (selectedEleder: number) => void;
  setGuardianStatus: React.Dispatch<SetStateAction<string>>;
}

export default function GuardianList({
  selectedElder,
  setSelectedElder,
  setGuardianStatus,
}: Prop) {
  const datas = [
    {
      id: 1,
      name: "김복순",
      gender: "여",
      guardianList: [
        {
          profile: "",
          name: "김요양",
          status: "조율 중",
          time: "5분 전",
          new: 1,
        },
        { profile: "", name: "김요양", status: "수락", time: "5분 전", new: 0 },
      ],
    },
    {
      id: 2,
      name: "김복순",
      gender: "남",
      guardianList: [
        { profile: "", name: "김요양", status: "거절", time: "5분 전", new: 0 },
      ],
    },
    {
      id: 3,
      name: "김복순",
      gender: "여",
      guardianList: [
        { profile: "", name: "김요양", status: "수락", time: "5분 전", new: 0 },
        {
          profile: "",
          name: "김요양",
          status: "조율 중",
          time: "5분 전",
          new: 1,
        },
        { profile: "", name: "김요양", status: "거절", time: "5분 전", new: 0 },
      ],
    },
    {
      id: 4,
      name: "김복순",
      gender: "남",
      guardianList: [
        {
          profile: "",
          name: "김요양",
          status: "조율 중",
          time: "5분 전",
          new: 1,
        },
      ],
    },
    {
      id: 5,
      name: "김복순",
      gender: "여",
      guardianList: [
        { profile: "", name: "김요양", status: "수락", time: "5분 전", new: 0 },
        { profile: "", name: "김요양", status: "거절", time: "5분 전", new: 0 },
      ],
    },
    {
      id: 6,
      name: "김복순",
      gender: "여",
      guardianList: [
        { profile: "", name: "김요양", status: "거절", time: "5분 전", new: 0 },
      ],
    },
    {
      id: 7,
      name: "김복순",
      gender: "여",
      guardianList: [
        {
          profile: "",
          name: "김요양",
          status: "조율 중",
          time: "5분 전",
          new: 1,
        },
        { profile: "", name: "김요양", status: "수락", time: "5분 전", new: 0 },
      ],
    },
    {
      id: 8,
      name: "김복순",
      gender: "남",
      guardianList: [
        { profile: "", name: "김요양", status: "수락", time: "5분 전", new: 0 },
        {
          profile: "",
          name: "김요양",
          status: "조율 중",
          time: "5분 전",
          new: 1,
        },
        { profile: "", name: "김요양", status: "거절", time: "5분 전", new: 0 },
      ],
    },
  ];
  const elderData = datas.find((select) => selectedElder == select.id);
  const [selectedGuardian, setSelectedGuardian] = useState<number>(0);
  useEffect(() => {
    setGuardianStatus(
      elderData?.guardianList[selectedGuardian]?.status || "조율 중"
    );
  }, [elderData, selectedGuardian, setGuardianStatus]);
  return (
    <div className="flex flex-col items-center w-[362px] h-full">
      <div className="mt-[20px] flex w-[318px] pl-[15px] rounded-[10px] h-[44px] flex items-center">
        <svg
          onClick={() => setSelectedElder(0)}
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          className="cursor-pointer"
        >
          <g mask="url(#mask0_403_2199)">
            <path
              d="M9 18L3 12L9 6L10.4 7.4L6.8 11H21V13H6.8L10.4 16.6L9 18Z"
              fill="#1C1B1F"
            />
          </g>
        </svg>
        <div className="ml-[16px]">
          <p className="text-[26px] font-[600] text-[#484848]">
            {elderData?.name}
            <span className="text-[22px] text-[#858585] font-[600] ml-[6px]">
              {elderData?.gender}성
            </span>
          </p>
        </div>
      </div>
      <div className="flex w-[330px] justify-start mt-[21px] mb-[21px]">
        <p className="text-[22px] text-[#000000] font-[600]">
          요청 보낸 요양보호사 목록
          <span className="text-[#CCCCCC] ml-[70px]">
            {elderData?.guardianList.length}명
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
        {elderData?.guardianList.map((guardian, idx) => (
          <div
            key={idx}
            onClick={() => setSelectedGuardian(idx)}
            className={`w-[330px] h-[126px] flex gap-[17px] items-center justify-center group ${
              selectedGuardian == idx ? "bg-[#D7F3D1]" : "bg-[#FFFFFF]"
            } rounded-[14px] cursor-pointer`}
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
                  {guardian.name}
                </p>
              </div>
              <div className="flex items-center  gap-[6px]">
                <div className="flex items-center justify-center w-[70px] h-[32px] bg-[#A4A4A4] rounded-[6px]">
                  <p className="text-[20px] text-[#FFFFFF] font-[600]">
                    {guardian.status}
                  </p>
                </div>
                <p
                  className={`text-[22px] fon-[500] ${
                    selectedGuardian == idx
                      ? "text-[#2D8859]"
                      : " text-[#CDCDCD]"
                  }`}
                >
                  5분 전
                </p>
              </div>
            </div>
            <div>
              <div
                className={`w-[44px] h-[44px] relative flex justify-center items-center rounded-[60px] ml-[13px] ${
                  selectedGuardian == idx ? "bg-[#58C185]" : " bg-[#CDCDCD]"
                }`}
              >
                <p className="text-[22px] font-[700] text-[#FFFFFF]">
                  {guardian.new}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
