import { useRouter } from "next/navigation";
import React, { useState } from "react";
import AccountType from "../sign_up/Account";
import guardian from "@/../public/assets/icons/guardian.svg";

import manager from "@/../public/assets/icons/manager.svg";
export default function Sign() {
  const [selectedType, setSelectedType] = useState<string>("");
  const router = useRouter();

  const handleSelect = (type: string) => {
    setSelectedType(type);
    router.push(`/sign_up/${type}`);
  };
  const handleCreateCenterClick = () => {
    router.push("/sign_up/manager/center");
  };
  return (
    <div className="w-full h-full pl-[30px] pt-[31px]">
      <strong className="text-[30px] font-[700] text-[#2E2E2E]">
        부탁케어 회원가입
      </strong>
      <div className="w-[726px] bg-gray-200 h-[6px] m-[20px_0px]">
        <div
          className="h-full bg-key transition-all duration-300 ease-in-out"
          style={{ width: `${10}%` }}
        />
      </div>
      <div className="flex flex-row">
        <div className="text-[26px] font-bold leading-[40px]">
          부탁케어와 함께할 계정 유형을 선택해주세요.
        </div>
      </div>
      <div className="mt-[15px] mb-[128px] flex flex-row items-start h-[270px] gap-[10px]">
        <AccountType
          text="센터 관리자"
          imageSrc={manager}
          altText="manager"
          isSelected={selectedType === "manager"}
          onClick={() => handleSelect("manager")}
        />
        <AccountType
          text="요양보호사"
          imageSrc={guardian}
          altText="guardian"
          isSelected={selectedType === "guardian"}
          onClick={() => handleSelect("guardian")}
        />
      </div>
      <div className="text-stroke font-bold  text-[23.12px] text-left pb-[15px] pt-[70px] pl-[170px]">
        아직 센터를 등록하지 않으셨나요?{" "}
        <span
          className="underline cursor-pointer"
          onClick={() => handleCreateCenterClick()}
        >
          등록하러 가기
        </span>
      </div>
    </div>
  );
}
