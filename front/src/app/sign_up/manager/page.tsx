"use client";
import { LongBtn, ShortsBtn } from "@/components/common/Button";
import Header from "@/components/common/TitleHeader";
import ManagerStep1 from "@/components/sign_up/manager/Step1";
import ManagerStep2 from "@/components/sign_up/manager/Step2";
import ManagerStep3 from "@/components/sign_up/manager/Step3";
import ManagerStep4 from "@/components/sign_up/manager/Step4";
import ManagerStep5 from "@/components/sign_up/manager/Step5";
import ManagerStep6 from "@/components/sign_up/manager/Step6";
import ManagerStep7 from "@/components/sign_up/manager/Step7";
import ManagerStep8 from "@/components/sign_up/manager/Step8";
import { useRouter } from "next/navigation";
import { useState } from "react";
type FormFields =
  | "username"
  | "password"
  | "centername"
  | "business"
  | "siteurl"
  | "phone"
  | "vehicle"
  | "address"
  | "addressDetail"
  | "availability"
  | "introduction";

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
    vehicle: "",
    address: {
      address: "",
      addressDetail: "",
    },
    availability: {
      years: "",
      months: "",
      description: "",
    },
    introduction: "",
  });
  const progress = (step / 8) * 100;
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
      router.push("/manager/success");
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
    } else {
      setForm({ ...form, [input]: value });
    }
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

    if (step === 5) {
      return (
        <ManagerStep5
          onVehicleChange={(value) => updateForm("vehicle", value)}
        />
      );
    }

    if (step === 6) {
      return (
        <ManagerStep6
          address={form.address.address}
          addressDetail={form.address.addressDetail}
          onAddressChange={(value) => updateForm("address", value)}
          onAddressDetailChange={(value) => updateForm("addressDetail", value)}
        />
      );
    }
    if (step === 7) {
      return (
        <ManagerStep7
          years={form.availability.years}
          months={form.availability.months}
          description={form.availability.description}
          onYearsChange={(value) =>
            updateForm("availability", { ...form.availability, years: value })
          }
          onMonthsChange={(value) =>
            updateForm("availability", { ...form.availability, months: value })
          }
          onDescriptionChange={(value) =>
            updateForm("availability", {
              ...form.availability,
              description: value,
            })
          }
        />
      );
    }
    if (step === 8) {
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
    if (step === 5) {
      return false;
    }
    if (step === 6) {
      return !form.address.address || !form.address.addressDetail;
    }

    return false;
  };

  return (
    <div className="w-screen h-screen max-tablet:flex max-tablet:flex-col max-tablet:items-center">
      <div className="flex flex-col items-center">
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
          next={step === 8 && loading ? "저장 중.." : "다음"}
          back="이전"
          disabled={handleFormbtn() || loading}
          onClickNext={step === 8 ? handleSubmit : handleNext}
          onClickBack={handleBack}
          width={175}
        />
      )}
    </div>
  );
}
