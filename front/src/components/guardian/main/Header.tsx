import Image from "next/image";

export default function Header() {
  const profile = [
    {
      profile: "/globe.svg",
      name: "아무개",
    },
  ];
  return (
    <div className="flex items-start bg-[#EDEDED] w-screen h-[153px] rounded-b-[14px]">
      <div className="w-[90px] h-[90px] bg-[#FFFFFF] rounded-full flex justify-center items-center ml-[21px] mt-[24px]">
        <Image
          src={profile[0].profile}
          alt="logo"
          width={85}
          height={85}
          className="w-[85px] h-[85px] rounded-full"
        />
      </div>
      <div className="ml-[20px] mt-[24px] flex flex-col gap-[6px]">
        <p className="text-[22px] font-[500] text-[#A0A0A0] h-[26px]">
          요양보호사
        </p>
        <strong className="text-[32px] font-[700] text-[#000000] leading-[38px]">
          {profile[0].name}
        </strong>
        <div className="flex items-start gap-[3px] mt-[5px]">
          <Image
            src="/assets/icons/location.svg"
            alt="위치"
            width={24}
            height={24}
          />
          <p className="text-[18px] font-[600] text-[#858585] h-[21px]">
            서울시 종로구
          </p>
        </div>
      </div>
    </div>
  );
}
