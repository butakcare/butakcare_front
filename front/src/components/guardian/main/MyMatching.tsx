import Image from "next/image";
import Link from "next/link";

export default function MyMatching() {
  return (
    <div className="w-[353px] h-[150px] rounded-[14px] bg-[#EDEDED] mt-[57px] py-[16px] px-[18px]">
      <div className="h-[29px] flex justify-between items-center">
        <strong className="text-[24px] font-[700] text-[#000000]">
          나의 매칭
        </strong>
        <Link href="/guardian/my_matching">
          <Image
            src="/assets/icons/icon_right_arrow.svg"
            alt="화살표"
            width={20}
            height={20}
            className="w-[20px] h-[20px] cursor-pointer"
          />
        </Link>
      </div>
      <div className="h-[24px] flex justify-between items-center mt-[13px]">
        <div className="flex gap-[9px] items-center">
          <div className="w-[41px] h-[23px] bg-[#8E8E8E] rounded-[10px] flex justify-center items-center">
            <p className="text-[14px] font-[500] text-[#FFFFFF]">new</p>
          </div>
          <p className="text-[18px] font-[500] text-[#000000]">
            신규 매칭이 있어요.
          </p>
        </div>
        <Link
          href="/guardian/my_matching"
          className="text-[20px] font-[600] text-[#6B6B6B]"
        >
          1건
        </Link>
      </div>
      <div className="w-[316px] h-[2px] bg-[#CFCFCF] mt-[16px]"></div>
      <div className="h-[24px]  flex justify-between items-center mt-[15px]">
        <p className="text-[18px] font-[500] text-[#000000]">
          나의 매칭 내역 확인하기
        </p>
        <Link
          href="/guardian/my_matching"
          className="text-[20px] font-[600] text-[#6B6B6B]"
        >
          13건
        </Link>
      </div>
    </div>
  );
}
