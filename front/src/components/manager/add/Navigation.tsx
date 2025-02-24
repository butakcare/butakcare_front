import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface Props {
  selected: number;
}

export default function Navigation({ selected }: Props) {
  const router = useRouter();
  const menuItems = ["1. 기본 정보", "2. 근무 정보", "3. 케어 필요 항목"];

  const handleRouter = () => {
    router.push("/manager/main");
  };
  return (
    <div className="w-[247px] h-auto border-r border-[#909090] flex flex-col justify-between pl-[33px] pt-[34px]">
      <div className="flex flex-col gap-[16px]">
        <Image
          src="/assets/icons/icon_logo_full.svg"
          alt="메인 로고"
          width={127}
          height={27}
          onClick={() => handleRouter()}
        />
        <div className="mt-[48px] w-[191px] h-[49px] flex items-center justify-center bg-[#D7F3D1] rounded-[10px]">
          <strong className="text-[24px] text-[#2D8859] font-[700] h-[29px] flex items-center">
            어르신 정보 등록
          </strong>
        </div>
        <div className="flex flex-col gap-[16px] pl-[27px]">
          {menuItems.map((item, index) => (
            <div
              key={index + 1}
              className={`w-[178px] h-[29px] rounded-[10px] bg-[#FFFFFF] flex items-center
                    ${
                      index == selected ? "text-[#65CCB2] " : "text-[#9A9A9A]"
                    }  
                    `}
            >
              <p className="text-[24px] font-[700]">{item}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="mb-[50px] flex flex-col gap-[23px] text-[22px] items-center mr-[50px] font-bold text-[#9A9A9A]">
        <Link href="/manager/main" className="underline">
          둘러보기
        </Link>
      </div>
    </div>
  );
}
