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
    setIsModalOpen(false);
  };
  return (
    <div className="w-full h-auto max-tablet:flex max-tablet:flex-col max-tablet:items-center">
      <div className="">
        <div>
          <TitleText
            text1="근무하시는 센터 이름을"
            text2="입력해주세요."
            on={true}
          />
        </div>
        <div className="hidden sm:block">
          <div className="flex flex-row">
            <div className="text-[30px] leading-[50px] font-bold flex items-center">
              근무하시는 센터 이름을 입력해주세요.
              <div className="flex items-end">
                <span className="font-semibold text-[#FF602B] text-[26px]">
                  *
                </span>
              </div>
            </div>
          </div>
        </div>
        <form className="flex flex-col justify-center align-center pt-[25px]">
          <div className="relative max-w-[516px]">
            {" "}
            <div className="flex flex-col">
              <label
                htmlFor="name"
                className="text-black font-semibold text-[24px] pb-[15px] lx:hidden"
              >
                센터 이름
              </label>
              <div className="relative">
                {" "}
                <input
                  type="text"
                  value={Centername}
                  onClick={() => setIsModalOpen(true)}
                  placeholder="센터명으로 검색"
                  readOnly
                  className="w-full tablet:text-[22px] tablet:h-[58px] font-semibold min-w-[354px] h-[52px] p-[15px_16px] pr-[50px] text-black rounded-[10px] border border-[#666666] focus:outline-none"
                />
                <button
                  type="button"
                  onClick={() => setIsModalOpen(true)}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2"
                >
                  <Image src={SearchIcon} alt="search" width={24} height={24} />
                </button>
              </div>
            </div>
          </div>
          <div className="flex pt-[15px] ">
            <div className="tablet:text-[22px] text-[18px] text-[#666666] font-semibold">
              * 센터가 등록되어있지 않다면{" "}
              <span
                className="underline cursor-pointer text-key"
                onClick={handleCreateCenterClick}
              >
                여기
              </span>
              를 클릭해서 센터를 생성해보세요.
            </div>
          </div>
        </form>

        <CenterSearchModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onSelect={handleCenterSelect}
        />
      </div>
    </div>
  );
}
