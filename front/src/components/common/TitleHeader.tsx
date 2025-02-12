"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

interface nameProps {
  name: string;
}

export default function TitleHeader({ name }: nameProps) {
  const router = useRouter();
  return (
    <div className="max-tablet:w-screen max-tablet:h-[66px] max-tablet:flex max-tablet:items-center max-tablet:justify-center relative">
      <Image
        src="/assets/icons/icon_left_arrow.svg"
        alt="화살표"
        width={24}
        height={24}
        onClick={() => router.back()}
        className="max-tablet:w-[24px] max-tablet:h-[24px] absolute left-[30px]"
      />
      <p className="max-tablet:text-[22px] max-tablet:font-[600] max-tablet:text-[#000000]">
        {name}
      </p>
    </div>
  );
}
