import Image from "next/image";
import Link from "next/link";

export default function MainLeft() {
  return (
    <div className="w-[390px]">
      <div className="flex gap-[18.52px]">
        <Image
          src="/assets/icons/icon_union.svg"
          alt="바탕"
          width={89}
          height={89}
        />
        <Image
          src="/assets/icons/icon_logo_p.svg"
          alt="글자"
          width={274}
          height={73}
        />
      </div>
      <div className="mt-[42px]">
        <strong className="text-[32px] font-[700] text-[#6B6B6B]">
          지금껏 없던 편리한 요양보호사 매칭 서비스 부탁케어
        </strong>
      </div>
      <button className="w-[163px] h-[66px] flex items-center justify-center bg-[#A4A4A4] rounded-[10px] text-[32px] font-[700] text-[#FFFFFF] mt-[26px]">
        <Link href="/sign_in">시작하기</Link>
      </button>
      <div className="mt-[154px] flex gap-[20px] items-center">
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
