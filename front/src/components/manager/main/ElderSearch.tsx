"use client";

import Image from "next/image";
import { useState } from "react";
import Profile from "@/../public/assets/images/profile.png";

interface Props {
  size: number;
  setSearchText: React.Dispatch<React.SetStateAction<string>>;
  centerData: CareCenter;
}

interface CareCenter {
  id: number;
  name: string;
  photo: string | null;
  phone: string;
  has_bathing_vehicle: boolean;
  address: string;
  address_detail: string;
  description: string;
  center_site: string;
  business_registration_number: string;
  center_rank: string;
  center_period_year: number;
  center_period_month: number;
}

export default function ElderSearch({
  size,
  setSearchText,
  centerData,
}: Props) {
  const [text, setText] = useState<string>("");

  const handleInput = () => {
    setSearchText(text);
    setText("");
  };

  return (
    <div className="w-[1033px] h-[106px] flex justify-start mt-[43px] items-center">
      <div className="flex gap-[15px] items-center">
        {centerData.photo ? (
          centerData.photo
        ) : (
          <Image src={Profile} alt="프로필" width={106} height={106} />
        )}
        <div className="flex flex-col gap-[12px]">
          <strong className="text-[30px] font-[700] text-[#2E2E2E] leading-[36px]">
            {centerData.name}
          </strong>
          <p className="text-[22px] font-[600] text-[#9A9A9A]">
            <span className="text-[#C6C6C6]">어르신 수 </span>
            {`총 ${size}명`}
          </p>
        </div>
      </div>
      <div className="flex w-[305px] pl-[15px] ml-[316px] rounded-[10px] h-[44px] flex items-center border-[1px] border-[#CCCCCC]">
        <input
          placeholder="검색하기"
          type="text"
          className="w-[251px] h-[24px]"
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
    </div>
  );
}
