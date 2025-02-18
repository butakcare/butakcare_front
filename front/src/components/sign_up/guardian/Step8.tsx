import TitleText from "@/components/common/TitleText";

interface GuardianStep8Props {
  years: string;
  months: string;
  description: string;
  onYearsChange: (value: string) => void;
  onMonthsChange: (value: string) => void;
  onDescriptionChange: (value: string) => void;
}

export default function GuardianStep8({
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
    if (value === "" || (parseInt(value) >= 0 && parseInt(value) <= 12)) {
      onMonthsChange(value);
    }
  };

  return (
    <div>
      <TitleText text1="경력을 입력해주세요." text2="" on={true} />
      <p className=" font-semibold text-[18px] text-key mt-[7px]">
        경력을 입력하면 더 많은 기회를 얻을 수 있어요!
      </p>
      <form className=" font-semibold flex flex-col justify-center items-center align-center pt-[25px]">
        <div className="w-[354px] text-[18px] text-black pb-[10px]">
          경력 기간
        </div>
        <div className="w-[354px] h-[52px] flex justify-between gap-4">
          <div className="relative flex-1">
            <input
              type="text"
              value={years}
              onChange={handleYearsChange}
              placeholder="0"
              className="w-full h-[52px] px-8 border border-[#666666] rounded-[10px] focus:outline-none text-left"
              maxLength={3}
            />
            <span className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500">
              (년)
            </span>
          </div>
          <div className="relative flex-1">
            <input
              type="text"
              value={months}
              onChange={handleMonthsChange}
              placeholder="0"
              className="w-full h-[52px] px-8 border border-[#666666] rounded-[10px] focus:outline-none text-left"
              maxLength={2}
            />
            <span className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500">
              (개월)
            </span>
          </div>
        </div>

        {/* Main Experience */}
        <div className="pt-[25px]">
          <div className="w-[354px] text-[18px] text-black pb-[10px]">
            주요 경력
          </div>
          <div className="relative w-[354px]">
            <textarea
              className="w-full h-[174px] p-[18px_15px] border rounded-[10px] resize-none focus:outline-none text-black border-[#666666] "
              placeholder="주요 경력을 간략하게 작성해 주세요.
예시) 10년 이상 근무, 치매·중증 어르신 케어 
          전문 "
              value={description}
              onChange={(e) => onDescriptionChange(e.target.value)}
              maxLength={100}
            />
            <div className="absolute bottom-[15px] right-4 text-[18px] text-[#666666] font-semibold">
              {description.length} / 100
            </div>
          </div>
        </div>
        <div className="h-[166px]" />
      </form>
    </div>
  );
}
