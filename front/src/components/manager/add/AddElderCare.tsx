// import { useEffect } from "react";
// import axios from "axios";

interface Props {
  selectedThree: number;
  disease: string;
  setSelectedThree: React.Dispatch<React.SetStateAction<number>>;
  setSelected: React.Dispatch<React.SetStateAction<number>>;
  setDisease: React.Dispatch<React.SetStateAction<string>>;
}

export default function AddElderCare({
  selectedThree,
  disease,
  setSelectedThree,
  setSelected,
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
    } else {
      setSelected(4);
    }
  };

  const handleGauge2 = () => {
    if (selectedThree < maxSteps) {
      if (disease) {
        setSelectedThree((prev) => prev + 1);
      }
    } else {
      setSelected(4);
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
          <input
            placeholder="예시) 당뇨, 고혈압, 뇌경색, 경증치매, 파킨슨 등 작년에 고관절 수술 등"
            value={disease}
            onChange={(e) => setDisease(e.target.value)}
            maxLength={100} // 최대 입력 길이를 100자로 제한
            className="placeholder:text-[#909090] placeholder:text-[22px] text-[22px] font-[600] placeholder:font-[600] mt-[25px] h-[135px] w-[516px] px-[16px] py-[5px] text-left rounded-[10px] bg-[#FFFFFF] border border-[#909090]"
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
      ) : (
        <></>
      )}
    </div>
  );
}
