import TitleText from "@/components/common/TitleText";
import InputField from "@/components/sign_up/InputField";

interface GuardianStep3Props {
  birth: string | null;
  onbirthChange: (value: string) => void;
  sex: string | null;
  onsexChange: (value: string) => void;
}

export default function GuardianStep3({
  sex,
  birth,
  onbirthChange,
  onsexChange,
}: GuardianStep3Props) {
  const handlebirthChange = (value: string) => {
    const onlyNums = value.replace(/[^0-9]/g, "");
    let formatted = onlyNums;

    if (onlyNums.length > 4 && onlyNums.length <= 6) {
      formatted = `${onlyNums.slice(0, 4)}-${onlyNums.slice(4)}`;
    } else if (onlyNums.length > 6) {
      formatted = `${onlyNums.slice(0, 4)}-${onlyNums.slice(
        4,
        6
      )}-${onlyNums.slice(6, 8)}`;
    }

    onbirthChange(formatted);
  };

  return (
    <div>
      <TitleText text1="생년월일을 입력해주세요." text2="" on={true} />

      <form className="flex flex-col justify-center items-center align-center pt-[21px]">
        <InputField
          label="생년월일"
          value={birth || ""}
          onChange={handlebirthChange}
          placeholder="YYYY.MM.DD (필수)"
          on={false}
        />
        <div className="h-[50px]" />
        <TitleText text1="성별을 선택해주세요." text2="" on={true} />
        <div className="h-[21px]" />

        <div className="flex gap-4 w-[354px]">
          <button
            type="button"
            onClick={() => onsexChange("여")}
            className={`flex-1 h-[52px] rounded-[10px] font-semibold text-[18px] ${
              sex === "여"
                ? "bg-sub text-black border-key"
                : "bg-white text-black border-[#666666]"
            } border`}
          >
            여자
          </button>
          <button
            type="button"
            onClick={() => onsexChange("남")}
            className={`flex-1 h-[52px] rounded-[10px] font-semibold text-[18px] ${
              sex === "남"
                ? "bg-sub text-black border-key"
                : "bg-white text-black border-[#666666]"
            } border`}
          >
            남자
          </button>
        </div>
        <div className="h-[288px]" />
      </form>
    </div>
  );
}
