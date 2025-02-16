import TitleText from "@/components/common/TitleText";
import InputField from "@/components/sign_up/InputField";

interface GuardianStep3Props {
  phone: string;
  PhoneChange: (value: string) => void;
}

export default function GuardianStep3({
  phone,
  PhoneChange,
}: GuardianStep3Props) {
  return (
    <div>
      <TitleText text1="전화번호를 입력해주세요." text2="" on={true} />

      <form className="flex flex-col justify-center items-center align-center pt-[25px]">
        <InputField
          label="전화번호"
          value={phone}
          onChange={PhoneChange}
          placeholder="전화번호를 입력해주세요.(필수)"
          on={false}
        />
        <div className="h-[267px]" />
      </form>
    </div>
  );
}
