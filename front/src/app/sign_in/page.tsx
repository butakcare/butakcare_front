"use client";
import { Suspense } from "react";
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
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [loading, setLoading] = useState<boolean>(false);
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const isFormValid = username !== "" && password !== "";
  const [type, setType] = useState<string>("");
  const handleSubmit = () => {
    router.push(`/${type}/main`);
    // setLoading(true);
    // try {
    //   const response = await axios.post(
    //     `${process.env.NEXT_PUBLIC_API_URL_KEY}/api/profiles/caregiverssdf`,
    //     { id: username, password: password },
    //     {
    //       headers: {
    //         "Content-Type": "application/json",
    //       },
    //     }
    //   );

    //   console.log("로그인 응답:", response.data);

    //   if (response.data.access_token) {
    //     localStorage.setItem("access_token", response.data.access_token);
    //     setLoading(false);
    //     router.push(`/${type}/main`);
    //   }
    // } catch (error) {
    //   setLoading(false);
    //   if (axios.isAxiosError(error)) {
    //     console.error("로그인 에러:", error.response?.data);
    //     alert("아이디 또는 비밀번호가 올바르지 않습니다.");
    //   }
    //   console.error("로그인 실패:", error);
    // }
  };
  const handleNext = () => {
    router.push("/sign_up");
  };
  return (
    <Suspense fallback={<div>Loading..</div>}>
      <div className="w-full h-full">
        <div className="tablet:hidden w-screen h-screen max-tablet:flex max-tablet:flex-col max-tablet:items-center">
          <Header name="" />
          <div className="flex flex-row w-[354px]">
            <div className="text-[26px] font-bold leading-[40px]">
              부탁케어 로그인
            </div>
          </div>
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
    </Suspense>
  );
}
