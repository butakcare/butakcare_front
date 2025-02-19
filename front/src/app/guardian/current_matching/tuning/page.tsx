"use client";

import TitleHeader from "@/components/common/TitleHeader";
import Tuning from "@/components/guardian/current_matching/tuning/Tuning";

export default function Home() {
  return (
    <div className="tablet:w-[450px] tablet:overflow-y-auto tablet:border-x tablet:border-[#909090] w-full h-full flex flex-col items-center">
      <div>
        <TitleHeader name="조율 요청하기" />
      </div>
      <Tuning />
    </div>
  );
}
