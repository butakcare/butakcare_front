"use client";
import { LongBtn, ShortsBtn } from "@/components/common/Button";
import Header from "@/components/common/TitleHeader";
import ManagerStep1 from "@/components/sign_up/manager/Step1";
import ManagerStep10 from "@/components/sign_up/manager/Step10";
import ManagerStep1_5 from "@/components/sign_up/manager/Step1_5";
import ManagerStep1_6 from "@/components/sign_up/manager/Step1_6";
import ManagerStep8 from "@/components/sign_up/manager/Step8";
import Navi from "@/components/sign_up/manager/tablet/Navi";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";

type FormFields =
  | "id"
  | "username"
  | "password"
  | "phone"
  | "centername"
  | "introduction"
  | "role";

export default function ManagerSignup() {
  const [selected, setSelected] = useState<number>(1);

  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({
    id: "",
    phone: "",
    username: "",
    password: "",
    centername: "",
    role: "",

    introduction: "",
  });
  const progress = (step / 6) * 100;
  const handleSubmit = async () => {
    setLoading(true);
    console.log("전송할 데이터:", form); // 전송 전 데이터 확인

    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL_KEY}/api/profiles/social-workers/`,
        form,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log("API 응답:", response.data); // API 응답 확인

      setLoading(false);
      router.push("/sign_up/manager/success");
    } catch (error) {
      setLoading(false);
      if (axios.isAxiosError(error)) {
        console.error("API 에러:", error.response?.data); // 자세한 에러 정보 확인
      }
      console.error("회원가입 중 오류가 발생했습니다.", error);
    }
  };
  const handleNext = () => {
    setStep((prev) => prev + 1);
  };

  const handleBack = () => {
    setStep((prev) => prev - 1);
  };

  const updateForm = (input: FormFields, value: string) => {
    setForm({ ...form, [input]: value });
  };

  const showCurrentStep = () => {
    if (step === 1) {
      return (
        <ManagerStep1
          Centername={form.centername}
          onCenternameChange={(value) => updateForm("centername", value)}
        />
      );
    }

    if (step === 2) {
      return (
        <ManagerStep1_5
          role={form.role}
          onRoleChange={(value) => updateForm("role", value)}
        />
      );
    }

    if (step === 3) {
      return (
        <ManagerStep1_6
          id={form.id}
          onIdChange={(value) => updateForm("id", value)}
          password={form.password}
          onPasswordChange={(value) => updateForm("password", value)}
        />
      );
    }

    if (step === 4) {
      return (
        <ManagerStep10
          name={form.username}
          phone={form.phone}
          onPhoneChange={(value) => updateForm("phone", value)}
          onNameChange={(value) => updateForm("username", value)}
        />
      );
    }

    if (step === 5) {
      return (
        <ManagerStep8
          introduction={form.introduction}
          onIntroductionChange={(value) => updateForm("introduction", value)}
        />
      );
    }
  };
  const handleFormbtn = () => {
    if (step === 1) {
      return !form.centername;
    }
    if (step === 2) {
      return !form.role;
    }
    if (step === 3) {
      return !form.id || !form.password;
    }
    if (step === 4) {
      return !form.username || !form.phone;
    }
    if (step === 5) {
      return false;
    }
    return false;
  };

  return (
    <div className="w-screen h-screen">
      {/*테블릿릿 */}
      <div className="w-full h-screen flex max-tablet:hidden">
        <Navi selected={selected} setSelected={setSelected} />
        <div className="m-[30px]  flex-1">
          <strong className="text-[30px] font-[700] text-[#2E2E2E]">
            센터 관리자 회원가입
          </strong>
          <div className="w-[726px] bg-gray-200 h-[6px] m-[20px_0px]">
            <div
              className="h-full bg-key transition-all duration-300 ease-in-out"
              style={{ width: `${progress}%` }}
            />
          </div>
          {showCurrentStep()}
          <div className="fixed bottom-10 flex justify-center bg-white py-4">
            {step <= 4 ? (
              <LongBtn
                text="다음"
                disabled={handleFormbtn() || loading}
                onClick={handleNext}
                type="button"
                width={254}
              />
            ) : (
              <ShortsBtn
                next={step === 5 && loading ? "저장 중.." : "다음"}
                back="이전"
                disabled={handleFormbtn() || loading}
                onClickNext={step === 5 ? handleSubmit : handleNext}
                onClickBack={handleBack}
                width={254}
              />
            )}
          </div>
        </div>
      </div>

      {/*모바일 */}

      <div className=" tablet:hidden w-screen h-screen max-tablet:flex max-tablet:flex-col max-tablet:items-center">
        <div className=" tablet:hidden flex flex-col items-center">
          <Header name="센터 관리자 회원가입" />
          <div className="w-[354px] bg-gray-200 h-1">
            <div
              className="h-full bg-key transition-all duration-300 ease-in-out"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        <div className="h-[78px]" />
        {showCurrentStep()}
        <div className="fixed bottom-0 w-full flex justify-center bg-white py-4">
          {step === 1 ? (
            <LongBtn
              text="다음"
              disabled={handleFormbtn() || loading}
              onClick={handleNext}
              type="button"
              width={354}
            />
          ) : (
            <ShortsBtn
              next={step === 5 && loading ? "저장 중.." : "다음"}
              back="이전"
              disabled={handleFormbtn() || loading}
              onClickNext={step === 5 ? handleSubmit : handleNext}
              onClickBack={handleBack}
              width={175}
            />
          )}
        </div>
      </div>
    </div>
  );
}
