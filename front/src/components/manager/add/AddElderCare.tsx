// import { useEffect } from "react";
// import axios from "axios";

import Link from "next/link";

interface Props {
  selectedThree: number;
  disease: string;
  setSelected: React.Dispatch<React.SetStateAction<number>>;
  setSelectedThree: React.Dispatch<React.SetStateAction<number>>;
  setDisease: React.Dispatch<React.SetStateAction<string>>;
}

export default function AddElderCare({
  selectedThree,
  disease,
  setSelected,
  setSelectedThree,
  setDisease,
}: Props) {
  // useEffect(() => {
  //   const handleSubmit = async () => {
  //     try {
  //       const response = await axios.get(
  //         `http://127.0.0.1:8000/api/recommendation/care-details/`
  //       );
  //       console.log(response.data);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };
  //   handleSubmit();
  // });
  const maxSteps = 1;

  const handleGauge1 = () => {
    if (selectedThree < maxSteps) {
      setSelectedThree((prev) => prev + 1);
    }
  };

  const handleGauge2 = () => {
    if (selectedThree < maxSteps) {
      if (disease) {
        setSelectedThree((prev) => prev + 1);
      }
    } else {
      setSelectedThree(2);
      setSelected(3);
    }
  };

  return (
    <div className="h-[600px] w-full ml-[31px] mt-[45px]">
      {selectedThree == 0 ? (
        <div>
          <p className="text-[30px] text-[#000000] font-[600]">
            <span>
              어르신께 필요한 돌봄 서비스를 선택해주세요.(복수선택 가능)
            </span>
            <span className="w-[12px] text-[#FF602B] text-[30px] font-[600]">
              *
            </span>
          </p>
          <button
            onClick={() => handleGauge1()}
            // className={`absolute right-[500px] w-[254px] h-[58px] flex items-center justify-center ${
            //   elderName
            //     ? "bg-[#D7F3D1] text-[#000000]"
            //     : "bg-[#CFCFCF]  text-[#FFFFFF]"
            // } rounded-[10px] text-[22px] font-[600]`}
          >
            다음
          </button>
        </div>
      ) : selectedThree == 1 ? (
        <div>
          <p className="text-[30px] text-[#000000] font-[600]">
            <span>보유하신 질환이나 건강 상태를 알려주세요.(선택)</span>
          </p>
          <textarea
            placeholder="예시) 당뇨, 고혈압, 뇌경색, 경증치매, 파킨슨 등 작년에 고관절 수술 등"
            value={disease}
            onChange={(e) => setDisease(e.target.value)}
            maxLength={100} // 최대 입력 길이를 100자로 제한
            className="placeholder:text-[#909090] placeholder:text-[22px] text-[22px] font-[600] placeholder:font-[600] mt-[25px]  w-[516px] px-[16px] py-[5px] h-[135px] text-left rounded-[10px] bg-[#FFFFFF] border border-[#909090]"
          />

          <div className="flex w-[726px] justify-between relative">
            <button
              onClick={() => setSelectedThree((prev) => prev - 1)}
              className="absolute bottom-[-350px] w-[254px] h-[58px] flex items-center justify-center bg-[#FFFFFF] rounded-[10px] border border-[1px] border-[#000000] text-[22px] text-[#191A1C] font-[600]"
            >
              이전
            </button>

            <button
              onClick={handleGauge2}
              className={`absolute bottom-[-350px] right-[0px] w-[254px] h-[58px] flex items-center justify-center ${
                disease
                  ? "bg-[#D7F3D1] text-[#000000]"
                  : "bg-[#CFCFCF]  text-[#FFFFFF]"
              } rounded-[10px] text-[22px] font-[600]`}
            >
              다음
            </button>
          </div>
        </div>
      ) : selectedThree == 2 ? (
        <div className="w-[726px] flex flex-col items-center">
          <p className="text-[30px] font-[600] text-[#0000000] mt-[76px]">
            어르신 정보 등록이 완료되었습니다.
          </p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="170"
            height="170"
            viewBox="0 0 170 170"
            fill="none"
            className="mt-[25px]"
          >
            <mask
              id="mask0_683_3579"
              maskUnits="userSpaceOnUse"
              x="13"
              y="13"
              width="144"
              height="144"
            >
              <path
                d="M84.9994 155.833C94.303 155.844 103.517 154.017 112.113 150.457C120.708 146.896 128.515 141.673 135.086 135.086C141.673 128.515 146.896 120.708 150.457 112.113C154.017 103.517 155.844 94.303 155.833 84.9994C155.844 75.6958 154.017 66.4815 150.457 57.8861C146.896 49.2907 141.673 41.4836 135.086 34.9132C128.515 28.3262 120.708 23.1025 112.113 19.542C103.517 15.9816 94.303 14.1546 84.9994 14.1661C75.6958 14.1546 66.4815 15.9816 57.8861 19.542C49.2907 23.1025 41.4836 28.3262 34.9132 34.9132C28.3262 41.4836 23.1025 49.2907 19.542 57.8861C15.9816 66.4815 14.1546 75.6958 14.1661 84.9994C14.1546 94.303 15.9816 103.517 19.542 112.113C23.1025 120.708 28.3262 128.515 34.9132 135.086C41.4836 141.673 49.2907 146.896 57.8861 150.457C66.4815 154.017 75.6958 155.844 84.9994 155.833Z"
                fill="#555555"
                stroke="white"
                strokeWidth="1.97674"
                strokeLinejoin="round"
              />
              <path
                d="M56.666 85L77.916 106.25L120.416 63.75"
                stroke="white"
                strokeWidth="1.97674"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </mask>
            <g mask="url(#mask0_683_3579)">
              <path d="M0 0H170V170H0V0Z" fill="#58C185" />
            </g>
          </svg>
          <p className="text-[24px] font-[700] text-[#000000] mt-[76px] text-center">
            지금 어르신께 필요한 요양보호사를 추천받고,
          </p>
          <p className="text-[24px] font-[700] text-[#191A1C] mt-[20px]">
            맞춤형 매칭을 만나보세요.
          </p>
          <div className="flex w-full justify-between">
            <Link
              href="/manager/main"
              className="w-[254px] mt-[76px] h-[58px] flex items-center justify-center border border-[#58C185] rounded-[10px] text-[22px] font-[600] text-[#191A1C]"
            >
              회원 정보 수정
            </Link>
            <Link
              href="/manager/main"
              className="w-[254px] mt-[76px] h-[58px] flex items-center justify-center bg-[#58C185] rounded-[10px] text-[22px] font-[600] text-[#FFFFFF]"
            >
              매칭관리
            </Link>
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}
