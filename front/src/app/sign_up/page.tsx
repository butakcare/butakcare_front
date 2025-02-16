"use client";
import Header from "@/components/common/TitleHeader";
import guardian from "@/../public/assets/icons/guardian.svg";
import manager from "@/../public/assets/icons/manager.svg";
import AccountType from "@/components/sign_up/Account";
import { LongBtn } from "@/components/common/Button";
import { useRouter } from "next/navigation";
import { useState } from "react";
import TitleText from "@/components/common/TitleText";

export default function SignUpPage() {
  const [selectedType, setSelectedType] = useState<string>("");
  const router = useRouter();

  const handleSelect = (type: string) => {
    setSelectedType(type);
    router.push(`/sign_up/${type}`);
  };

  const handleSignIn = () => {
    if (selectedType) {
      router.push(`/sign_in`);
    }
  };
  return (
    <>
      <div className="w-screen h-screen max-tablet:flex max-tablet:flex-col max-tablet:items-center">
        <Header name="" />
        <div className="h-[42px]" />
        <TitleText
          text1="부탁케어와 함께할"
          text2="계정 유형을 선택해주세요."
          on={false}
        />
        <div className="mt-[64px] mb-[164px] flex flex-row items-center justify-center h-[270px] gap-[4px]">
          <AccountType
            text="사회복지사"
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
        <div className="text-stroke font-semibold text-[18px] text-left w-[354px] pb-[15px]">
          이미 부탁케어 회원이신가요?
        </div>
        <div className="flex justify-center ">
          <LongBtn text="로그인" disabled={false} onClick={handleSignIn} />
        </div>
      </div>
    </>
  );
}
