"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

interface nameProps {
  name: string;
}

export default function TitleHeader({ name }: nameProps) {
  const router = useRouter();
  return (
    <div className="tablet:w-full w-screen h-[66px] flex items-center justify-center relative">
      <Image
        src="/assets/icons/icon_left_arrow.svg"
        alt="화살표"
        width={24}
        height={24}
        onClick={() => router.back()}
        className="w-[24px] h-[24px] absolute left-[30px] tablet:left-[-120px]"
      />
      <p className="text-[22px] font-[600] text-[#000000]">{name}</p>
    </div>
  );
}
