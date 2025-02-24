import TitleText from "@/components/common/TitleText";
import InputField from "@/components/sign_up/InputField";
import { useState } from "react";

interface ManagerStep3Props {
  business: string;
  siteurl: string;
  onBusinessChange: (value: string) => void;
  onSiteurlChange: (value: string) => void;
}

export default function ManagerStep3({
  business,
  siteurl,
  onBusinessChange,
  onSiteurlChange,
}: ManagerStep3Props) {
  const [formattedBusiness, setFormattedBusiness] = useState(business);

  const handleBusinessChange = (value: string) => {
    const onlyNums = value.replace(/[^0-9]/g, "");
    let formatted = onlyNums;

    if (onlyNums.length > 2 && onlyNums.length <= 5) {
      formatted = `${onlyNums.slice(0, 2)}-${onlyNums.slice(2)}`;
    } else if (onlyNums.length > 5) {
      formatted = `${onlyNums.slice(0, 2)}-${onlyNums.slice(
        2,
        5
      )}-${onlyNums.slice(5, 10)}`;
    }

    setFormattedBusiness(formatted);
    onBusinessChange(formatted);
  };

  return (
    <div>
      <TitleText text1="사업자 등록 번호를 입력해주세요." text2="" on={true} />
      <div className="hidden sm:block flex-row">
        <div className="text-[30px] leading-[50px] font-bold flex items-center">
          사업자 등록 번호를 입력해주세요.
          <div className="flex items-end">
            <span className="font-semibold text-[#FF602B] text-[26px]">*</span>
          </div>
        </div>
      </div>
      <form className="flex flex-col  tablet:items-start justify-center items-center align-center pt-[21px]">
        <InputField
          label="사업자 등록 번호"
          value={formattedBusiness}
          onChange={handleBusinessChange}
          placeholder="00-000-00000"
          on={false}
        />

        <div className="h-[50px]" />
        <TitleText
          text1="센터 사이트 주소를 입력해주세요."
          text2=""
          on={true}
        />
        <div className="hidden sm:block flex-row">
          <div className="text-[30px] leading-[50px] font-bold flex items-center">
            센터 사이트 주소를 입력해주세요.
            <div className="flex items-end">
              <span className="font-semibold text-[#FF602B] text-[26px]">
                *
              </span>
            </div>
          </div>
        </div>
        <div className="h-[21px]" />

        <InputField
          label="센터 사이트 주소"
          value={siteurl}
          onChange={onSiteurlChange}
          placeholder="https://siteurl.com (선택)"
          on={false}
        />
        <div className="h-[288px]" />
      </form>
    </div>
  );
}
