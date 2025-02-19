import Link from "next/link";

export default function Matching() {
  const matching = [
    {
      created_at: "2025년 2월 15일",
      title: "종로노인종합복지관",
      day: "2025.03.15",
      days: "월, 화, 수",
      time: "09:00~12:00",
      location: "서울특별시 동작구",
      salary: "시급 15,000원",
      monthSalary: "월급 1,500,000원",
    },
    {
      created_at: "2025년 2월 13일",
      title: "가은요양원",
      day: "2025.02.28 ~",
      days: "월, 화, 수, 목",
      time: "13:00~16:00",
      location: "서울특별시 강남구",
      salary: "시급 10,000원",
      monthSalary: "월급 1,200,000원",
    },
    {
      created_at: "2025년 2월 12일",
      title: "종원요양원",
      day: "2025.03.02 ~",
      days: "월, 화, 수",
      time: "09:00~12:00",
      location: "서울특별시 종로구",
      salary: "시급 12,000원",
      monthSalary: "월급 1,400,000원",
    },
  ];
  return (
    <div className="flex w-full flex-grow flex-col mt-[34px] pb-[30px]">
      <strong className="block text-left ml-[26px] text-[26px] font-[700] text-[#000000] leading-[31px]">{`조율 중인 ${matching.length}건 있어요`}</strong>
      {matching.map((match, index) => (
        <div key={index} className="flex flex-col items-center mt-[21px] ">
          <p className="w-[355px] text-left text-[18px] font-[500] text-[#9A9A9A]">
            {match.created_at}
          </p>
          <div className="w-[355px] bg-[#F7F8FA] mt-[14px] rounded-[14px] pb-[15px]">
            <div className="pl-[14px] pt-[12px]">
              {/* 제목 */}
              <div className="flex">
                <p className="text-[22px] font-[600] text-[#191A1C]">
                  {match.title}
                </p>
              </div>
              {/* 기간 */}
              <div className="flex h-[21px] gap-[23px] mt-[18px]">
                <p className="text-[18px] font-[500] text-[#9A9A9A]">
                  시작날짜
                </p>
                <p className="text-[18px] font-[500] text-[#191A1C]">
                  {match.day}
                </p>
              </div>
              {/* 요일 */}
              <div className="flex h-[21px] gap-[23px] mt-[15px]">
                <p className="text-[18px] font-[500] text-[#9A9A9A]">요일</p>
                <p className="text-[18px] font-[500] text-[#191A1C]">
                  {match.days}
                </p>
              </div>
              {/* 시간 */}
              <div className="flex h-[21px] gap-[23px] mt-[12px]">
                <p className="text-[18px] font-[500] text-[#9A9A9A]">시간</p>
                <p className="text-[18px] font-[500] text-[#191A1C]">
                  {match.time}
                </p>
              </div>
              {/* 장소 */}
              <div className="flex h-[21px] gap-[23px] mt-[12px]">
                <p className="text-[18px] font-[500] text-[#9A9A9A]">장소</p>
                <p className="text-[18px] font-[500] text-[#191A1C]">
                  {match.location}
                </p>
              </div>
              {/* 급여 */}
              <div className="flex gap-[23px] mt-[12px]">
                <p className="text-[18px] h-[21px] font-[500] text-[#9A9A9A]">
                  급여
                </p>
                <p className="text-[18px] font-[600] text-[#191A1C] leading-[26px]">
                  {match.salary} <br />
                  {match.monthSalary}
                </p>
              </div>
            </div>
            <div className="flex justify-center gap-[4px] mt-[16px]">
              <Link
                href="/guardian/main/matching_info"
                className="text-[#000000] text-[18px] font-[600] w-[168px] h-[52px] bg-[#FFFFFF] rounded-[10px] flex justify-center items-center cursor-pointer font-[600] px-[43px] py-[15px] whitespace-nowrap"
              >
                자세히 보기
              </Link>
              <Link
                href="/guardian/current_matching"
                className="text-[#FFFFFF] text-[18px] font-[600] w-[168px] h-[52px] bg-[#58C185] rounded-[10px] flex justify-center items-center cursor-pointer font-[600] px-[43px] py-[15px] whitespace-nowrap"
              >
                매칭하러 가기
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
