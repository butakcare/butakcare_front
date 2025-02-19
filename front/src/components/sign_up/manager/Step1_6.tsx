"use client";

import TitleText from "@/components/common/TitleText";
import InputField from "@/components/sign_up/InputField";
interface ManagerStep1Props {
  id: string;
  password: string;
  onIdChange: (value: string) => void;
  onPasswordChange: (value: string) => void;
}

export default function ManagerStep1_6({
  id,
  password,
  onIdChange,
  onPasswordChange,
}: ManagerStep1Props) {
  return (
    <div className="w-full h-full max-tablet:flex max-tablet:flex-col max-tablet:items-center">
      <div>
        <TitleText
          text1="로그인에 사용하실"
          text2=" 아이디/비밀번호를 입력해주세요."
          on={true}
        />
      </div>
      <div className="">
        <div className="flex flex-row">
          <div className="text-[30px] leading-[50px] font-bold flex items-center">
            로그인에 사용하실 아이디/비밀번호를 입력해주세요.
            <div className="flex items-end">
              <span className="font-semibold text-[#FF602B] text-[26px]">
                *
              </span>
            </div>
          </div>
        </div>
      </div>

      <form className="flex flex-col tablet:text-[22px] tablet:w-[516px] tablet:items-start justify-center items-center align-center pt-[25px]">
        <InputField
          label="아이디"
          value={id}
          onChange={onIdChange}
          placeholder="아이디를 입력해주세요."
          on={true}
        />
        <div className="h-[25px]" />
        <InputField
          label="비밀번호"
          value={password}
          onChange={onPasswordChange}
          placeholder="비밀번호를 입력해주세요."
          on={true}
        />
      </form>
    </div>
  );
}
