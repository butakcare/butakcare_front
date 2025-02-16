"use client";
import TitleText from "@/components/common/TitleText";
import Header from "@/components/common/TitleHeader";
import InputField from "@/components/sign_up/InputField";
import { LongBtn, XBLBtn } from "@/components/common/Button";
import { useRouter } from "next/navigation";

interface ManagerStep1Props {
  username: string;
  password: string;
  onUsernameChange: (value: string) => void;
  onPasswordChange: (value: string) => void;
}

export default function SignUpPage({
  username,
  password,
  onUsernameChange,
  onPasswordChange,
}: ManagerStep1Props) {
  const router = useRouter();
  const handleSubmit = () => {};
  const handleNext = () => {
    router.push("/sign_up");
  };
  return (
    <div className="w-screen h-screen max-tablet:flex max-tablet:flex-col max-tablet:items-center">
      <Header name="" />
      <TitleText text1="부탁케어 로그인" text2="" on={false} />

      <form className="flex flex-col justify-center items-center align-center pt-[124px]">
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
        <div className="h-[25px]" />
        <LongBtn
          text="로그인"
          disabled={false}
          onClick={handleSubmit}
          type="button"
        />
      </form>
      <div className="h-[197px]" />
      <div className="text-stroke font-semibold text-[18px] text-left w-[354px] pb-[15px]">
        아직 부탁케어 계정이 없으신가요?
      </div>
      <div className="flex justify-center ">
        <XBLBtn text="회원가입" onClick={handleNext} />
      </div>
    </div>
  );
}
