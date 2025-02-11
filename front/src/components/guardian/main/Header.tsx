import Image from "next/image";

export default function Header() {
  const profile = [
    {
      profile: "/globe.svg",
      name: "아무개",
    },
  ];
  return (
    <div className="flex justify-start max-tablet:bg-[#EDEDED] max-tablet:w-screen max-tablet:h-[153px] max-tablet:rounded-b-[14px]">
      <div className="max-tablet:w-[90px] max-tablet:h-[90px] max-tablet:bg-[#FFFFFF] max-tablet:rounded-full max-tablet:flex max-tablet:justify-center max-tablet:items-center max-tablet:ml-[21px] max-tablet:mt-[24px]">
        <Image
          src={profile[0].profile}
          alt="logo"
          width={85}
          height={85}
          className="max-tablet:w-[85px] max-tablet:h-[85px] max-tablet:rounded-full"
        />
      </div>
      <div className="max-tablet:ml-[20px] max-tablet:mt-[24px] max-tablet:flex max-tablet:flex-col max-tablet:gap-[6px]">
        <p className="max-tablet:text-[22px] max-tablet:font-[500] max-tablet:text-[#A0A0A0] max-tablet:h-[26px]">
          요양보호사
        </p>
        <strong className="max-tablet:text-[32px] max-tablet:font-[700] max-tablet:text-[#000000] max-tablet:leading-[38px]">
          {profile[0].name}
        </strong>
        <div className="max-tablet:flex max-tablet:items-start max-tablet:gap-[3px] max-tablet:mt-[5px]">
          <Image
            src="/assets/icons/location.svg"
            alt="위치"
            width={24}
            height={24}
          />
          <p className="max-tablet:text-[18px] max-tablet:font-[600] max-tablet:text-[#858585] max-tablet:h-[21px]">
            서울시 종로구
          </p>
        </div>
      </div>
    </div>
  );
}
