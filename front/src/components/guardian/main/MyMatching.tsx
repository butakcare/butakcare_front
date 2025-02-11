import Image from "next/image";

export default function MyMatching() {
  return (
    <div className="max-tablet:w-[353px] max-tablet:h-[150px] max-tablet:rounded-[14px] max-tablet:bg-[#EDEDED] max-tablet:mt-[57px]">
      <div className="max-tablet:flex max-tablet:justify-between max-tablet:items-center">
        <strong>나의 매칭</strong>
        <Image
          src="/assets/icons/icon_right_arrow.svg"
          alt="화살표"
          width={20}
          height={20}
          className="max-tablet:w-[20px] max-tablet:h-[20px]"
        />
      </div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}
