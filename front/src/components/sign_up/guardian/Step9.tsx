import TitleText from "@/components/common/TitleText";

interface GuardianStep9Props {
  introduction: string;
  onIntroductionChange: (value: string) => void;
}

export default function GuardianStep9({
  introduction,
  onIntroductionChange,
}: GuardianStep9Props) {
  return (
    <div>
      <TitleText text1="한줄 소개를 입력해주세요." text2="" on={true} />
      <span className="text-gray-500 ml-2 text-sm">(선택)</span>
      <form className="flex flex-col justify-center items-center align-center pt-[25px]">
        <textarea
          className="w-full h-32 p-4 border rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-green-200 text-gray-700"
          placeholder="예시) 경험이 풍부한 요양 보호사입니다.&#13;&#10;       책임감 있고 성실한 요양 보호사입니다."
          value={introduction}
          onChange={(e) => onIntroductionChange(e.target.value)}
        />
        <div className="h-[267px]" />
      </form>
    </div>
  );
}
