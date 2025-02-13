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

      <form className="flex flex-col justify-center items-center align-center pt-[25px]">
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
