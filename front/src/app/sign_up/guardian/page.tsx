"use client";
import { LongBtn, ShortsBtn } from "@/components/common/Button";
import Header from "@/components/common/TitleHeader";
import GuardianStep1 from "@/components/sign_up/guardian/Step1";
import GuardianStep2 from "@/components/sign_up/guardian/Step2";
import GuardianStep3 from "@/components/sign_up/guardian/Step3";
import GuardianStep4 from "@/components/sign_up/guardian/Step4";
import GuardianStep5 from "@/components/sign_up/guardian/Step5";
import GuardianStep6 from "@/components/sign_up/guardian/Step6";
import GuardianStep7 from "@/components/sign_up/guardian/Step7";
import GuardianStep8 from "@/components/sign_up/guardian/Step8";
import GuardianStep9 from "@/components/sign_up/guardian/Step9";
import { useRouter } from "next/navigation";
import { useState } from "react";
type FormFields =
  | "username"
  | "password"
  | "name"
  | "phone"
  | "caregiver_license_first"
  | "caregiver_license_second"
  | "social_worker_qualification"
  | "nursing_assistant_qualification"
  | "address"
  | "vehicle"
  | "experience"
  | "availability"
  | "addressDetail"
  | "introduction";

export default function GuardianSignup() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [step, setStep] = useState(1);
  const progress = (step / 9) * 100;
  const [form, setForm] = useState({
    username: "",
    password: "",
    name: "",
    phone: "",
    caregiver_license_first: "",
    caregiver_license_second: "",
    social_worker_qualification: "",
    nursing_assistant_qualification: "",
    vehicle: "",
    experience: "",
    address: {
      address: "",
      addressDetail: "",
    },
    introduction: "",
    availability: {
      years: "",
      months: "",
      description: "",
    },
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
      router.push("/sign_up/guardian/success");
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

  const updateForm = (
    input: FormFields,
    value: string | { [key: string]: string }
  ) => {
    if (input === "address" || input === "addressDetail") {
      setForm({
        ...form,
        address: {
          ...form.address,
          [input]: value,
        },
      });
    } else if (input === "availability") {
      setForm({
        ...form,
        availability: {
          ...form.availability,
          ...(typeof value === "object" ? value : {}),
        },
      });
    } else {
      setForm({ ...form, [input]: value });
    }
  };

  const showCurrentStep = () => {
    if (step === 1) {
      return (
        <GuardianStep1
          username={form.username}
          password={form.password}
          onUsernameChange={(value) => updateForm("username", value)}
          onPasswordChange={(value) => updateForm("password", value)}
        />
      );
    }

    if (step === 2) {
      return (
        <GuardianStep2
          name={form.name}
          NameChange={(value) => updateForm("name", value)}
        />
      );
    }

    if (step === 3) {
      return (
        <GuardianStep3
          phone={form.phone}
          PhoneChange={(value) => updateForm("phone", value)}
        />
      );
    }

    if (step === 4) {
      return (
        <GuardianStep4
          caregiver_license_first={form.caregiver_license_first}
          caregiver_license_second={form.caregiver_license_second}
          social_worker_qualification={form.social_worker_qualification}
          nursing_assistant_qualification={form.nursing_assistant_qualification}
          onCaregiverLicenseFirstChange={(value) =>
            updateForm("caregiver_license_first", value)
          }
          onCaregiverLicenseSecondChange={(value) =>
            updateForm("caregiver_license_second", value)
          }
          onSocialWorkerChange={(value) =>
            updateForm("social_worker_qualification", value)
          }
          onNursingAssistantChange={(value) =>
            updateForm("nursing_assistant_qualification", value)
          }
        />
      );
    }
    if (step === 5) {
      return (
        <GuardianStep5
          onVehicleChange={(value) => updateForm("vehicle", value)}
        />
      );
    }

    if (step === 6) {
      return (
        <GuardianStep6
          onExperienceChange={(value) => updateForm("experience", value)}
        />
      );
    }

    if (step === 7) {
      return (
        <GuardianStep7
          address={form.address.address}
          addressDetail={form.address.addressDetail}
          onAddressChange={(value) => updateForm("address", value)}
          onAddressDetailChange={(value) => updateForm("addressDetail", value)}
        />
      );
    }

    if (step === 8) {
      return (
        <GuardianStep8
          years={form.availability.years}
          months={form.availability.months}
          description={form.availability.description}
          onYearsChange={(value) =>
            updateForm("availability", { years: value })
          }
          onMonthsChange={(value) =>
            updateForm("availability", { months: value })
          }
          onDescriptionChange={(value) =>
            updateForm("availability", { description: value })
          }
        />
      );
    }
    if (step === 9) {
      return (
        <GuardianStep9
          introduction={form.introduction}
          onIntroductionChange={(value) => updateForm("introduction", value)}
        />
      );
    }
  };

  const handleFormbtn = () => {
    if (step === 1) {
      return !form.username || !form.password;
    }
    if (step === 2) {
      return !form.name;
    }
    if (step === 3) {
      return !form.phone;
    }
    if (step === 4) {
      return (
        !form.caregiver_license_first ||
        !form.caregiver_license_second ||
        !form.social_worker_qualification ||
        !form.nursing_assistant_qualification
      );
    }
    if (step === 5) {
      return form.vehicle == "yes";
    }
    if (step === 6) {
      return form.experience == "yes";
    }
    if (step === 7) {
      return !form.address.address || !form.address.addressDetail;
    }
    if (step === 8) {
      return (
        !form.availability.years ||
        !form.availability.months ||
        !form.availability.description
      );
    }

    if (step === 8) {
      return !form.availability;
    }

    if (step === 9) {
      return false;
    }

    return false;
  };

  return (
    <div className="w-screen h-screen max-tablet:flex max-tablet:flex-col max-tablet:items-center">
      <Header name="센터 관리자 회원가입" />
      <div className="w-full bg-gray-200 h-1">
        <div
          className="h-full bg-green-500 transition-all duration-300 ease-in-out"
          style={{ width: `${progress}%` }}
        />
      </div>
      <div className="h-[93px]" />
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
          next={step === 9 && loading ? "저장 중.." : "다음"}
          back="이전"
          disabled={handleFormbtn() || loading}
          onClickNext={step === 9 ? handleSubmit : handleNext}
          onClickBack={handleBack}
          width={175}
        />
      )}
    </div>
  );
}
