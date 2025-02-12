"use client";
import { useRouter } from "next/navigation";
import LongBtn from "@/components/common/Button";
import Header from "@/components/common/TitleHeader";
import TitleText from "@/components/common/TitleText";
export default function ManagerStep1() {
  const router = useRouter();

  const handleNext = () => {
    router.push(`/sign_up/manager/step2`);
  };

  return (
    <div>
      <Header name="센터 관리자 회원가입" />

      <TitleText
        text1="로그인에서 사용하실"
        text2="아이디/비밀번호를 입력해주세요."
        on={true}
      />

      <form>
        {/* 관리자용 입력 폼 필드들 */}
        <LongBtn text="로그인" disabled={true} onClick={handleNext} />
      </form>
    </div>
  );
}
