"use client";

import TitleText from "@/components/common/TitleText";
import Image from "next/image";
import SearchIcon from "@/../public/assets/icons/icon_search.svg";
import { useState } from "react";
import { useRouter } from "next/navigation";

import CenterSearchModal from "@/components/sign_up/manager/CenterSearchModal";
interface ManagerStep1Props {
  Centername: string;
  onCenternameChange: (value: string) => void;
}

export default function ManagerStep1({
  Centername,
  onCenternameChange,
}: ManagerStep1Props) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const router = useRouter();
  const handleCreateCenterClick = () => {
    router.push("/sign_up/manager/center");
  };
  const handleCenterSelect = (centerName: string) => {
    onCenternameChange(centerName);
  };
  return (
    <div className="w-screen h-screen max-tablet:flex max-tablet:flex-col max-tablet:items-center">
      <div>
        <TitleText
          text1="근무하시는 센터 이름을"
          text2="입력해주세요."
          on={true}
        />
      </div>

      <form className="flex flex-col justify-center items-center align-center pt-[25px]">
        <div className="relative w-full">
          <div className="flex flex-col">
            <input
              type="text"
              value={Centername}
              onClick={() => setIsModalOpen(true)}
              placeholder="센터명으로 검색"
              className="w-[354px] h-[52px] p-[15px_16px] text-black rounded-[10px] border border-[#666666] focus:outline-none"
            />
          </div>

          <button
            type="button"
            onClick={() => setIsModalOpen(true)}
            className="absolute right-4 bottom-[0.4] transform -translate-y-1/2"
          >
            <Image src={SearchIcon} alt="search" width={24} height={24} />
          </button>
        </div>
        <div className="flex w-[354px] pt-[15px]">
          <div className="text-[18px] text-[#A7ABA5] font-medium">
            센터가 등록되어있지 않다면 <br />{" "}
            <span
              className="underline cursor-pointer"
              onClick={handleCreateCenterClick}
            >
              이 곳
            </span>
            을 클릭해서 센터를 생성해보세요.
          </div>
        </div>
      </form>

      <CenterSearchModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSelect={handleCenterSelect}
      />
    </div>
  );
}
