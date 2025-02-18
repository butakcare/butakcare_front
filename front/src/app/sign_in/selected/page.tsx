"use client";

import TitleText from "@/components/common/TitleText";
import guardian from "@/../public/assets/icons/guardian.svg";
import manager from "@/../public/assets/icons/manager.svg";
import back from "@/../public/assets/icons/back.svg";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Home() {
  const [selectedType, setSelectedType] = useState<string>("");
  const router = useRouter();

  const handleSelect = (type: string) => {
    setSelectedType(type);
    console.log(selectedType);
    router.push(`/sign_in?type=${selectedType}`);
  };

  useEffect(() => {
    if (selectedType) {
      console.log("선택한 계정 유형:", selectedType);
      router.push(`/sign_in?type=${selectedType}`); // 선택한 후에 페이지 이동
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedType]); // selectedType이 변경될 때 실행
  return (
    <div className="w-screen h-screen max-tablet:flex max-tablet:flex-col max-tablet:items-center ">
      <div className="h-[55px] w-screen p-[18px_24px] tablet:hidden">
        <Image src={back} alt="back" onClick={() => router.back()} />
      </div>
      <div className="h-[42px]" />
      <TitleText
        text1="부탁케어로 로그인할"
        text2="계정 유형을 선택해주세요."
        on={false}
      />
      <div className="mt-[64px] mb-[164px] flex flex-row items-center justify-center h-[270px] gap-[4px]">
        <button
          className={`flex flex-col items-center justify-center w-[175px] tablet:w-[357px] h-[270px] rounded-[14px] cursor-pointer transition-all
                ${
                  selectedType === "manager"
                    ? "bg-key text-white"
                    : "bg-[#f0f0f0] text-black"
                }`}
          onClick={() => handleSelect("manager")}
        >
          <p className="font-semibold text-[20px] text-center">
            센터 관리자
            <br /> 로그인
          </p>
          <Image
            className="pt-[22px]"
            src={manager}
            alt="센터관리자"
            width={80}
            height={80}
          />
        </button>

        <button
          className={`flex flex-col items-center justify-center w-[175px] tablet:w-[357px] h-[270px] rounded-[14px] cursor-pointer transition-all
                ${
                  selectedType === "guardian"
                    ? "bg-key text-white"
                    : "bg-[#f0f0f0] text-black"
                }`}
          onClick={() => handleSelect("guardian")}
        >
          <p className="font-semibold text-[20px] text-center">
            요양보호사
            <br /> 로그인
          </p>
          <Image
            className="pt-[22px]"
            src={guardian}
            alt="요양보호사"
            width={80}
            height={80}
          />
        </button>
      </div>
    </div>
  );
}
