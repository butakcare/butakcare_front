import Image from "next/image";
import { SetStateAction } from "react";
import { useRouter } from "next/navigation";

interface Props {
  step: number;
  selected: number;
  setSelected: React.Dispatch<SetStateAction<number>>;
}

export default function Navi({ selected, setSelected, step }: Props) {
  const menuItems = ["로그인", "회원가입"];
  const router = useRouter();

  const handleCLick = (index: number) => {
    setSelected(index);

    if (index === 1) {
      // 로그인
      router.push("/sign_in?type=manager");
    } else if (index === 2) {
      // 회원가입
      router.push("/sign_up/manager");
    }
  };
  const handleCenter = () => {
    router.push("/sign_up/manager/center");
  };
  const handleMain = () => {
    router.push(`/`);
  };
  const handleIn = () => {
    router.push(`/sign_up/manager`);
  };
  return (
    <div className="w-[247px] h-full border-r border-[#666666] flex flex-col justify-between p-[0px_33px] pt-[34px]">
      <div className="flex flex-col gap-[16px]">
        <Image
          src="/assets/icons/icon_logo_full.svg"
          alt="메인 로고"
          width={127}
          height={27}
          onClick={handleMain}
        />
        <div className="relative flex flex-col gap-[16px] mt-[48px]">
          {menuItems.map((item, index) => (
            <div
              key={index + 1}
              className={`w-[178px] h-[49px] rounded-[10px] flex items-center pl-[19px] cursor-pointer
                    ${
                      index == selected
                        ? "text-key bg-sub"
                        : "text-[#9A9A9A] bg-[#FFFFFF]"
                    }  
                    `}
              onClick={() => handleCLick(index + 1)}
            >
              <p className="text-[24px] font-[700]">{item}</p>
            </div>
          ))}
        </div>
        <div className="pt-[15px] pl-[27px] gap-[16px] flex flex-col">
          <div
            className={`text-[24px] font-bold ${
              step === 1 ? "text-key" : "text-[#A7ABA5]"
            }`}
            onClick={handleCenter}
          >
            1. 센터 등록
          </div>
          <div
            className={`text-[24px] font-bold ${
              step === 2 ? "text-key" : "text-[#A7ABA5]"
            }`}
            onClick={handleIn}
          >
            2. 관리자 가입
          </div>
        </div>
      </div>
    </div>
  );
}
