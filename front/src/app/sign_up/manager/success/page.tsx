"use client";
import TitleText from "@/components/common/TitleText";
import CheckIcon from "@/../public/assets/icons/check-one.svg";
import Image from "next/image";
import { LongBtn } from "@/components/common/Button";
import { useRouter } from "next/navigation";
import Header from "@/components/common/TitleHeader";

export default function GuardianStep9() {
  const router = useRouter();

  const handleMoveToLogin = () => {
    router.push("/sign_up");
  };

  return (
    <div className="w-screen h-screen max-tablet:flex max-tablet:flex-col max-tablet:items-center">
      <Header name="센터 관리자 회원가입" />
      <div className="w-[354px] bg-gray-200 h-1">
        <div
          className="h-full bg-key transition-all duration-300 ease-in-out"
          style={{ width: `100%` }}
        />
      </div>
      <div className="h-[78px]" />

      <TitleText text1="회원가입이 완료되었습니다." text2="" on={false} />
      <div className="h-[95px]" />

      <Image src={CheckIcon} alt="성공" />
      <div className="h-[94px]" />

      <div className="border-t border-b  leading-[40px]  w-full">
        <p className="text-center text-black font-bold text-[20px]">
          지금 바로 부탁케어{" "}
          <span className="text-[#2D8859] font-bold">로그인</span>하고,
        </p>
        <p className="text-center text-black font-bold text-[20px]">
          쉽고 간편한 맞춤형 매칭을 만나보세요!
        </p>
      </div>
      <div className="h-[93px]" />

      <LongBtn
        text="로그인"
        width={354}
        disabled={false}
        onClick={handleMoveToLogin}
      />
    </div>
  );
}
