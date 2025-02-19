"use client";
import Image from "next/image";

interface AccountTypeProps {
  text: string;
  imageSrc: string;
  altText: string;
  isSelected?: boolean;
  onClick?: () => void;
}

export default function AccountType({
  text,
  imageSrc,
  altText,
  onClick,
  isSelected,
}: AccountTypeProps) {
  return (
    <>
      <button
        className={`tablet:w-[357.61px] tablet:h-[385.93px] flex flex-col items-center justify-center w-[175px] h-[270px] rounded-[14px] cursor-pointer transition-all
        ${isSelected ? "bg-sub text-[#2D8859]" : "bg-sub text-[#2D8859]"}`}
        onClick={onClick}
      >
        <Image
          src={imageSrc}
          alt={altText}
          className="tablet:w-[210px] tablet:h-[210px]"
        />
        <p className="tablet:text-[26px] tablet:p-[15.5px_40px] font-semibold text-[20px] text-center p-[15.5px_27px]  mt-[32px] text-[#2D8859] bg-white rounded-[10px] ">
          {text}
        </p>
      </button>
    </>
  );
}
