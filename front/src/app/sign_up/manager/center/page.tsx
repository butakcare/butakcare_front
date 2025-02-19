"use client";
import { LongBtn, ShortsBtn } from "@/components/common/Button";
import Header from "@/components/common/TitleHeader";
import ManagerStep2 from "@/components/sign_up/manager/Step2";
import ManagerStep3 from "@/components/sign_up/manager/Step3";
import ManagerStep4 from "@/components/sign_up/manager/Step4";
import ManagerStep5 from "@/components/sign_up/manager/Step5";
import ManagerStep6 from "@/components/sign_up/manager/Step6";
import ManagerStep7 from "@/components/sign_up/manager/Step7";
import { useRouter } from "next/navigation";
import { useState } from "react";
import axios from "axios";
interface ManagerForm {
  name: string;
  photo: null;
  phone: string;
  has_bathing_vehicle: boolean;
  address: string;
  address_detail: string;
  description: string;
  center_site: string;
  business_registration_number: string;
  center_rank: string;
  center_period_year: number;
  center_period_month: number;
}
type FormFields =
  | "name"
  | "photo"
  | "phone"
  | "has_bathing_vehicle"
  | "address"
  | "address_detail"
  | "description"
  | "center_site"
  | "business_registration_number"
  | "center_rank"
  | "center_period_year"
  | "center_period_month";

export default function ManagerSignup() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [step, setStep] = useState(2);
  const [form, setForm] = useState<ManagerForm>({
    name: "",
    photo: null,
    phone: "",
    has_bathing_vehicle: false,
    address: "",
    address_detail: "",
    description: "",
    center_site: "",
    business_registration_number: "",
    center_rank: "",
    center_period_year: 0,
    center_period_month: 0,
  });

  const progress = (step / 8) * 100;

  const handleSubmit = async () => {
    setLoading(true);
    console.log("전송할 데이터:", form); // 전송 전 데이터 확인

    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL_KEY}/api/profiles/care-centers/`,
        form,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log("API 응답:", response.data); // API 응답 확인

      setLoading(false);
      router.push("/sign_up/manager/center/success");
    } catch (error) {
      setLoading(false);
      if (axios.isAxiosError(error)) {
        console.error("API 에러:", error.response?.data);
        console.error(); // 자세한 에러 정보 확인
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
    if (step === 2) {
      return (
        <ManagerStep2
          center={form.name}
          onCenterChange={(value) => updateForm("name", value)}
        />
      );
    }

    if (step === 3) {
      return (
        <ManagerStep3
          business={form.business_registration_number}
          siteurl={form.center_site}
          onBusinessChange={(value) =>
            updateForm("business_registration_number", value)
          }
          onSiteurlChange={(value) => updateForm("center_site", value)}
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
          onVehicleChange={(value) =>
            updateForm("has_bathing_vehicle", value === "true")
          }
        />
      );
    }

    if (step === 6) {
      return (
        <ManagerStep6
          address={form.address}
          addressDetail={form.address_detail}
          onAddressChange={(value) => updateForm("address", value)}
          onAddressDetailChange={(value) => updateForm("address_detail", value)}
        />
      );
    }
    if (step === 7) {
      return (
        <ManagerStep7
          years={form.center_period_year}
          months={form.center_period_month}
          description={form.center_rank}
          onYearsChange={(value) =>
            updateForm("center_period_year", Number(value))
          }
          onMonthsChange={(value) =>
            updateForm("center_period_month", Number(value))
          }
          onDescriptionChange={(value) => updateForm("center_rank", value)}
        />
      );
    }
  };

  const handleFormbtn = () => {
    if (step === 2) {
      return !form.name;
    }
    if (step === 3) {
      return !form.business_registration_number || !form.center_site;
    }
    if (step === 4) {
      return !form.phone;
    }
    if (step === 5) {
      return false;
    }
    if (step === 6) {
      return !form.address || !form.address_detail;
    }

    return false;
  };

  return (
    <div className="w-screen h-screen max-tablet:flex max-tablet:flex-col max-tablet:items-center">
      <div className="flex flex-col items-center">
        <Header name="센터 등록" />
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
        {step === 2 ? (
          <LongBtn
            text="다음"
            disabled={handleFormbtn() || loading}
            onClick={handleNext}
            type="button"
            width={354}
          />
        ) : (
          <ShortsBtn
            next={step === 7 && loading ? "저장 중.." : "다음"}
            back="이전"
            disabled={handleFormbtn() || loading}
            onClickNext={step === 7 ? handleSubmit : handleNext}
            onClickBack={handleBack}
            width={175}
          />
        )}
      </div>
    </div>
  );
}
