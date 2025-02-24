import TitleText from "@/components/common/TitleText";
import InputField from "@/components/sign_up/InputField";

interface ManagerStep1Props {
  username: string;
  password: string;
  onUsernameChange: (value: string) => void;
  onPasswordChange: (value: string) => void;
}

export default function ManagerStep1({
  username,
  password,
  onUsernameChange,
  onPasswordChange,
}: ManagerStep1Props) {
  return (
    <div>
      <TitleText
        text1="로그인에서 사용하실"
        text2="아이디/비밀번호를 입력해주세요."
        on={true}
      />

      <form className="flex flex-col justify-center items-center align-center pt-[25px]">
        <InputField
          label="아이디"
          value={username}
          onChange={onUsernameChange}
          placeholder="아이디를 입력해주세요."
          on={true}
        />
        <div className="h-[25px]" />
        <InputField
          label="비밀번호"
          value={password}
          onChange={onPasswordChange}
          placeholder="비밀번호를 입력해주세요."
          on={true}
        />
        <div className="h-[267px]" />
      </form>
    </div>
  );
}
