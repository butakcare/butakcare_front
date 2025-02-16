import TitleText from "@/components/common/TitleText";

interface GuardiunStep4Props {
  caregiver_license_first: string;
  caregiver_license_second: string;
  social_worker_qualification: string;
  nursing_assistant_qualification: string;
  onCaregiverLicenseFirstChange: (value: string) => void;
  onCaregiverLicenseSecondChange: (value: string) => void;
  onSocialWorkerChange: (value: string) => void;
  onNursingAssistantChange: (value: string) => void;
}

export default function GuardiunStep4({
  caregiver_license_first,
  caregiver_license_second,
  social_worker_qualification,
  nursing_assistant_qualification,
  onCaregiverLicenseFirstChange,
  onCaregiverLicenseSecondChange,
  onSocialWorkerChange,
  onNursingAssistantChange,
}: GuardiunStep4Props) {
  const handleLicenseFirstChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/[^0-9]/g, "").slice(0, 4);
    onCaregiverLicenseFirstChange(value);
  };

  const handleLicenseSecondChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = e.target.value.replace(/[^0-9]/g, "").slice(0, 7);
    onCaregiverLicenseSecondChange(value);
  };

  const handleQualificationSelect = (type: string, grade: string) => {
    switch (type) {
      case "socialWorker":
        onSocialWorkerChange(
          social_worker_qualification === grade ? "" : grade
        );
        break;
      case "nursingAssistant":
        onNursingAssistantChange(
          nursing_assistant_qualification === grade ? "" : grade
        );
        break;
    }
  };

  return (
    <div>
      <TitleText text1="자격증 번호를 입력해주세요." text2="" on={true} />

      <form className="flex flex-col justify-center items-center align-center pt-[25px]">
        <div className="w-full flex items-center mb-8">
          <span className="mr-2 text-sm">제</span>
          <input
            type="text"
            className="w-24 h-12 border rounded-md text-center mr-2 focus:outline-none focus:ring-2 focus:ring-green-200"
            maxLength={4}
            placeholder="0000"
            value={caregiver_license_first}
            onChange={handleLicenseFirstChange}
          />
          <span className="mr-2 text-sm">-</span>
          <input
            type="text"
            className="w-32 h-12 border rounded-md text-center mr-2 focus:outline-none focus:ring-2 focus:ring-green-200"
            maxLength={7}
            placeholder="0000000"
            value={caregiver_license_second}
            onChange={handleLicenseSecondChange}
          />
          <span className="text-sm">호</span>
        </div>

        <div className="w-full mb-4">
          <p className="text-sm mb-4">추가 자격증 (선택사항)</p>

          <div className="flex w-full mb-4">
            <div className="w-24 text-sm flex items-center">요양보호사</div>
            <div className="flex-1">
              <button
                type="button"
                className="w-32 h-12 border rounded-md mr-4 bg-green-100 border-green-500 cursor-default"
                disabled
              >
                1급
              </button>
            </div>
          </div>

          <div className="flex w-full mb-4">
            <div className="w-24 text-sm flex items-center">사회복지사</div>
            <div className="flex-1">
              <button
                type="button"
                className={`w-32 h-12 border rounded-md mr-4 transition-colors duration-200
                  ${
                    social_worker_qualification === "1급"
                      ? "bg-green-100 border-green-500"
                      : "hover:bg-gray-50"
                  }`}
                onClick={() => handleQualificationSelect("socialWorker", "1급")}
              >
                1급
              </button>
              <button
                type="button"
                className={`w-32 h-12 border rounded-md transition-colors duration-200
                  ${
                    social_worker_qualification === "2급"
                      ? "bg-green-100 border-green-500"
                      : "hover:bg-gray-50"
                  }`}
                onClick={() => handleQualificationSelect("socialWorker", "2급")}
              >
                2급
              </button>
            </div>
          </div>

          <div className="flex w-full">
            <div className="w-24 text-sm flex items-center">간호조무사</div>
            <div className="flex-1">
              <button
                type="button"
                className={`w-32 h-12 border rounded-md mr-4 transition-colors duration-200
                  ${
                    nursing_assistant_qualification === "1급"
                      ? "bg-green-100 border-green-500"
                      : "hover:bg-gray-50"
                  }`}
                onClick={() =>
                  handleQualificationSelect("nursingAssistant", "1급")
                }
              >
                1급
              </button>
              <button
                type="button"
                className={`w-32 h-12 border rounded-md transition-colors duration-200
                  ${
                    nursing_assistant_qualification === "2급"
                      ? "bg-green-100 border-green-500"
                      : "hover:bg-gray-50"
                  }`}
                onClick={() =>
                  handleQualificationSelect("nursingAssistant", "2급")
                }
              >
                2급
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
