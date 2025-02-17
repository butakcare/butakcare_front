import TitleText from "@/components/common/TitleText";

interface GuardianStep8Props {
  years: string;
  months: string;
  description: string;
  onYearsChange: (value: string) => void;
  onMonthsChange: (value: string) => void;
  onDescriptionChange: (value: string) => void;
}

export default function GuardiunStep8({
  years,
  months,
  description,
  onYearsChange,
  onMonthsChange,
  onDescriptionChange,
}: GuardianStep8Props) {
  const handleYearsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/[^0-9]/g, "");
    onYearsChange(value);
  };

  const handleMonthsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/[^0-9]/g, "");
    if (parseInt(value) <= 12) {
      onMonthsChange(value);
    }
  };
  return (
    <div>
      <TitleText text1="경력을 입력해주세요." text2="" on={true} />
      <p className="text-sm text-green-600 mt-1">
        경력을 입력하면 더 많은 기회를 얻을 수 있어요!
      </p>
      <form className="flex flex-col justify-center items-center align-center pt-[25px]">
        <p className="text-sm font-medium text-gray-700 mb-2">경력 기간</p>
        <div>
          <p className="text-sm font-medium text-gray-700 mb-2">경력 기간</p>
          <div className="flex items-center space-x-2">
            <input
              type="text"
              className="w-32 h-12 px-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-200"
              placeholder="0"
              value={years}
              onChange={handleYearsChange}
              maxLength={2}
            />
            <span className="text-gray-600">(년)</span>
            <input
              type="text"
              className="w-32 h-12 px-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-200"
              placeholder="0"
              value={months}
              onChange={handleMonthsChange}
              maxLength={2}
            />
            <span className="text-gray-600">(개월)</span>
          </div>
        </div>

        {/* Main Experience */}
        <div>
          <p className="text-sm font-medium text-gray-700 mb-2">주요 경력</p>
          <textarea
            className="w-full h-32 p-4 border rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-green-200"
            placeholder="주요 경력을 간략하게 작성해 주세요.
예시) ○○○○○○○○○○○○○○"
            value={description}
            onChange={(e) => onDescriptionChange(e.target.value)}
          />
        </div>
        <div className="h-[267px]" />
      </form>
    </div>
  );
}
