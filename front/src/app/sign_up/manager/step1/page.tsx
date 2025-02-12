"use client";
import { useRouter } from "next/navigation";
import LongBtn from "@/components/common/Button";
import Header from "@/components/common/TitleHeader";
import TitleText from "@/components/common/TitleText";
import { useState } from "react";
import InputField from "@/components/sign_up/InputField";

export default function ManagerStep1() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const handleNext = () => {
    router.push(`/sign_up/manager/step2`);
  };

  return (
    <div className="w-screen h-screen max-tablet:flex max-tablet:flex-col max-tablet:items-center">
      <Header name="센터 관리자 회원가입" />

      <TitleText
        text1="로그인에서 사용하실"
        text2="아이디/비밀번호를 입력해주세요."
        on={true}
      />

      <form className="flex flex-col justify-center items-center align-center pt-[25px]">
        <InputField
          label="아이디"
          value={username}
          onChange={setUsername}
          placeholder="아이디를 입력해주세요."
          on={true}
        />
        <div className="h-[25px]" />
        <InputField
          label="비밀번호"
          value={password}
          onChange={setPassword}
          placeholder="비밀번호를 입력해주세요."
          on={true}
        />
        <div className="h-[267px]" />

        <LongBtn text="다음" disabled={true} onClick={handleNext} />
      </form>
    </div>
  );
}
