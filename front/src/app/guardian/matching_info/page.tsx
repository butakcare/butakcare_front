import ElderInfo from "@/components/common/ElderInfo";
import TitleHeader from "@/components/common/TitleHeader";
import Image from "next/image";

export default function Home() {
  return (
    <div className="tablet:w-[450px] tablet:overflow-y-auto tablet:border-x tablet:border-[#909090] w-full h-full flex flex-col tablet:items-center">
      <div>
        <TitleHeader name="매칭을 수락했어요" />
      </div>
      <div className="flex flex-col items-center gap-[10px] mt-[20px]">
        <strong className="w-[313px] text-[26px] font-[700] text-[#000000] leading-[31px]">
          관리자 연락처
        </strong>
        <div className="flex w-[313px] h-[55px] bg-[#F0F0F0] items-center pl-[17px] gap-[10px] rounded-[14px]">
          <Image
            src="/assets/icons/icon_call.svg"
            alt="전화"
            width={30}
            height={30}
            className="w-[30px] h-[30px]"
          />
          <p className="text-[22px] font-[500] text-[#000000]">010-7382-9889</p>
        </div>
      </div>
      <div>
        <ElderInfo />
      </div>
    </div>
  );
}
