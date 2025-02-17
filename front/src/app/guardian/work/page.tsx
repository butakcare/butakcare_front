"use client";
import { LongBtn, ShortsBtn } from "@/components/common/Button";
import Header from "@/components/common/TitleHeader";
import WorkStep1 from "@/components/guardian/work/Step1";
import { useRouter } from "next/navigation";
import { useState } from "react";
type FormFields = "available_area" | "schedules" | "wage";

export default function WorkSettings() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({
    available_area: [],
    schedules: {
      available_time: "",
    },
    wage: "",
  });

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

  const updateForm = (input: FormFields, value: string | string[]) => {
    setForm({ ...form, [input]: value });
  };

  const showCurrentStep = () => {
    if (step === 1) {
      return (
        <WorkStep1
          available_area={form.available_area}
          available_areaChange={(value) => updateForm("available_area", value)}
        />
      );
    }
  };

  const handleFormbtn = () => {
    if (step === 1) {
      return !form.available_area;
    }
    return false;
  };

  return (
    <div className="w-screen h-screen max-tablet:flex max-tablet:flex-col max-tablet:items-center">
      <Header name="근무 조건 등록" />
      <div className="h-[93px]" />
      {showCurrentStep()}
      {step === 1 ? (
        <LongBtn
          text="다음"
          disabled={handleFormbtn() || loading}
          onClick={handleNext}
          type="button"
        />
      ) : (
        <ShortsBtn
          next={step === 4 && loading ? "저장 중.." : "다음"}
          back="이전"
          disabled={handleFormbtn() || loading}
          onClickNext={step === 4 ? handleSubmit : handleNext}
          onClickBack={handleBack}
        />
      )}
    </div>
  );
}
