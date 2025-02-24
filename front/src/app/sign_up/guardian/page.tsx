"use client";
import { LongBtn, ShortsBtn } from "@/components/common/Button";
import Header from "@/components/common/TitleHeader";
import GuardianStep1 from "@/components/sign_up/guardian/IdPw";
import GuardianStep2 from "@/components/sign_up/guardian/Info";
import GuardianStep3 from "@/components/sign_up/guardian/BirthGender";
import GuardianStep4 from "@/components/sign_up/guardian/LicenseChange";
import GuardianStep5 from "@/components/sign_up/guardian/Vehicle";
import GuardianStep6 from "@/components/sign_up/guardian/HasDementia";
import GuardianStep7 from "@/components/sign_up/guardian/Address";
import GuardianStep8 from "@/components/sign_up/guardian/Calender";
import GuardianStep9 from "@/components/sign_up/guardian/Introduction";
import { useRouter } from "next/navigation";
import { useState } from "react";
import axios from "axios";
type FormFields =
  | "id"
  | "password"
  | "name"
  | "phone"
  | "gender"
  | "birth"
  | "caregiver_qualification"
  | "social_worker_qualification"
  | "nursing_assistant_qualification"
  | "address"
  | "availability"
  | "address_detail"
  | "description"
  | "has_car"
  | "career_year"
  | "career_month"
  | "career_content"
  | "has_dementia_training";

export default function GuardianSignup() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [step, setStep] = useState(1);
  const progress = (step / 10) * 100;
  const [form, setForm] = useState({
    id: "",
    times: [],
    days: [],
    password: "",
    name: "",
    gender: null,
    photo: null,
    phone: "",
    has_car: false,
    has_dementia_training: false,
    address: "",
    address_detail: "",
    min_wage: 0,
    max_wage: 0,
    caregiver_qualification: "",
    social_worker_qualification: "",
    nursing_assistant_qualification: "",
    birth: "",
    career_year: null,
    career_month: null,
    career_content: "",
    description: "",
    available_area: [],
  });

  const handleSubmit = async () => {
    setLoading(true);
    console.log("전송할 데이터:", form); // 전송 전 데이터 확인

    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL_KEY}/api/profiles/caregivers/`,
        form,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log("API 응답:", response.data); // API 응답 확인

      setLoading(false);
      router.push("/sign_up/guardian/success");
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

  const updateForm = (
    input: FormFields,
    value:
      | string
      | number
      | boolean
      | { [key: string]: string | number | boolean }
  ) => {
    setForm((prevForm) => ({
      ...prevForm,
      [input]: value,
    }));
  };
  const showCurrentStep = () => {
    if (step === 1) {
      return (
        <GuardianStep1
          username={form.id}
          password={form.password}
          onUsernameChange={(value) => updateForm("id", value)}
          onPasswordChange={(value) => updateForm("password", value)}
        />
      );
    }

    if (step === 2) {
      return (
        <GuardianStep2
          name={form.name}
          onNameChange={(value) => updateForm("name", value)}
          phone={form.phone}
          onPhoneChange={(value) => updateForm("phone", value)}
        />
      );
    }

    if (step === 3) {
      return (
        <GuardianStep3
          sex={form.gender}
          birth={form.birth}
          onsexChange={(value) => updateForm("gender", value)}
          onbirthChange={(value) => updateForm("birth", value)}
        />
      );
    }

    if (step === 4) {
      return (
        <GuardianStep4
          caregiver_qualification={form.caregiver_qualification}
          social_worker_qualification={form.social_worker_qualification}
          nursing_assistant_qualification={form.nursing_assistant_qualification}
          onCaregiverLicenseChange={(value) =>
            updateForm("caregiver_qualification", value)
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
          onVehicleChange={(value) => updateForm("has_car", value)}
        />
      );
    }

    if (step === 6) {
      return (
        <GuardianStep6
          onExperienceChange={(value) =>
            updateForm("has_dementia_training", value)
          }
        />
      );
    }

    if (step === 7) {
      return (
        <GuardianStep7
          address={form.address}
          addressDetail={form.address_detail}
          onAddressChange={(value) => updateForm("address", value)}
          onAddressDetailChange={(value) => updateForm("address_detail", value)}
        />
      );
    }

    if (step === 8) {
      return (
        <GuardianStep8
          years={form.career_year}
          months={form.career_month}
          description={form.career_content}
          onYearsChange={(value) => updateForm("career_year", Number(value))}
          onMonthsChange={(value) => updateForm("career_month", Number(value))}
          onDescriptionChange={(value) => updateForm("career_content", value)}
        />
      );
    }
    if (step === 9) {
      return (
        <GuardianStep9
          introduction={form.description}
          onIntroductionChange={(value) => updateForm("description", value)}
        />
      );
    }
  };

  const handleFormbtn = () => {
    if (step === 1) {
      return !form.id || !form.password;
    }
    if (step === 2) {
      return !form.name || !form.phone;
    }
    if (step === 3) {
      return !form.gender || !form.birth;
    }
    if (step === 4) {
      return !form.caregiver_qualification;
    }
    if (step === 5) {
      return form.has_car === true || form.has_car === false;
    }
    if (step === 6) {
      return (
        form.has_dementia_training === null ||
        form.has_dementia_training === undefined
      );
    }

    if (step === 7) {
      return !form.address || !form.address_detail;
    }
    if (step === 8) {
      return (
        form.career_year === -1 ||
        form.career_month === null ||
        !form.career_content
      );
    }

    if (step === 9) {
      return false;
    }

    return false;
  };

  return (
    <div className="w-screen h-screen max-tablet:flex max-tablet:flex-col max-tablet:items-center">
      <div>
        <Header name="요양보호사 회원가입" />
      </div>
      <div className="w-[354px] bg-gray-200 h-1">
        <div
          className="h-full bg-key transition-all duration-300 ease-in-out"
          style={{ width: `${progress}%` }}
        />
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
            next={step === 9 && loading ? "저장 중.." : "다음"}
            back="이전"
            disabled={handleFormbtn() || loading}
            onClickNext={step === 9 ? handleSubmit : handleNext}
            onClickBack={handleBack}
            width={175}
          />
        )}
      </div>
    </div>
  );
}
