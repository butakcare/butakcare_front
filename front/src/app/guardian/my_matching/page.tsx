"use client";

import TitleHeader from "@/components/common/TitleHeader";
import Accept from "@/components/guardian/my_matching/Accept";
import Filter from "@/components/guardian/my_matching/Filter";
import Matching from "@/components/guardian/my_matching/Matching";
import NewMatching from "@/components/guardian/my_matching/NewMatching";
import Refusal from "@/components/guardian/my_matching/Refusal";
import { useState } from "react";

export default function Home() {
  const [selectedFilter, setSelectedFilter] = useState<string>("신규 매칭");
  return (
    <div className="max-tablet:w-full max-tablet:h-full max-tablet:flex max-tablet:flex-col">
      <div className="max-tabelt:h-[66px]">
        <TitleHeader name={"나의 매칭"} />
      </div>
      <div className="max-tablet:h-[31px]">
        <Filter
          selectedFilter={selectedFilter}
          setSelectedFilter={setSelectedFilter}
        />
      </div>
      {selectedFilter === "신규 매칭" ? (
        <NewMatching />
      ) : selectedFilter === "조율 중인 매칭" ? (
        <Matching />
      ) : selectedFilter === "수락한 요청" ? (
        <Accept />
      ) : (
        <Refusal />
      )}
    </div>
  );
}
