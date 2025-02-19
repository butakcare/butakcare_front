"use client";
import Header from "@/components/common/TitleHeader";
import guardian from "@/../public/assets/icons/guardian.svg";
import manager from "@/../public/assets/icons/manager.svg";
import AccountType from "@/components/sign_up/Account";
import { LongBtn } from "@/components/common/Button";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Sign from "@/components/sign_in/Sign";
import Navigation from "@/components/sign_in/Navigation";

export default function SignUpPage() {
  const [selectedType, setSelectedType] = useState<string>("");
  const router = useRouter();
  const [selected, setSelected] = useState<number>(2);

  const handleSelect = (type: string) => {
    setSelectedType(type);
    router.push(`/sign_up/${type}`);
  };

  const handleSignIn = () => {
    router.push(`/sign_in`);
  };
  const handleCreateCenterClick = () => {
    router.push("/sign_up/manager/center");
  };
  return (
    <>
      <div className="w-full h-full">
        <div className="tablet:hidden w-screen h-screen max-tablet:flex max-tablet:flex-col max-tablet:items-center">
          <div>
            <Header name="" />
          </div>
          <div className="h-[42px]" />
          <div className="flex flex-row w-[354px]">
            <div className="text-[26px] font-bold leading-[40px]">
              부탁케어에 <span className="text-key">회원가입</span>할
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
          <div className="text-stroke font-semibold text-[18px] text-left w-[354px] pb-[15px]">
            센터를 아직 등록하지 않았나요?{" "}
            <span
              className="underline cursor-pointer"
              onClick={() => handleCreateCenterClick()}
            >
              등록하러 가기
            </span>
          </div>
          <div className="text-stroke font-semibold text-[18px] text-left w-[354px] pb-[15px]">
            이미 부탁케어 회원이신가요?
          </div>
          <div className="flex justify-center ">
            <LongBtn
              text="로그인"
              disabled={false}
              onClick={handleSignIn}
              width={354}
            />
          </div>
        </div>

        <div className="w-full h-full flex max-tablet:hidden">
          <Navigation selected={selected} setSelected={setSelected} />

          <Sign />
        </div>
      </div>
    </>
  );
}
