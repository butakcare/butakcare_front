import TitleText from "@/components/common/TitleText";
import InputField from "@/components/sign_up/InputField";

interface GuardianStep2Props {
  name: string;
  NameChange: (value: string) => void;
}

export default function GuardianStep2({
  name,
  NameChange,
}: GuardianStep2Props) {
  return (
    <div>
      <TitleText text1="성함을 입력해주세요." text2="" on={true} />

      <form className="flex flex-col justify-center items-center align-center pt-[25px]">
        <InputField
          label="성함"
          value={name}
          onChange={NameChange}
          placeholder="성함을 입력해주세요.(필수)"
          on={false}
        />
        <div className="h-[455px]" />
      </form>
    </div>
  );
}
