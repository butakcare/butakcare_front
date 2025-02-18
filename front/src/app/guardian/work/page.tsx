"use client";
import { ShortsBtn } from "@/components/common/Button";
import Header from "@/components/common/TitleHeader";
import WorkStep1 from "@/components/guardian/work/Step1";
import WorkStep2 from "@/components/guardian/work/Step2";
import WorkStep3 from "@/components/guardian/work/Step3";
import { useRouter } from "next/navigation";
import { useState } from "react";
type FormFields = "available_area" | "schedules" | "min_wage" | "max_wage";

export default function WorkSettings() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({
    available_area: [],
    schedules: {
      available_time: "",
    },
    min_wage: 0,
    max_wage: 0,
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

  const updateForm = (input: FormFields, value: string | number | string[]) => {
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

    if (step === 2) {
      return (
        <WorkStep2
          available_area={form.available_area}
          available_areaChange={(value) => updateForm("available_area", value)}
        />
      );
    }

    if (step === 3) {
      return (
        <WorkStep3
          min_wage={form.min_wage}
          max_wage={form.max_wage}
          onMinWageChange={(value) => updateForm("min_wage", value)}
          onMaxWageChange={(value) => updateForm("max_wage", value)}
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
      <div className="fixed bottom-0 w-full flex justify-center bg-white py-4">
        {step <= 8 ? (
          <ShortsBtn
            next="다음"
            back="이전"
            disabled={handleFormbtn() || loading}
            onClickNext={handleNext}
            onClickBack={handleBack}
            width={175}
          />
        ) : (
          <ShortsBtn
            next={step === 9 && loading ? "저장 중.." : "다음"}
            back="이전"
            disabled={handleFormbtn() || loading}
            onClickNext={handleSubmit}
            onClickBack={handleBack}
            width={175}
          />
        )}
      </div>
    </div>
  );
}
