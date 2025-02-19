"use client";
import { ShortsBtn } from "@/components/common/Button";
import Header from "@/components/common/TitleHeader";
import WorkStep1 from "@/components/guardian/work/Step1";
import WorkStep2 from "@/components/guardian/work/Step2";
import WorkStep3 from "@/components/guardian/work/Step3";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
type FormFields = "available_area" | "min_wage" | "max_wage" | "times" | "days";
type FormValues = string | number | string[] | number[];

export default function WorkSettings() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({
    available_area: [],
    min_wage: 0,
    max_wage: 0,
    days: [],
    times: [],
  });
  const progress = (step / 4) * 100;

  const handleSubmit = async () => {
    setLoading(true);
    console.log("전송할 데이터:", form);

    try {
      const response = await axios.patch(
        `${process.env.NEXT_PUBLIC_API_URL_KEY}/api/profiles/caregivers/sjh121476/`,
        form,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log("API 응답:", response.data);
      setLoading(false);
      router.push("/guardian/work/success");
    } catch (error) {
      setLoading(false);
      if (axios.isAxiosError(error)) {
        console.error("API 에러:", error.response?.data);
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
  const updateForm = (input: FormFields, value: FormValues) => {
    setForm((prevForm) => ({
      ...prevForm,
      [input]: value,
    }));
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
          onDaysChange={(value) => updateForm("days", value)}
          onTimesChange={(value) => updateForm("times", value)}
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
      return form.available_area.length === 0;
    }
    if (step === 2) {
      return form.days.length === 0 || form.times.length === 0;
    }
    if (step === 3) {
      return form.min_wage === 0 || form.max_wage === 0;
    }
    return false;
  };

  return (
    <div className="w-screen h-screen max-tablet:flex max-tablet:flex-col max-tablet:items-center">
      <Header name="근무 조건 등록" />
      <div className="w-[354px] bg-gray-200 h-1">
        <div
          className="h-full bg-key transition-all duration-300 ease-in-out"
          style={{ width: `${progress}%` }}
        />
      </div>
      <div className="h-[78px]" />
      {showCurrentStep()}
      <div className="fixed bottom-0 w-full flex justify-center bg-white py-4">
        {step <= 2 ? (
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
            next={step === 3 && loading ? "저장 중.." : "다음"}
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
