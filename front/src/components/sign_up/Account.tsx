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
        className={`flex flex-col items-center justify-center w-[175px] h-[270px] rounded-[14px] cursor-pointer transition-all
        ${isSelected ? "bg-key text-white" : "bg-sub text-black"}`}
        onClick={onClick}
      >
        <p className="font-semibold text-[20px] text-center">
          {text}
          <br /> 가입
        </p>
        <Image
          className="pt-[22px]"
          src={imageSrc}
          alt={altText}
          width={80}
          height={80}
        />
      </button>
    </>
  );
}
