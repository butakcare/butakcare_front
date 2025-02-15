import TitleText from "@/components/common/TitleText";
import InputField from "@/components/sign_up/InputField";

interface ManagerStep4Props {
  phone: string;
  onPhoneChange: (value: string) => void;
}

export default function ManagerStep4({
  phone,
  onPhoneChange,
}: ManagerStep4Props) {
  return (
    <div>
      <TitleText text1="센터 이름을 입력해주세요." text2="" on={true} />

      <form className="flex flex-col justify-center items-center align-center pt-[25px]">
        <InputField
          label="전화번호"
          value={phone}
          onChange={onPhoneChange}
          placeholder="전화번호를 입력해주세요."
          on={false}
        />
        <div className="h-[455px]" />
      </form>
    </div>
  );
}
