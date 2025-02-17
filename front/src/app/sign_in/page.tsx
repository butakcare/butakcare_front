"use client";
import TitleText from "@/components/common/TitleText";
import Header from "@/components/common/TitleHeader";
import InputField from "@/components/sign_up/InputField";
import { LongBtn, XBLBtn } from "@/components/common/Button";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Navigation from "@/components/sign_in/Navigation";
import Login from "@/components/sign_in/Login";

export default function SignUpPage() {
  const router = useRouter();
  const [selected, setSelected] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(false);
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [type, setType] = useState<string>("");
  const isFormValid = username !== "" && password !== "";
  const handleSubmit = async () => {
    setLoading(true);
    try {
      const response = await fetch(`${process.env.API_URL_KEY}/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      if (!response.ok) throw new Error("로그인 실패");

      setLoading(false);
      router.push(`/${type}/main`); //어디로보내야하지지 /main으로 보내야하지지
    } catch (error) {
      setLoading(false);
      console.error("로그인 중 오류가 발생했습니다.", error);
    }
  };
  const handleNext = () => {
    router.push("/sign_up");
  };
  return (
    <div className="w-full h-full">
      <div className="tablet:hidden w-screen h-screen max-tablet:flex max-tablet:flex-col max-tablet:items-center">
        <Header name="" />
        <TitleText text1="부탁케어 로그인" text2="" on={false} />

        <form className="flex flex-col justify-center items-center align-center pt-[124px]">
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
          <div className="h-[25px]" />
          <LongBtn
            text={loading ? "로그인 중..." : "로그인"}
            disabled={loading || !isFormValid}
            onClick={handleSubmit}
            type="button"
            width={354}
          />
        </form>
        <div className="h-[197px]" />
        <div className="text-stroke font-semibold text-[18px] text-left w-[354px] pb-[15px]">
          아직 부탁케어 계정이 없으신가요?
        </div>
        <div className="flex justify-center ">
          <XBLBtn text="회원가입" onClick={handleNext} width={354} />
        </div>
      </div>
      <div className="w-full h-full flex max-tablet:hidden">
        <Navigation selected={selected} setSelected={setSelected} />
        <Login setType={setType} />
      </div>
    </div>
  );
}
