import Image from "next/image";
import Link from "next/link";

export default function MyMatching() {
  return (
    <div className="max-tablet:w-[353px] max-tablet:h-[150px] max-tablet:rounded-[14px] max-tablet:bg-[#EDEDED] max-tablet:mt-[57px] max-tablet:py-[16px] max-tablet:px-[18px]">
      <div className="max-tablet:h-[29px] max-tablet:flex max-tablet:justify-between max-tablet:items-center">
        <strong className="max-tablet:text-[24px] max-tablet:font-[700] max-tablet:text-[#000000]">
          나의 매칭
        </strong>
        <Link href="/guardian/my_matching">
          <Image
            src="/assets/icons/icon_right_arrow.svg"
            alt="화살표"
            width={20}
            height={20}
            className="max-tablet:w-[20px] max-tablet:h-[20px] max-tablet:cursor-pointer"
          />
        </Link>
      </div>
      <div className="max-tablet:h-[24px] max-tablet:flex max-tablet:justify-between max-tablet:items-center max-tablet:mt-[13px]">
        <div className="max-tablet:flex max-tablet:gap-[9px] max-tablet:items-center">
          <div className="max-tablet:w-[41px] max-tablet:h-[23px] max-tablet:bg-[#8E8E8E] max-tablet:rounded-[10px] max-tablet:flex max-tablet:justify-center max-tablet:items-center">
            <p className="max-tablet:text-[14px] max-tablet:font-[500] max-tablet:text-[#FFFFFF]">
              new
            </p>
          </div>
          <p className="max-tablet:text-[18px] max-tablet:font-[500] max-tablet:text-[#000000]">
            신규 매칭이 있어요.
          </p>
        </div>
        <Link
          href="/guardian/my_matching"
          className="max-tablet:text-[20px] max-tablet:font-[600] max-tablet:text-[#6B6B6B]"
        >
          1건
        </Link>
      </div>
      <div className="max-tablet:w-[316px] max-tablet:h-[2px] max-tablet:bg-[#CFCFCF] max-tablet:mt-[16px]"></div>
      <div className="max-tablet:h-[24px]  max-tablet:flex max-tablet:justify-between max-tablet:items-center max-tablet:mt-[15px]">
        <p className="max-tablet:text-[18px] max-tablet:font-[500] max-tablet:text-[#000000]">
          나의 매칭 내역 확인하기
        </p>
        <Link
          href="/guardian/my_matching"
          className="max-tablet:text-[20px] max-tablet:font-[600] max-tablet:text-[#6B6B6B]"
        >
          13건
        </Link>
      </div>
    </div>
  );
}
