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
    <div className="max-tablet:w-[327px] max-tablet:flex max-tablet:flex-col max-tablet:mt-[28px]">
      <p className="max-tablet:text-[26px] max-tablet:font-[700] max-tablet:text-[#000000] max-tablet:leading-[31px]">
        {`조율 중인 매칭이 ${matching.length}건 있어요`}
      </p>

      {/* 터치 슬라이드 컨테이너 */}
      <div className="max-tablet:flex max-tablet:gap-[10px] max-tablet:overflow-x-auto max-tablet:snap-x max-tablet:snap-mandatory max-tablet:scroll-smooth">
        {matching.map((match, index) => (
          <div
            key={index}
            className="max-tablet:w-full max-tablet:shrink-0 max-tablet:bg-[#F0F0F0] max-tablet:rounded-[14px] max-tablet:mt-[18px] max-tablet:snap-center"
          >
            <div className="max-tablet:pl-[20px] max-tablet:pt-[17px]">
              {/* 필터 */}
              <div className="max-tablet:flex max-tablet:gap-[10px]">
                {match.fileter.map((filter, index) => (
                  <div
                    key={index}
                    className="max-tablet:text-[#FFFFFF] max-tablet:h-[31px] max-tablet:flex max-tablet:justify-center max-tablet:items-center max-tablet:px-[10px] max-tablet:py-[5px] max-tablet:bg-[#B3B3B3] max-tablet:rounded-[8px]"
                  >
                    <p>{filter}</p>
                  </div>
                ))}
              </div>
              {/* 기간 */}
              <div className="max-tablet:flex max-tablet:h-[21px] max-tablet:gap-[23px] max-tablet:mt-[15px]">
                <p className="max-tablet:text-[18px] max-tablet:font-[500] max-tablet:text-[#9A9A9A]">
                  기간
                </p>
                <p className="max-tablet:text-[18px] max-tablet:font-[500] max-tablet:text-[#000000]">
                  {match.day}
                </p>
              </div>
              {/* 시간 */}
              <div className="max-tablet:flex max-tablet:h-[21px] max-tablet:gap-[23px] max-tablet:mt-[12px]">
                <p className="max-tablet:text-[18px] max-tablet:font-[500] max-tablet:text-[#9A9A9A]">
                  시간
                </p>
                <p className="max-tablet:text-[18px] max-tablet:font-[500] max-tablet:text-[#000000]">
                  {match.time}
                </p>
              </div>
              {/* 장소 */}
              <div className="max-tablet:flex max-tablet:h-[21px] max-tablet:gap-[23px] max-tablet:mt-[12px]">
                <p className="max-tablet:text-[18px] max-tablet:font-[500] max-tablet:text-[#9A9A9A]">
                  장소
                </p>
                <p className="max-tablet:text-[18px] max-tablet:font-[500] max-tablet:text-[#000000]">
                  {match.location}
                </p>
              </div>
              {/* 급여 */}
              <div className="max-tablet:flex max-tablet:gap-[23px] max-tablet:mt-[14px]">
                <p className="max-tablet:text-[18px] max-tablet:h-[21px] max-tablet:font-[500] max-tablet:text-[#9A9A9A]">
                  급여
                </p>
                <p className="max-tablet:text-[22px] max-tablet:h-[26px] max-tablet:font-[600] max-tablet:text-[#000000] max-tablet:leading-[26px]">
                  {match.salary}
                </p>
              </div>
            </div>
            <div className="max-tablet:flex max-tablet:justify-between max-tablet:font-[600] max-tablet:mt-[16px] max-tablet:px-[8px] max-tablet:pb-[9px]">
              <Link
                href="/guardian/main/matching_info"
                className="max-tablet:text-[#000000] max-tablet:w-[153px] max-tablet:font-[600] max-tablet:h-[52px] max-tablet:bg-[#FFFFFF] max-tablet:rounded-[10px] max-tablet:flex max-tablet:justify-center max-tablet:items-center max-tablet:cursor-pointer"
              >
                자세히 보기
              </Link>
              <Link
                href={`/guardian/current_matching?id=${encodeURIComponent(
                  match.id
                )}`}
                className="max-tablet:text-[#FFFFFF] max-tablet:w-[153px] max-tablet:font-[600] max-tablet:h-[52px] max-tablet:bg-[#CFCFCF] max-tablet:rounded-[10px] max-tablet:flex max-tablet:justify-center max-tablet:items-center max-tablet:cursor-pointer"
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
