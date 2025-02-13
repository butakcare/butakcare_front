"use client";
import { LongBtn, ShortsBtn } from "@/components/common/Button";
import Header from "@/components/common/TitleHeader";
import ManagerStep1 from "@/components/sign_up/manager/Step1";
import ManagerStep2 from "@/components/sign_up/manager/Step2";
import ManagerStep3 from "@/components/sign_up/manager/Step3";
import ManagerStep4 from "@/components/sign_up/manager/Step4";
import { useState } from "react";
type FormFields =
  | "username"
  | "password"
  | "centername"
  | "business"
  | "siteurl"
  | "phone";

export default function ManagerSignup() {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({
    username: "",
    password: "",
    centername: "",
    business: "",
    siteurl: "",
    phone: "",
  });

  const handleNext = () => {
    setStep((prev) => prev + 1);
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
      <div className="h-[93px]" />
      {showCurrentStep()}
      {step >= 2 ? (
        <ShortsBtn
          next="다음"
          back="이전"
          disabled={handleFormbtn()}
          onClick={handleNext}
        />
      ) : (
        <LongBtn text="다음" disabled={handleFormbtn()} onClick={handleNext} />
      )}{" "}
    </div>
  );
}
