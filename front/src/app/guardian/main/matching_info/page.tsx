import ElderInfo from "@/components/common/ElderInfo";
import TitleHeader from "@/components/common/TitleHeader";

export default function Home() {
  return (
    <div className="max-tablet:w-full max-tablet:h-full max-tablet:flex max-tablet:flex-col">
      <div>
        <TitleHeader name="자세히 보기" />
      </div>
      <div>
        <ElderInfo />
      </div>
    </div>
  );
}
