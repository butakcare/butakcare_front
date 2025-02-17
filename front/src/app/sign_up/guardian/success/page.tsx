"use client";
import TitleText from "@/components/common/TitleText";
import CheckIcon from "@/../public/assets/icons/check-one.svg";
import Image from "next/image";
import { ShortsBtn } from "@/components/common/Button";
import { useRouter } from "next/navigation";

export default function GuardianStep9() {
  const router = useRouter();

  const handleMoveToWork = () => {
    router.push("/worksettings");
  };

  const handleMoveToMain = () => {
    router.push("/");
  };
  return (
    <div>
      <TitleText text1="회원가입이 완료되었습니다." text2="" on={false} />
      <Image src={CheckIcon} alt="성공" />
      <div>
        <p className="text-center text-gray-600 mb-2">
          지금{" "}
          <span className="text-green-500 font-medium">원하는 근무 조건</span>을
          등록하고,
        </p>
        <p className="text-center text-gray-600">
          나에게 딱 맞는 일자리 매칭을 만나보세요!
        </p>
      </div>
      <ShortsBtn
        next="근무 조건 등록"
        back="나중에"
        onClickNext={handleMoveToWork}
        onClickBack={handleMoveToMain}
      />
    </div>
  );
}
