"use client";
import CheckIcon from "@/../public/assets/images/complete.png";
import Complete from "@/../public/assets/images/complete.png";
import Image from "next/image";
import { LongBtn } from "@/components/common/Button";
import { useRouter } from "next/navigation";
import Header from "@/components/common/TitleHeader";
import Navi from "@/components/sign_up/manager/tablet/Navi";
import { useState } from "react";
import Link from "next/link";

export default function GuardianStep9() {
  const router = useRouter();
  const [selected, setSelected] = useState<number>(1);

  const handleMoveToLogin = () => {
    router.push("/sign_up");
  };

  return (
    <div className="w-full h-screen flex max-tablet:hidden">
      <Navi selected={selected} setSelected={setSelected} />
      <div className="m-[30px]  flex-1">
        <strong className="text-[30px] font-[700] text-[#2E2E2E]">
          센터 관리자 회원가입
        </strong>
        <div className="w-[726px] bg-gray-200 h-[6px] m-[20px_0px]">
          <div
            className="h-full bg-key transition-all duration-300 ease-in-out"
            style={{ width: `${100}%` }}
          />
        </div>
        <div className=" w-[726px] flex flex-col items-center">
          <p className="text-[30px] font-[600] text-[#0000000] mt-[76px]">
            어르신 정보 등록이 완료되었습니다.
          </p>
          <Image src={Complete} alt="사진" width={341} height={296} />
          <p className="text-[24px] font-[700] text-[#000000] mt-[20px] text-center">
            지금<span className="text-key"> 어르신 정보 등록</span> 하고, 맞춤형
            매칭을 만나보세요.
          </p>
          <div className="flex w-full justify-between">
            <Link
              href="/manager/main"
              className="w-[254px] mt-[76px] h-[58px] flex items-center justify-center border border-[#58C185] rounded-[10px] text-[22px] font-[600] text-[#191A1C]"
            >
              나중에
            </Link>
            <Link
              href="manager/add"
              className="w-[254px] mt-[76px] h-[58px] flex items-center justify-center bg-[#58C185] rounded-[10px] text-[22px] font-[600] text-[#FFFFFF]"
            >
              어르신 정보 등록
            </Link>
          </div>
        </div>
      </div>
      <div className=" tablet:hidden w-screen h-screen max-tablet:flex max-tablet:flex-col max-tablet:items-center">
        <Header name="센터 관리자 회원가입" />
        <div className="w-[354px] bg-gray-200 h-1">
          <div
            className="h-full bg-key transition-all duration-300 ease-in-out"
            style={{ width: `100%` }}
          />
        </div>
        <div className="h-[78px]" />

        <div className="flex flex-row w-[354px] tablet:hidden">
          <div className="text-[26px] font-bold leading-[40px] flex items-center">
            회원가입이 완료 되었습니다.
          </div>
        </div>
        <div className="h-[60px]" />

        <Image src={CheckIcon} alt="성공" />
        <div className="h-[2.44px]" />

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
    </div>
  );
}
