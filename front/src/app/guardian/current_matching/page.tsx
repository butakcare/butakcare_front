"use client";

import TitleHeader from "@/components/common/TitleHeader";
import MatchingRespond from "@/components/guardian/current_matching/MatchingRespond";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

export default function Home() {
  return (
    <Suspense fallback={<div>로딩 중...</div>}>
      <InnerComponent />
    </Suspense>
  );
}

function InnerComponent() {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");

  const matching = [
    {
      id: 1,
      created_at: "2025년 2월 10일",
      filters: ["3등급", "이동보조", "배변보조"],
      schedules: ["월", "화", "수", "목", "금"],
      times: ["09:00~12:00"],
      location: "서울특별시 동작구",
      salary: "시급 15,000원",
    },
    {
      id: 2,
      created_at: "2025년 2월 11일",
      filters: ["3등급", "이동보조", "배변보조"],
      schedules: ["월", "화", "수", "목", "금"],
      times: ["09:00~12:00"],
      location: "서울특별시 강남구",
      salary: "시급 75,000원",
    },
    {
      id: 3,
      created_at: "2025년 2월 12일",
      filters: ["3등급", "이동보조", "배변보조"],
      schedules: ["월", "화", "수", "목", "금"],
      times: ["09:00~12:00"],
      location: "서울특별시 종로구",
      salary: "시급 22,000원",
    },
  ];
  const filterMatch = matching.find((match) => match.id === Number(id));

  return (
    <div className="tablet:w-[450px] tablet:overflow-y-auto tablet:border-x tablet:border-[#909090] tablet:items-center w-full h-full flex flex-col">
      <div>
        <TitleHeader name={"매칭 응답하기"} />
      </div>
      {filterMatch ? (
        <MatchingRespond match={filterMatch} />
      ) : (
        <div>No matching data found</div>
      )}
    </div>
  );
}
