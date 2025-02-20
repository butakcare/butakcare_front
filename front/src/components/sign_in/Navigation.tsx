import Image from "next/image";
import { SetStateAction } from "react";
import { useRouter } from "next/navigation";

interface Props {
  selected: number;
  setSelected: React.Dispatch<SetStateAction<number>>;
}

export default function Navigation({ selected, setSelected }: Props) {
  const menuItems = ["로그인", "회원가입"];
  const router = useRouter();

  const handleCLick = (index: number) => {
    if (index == 1) {
      router.push("sign_in/selected");
    } else {
      setSelected(index);
    }
    if (index == 2) {
      router.push("/sign_up");
    } else {
      setSelected(index);
    }
  };
  const handleMain = () => {
    router.push(`/`);
  };
  return (
    <div className="w-[247px] h-full border-r border-[#909090] flex flex-col justify-between pl-[33px] pr-[33px] pt-[34px]">
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
                      index + 1 == selected
                        ? "text-key bg-sub"
                        : "text-[#9A9A9A] bg-[#FFFFFF]"
                    }  
                    `}
              onClick={() => handleCLick(index + 1)}
            >
              <p className="text-[24px] font-[700]">{item}</p>
            </div>
          ))}
          {selected == 1 && (
            <div
              className="relative w-[203px] px-[10px] py-[15px] text-[#666666] text-[22px] bg-gray-100 rounded-[10px]"
              style={{
                boxShadow: "0px 6.757px 69.823px 0px rgba(0, 0, 0, 0.25)",
              }}
            >
              <p>아직 부탁케어 계정이 없으신가요?</p>

              {/* 말풍선 꼬리 */}
              <div className="absolute w-4 h-4 rotate-45 bg-gray-100 -top-2 left-[50px]"></div>
            </div>
          )}
        </div>
      </div>
      {/* <div className="mb-[50px] flex flex-col gap-[23px] text-[22px] items-center mr-[50px] font-bold text-[#9A9A9A]">
        <Link href="/manager/main" className="underline">
          둘러보기
        </Link>
      </div> */}
    </div>
  );
}
