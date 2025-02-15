"use client";

import Image from "next/image";
import { useState } from "react";

interface Props {
  size: number;
  setSearchText: React.Dispatch<React.SetStateAction<string>>;
}

export default function ElderSearch({ size, setSearchText }: Props) {
  const [text, setText] = useState<string>("");

  const handleInput = () => {
    setSearchText(text);
    setText("");
  };
  return (
    <div className="w-[1033px] h-[73px] flex justify-start mt-[43px]">
      <div className="flex gap-[15px]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="73"
          height="73"
          viewBox="0 0 73 73"
          fill="none"
        >
          <circle cx="36.5" cy="36.5" r="36.5" fill="#D9D9D9" />
        </svg>
        <div className="flex flex-col gap-[12px]">
          <strong className="text-[30px] font-[700] text-[#2E2E2E] leading-[36px]">
            종로노인복지회관
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
