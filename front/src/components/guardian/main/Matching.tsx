import Link from "next/link";

export default function Matching() {
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

  return (
    <div className="w-[327px] flex flex-col mt-[28px]">
      <p className="text-[26px] font-[700] text-[#000000] leading-[31px]">
        {`조율 중인 매칭이 ${matching.length}건 있어요`}
      </p>

      {/* 터치 슬라이드 컨테이너 */}
      <div className="flex gap-[10px] overflow-x-auto snap-x snap-mandatory scroll-smooth">
        {matching.map((match, index) => (
          <div
            key={index}
            className="w-full shrink-0 bg-[#F0F0F0] rounded-[14px] mt-[18px] snap-center"
          >
            <div className="pl-[20px] pt-[17px]">
              {/* 필터 */}
              <div className="flex gap-[10px]">
                {match.fileter.map((filter, index) => (
                  <div
                    key={index}
                    className="text-[#FFFFFF] h-[31px] flex justify-center items-center px-[10px] py-[5px] bg-[#B3B3B3] rounded-[8px]"
                  >
                    <p>{filter}</p>
                  </div>
                ))}
              </div>
              {/* 기간 */}
              <div className="flex h-[21px] gap-[23px] mt-[15px]">
                <p className="text-[18px] font-[500] text-[#9A9A9A]">기간</p>
                <p className="text-[18px] font-[500] text-[#000000]">
                  {match.day}
                </p>
              </div>
              {/* 시간 */}
              <div className="flex h-[21px] gap-[23px] mt-[12px]">
                <p className="text-[18px] font-[500] text-[#9A9A9A]">시간</p>
                <p className="text-[18px] font-[500] text-[#000000]">
                  {match.time}
                </p>
              </div>
              {/* 장소 */}
              <div className="flex h-[21px] gap-[23px] mt-[12px]">
                <p className="text-[18px] font-[500] text-[#9A9A9A]">장소</p>
                <p className="text-[18px] font-[500] text-[#000000]">
                  {match.location}
                </p>
              </div>
              {/* 급여 */}
              <div className="flex gap-[23px] mt-[14px]">
                <p className="text-[18px] h-[21px] font-[500] text-[#9A9A9A]">
                  급여
                </p>
                <p className="text-[22px] h-[26px] font-[600] text-[#000000] leading-[26px]">
                  {match.salary}
                </p>
              </div>
            </div>
            <div className="flex justify-between font-[600] mt-[16px] px-[8px] pb-[9px]">
              <Link
                href="/guardian/main/matching_info"
                className="text-[#000000] w-[153px] font-[600] h-[52px] bg-[#FFFFFF] rounded-[10px] flex justify-center items-center cursor-pointer"
              >
                자세히 보기
              </Link>
              <Link
                href={`/guardian/current_matching?id=${encodeURIComponent(
                  match.id
                )}`}
                className="text-[#FFFFFF] w-[153px] font-[600] h-[52px] bg-[#CFCFCF] rounded-[10px] flex justify-center items-center cursor-pointer"
              >
                조율하러 가기
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
