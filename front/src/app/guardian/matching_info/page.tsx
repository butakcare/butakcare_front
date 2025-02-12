import ElderInfo from "@/components/common/ElderInfo";
import TitleHeader from "@/components/common/TitleHeader";
import Image from "next/image";

export default function Home() {
  return (
    <div className="max-tablet:w-full max-tablet:h-full max-tablet:flex max-tablet:flex-col">
      <div>
        <TitleHeader name="매칭을 수락했어요" />
      </div>
      <div className="max-tablet:flex max-tablet:flex-col max-tablet:items-center max-tablet:gap-[10px] max-tablet:mt-[20px]">
        <strong className="max-tablet:w-[313px] max-tablet:text-[26px] max-tablet:font-[700] max-tablet:text-[#000000] max-tablet:leading-[31px]">
          관리자 연락처
        </strong>
        <div className="max-tablet:flex max-tablet:w-[313px] max-tablet:h-[55px] max-tablet:bg-[#F0F0F0] max-tablet:items-center max-tablet:pl-[17px] max-tablet:gap-[10px] max-tablet:rounded-[14px]">
          <Image
            src="/assets/icons/icon_call.svg"
            alt="전화"
            width={30}
            height={30}
            className="max-tablet:w-[30px] max-tablet:h-[30px]"
          />
          <p className="max-tablet:text-[22px] max-tablet:font-[500] max-tablet:text-[#000000]">
            010-7382-9889
          </p>
        </div>
      </div>
      <div>
        <ElderInfo />
      </div>
    </div>
  );
}
