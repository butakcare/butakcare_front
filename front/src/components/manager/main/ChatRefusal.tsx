import Image from "next/image";
import Link from "next/link";
import Refusal from "@/../public/assets/icons/icon_refusal.svg";

export default function ChatRefusal() {
  return (
    <div className="w-full h-full pl-[31px] pt-[20px]">
      <p className="text-[26px] font-[600] text-[#191A1C] mb-[52px]">
        매칭 거절
      </p>
      <strong className="text-[30px] font-[600] text-[#191A1C] ">
        {"매칭을 거절했습니다"}
      </strong>
      <p className="text-[24px] font-[600] text-[#666666] mt-[13px]">
        어르신 관리에서 다시 매칭을 시도할 수 있어요
      </p>
      <div className="flex w-full justify-center mt-[80px]">
        <Image src={Refusal} alt="거절" width={262} height={272} />
      </div>
      <div className="w-full flex justify-end pr-[30px] mt-[130px]">
        <Link
          href="/manager/main"
          onClick={(e) => {
            e.preventDefault();
            window.location.href = "/manager/main";
          }}
          className="w-[287px] h-[58px] flex items-center justify-center bg-[#58C185] rounded-[10px] text-[22px] font-[600] text-[#FFFFFF]"
        >
          메인 페이지로 이동하기
        </Link>
      </div>
    </div>
  );
}
