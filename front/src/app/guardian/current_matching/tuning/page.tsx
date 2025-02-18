import TitleHeader from "@/components/common/TitleHeader";
import Tuning from "@/components/guardian/current_matching/tuning/Tuning";

export default function Home() {
  return (
    <div className="tablet:w-[450px] tablet:overflow-y-auto tablet:border-x tablet:border-[#909090] w-full h-full flex flex-col items-center">
      <div>
        <TitleHeader name="조율 요청하기" />
      </div>
      <Tuning />
      <div>
        <p className="text-[#A5A5A5] text-[18px] font-[600] mt-[61px]">
          꼼꼼히 확인하셨나요?
          <br />
          조율 요청을 보내면 관리자에게 바로 알람이 가요.
        </p>
        <button className="w-[354px] h-[52px] mt-[21px] bg-[#58C185] rounded-[10px] flex justify-center items-center text-[#FFFFFF] text-[18px] font-[600] mb-[19px]">
          조율 요청 보내기
        </button>
      </div>
    </div>
  );
}
