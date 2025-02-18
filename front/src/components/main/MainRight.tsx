import Image from "next/image";

export default function MainRight() {
  return (
    <div className="w-[580px] h-[358px] relative ml-[194px] max-tablet:hidden">
      <Image
        src="/assets/images/sample_back.png"
        alt="뒷 배경"
        width={500}
        height={273}
        className="absolute z-[20] bottom-[200px] right-[10px] w-[500px] h-[273px]"
      />
      <Image
        src="/assets/images/sample_front.png"
        alt="앞 배경"
        width={288}
        height={259}
        className="absolute z-[30] w-[288px] h-[259px]"
      />
    </div>
  );
}
