"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import WorkModal from "./WorkModal";

export default function Tuning() {
  const [workModal, setWorkModal] = useState<boolean>(false);
  return (
    <div>
      <div className="w-[352px] h-[52px] bg-[#F0F0F0] rounded-[10px] flex justify-between items-center px-[17px]">
        <p>근무 조건 자세히 보기</p>
        <Link href="/guardian/main/matching_info">
          <Image
            src="/assets/icons/icon_right_arrow.svg"
            alt="화살표"
            width={20}
            height={20}
            className="w-[20px] h-[20px]"
          />
        </Link>
      </div>
      <div className="flex flex-col gap-[14px] items-center mt-[36px]">
        <div className="flex gap-[12px] w-[352px]">
          <strong className="text-[26px] text-[#000000] font-[700] leading-[31px]">
            근무 조건
          </strong>
          <Image
            src="/assets/icons/icon_tuning.svg"
            alt="이미지"
            width={24}
            height={24}
            onClick={() => setWorkModal(true)}
            className="w-[24px] h-[24px]"
          />
        </div>
        <div className="flex flex-col w-[352px] h-[145px] bg-[#F0F0F0] items-start justify-center pl-[22px] gap-[10px] rounded-[14px]">
          <div className="flex gap-[16px] h-[26px]">
            <p className="w-[75px] text-[22px] whitespace-nowrap font-[500] text-[#9A9A9A]">
              기간
            </p>
            <p className="text-[22px] whitespace-nowrap font-[500] text-[#000000]">
              월~금 (주 5일)
            </p>
          </div>
          <div className="flex gap-[16px] h-[26px]">
            <p className="w-[75px] text-[22px] whitespace-nowrap font-[500] text-[#9A9A9A]">
              시간
            </p>
            <p className="text-[22px] whitespace-nowrap font-[500] text-[#000000]">
              09:00~12:00
            </p>
          </div>
          <div className="flex gap-[16px] h-[26px]">
            <p className="w-[75px] text-[22px] whitespace-nowrap font-[500] text-[#9A9A9A]">
              급여
            </p>
            <p className="text-[22px] whitespace-nowrap font-[500] text-[#000000]">
              시급 15,000원
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-[14px] items-center mt-[36px]">
        <div className="flex gap-[12px] w-[352px]">
          <strong className="text-[26px] text-[#000000] font-[700] leading-[31px]">
            근무 조건
          </strong>
        </div>
        <textarea
          placeholder="0/500"
          className="w-[352px] h-[115px] rounded-[14px] bg-[#F0F0F0] text-[#676767] text-[22px] font-[500] py-[16px] px-[21px]"
        />
      </div>
      {workModal && <WorkModal onClose={setWorkModal} />}
    </div>
  );
}
