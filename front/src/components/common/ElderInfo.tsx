import Image from "next/image";

export default function ElderInfo() {
  return (
    <div className="w-full h-full flex flex-col items-center gap-[10px] mt-[23px]">
      <strong className="w-[313px] text-[26px] font-[700] text-[#000000] leading-[31px]">
        어르신 정보
      </strong>
      <div className="flex flex-col w-[313px] h-[343px] pt-[18px] bg-[#F0F0F0] items-start pl-[23px] gap-[14px] rounded-[14px]">
        <div className="flex gap-[16px] h-[26px]">
          <p className="w-[75px] text-[22px] whitespace-nowrap font-[500] text-[#9A9A9A]">
            이름
          </p>
          <p className="text-[22px] whitespace-nowrap font-[500] text-[#000000]">
            김*자
          </p>
        </div>
        <div className="flex gap-[16px] h-[26px]">
          <p className="w-[75px] text-[22px] whitespace-nowrap font-[500] text-[#9A9A9A]">
            요양등급
          </p>
          <p className="text-[22px] whitespace-nowrap font-[500] text-[#000000]">
            3등급
          </p>
        </div>
        <div className="flex gap-[16px] h-[26px]">
          <p className="w-[75px] text-[22px] whitespace-nowrap font-[500] text-[#9A9A9A]">
            성별
          </p>
          <p className="text-[22px] whitespace-nowrap font-[500] text-[#000000]">
            여성
          </p>
        </div>
        <div className="flex gap-[16px] h-[26px]">
          <p className="w-[75px] text-[22px] whitespace-nowrap font-[500] text-[#9A9A9A]">
            나이
          </p>
          <p className="text-[22px] whitespace-nowrap font-[500] text-[#000000]">
            85세
          </p>
        </div>
        <div className="flex gap-[16px] h-[26px]">
          <p className="w-[75px] text-[22px] whitespace-nowrap font-[500] text-[#9A9A9A]">
            몸무게
          </p>
          <p className="text-[22px] whitespace-nowrap font-[500] text-[#000000]">
            58kg
          </p>
        </div>
        <div className="flex gap-[16px] h-[26px]">
          <p className="w-[75px] text-[22px] whitespace-nowrap font-[500] text-[#9A9A9A]">
            질병
          </p>
          <p className="text-[22px] whitespace-nowrap font-[500] text-[#000000]">
            난청, 관절
          </p>
        </div>
        <div className="flex gap-[16px] h-[26px]">
          <p className="w-[75px] text-[22px] whitespace-nowrap font-[500] text-[#9A9A9A]">
            인지상태
          </p>
          <p className="text-[22px] whitespace-nowrap font-[500] text-[#000000]">
            정상(치매 증상 없음)
          </p>
        </div>
        <div className="flex gap-[16px] h-[26px]">
          <p className="w-[75px] text-[22px] whitespace-nowrap font-[500] text-[#9A9A9A]">
            동거여부
          </p>
          <p className="text-[22px] whitespace-nowrap font-[500] text-[#000000]">
            독거중
          </p>
        </div>
      </div>
      <strong className="w-[313px] text-[26px] font-[700] text-[#000000] leading-[31px] mt-[36px]">
        근무지
      </strong>
      <div className="flex w-[313px] h-[90px] bg-[#F0F0F0] items-center pl-[17px] gap-[10px] rounded-[14px]">
        <Image
          src="/assets/icons/location.svg"
          alt="위치;"
          width={30}
          height={30}
          className="w-[30px] h-[30px]"
        />
        <p className="text-[22px] font-[500] text-[#000000] line-clamp-2">
          서울특별시 종로구 창신동 702 창신쌍용1단지아파트
        </p>
      </div>
      <strong className="w-[313px] text-[26px] font-[700] text-[#000000] leading-[31px] mt-[30px]">
        근무 조건
      </strong>
      <div className="flex flex-col w-[313px] h-[145px] bg-[#F0F0F0] items-start justify-center pl-[22px] gap-[10px] rounded-[14px]">
        <div className="flex gap-[16px] h-[26px]">
          <p className="w-[75px] text-[22px] whitespace-nowrap font-[500] text-[#9A9A9A]">
            기간
          </p>
          <p className="text-[22px] whitespace-nowrap font-[500] text-[#000000]">
            월~금 (주 5일)
          </p>
        </div>
        <div className="flex gap-[16px] h-[26px]">
          <p className="w-[75px] text-[22px] whitespace-nowrap font-[500] text-[#9A9A9A]">
            시간
          </p>
          <p className="text-[22px] whitespace-nowrap font-[500] text-[#000000]">
            09:00~12:00
          </p>
        </div>
        <div className="flex gap-[16px] h-[26px]">
          <p className="w-[75px] text-[22px] whitespace-nowrap font-[500] text-[#9A9A9A]">
            급여
          </p>
          <p className="text-[22px] whitespace-nowrap font-[500] text-[#000000]">
            시급 15,000원
          </p>
        </div>
      </div>
      <strong className="w-[313px] text-[26px] font-[700] text-[#000000] leading-[31px] mt-[36px]">
        케어 필요 항목
      </strong>
      <div className="flex flex-col w-[313px] h-[277px] bg-[#F0F0F0] pl-[23px] pt-[14px] gap-[10px] rounded-[14px]  inline-flex">
        <p className="text-[22px] font-[700] text-[#676767]">이동보조</p>
        <div className="flex flex-wrap gap-[10px]">
          <div className="px-[10px] py-[5px] h-[34px] flex justify-center items-center bg-[#B3B3B3] rounded-[8px] bg-[#D7F3D1]">
            <p className="text-[20px] font-[500] text-[#58C185]">
              휠체어 이동보조
            </p>
          </div>
        </div>
        <p className="text-[22px] font-[700] text-[#676767]">일상보조</p>
        <div className="flex flex-wrap gap-[6px]">
          <div className="px-[10px] py-[5px] h-[34px] flex justify-center items-center bg-[#B3B3B3] rounded-[8px] bg-[#D7F3D1]">
            <p className="text-[20px] font-[500] text-[#58C185]">청소</p>
          </div>
          <div className="px-[10px] py-[5px] h-[34px] flex justify-center items-center bg-[#B3B3B3] rounded-[8px] bg-[#D7F3D1]">
            <p className="text-[20px] font-[500] text-[#58C185]">빨래 도움</p>
          </div>
          <div className="px-[10px] py-[5px] h-[34px] flex justify-center items-center bg-[#B3B3B3] rounded-[8px] bg-[#D7F3D1]">
            <p className="text-[20px] font-[500] text-[#58C185]">
              말벗 등 정서지원
            </p>
          </div>
          <div className="px-[10px] py-[5px] h-[34px] flex justify-center items-center bg-[#B3B3B3] rounded-[8px] bg-[#D7F3D1]">
            <p className="text-[20px] font-[500] text-[#58C185]">
              산책 등 간단한 운동
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
