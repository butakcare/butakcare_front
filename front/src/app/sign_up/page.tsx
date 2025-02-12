import Header from "@/components/header/sign_up";
import Image from "next/image";
import guardian from "@/../public/assets/icons/guardian.svg";
import manager from "@/../public/assets/icons/manager.svg";

export default function SignUpPage() {
  return (
    <>
      <div className="w-screen h-screen max-tablet:flex max-tablet:flex-col max-tablet:items-center">
        <Header />
        <div className="w-full pt-[42px] pl-[24px] text-[26px] font-semibold leading-[40px]">
          부탁케어와 함께할
          <br /> 계정 유형을 선택해주세요.
        </div>
        <div className="mt-[64px] mb-[200px] flex flex-row items-center justify-center h-[270px] gap-[4px]">
          <div className="flex flex-col items-center justify-center bg-[#f0f0f0] w-[175px] h-[270px] rounded-[14px]">
            <p className="font-semibold text-[20px] text-center">
              사회복지사
              <br /> 가입
            </p>
            <Image className="pt-[22px]" src={manager} alt="manager" />
          </div>
          <div className="flex flex-col items-center justify-center bg-[#f0f0f0] w-[175px] h-[270px] rounded-[14px]">
            <p className="font-semibold text-[20px] text-center">
              요양보호사
              <br /> 가입
            </p>
            <Image className="pt-[22px]" src={guardian} alt="guardian" />
          </div>
        </div>
        <div className="flex justify-center">
          <button className="w-[354px] h-[52px] bg-key rounded-[10px] font-semibold text-[18px] text-white">
            다음
          </button>
        </div>
      </div>
    </>
  );
}
