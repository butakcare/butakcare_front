"use client";

import Image from "next/image";
import Accept from "@/components/guardian/my_matching/Accept";
import Filter from "@/components/guardian/my_matching/Filter";
import Matching from "@/components/guardian/my_matching/Matching";
import NewMatching from "@/components/guardian/my_matching/NewMatching";
import Refusal from "@/components/guardian/my_matching/Refusal";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const [selectedFilter, setSelectedFilter] = useState<string>("신규 매칭");
  return (
    <div className="w-full h-full flex flex-col">
      <div className="h-[66px]">
        <div className="w-full h-[66px] flex items-center justify-center relative">
          <Image
            src="/assets/icons/icon_left_arrow.svg"
            alt="화살표"
            width={24}
            height={24}
            onClick={() => router.back()}
            className="w-[24px] h-[24px] absolute left-[30px]"
          />
          <p className="text-[22px] font-[600] text-[#000000]">나의 매칭</p>
        </div>
      </div>
      <div className="h-[31px]">
        <Filter
          selectedFilter={selectedFilter}
          setSelectedFilter={setSelectedFilter}
        />
      </div>
      {selectedFilter === "신규 매칭" ? (
        <NewMatching />
      ) : selectedFilter === "조율 중인 매칭" ? (
        <Matching />
      ) : selectedFilter === "수락한 매칭" ? (
        <Accept />
      ) : (
        <Refusal />
      )}
    </div>
  );
}
