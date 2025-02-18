"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Navigation() {
  const router = useRouter();
  const menuItems = ["어르신 관리"];

  return (
    <div className="w-[237px] h-full border-r border-[#909090] flex flex-col justify-between pl-[33px] pt-[34px]">
      <div className="flex flex-col gap-[16px]">
        <Image
          src="/assets/icons/icon_logo_full.svg"
          alt="메인 로고"
          width={127}
          height={27}
          onClick={() => router.push("/manager/main")}
          className="cursor-pointer"
        />
        {menuItems.map((item, index) => (
          <div
            key={index}
            className={`w-[178px] h-[49px]  rounded-[10px] pl-[19px] flex items-center cursor-pointer
                ${index == 0 ? "mt-[40px]" : ""} text-[#2D8859] bg-[#D7F3D1]
                `}
          >
            <p className="text-[24px] font-bold">{item}</p>
          </div>
        ))}
      </div>
      <div className="mb-[50px] flex flex-col gap-[23px] text-[22px] font-bold text-[#C5C5C5]">
        <p>설정</p>
        <p>로그아웃</p>
      </div>
    </div>
  );
}
