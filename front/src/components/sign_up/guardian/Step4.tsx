import TitleText from "@/components/common/TitleText";

interface GuardianStep4Props {
  caregiver_qualification: string;
  social_worker_qualification: string;
  nursing_assistant_qualification: string;
  onCaregiverLicenseChange: (value: string) => void;
  onSocialWorkerChange: (value: string) => void;
  onNursingAssistantChange: (value: string) => void;
}

export default function GuardianStep4({
  caregiver_qualification,
  social_worker_qualification,
  nursing_assistant_qualification,
  onCaregiverLicenseChange,
  onSocialWorkerChange,
  onNursingAssistantChange,
}: GuardianStep4Props) {
  const handleLicenseFirstChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/[^0-9]/g, "").slice(0, 4);
    onCaregiverLicenseChange(value + caregiver_qualification.slice(4));
  };

  const handleLicenseSecondChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = e.target.value.replace(/[^0-9]/g, "").slice(0, 7);
    onCaregiverLicenseChange(caregiver_qualification.slice(0, 4) + value);
  };

  const handleSocialWorkerSelect = (grade: string) => {
    const newValue = social_worker_qualification === grade ? "" : grade;
    onSocialWorkerChange(newValue);
  };

  const handleNursingAssistantSelect = (grade: string) => {
    const newValue = nursing_assistant_qualification === grade ? "" : grade;
    onNursingAssistantChange(newValue);
  };

  return (
    <div>
      <TitleText text1="자격증 번호를 입력해주세요." text2="" on={true} />

      <form className="font-semibold flex flex-col justify-center items-center align-center pt-[25px]">
        <div className="w-full flex items-center mb-[54px]">
          <span className="mr-[15px] text-[18px]">제</span>
          <input
            type="text"
            className="w-[137px] h-[52px] border border-[#666666] rounded-[10px] text-center mr-[10px] focus:outline-none "
            maxLength={4}
            placeholder="0000"
            value={caregiver_qualification.slice(0, 4)}
            onChange={handleLicenseFirstChange}
          />
          <span className="mr-[10px] text-[18px]">-</span>
          <input
            type="text"
            className="w-[137px] h-[52px] border border-[#666666] rounded-[10px]  text-center mr-2 focus:outline-none"
            maxLength={7}
            placeholder="0000000"
            value={caregiver_qualification.slice(4)}
            onChange={handleLicenseSecondChange}
          />
          <span className="ml-[15px] text-[18px]">호</span>
        </div>

        <div className="w-full mb-4">
          <div className="flex flex-row">
            <p className="text-[26px] font-semibold mr-[5px]">자격증 종류</p>
            <span className="text-[26px] font-normal">(복수선택 가능)</span>
          </div>
          <div className="h-[25px]" />
          <div className="flex w-full mb-[10px]">
            <div className="w-[78px] text-[18px] font-semibold flex items-center">
              요양보호사
            </div>
            <div className="flex-1">
              <button
                type="button"
                className="w-[244px] h-[52px] border rounded-[10px] ml-[18.5px] bg-sub border-key cursor-default"
                disabled
              >
                1급
              </button>
            </div>
          </div>

          <div className="flex w-full mb-4">
            <div className="w-[78px] text-[18px] font-semibold flex items-center">
              사회복지사
            </div>
            <div className="flex-1 flex gap-[2px]">
              <button
                type="button"
                className={`w-[121px] h-[52px] border rounded-[10px] ml-[18.5px] transition-colors duration-200
                  ${
                    social_worker_qualification === "1급"
                      ? "bg-sub border-key"
                      : "bg-white border-key"
                  }`}
                onClick={() => handleSocialWorkerSelect("1급")}
              >
                1급
              </button>
              <button
                type="button"
                className={`w-[121px] h-[52px] border rounded-[10px] transition-colors duration-200
                  ${
                    social_worker_qualification === "2급"
                      ? "bg-sub border-key"
                      : "bg-white border-key"
                  }`}
                onClick={() => handleSocialWorkerSelect("2급")}
              >
                2급
              </button>
            </div>
          </div>

          <div className="flex w-full">
            <div className="w-[78px] text-[18px] font-semibold flex items-center">
              간호조무사
            </div>
            <div className="flex-1 flex gap-[2px]">
              <button
                type="button"
                className={`w-[121px] h-[52px] border rounded-[10px] ml-[18.5px] transition-colors duration-200
                  ${
                    nursing_assistant_qualification === "1급"
                      ? "bg-sub border-key"
                      : "bg-white border-key"
                  }`}
                onClick={() => handleNursingAssistantSelect("1급")}
              >
                1급
              </button>
              <button
                type="button"
                className={`w-[121px] h-[52px] border rounded-[10px] transition-colors duration-200
                  ${
                    nursing_assistant_qualification === "2급"
                      ? "bg-sub border-key"
                      : "bg-white border-key"
                  }`}
                onClick={() => handleNursingAssistantSelect("2급")}
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
