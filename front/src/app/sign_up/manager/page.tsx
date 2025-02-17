"use client";
import { LongBtn, ShortsBtn } from "@/components/common/Button";
import Header from "@/components/common/TitleHeader";
import ManagerStep1 from "@/components/sign_up/manager/Step1";
import ManagerStep2 from "@/components/sign_up/manager/Step2";
import ManagerStep3 from "@/components/sign_up/manager/Step3";
import ManagerStep4 from "@/components/sign_up/manager/Step4";
import { useRouter } from "next/navigation";
import { useState } from "react";
type FormFields =
  | "username"
  | "password"
  | "centername"
  | "business"
  | "siteurl"
  | "phone";

export default function ManagerSignup() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({
    username: "",
    password: "",
    centername: "",
    business: "",
    siteurl: "",
    phone: "",
  });
  const progress = (step / 5) * 100;
  const handleSubmit = async () => {
    setLoading(true);
    try {
      const response = await fetch(`${process.env.API_URL_KEY}/signup`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!response.ok) throw new Error("회원가입 실패");

      setLoading(false);
      router.push("/login");
    } catch (error) {
      setLoading(false);
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
          username={form.username}
          password={form.password}
          onUsernameChange={(value) => updateForm("username", value)}
          onPasswordChange={(value) => updateForm("password", value)}
        />
      );
    }

    if (step === 2) {
      return (
        <ManagerStep2
          center={form.centername}
          onCenterChange={(value) => updateForm("centername", value)}
        />
      );
    }

    if (step === 3) {
      return (
        <ManagerStep3
          business={form.business}
          siteurl={form.siteurl}
          onBusinessChange={(value) => updateForm("business", value)}
          onSiteurlChange={(value) => updateForm("siteurl", value)}
        />
      );
    }

    if (step === 4) {
      return (
        <ManagerStep4
          phone={form.phone}
          onPhoneChange={(value) => updateForm("phone", value)}
        />
      );
    }
  };

  const handleFormbtn = () => {
    if (step === 1) {
      return !form.username || !form.password;
    }
    if (step === 2) {
      return !form.centername;
    }
    if (step === 3) {
      return !form.business || !form.siteurl;
    }
    if (step === 4) {
      return !form.phone;
    }
    return false;
  };

  return (
    <div className="w-screen h-screen max-tablet:flex max-tablet:flex-col max-tablet:items-center">
      <Header name="센터 관리자 회원가입" />
      <div className="w-[354px] bg-gray-200 h-1">
        <div
          className="h-full bg-key transition-all duration-300 ease-in-out"
          style={{ width: `${progress}%` }}
        />
      </div>
      <div className="h-[78px]" />
      {showCurrentStep()}
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
          next={step === 4 && loading ? "저장 중.." : "다음"}
          back="이전"
          disabled={handleFormbtn() || loading}
          onClickNext={step === 4 ? handleSubmit : handleNext}
          onClickBack={handleBack}
          width={175}
        />
      )}
    </div>
  );
}
