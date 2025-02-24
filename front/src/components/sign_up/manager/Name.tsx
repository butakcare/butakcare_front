import TitleText from "@/components/common/TitleText";
import InputField from "@/components/sign_up/InputField";
import { useState } from "react";

interface ManagerStep10Props {
  phone: string;
  onPhoneChange: (value: string) => void;
  name: string;
  onNameChange: (value: string) => void;
}

export default function ManagerStep10({
  name,
  phone,
  onPhoneChange,
  onNameChange,
}: ManagerStep10Props) {
  const [formattedPhone, setFormattedPhone] = useState(phone);

  const handlePhoneChange = (value: string) => {
    const onlyNums = value.replace(/[^0-9]/g, "");
    let formatted = onlyNums;

    if (onlyNums.length > 3 && onlyNums.length <= 7) {
      formatted = `${onlyNums.slice(0, 3)}-${onlyNums.slice(3)}`;
    } else if (onlyNums.length > 7) {
      formatted = `${onlyNums.slice(0, 3)}-${onlyNums.slice(
        3,
        7
      )}-${onlyNums.slice(7, 11)}`;
    }

    setFormattedPhone(formatted);
    onPhoneChange(formatted);
  };
  return (
    <div>
      <div>
        <TitleText text1="관리자 성함을 입력해주세요." text2="" on={true} />
      </div>
      <div className="hidden sm:block">
        <div className="flex flex-row">
          <div className="text-[30px] leading-[50px] font-bold flex items-center">
            관리자 성함을 입력해주세요.
            <div className="flex items-end">
              <span className="font-semibold text-[#FF602B] text-[26px]">
                *
              </span>
            </div>
          </div>
        </div>
      </div>
      <form className="flex flex-col  tablet:items-start justify-center items-center align-center pt-[21px]">
        <InputField
          label="성함"
          value={name}
          onChange={onNameChange}
          placeholder="성함을 입력해주세요. (필수)"
          on={false}
        />
        <div className="h-[50px]" />
        <TitleText text1="전화번호를 입력해주세요." text2="" on={true} />
        <div className="h-[21px]" />
        <div className="hidden sm:block">
          <div className="flex flex-row pb-[25px]">
            <div className="text-[30px] leading-[50px] font-bold flex items-center">
              전화번호를 입력해주세요.
              <div className="flex items-end">
                <span className="font-semibold text-[#FF602B] text-[26px]">
                  *
                </span>
              </div>
            </div>
          </div>
        </div>
        <InputField
          label="전화번호"
          value={formattedPhone}
          onChange={handlePhoneChange}
          placeholder="전화번호를 입력해주세요.(필수)"
          on={false}
        />
        <div className="h-[288px]" />
      </form>
    </div>
  );
}
