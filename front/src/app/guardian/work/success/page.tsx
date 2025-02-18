"use client";
import CheckIcon from "@/../public/assets/images/complete.png";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Header from "@/components/common/TitleHeader";

export default function GuardianWork() {
  const router = useRouter();

  const handleBack = () => {
    router.push("/guardian/work");
  };

  const handleNext = () => {
    router.push("/guardian/matching");
  };

  return (
    <div className="w-screen h-screen max-tablet:flex max-tablet:flex-col max-tablet:items-center">
      <Header name="근무 조건 등록" />
      <div className="w-[354px] bg-gray-200 h-1">
        <div
          className="h-full bg-key transition-all duration-300 ease-in-out"
          style={{ width: `100%` }}
        />
      </div>
      <div className="h-[78px]" />
      <div className="flex flex-row w-[354px] tablet:hidden">
        <div className="text-[26px] font-bold leading-[40px] flex items-center">
          근무 조건 등록이
          <br /> 완료 되었습니다.
        </div>
      </div>
      <div className="h-[11px]" />

      <Image src={CheckIcon} alt="성공" />
      <div className="h-[2.44px]" />

      <div className="border-t border-b  leading-[40px]  w-full">
        <p className="text-center text-black font-bold text-[20px]">
          지금 바로 부탁케어{" "}
          <span className="text-[#2D8859] font-bold">로그인</span>하고,
        </p>
        <p className="text-center text-black font-bold text-[20px]">
          나에게 딱 맞는 일자리 매칭을 만나보세요!
        </p>
      </div>
      <div className="h-[93px]" />

      <div className="flex flex-row gap-[4px]">
        <button
          className="w-[175px] h-[52px] rounded-[10px] font-semibold text-[18px] transition-all
        border border-key text-black"
          onClick={handleBack}
        >
          근무 조건 수정
        </button>
        <button
          className="w-[175px] h-[52px] rounded-[10px] font-semibold text-[18px] transition-all
            bg-key text-white"
          onClick={handleNext}
        >
          매칭 관리
        </button>
      </div>
    </div>
  );
}
