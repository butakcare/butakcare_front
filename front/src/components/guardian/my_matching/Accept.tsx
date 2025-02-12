export default function Accept() {
  const matching = [
    {
      created_at: "2025년 2월 10일",
      title: "종로노인종합복지관",
      day: "25.02.12(수)~25.02.17(월)",
      time: "09:00~12:00",
      location: "서울특별시 동작구",
      salary: "615,000원",
    },
    {
      created_at: "2025년 2월 10일",
      title: "종로노인종합복지관",
      day: "25.02.12(수)~25.02.17(월)",
      time: "13:00~16:00",
      location: "서울특별시 강남구",
      salary: "800,000원",
    },
    {
      created_at: "2025년 2월 10일",
      title: "종로노인종합복지관",
      day: "25.02.12(수)~25.02.17(월)",
      time: "09:00~12:00",
      location: "서울특별시 종로구",
      salary: "400,000원",
    },
  ];
  return (
    <div className="max-tablet:flex max-tablet:w-full max-tablet:flex-grow max-tablet:flex-col max-tablet:mt-[34px] max-tablet:pb-[30px]">
      <strong className="max-tablet:block max-tablet:text-left max-tablet:ml-[26px] max-tablet:text-[26px] max-tablet:font-[700] max-tablet:text-[#000000] max-tablet:leading-[31px]">{`수락한 요청이 ${matching.length}건 있어요`}</strong>
      {matching.map((match, index) => (
        <div
          key={index}
          className="max-tablet:flex max-tablet:flex-col max-tablet:items-center max-tablet:mt-[21px]"
        >
          <p className="max-tablet:w-[355px] max-tablet:text-left max-tablet:text-[18px] max-tablet:font-[500] max-tablet:text-[#9A9A9A]">
            {match.created_at}
          </p>
          <div className="max-tablet:w-[355px] max-tablet:h-[265px] max-tablet:bg-[#F0F0F0] max-tablet:mt-[14px] max-tablet:rounded-[14px]">
            <div className="max-tablet:pl-[14px] max-tablet:pt-[12px]">
              {/* 제목 */}
              <div className="max-tablet:flex">
                <p className="max-tablet:text-[22px] max-tablet:font-[600] max-tablet:text-[#000000]">
                  {match.title}
                </p>
              </div>
              {/* 기간 */}
              <div className="max-tablet:flex max-tablet:h-[21px] max-tablet:gap-[23px] max-tablet:mt-[18px]">
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
              <div className="max-tablet:flex max-tablet:gap-[23px] max-tablet:mt-[12px]">
                <p className="max-tablet:text-[18px] max-tablet:h-[21px] max-tablet:font-[500] max-tablet:text-[#9A9A9A]">
                  급여
                </p>
                <p className="max-tablet:text-[22px] max-tablet:h-[26px] max-tablet:font-[600] max-tablet:text-[#000000] max-tablet:leading-[26px]">
                  {match.salary}
                </p>
              </div>
            </div>
            <div className="max-tablet:flex max-tablet:justify-center max-tablet:gap-[4px] max-tablet:mt-[16px]">
              <button className="max-tablet:text-[#000000] max-tablet:text-[18px] max-tablet:font-[600] max-tablet:w-[168px] max-tablet:h-[52px] max-tablet:bg-[#FFFFFF] max-tablet:rounded-[10px] max-tablet:flex max-tablet:justify-center max-tablet:items-center max-tablet:cursor-pointer max-tablet:font-[600] max-tablet:px-[43px] max-tablet:py-[15px] max-tablet:whitespace-nowrap">
                자세히 보기
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
