import Image from "next/image";

export default function Account() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center gap-[20px]">
      <Image
        src="/assets/images/AcceptImg.svg"
        alt="미완성 페이지 사진"
        width={400}
        height={400}
      />
      <p className="text-[25px] font-[700] text-[#191A1C]">
        이 페이지는 아직 완성되지 않았습니다.
      </p>
    </div>
  );
}
