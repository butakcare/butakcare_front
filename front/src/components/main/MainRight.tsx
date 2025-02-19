import Image from "next/image";

export default function MainRight() {
  return (
    <div className="w-[580px] h-[358px] relative ml-[194px] max-tablet:hidden">
      <Image
        src="/assets/images/mockup.png"
        alt="앞 배경"
        width={683}
        height={443}
        className="absolute bottom-[20px] w-[683px] h-[443px]"
      />
    </div>
  );
}
