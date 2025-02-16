import ElderInfo from "@/components/common/ElderInfo";
import TitleHeader from "@/components/common/TitleHeader";

export default function Home() {
  return (
    <div className="tablet:w-[450px] tablet:overflow-y-auto tablet:border-x tablet:border-[#909090] tablet:items-center w-full h-full flex flex-col">
      <div>
        <TitleHeader name="자세히 보기" />
      </div>
      <div>
        <ElderInfo />
      </div>
    </div>
  );
}
