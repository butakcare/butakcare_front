import axios from "axios";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import AcceptImg from "@/../public/assets/images/AcceptImg.svg";

interface Props {
  selectedThree: number;
  disease: string;
  selectedCareDetails: number[];
  setSelectedCareDetails: React.Dispatch<React.SetStateAction<number[]>>;
  setSelected: React.Dispatch<React.SetStateAction<number>>;
  setSelectedThree: React.Dispatch<React.SetStateAction<number>>;
  setDisease: React.Dispatch<React.SetStateAction<string>>;
  PostAdd: () => void;
}

interface CareDetail {
  id: number;
  content: string;
}

interface CareCategory {
  name: string;
  care_details: CareDetail[];
}

export default function AddElderCare({
  selectedThree,
  disease,
  selectedCareDetails,
  setSelected,
  setSelectedThree,
  setDisease,
  setSelectedCareDetails,
  PostAdd,
}: Props) {
  const [careCategories, setCareCategories] = useState<CareCategory[]>([]);
  const [dropdownOpen, setDropdownOpen] = useState<{ [key: string]: boolean }>(
    {}
  );

  useEffect(() => {
    const fetchGet = async () => {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL_KEY}/api/recommendation/care-details/`
      );
      setCareCategories(response.data);
    };
    fetchGet();
  }, []);

  const maxSteps = 1;

  const handleGauge1 = () => {
    if (selectedThree < maxSteps) {
      setSelectedThree((prev) => prev + 1);
    }
  };

  const handleGauge2 = () => {
    PostAdd();
    if (selectedThree < maxSteps) {
      if (disease) {
        setSelectedThree((prev) => prev + 1);
      }
    } else {
      setSelectedThree(2);
      setSelected(3);
    }
  };

  const toggleDropdown = (categoryName: string) => {
    setDropdownOpen((prev) => ({
      ...prev,
      [categoryName]: !prev[categoryName],
    }));
  };

  const handleCareDetailSelect = (id: number) => {
    setSelectedCareDetails((prev) =>
      prev.includes(id)
        ? prev.filter((detailId) => detailId !== id)
        : [...prev, id]
    );
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
          {careCategories.map((category) => (
            <div key={category.name} className="mt-[20px]">
              <button
                onClick={() => toggleDropdown(category.name)}
                className="w-full text-left bg-[#F7F8FA] p-[10px] rounded-[10px] text-[22px] font-[600] text-[#000000]"
              >
                {category.name}
              </button>
              {dropdownOpen[category.name] && (
                <div className="mt-[10px] ml-[20px]">
                  {category.care_details.map((detail) => (
                    <div
                      key={detail.id}
                      className="flex items-center gap-[10px]"
                    >
                      <input
                        type="checkbox"
                        checked={selectedCareDetails.includes(detail.id)}
                        onChange={() => handleCareDetailSelect(detail.id)}
                      />
                      <span className="text-[20px] text-[#000000]">
                        {detail.content}
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
          <button
            onClick={() => handleGauge1()}
            className="mt-[30px] w-[254px] h-[58px] flex items-center justify-center bg-[#D7F3D1] text-[#000000] rounded-[10px] text-[22px] font-[600]"
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
          <Image src={AcceptImg} alt="사진" width={341} height={296} />
          <p className="text-[24px] font-[700] text-[#000000] mt-[20px] text-center">
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
              어르신 관리
            </Link>
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}
