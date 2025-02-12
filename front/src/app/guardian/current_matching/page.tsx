"use client";

import TitleHeader from "@/components/common/TitleHeader";
import MatchingRespond from "@/components/guardian/current_matching/MatchingRespond";
import { useSearchParams } from "next/navigation";

export default function Home() {
  const searchParams = useSearchParams();

  const id = searchParams.get("id");

  const matching = [
    {
      id: 1,
      created_at: "2025년 2월 10일",
      fileter: ["3등급", "이동보조", "배변보조"],
      day: "월~금 (주 5일)",
      time: "09:00~12:00",
      location: "서울특별시 동작구",
      salary: "시급 15,000원",
    },
    {
      id: 2,
      created_at: "2025년 2월 11일",
      fileter: ["3등급", "이동보조", "배변보조"],
      day: "월~금 (주 5일)",
      time: "13:00~16:00",
      location: "서울특별시 강남구",
      salary: "시급 75,000원",
    },
    {
      id: 3,
      created_at: "2025년 2월 12일",
      fileter: ["3등급", "이동보조", "배변보조"],
      day: "월~금 (주 5일)",
      time: "09:00~12:00",
      location: "서울특별시 종로구",
      salary: "시급 22,000원",
    },
  ];
  const filterMatch = matching.find((match) => match.id == Number(id));

  return (
    <div className="max-tablet:w-screen max-tablet:h-screen max-tablet:flex max-tablet:flex-col">
      <TitleHeader name={"매칭 응답하기"} />
      {filterMatch ? (
        <MatchingRespond match={filterMatch} />
      ) : (
        <div>No matching data found</div>
      )}
    </div>
  );
}
