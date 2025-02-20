"use client";

import guardian from "@/../public/assets/icons/guardian.svg";
import manager from "@/../public/assets/icons/manager.svg";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Navigation from "@/components/sign_in/Navigation";
import Sign from "@/components/sign_in/In";
import AccountType from "@/components/sign_up/Account";
import Header from "@/components/common/TitleHeader";
export default function Home() {
  const [selectedType, setSelectedType] = useState<string>("");
  const router = useRouter();
  const [selected, setSelected] = useState<number>(1);

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

  const handleSignIn = () => {
    router.push(`/sign_up`);
  };

  return (
    <div className="w-full h-full">
      <div className="tablet:hidden w-screen h-screen max-tablet:flex max-tablet:flex-col max-tablet:items-center">
        <div>
          <Header name="" />
        </div>
        <div className="h-[42px]" />
        <div className="flex flex-row w-[354px]">
          <div className="text-[26px] font-bold leading-[40px]">
            부탁케어에 <span className="text-key">로그인</span>할
            <br />
            계정 유형을 선택해주세요.
          </div>
        </div>
        <div className="mt-[15px] mb-[128px] flex flex-row items-center justify-center h-[270px] gap-[4px]">
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
        <div className="flex justify-center ">
          <div onClick={handleSignIn}>
            <button className="bg-white border-key border w-[354px] tablet:ml-[505px] h-[52px] rounded-[10px] font-semibold text-[18px] transition-all">
              회원가입
            </button>
          </div>
        </div>
      </div>
      <div className="w-full h-full flex max-tablet:hidden">
        <Navigation selected={selected} setSelected={setSelected} />

        <Sign />
      </div>
    </div>
  );
}
