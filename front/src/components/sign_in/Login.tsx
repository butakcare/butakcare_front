import { useRouter, useSearchParams } from "next/navigation";
import React, { SetStateAction, useEffect, useState } from "react";

interface Prop {
  setType: React.Dispatch<SetStateAction<string>>;
}

export default function Login({ setType }: Prop) {
  const searchParams = useSearchParams();
  const accountType = searchParams.get("type");
  const router = useRouter();
  const [id, setId] = useState<string>("");
  const [pw, setPw] = useState<string>("");

  useEffect(() => {
    if (accountType) {
      setType(accountType);
    }
  }, [accountType, setType]);

  const handleLogin = () => {
    if (id && pw) {
      if (accountType == "manager") {
        router.push("/manager/main");
      } else if (accountType == "guardian") {
        router.push("/guardian/main");
      } else {
        router.push("/sign_in/selected");
      }
    }
  };

  return (
    <div className="w-full h-full pl-[30px] pt-[31px]">
      <strong className="text-[30px] font-[700] text-[#2E2E2E]">
        부탁케어 로그인
      </strong>
      <div className="flex flex-col w-[576px] h-[586px] bg-[#F7F8FA] mt-[45px] rounded-[10px] pl-[30px] pt-[30px] gap-[20px]">
        <label className="flex flex-col text-[24px] font-[600] text-[#191A1C]">
          아이디
          <input
            onChange={(e) => setId(e.target.value)}
            placeholder="아이디를 입력해주세요."
            className="text-[#666666] text-[22px] font-[600] w-[516px] p-[16px] rounded-[10px] mt-[15px]"
          />
        </label>
        <label className="flex flex-col text-[24px] font-[600] text-[#191A1C]">
          비밀번호
          <input
            onChange={(e) => setPw(e.target.value)}
            placeholder="아이디를 입력해주세요."
            className="text-[#666666] text-[22px] font-[600] w-[516px] p-[16px] rounded-[10px] mt-[15px]"
          />
        </label>
        <button
          onClick={() => handleLogin()}
          className="w-[516px] px-[220px] py-[16px] bg-[#D7F3D1] rounded-[10px] text-[22px] font-[600] text-[#666666] mt-[190px]"
        >
          로그인
        </button>
      </div>
    </div>
  );
}
