import Image from "next/image";

export default function ElderInfo() {
  return (
    <div className="max-tablet:w-full max-tablet:h-full max-tablet:flex max-tablet:flex-col max-tablet:items-center max-tablet:gap-[10px] max-tablet:mt-[23px]">
      <strong className="max-tablet:w-[313px] max-tablet:text-[26px] max-tablet:font-[700] max-tablet:text-[#000000] max-tablet:leading-[31px]">
        어르신 정보
      </strong>
      <div className="max-tablet:flex max-tablet:flex-col max-tablet:w-[313px] max-tablet:h-[343px] max-tablet:pt-[18px] max-tablet:bg-[#F0F0F0] max-tablet:items-start max-tablet:pl-[23px] max-tablet:gap-[14px] max-tablet:rounded-[14px]">
        <div className="max-tablet:flex max-tablet:gap-[16px] max-tablet:h-[26px]">
          <p className="max-tablet:w-[75px] max-tablet:text-[22px] max-tablet:whitespace-nowrap max-tablet:font-[500] max-tablet:text-[#9A9A9A]">
            이름
          </p>
          <p className="max-tablet:text-[22px] max-tablet:whitespace-nowrap max-tablet:font-[500] max-tablet:text-[#000000]">
            김*자
          </p>
        </div>
        <div className="max-tablet:flex max-tablet:gap-[16px] max-tablet:h-[26px]">
          <p className="max-tablet:w-[75px] max-tablet:text-[22px] max-tablet:whitespace-nowrap max-tablet:font-[500] max-tablet:text-[#9A9A9A]">
            요양등급
          </p>
          <p className="max-tablet:text-[22px] max-tablet:whitespace-nowrap max-tablet:font-[500] max-tablet:text-[#000000]">
            3등급
          </p>
        </div>
        <div className="max-tablet:flex max-tablet:gap-[16px] max-tablet:h-[26px]">
          <p className="max-tablet:w-[75px] max-tablet:text-[22px] max-tablet:whitespace-nowrap max-tablet:font-[500] max-tablet:text-[#9A9A9A]">
            성별
          </p>
          <p className="max-tablet:text-[22px] max-tablet:whitespace-nowrap max-tablet:font-[500] max-tablet:text-[#000000]">
            여성
          </p>
        </div>
        <div className="max-tablet:flex max-tablet:gap-[16px] max-tablet:h-[26px]">
          <p className="max-tablet:w-[75px] max-tablet:text-[22px] max-tablet:whitespace-nowrap max-tablet:font-[500] max-tablet:text-[#9A9A9A]">
            나이
          </p>
          <p className="max-tablet:text-[22px] max-tablet:whitespace-nowrap max-tablet:font-[500] max-tablet:text-[#000000]">
            85세
          </p>
        </div>
        <div className="max-tablet:flex max-tablet:gap-[16px] max-tablet:h-[26px]">
          <p className="max-tablet:w-[75px] max-tablet:text-[22px] max-tablet:whitespace-nowrap max-tablet:font-[500] max-tablet:text-[#9A9A9A]">
            몸무게
          </p>
          <p className="max-tablet:text-[22px] max-tablet:whitespace-nowrap max-tablet:font-[500] max-tablet:text-[#000000]">
            58kg
          </p>
        </div>
        <div className="max-tablet:flex max-tablet:gap-[16px] max-tablet:h-[26px]">
          <p className="max-tablet:w-[75px] max-tablet:text-[22px] max-tablet:whitespace-nowrap max-tablet:font-[500] max-tablet:text-[#9A9A9A]">
            질병
          </p>
          <p className="max-tablet:text-[22px] max-tablet:whitespace-nowrap max-tablet:font-[500] max-tablet:text-[#000000]">
            난청, 관절
          </p>
        </div>
        <div className="max-tablet:flex max-tablet:gap-[16px] max-tablet:h-[26px]">
          <p className="max-tablet:w-[75px] max-tablet:text-[22px] max-tablet:whitespace-nowrap max-tablet:font-[500] max-tablet:text-[#9A9A9A]">
            인지상태
          </p>
          <p className="max-tablet:text-[22px] max-tablet:whitespace-nowrap max-tablet:font-[500] max-tablet:text-[#000000]">
            정상(치매 증상 없음)
          </p>
        </div>
        <div className="max-tablet:flex max-tablet:gap-[16px] max-tablet:h-[26px]">
          <p className="max-tablet:w-[75px] max-tablet:text-[22px] max-tablet:whitespace-nowrap max-tablet:font-[500] max-tablet:text-[#9A9A9A]">
            동거여부
          </p>
          <p className="max-tablet:text-[22px] max-tablet:whitespace-nowrap max-tablet:font-[500] max-tablet:text-[#000000]">
            독거중
          </p>
        </div>
      </div>
      <strong className="max-tablet:w-[313px] max-tablet:text-[26px] max-tablet:font-[700] max-tablet:text-[#000000] max-tablet:leading-[31px] max-tablet:mt-[36px]">
        근무지
      </strong>
      <div className="max-tablet:flex max-tablet:w-[313px] max-tablet:h-[90px] max-tablet:bg-[#F0F0F0] max-tablet:items-center max-tablet:pl-[17px] max-tablet:gap-[10px] max-tablet:rounded-[14px]">
        <Image
          src="/assets/icons/location.svg"
          alt="위치;"
          width={30}
          height={30}
          className="max-tablet:w-[30px] max-tablet:h-[30px]"
        />
        <p className="max-tablet:text-[22px] max-tablet:font-[500] max-tablet:text-[#000000] max-tablet:line-clamp-2">
          서울특별시 종로구 창신동 702 창신쌍용1단지아파트
        </p>
      </div>
      <strong className="max-tablet:w-[313px] max-tablet:text-[26px] max-tablet:font-[700] max-tablet:text-[#000000] max-tablet:leading-[31px] max-tablet:mt-[30px]">
        근무 조건
      </strong>
      <div className="max-tablet:flex max-tablet:flex-col max-tablet:w-[313px] max-tablet:h-[145px] max-tablet:bg-[#F0F0F0] max-tablet:items-start max-tablet:justify-center max-tablet:pl-[22px] max-tablet:gap-[10px] max-tablet:rounded-[14px]">
        <div className="max-tablet:flex max-tablet:gap-[16px] max-tablet:h-[26px]">
          <p className="max-tablet:w-[75px] max-tablet:text-[22px] max-tablet:whitespace-nowrap max-tablet:font-[500] max-tablet:text-[#9A9A9A]">
            기간
          </p>
          <p className="max-tablet:text-[22px] max-tablet:whitespace-nowrap max-tablet:font-[500] max-tablet:text-[#000000]">
            월~금 (주 5일)
          </p>
        </div>
        <div className="max-tablet:flex max-tablet:gap-[16px] max-tablet:h-[26px]">
          <p className="max-tablet:w-[75px] max-tablet:text-[22px] max-tablet:whitespace-nowrap max-tablet:font-[500] max-tablet:text-[#9A9A9A]">
            시간
          </p>
          <p className="max-tablet:text-[22px] max-tablet:whitespace-nowrap max-tablet:font-[500] max-tablet:text-[#000000]">
            09:00~12:00
          </p>
        </div>
        <div className="max-tablet:flex max-tablet:gap-[16px] max-tablet:h-[26px]">
          <p className="max-tablet:w-[75px] max-tablet:text-[22px] max-tablet:whitespace-nowrap max-tablet:font-[500] max-tablet:text-[#9A9A9A]">
            급여
          </p>
          <p className="max-tablet:text-[22px] max-tablet:whitespace-nowrap max-tablet:font-[500] max-tablet:text-[#000000]">
            시급 15,000원
          </p>
        </div>
      </div>
      <strong className="max-tablet:w-[313px] max-tablet:text-[26px] max-tablet:font-[700] max-tablet:text-[#000000] max-tablet:leading-[31px] max-tablet:mt-[36px]">
        케어 필요 항목
      </strong>
      <div className="max-tablet:flex max-tablet:flex-col max-tablet:w-[313px] max-tablet:h-[277px] max-tablet:bg-[#F0F0F0] max-tablet:pl-[23px] max-tablet:pt-[14px] max-tablet:gap-[10px] max-tablet:rounded-[14px]  max-tablet:inline-flex">
        <p className="max-tablet:text-[22px] max-tablet:font-[700] max-tablet:text-[#676767]">
          이동보조
        </p>
        <div className="max-tablet:flex max-tablet:flex-wrap max-tablet:gap-[10px]">
          <div className="max-tablet:px-[10px] max-tablet:py-[5px] max-tablet:h-[34px] max-tablet:flex max-tablet:justify-center max-tablet:items-center max-tablet:bg-[#B3B3B3] max-tablet:rounded-[8px]">
            <p className="max-tablet:text-[20px] max-tablet:font-[500] max-tablet:text-[#FFFFFF]">
              휠체어 이동보조
            </p>
          </div>
        </div>
        <p className="max-tablet:text-[22px] max-tablet:font-[700] max-tablet:text-[#676767]">
          생활보조
        </p>
        <div className="max-tablet:flex max-tablet:flex-wrap max-tablet:gap-[6px]">
          <div className="max-tablet:px-[10px] max-tablet:py-[5px] max-tablet:h-[34px] max-tablet:flex max-tablet:justify-center max-tablet:items-center max-tablet:bg-[#B3B3B3] max-tablet:rounded-[8px]">
            <p className="max-tablet:text-[20px] max-tablet:font-[500] max-tablet:text-[#FFFFFF]">
              청소
            </p>
          </div>
          <div className="max-tablet:px-[10px] max-tablet:py-[5px] max-tablet:h-[34px] max-tablet:flex max-tablet:justify-center max-tablet:items-center max-tablet:bg-[#B3B3B3] max-tablet:rounded-[8px]">
            <p className="max-tablet:text-[20px] max-tablet:font-[500] max-tablet:text-[#FFFFFF]">
              빨래 도움
            </p>
          </div>
          <div className="max-tablet:px-[10px] max-tablet:py-[5px] max-tablet:h-[34px] max-tablet:flex max-tablet:justify-center max-tablet:items-center max-tablet:bg-[#B3B3B3] max-tablet:rounded-[8px]">
            <p className="max-tablet:text-[20px] max-tablet:font-[500] max-tablet:text-[#FFFFFF]">
              말벗 등 정서지원
            </p>
          </div>
          <div className="max-tablet:px-[10px] max-tablet:py-[5px] max-tablet:h-[34px] max-tablet:flex max-tablet:justify-center max-tablet:items-center max-tablet:bg-[#B3B3B3] max-tablet:rounded-[8px]">
            <p className="max-tablet:text-[20px] max-tablet:font-[500] max-tablet:text-[#FFFFFF]">
              산책 등 간단한 운동
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
