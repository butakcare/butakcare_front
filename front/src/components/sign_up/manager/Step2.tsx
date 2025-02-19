import TitleText from "@/components/common/TitleText";
import InputField from "@/components/sign_up/InputField";

interface ManagerStep2Props {
  center: string;
  onCenterChange: (value: string) => void;
}

export default function ManagerStep2({
  center,
  onCenterChange,
}: ManagerStep2Props) {
  return (
    <div>
      <TitleText text1="센터 이름을 입력해주세요." text2="" on={true} />
      <div className="flex flex-row">
        <div className="text-[30px] leading-[50px] font-bold flex items-center">
          센터 이름을 입력해주세요.
          <div className="flex items-end">
            <span className="font-semibold text-[#FF602B] text-[26px]">*</span>
          </div>
        </div>
      </div>

      <form className="flex flex-col tablet:items-start justify-center items-center align-center pt-[21px]">
        <InputField
          label="센터 이름"
          value={center}
          onChange={onCenterChange}
          placeholder="센터 이름을 입력해주세요.(필수)"
          on={false}
        />
        <div className="h-[455px]" />
      </form>
    </div>
  );
}
