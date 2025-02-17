import Image from "next/image";
import Link from "next/link";

export default function MainLeft() {
  return (
    <div className="w-[390px] max-tablet:w-full max-tablet:h-full max-tablet:mt-[115px]">
      <div className="flex gap-[18.52px] max-tablet:gap-[2px] max-tablet:ml-[24px]">
        <Image
          src="/assets/icons/icon_union.svg"
          alt="바탕"
          width={89}
          height={89}
          className="max-tablet:w-[35px]"
        />
        <Image
          src="/assets/icons/icon_logo_p.svg"
          alt="글자"
          width={274}
          height={73}
          className="max-tablet:w-[108px]"
        />
      </div>
      <div className="mt-[42px]">
        <strong className="text-[32px] font-[700] text-[#6B6B6B] max-tablet:hidden">
          지금껏 없던 편리한 요양보호사 매칭 서비스 부탁케어
        </strong>
        <p className="text-[30px] font-[500] text-[#000000] tablet:hidden ml-[24px]">
          요양보호사와 어르신의
          <br /> <span className="font-[700]">매칭 필수앱</span>
        </p>
        <p className="mt-[10px] text-[18px] font-[500] text-[#909090] tablet:hidden ml-[24px]">
          원하는 조건으로 빠르고 간편한 매칭,
          <br /> 부탁케어에 다 있어요.
        </p>
      </div>
      <button className="max-tablet:hidden w-[163px] h-[66px] flex items-center justify-center bg-[#A4A4A4] rounded-[10px] text-[32px] font-[700] text-[#FFFFFF] mt-[26px]">
        <Link href="/sign_in">시작하기</Link>
      </button>
      <div className="flex flex-col w-full items-center gap-[10px] mt-[185px] tablet:hidden">
        <Link
          href="/sign_up"
          className="w-[354px] h-[52px] flex items-center justify-center bg-[#58C185] rounded-[10px]"
        >
          회원가입
        </Link>
        <Link
          href="sign_in"
          className="w-[354px] h-[52px] flex items-center justify-center bg-[#FFFFFF] border border-[#666666] rounded-[10px]"
        >
          로그인
        </Link>
      </div>
      <div className="mt-[154px] flex gap-[20px] items-center max-tablet:hidden">
        <Image
          src="/assets/icons/icon_logo.svg"
          alt="로고"
          width={85}
          height={85}
        />
        <Link href="/sign_in" className="text-[26px] text-[#6B6B6B] font-[700]">
          모바일 버전 바로가기
        </Link>
      </div>
    </div>
  );
}
