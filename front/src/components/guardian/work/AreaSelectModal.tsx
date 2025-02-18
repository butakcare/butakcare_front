"use client";

import Image from "next/image";
import { useState } from "react";
import XIcon from "@/../public/assets/icons/X.svg";
import Search from "@/../public/assets/icons/6_search.svg";
import BorderX from "@/../public/assets/icons/ic_round-cancel.svg";
interface AreaSelectModalProps {
  onClose: () => void;
  onConfirm: (selectedAreas: string[]) => void;
  initialSelected: string[];
}

const koreaRegions: { [key: string]: { [key: string]: string[] } } = {
  서울특별시: {
    강남구: ["개포동", "논현동", "대치동"],
    강서구: ["가양동", "개화동", "공항동"],
  },
  경기도: {
    수원시: ["장안구", "권선구", "팔달구"],
    고양시: ["덕양구", "일산동구", "일산서구"],
  },
};

export default function AreaSelectModal({
  onClose,
  onConfirm,
}: AreaSelectModalProps) {
  const [selectedSido, setSelectedSido] = useState<string>("");
  const [selectedSigungu, setSelectedSigungu] = useState<string>("");
  const [selectedDong, setSelectedDong] = useState<string>("");
  const [selectedAreas, setSelectedAreas] = useState<string[]>([]);

  const handleAreaSelect = (dong: string) => {
    if (selectedAreas.length >= 10) {
      alert("최대 10개까지 선택할 수 있습니다.");
      return;
    }

    const fullAddress = `${selectedSido} ${selectedSigungu} ${dong}`;
    if (!selectedAreas.includes(fullAddress)) {
      setSelectedAreas([...selectedAreas, fullAddress]);
    }
  };

  const handleRemoveArea = (area: string) => {
    setSelectedAreas(selectedAreas.filter((a) => a !== area));
  };

  const getLastRegion = (fullAddress: string) => {
    const parts = fullAddress.split(" ");
    return parts[parts.length - 1];
  };

  return (
    <div className="fixed inset-0 bg-white z-50">
      <div className="tablet:w-full w-screen h-[55px] flex items-center justify-center relative">
        <p className="text-[22px] font-[600] text-[#000000]">근무 지역 선택</p>
        <Image
          src={XIcon}
          alt="X"
          onClick={onClose}
          className="w-[16px] h-[16px] absolute right-[30px] tablet:right-[-120px]"
        />
      </div>

      <div className="p-[24px] bg-[#F7F8FA]">
        <div className="relative ">
          <input
            type="text"
            className="w-full h-[52px] px-4 border border-[#666666] rounded-[10px] pr-12"
            placeholder="지역명을 검색하세요."
          />
          <Image
            className="absolute right-4 top-1/2 transform -translate-y-1/2 "
            src={Search}
            alt="search"
          />
        </div>
      </div>

      <div className="flex border-t border-b border-[#666666]">
        <div className="flex-1 border-r border-[#666666] h-auto overflow-y-auto text-[18px] font-medium text-center">
          <div className="leading-[51px] text-center bg-[#F7F8FA] border-b border-[#666666]">
            시/도
          </div>

          {Object.keys(koreaRegions).map((sido) => (
            <div
              key={sido}
              className={`p-3 cursor-pointer ${
                selectedSido === sido ? "bg-key text-white" : ""
              }`}
              onClick={() => setSelectedSido(sido)}
            >
              {sido}
            </div>
          ))}
        </div>
        <div className="flex-1 border-r border-[#666666] h-auto overflow-y-auto text-[18px] font-medium text-center">
          <div className="leading-[51px] text-center bg-[#F7F8FA] border-b border-[#666666]">
            시/군/구
          </div>

          {selectedSido &&
            Object.keys(koreaRegions[selectedSido]).map((sigungu) => (
              <div
                key={sigungu}
                className={`p-3 cursor-pointer ${
                  selectedSigungu === sigungu ? "bg-key text-white" : ""
                }`}
                onClick={() => setSelectedSigungu(sigungu)}
              >
                {sigungu}
              </div>
            ))}
        </div>
        <div className="flex-1 border-r h-auto overflow-y-auto text-[18px] font-medium text-center">
          <div className="leading-[51px] text-center bg-[#F7F8FA] border-b border-[#666666] ">
            동/읍/면
          </div>

          {selectedSido &&
            selectedSigungu &&
            koreaRegions[selectedSido][selectedSigungu].map((dong) => (
              <div
                key={dong}
                className={`p-3 cursor-pointer ${
                  selectedDong === dong ? "bg-key text-white" : ""
                }`}
                onClick={() => {
                  setSelectedDong(dong);
                  handleAreaSelect(
                    `${selectedSido} ${selectedSigungu} ${dong}`
                  );
                }}
              >
                {dong}
              </div>
            ))}
        </div>
      </div>

      <div className="fixed flex-col bottom-0 left-0 right-0 flex  border-t border-[#666666] bg-white">
        <div className="p-[15px_24px] bg-[#F7F8FA]">
          <p className="text-[18px] text-black">
            최대 10개까지 선택할 수 있어요.
          </p>
          <div className="w-full overflow-x-auto no-scrollbar scrollbar-hide  pt-[15px]">
            <div className="inline-flex gap-1 pb-2">
              {selectedAreas.map((area) => (
                <div
                  key={area}
                  className="flex-none px-5 py-3.5 bg-sub rounded-lg flex items-center whitespace-nowrap"
                >
                  <span className="text-[#2D8859] text-lg">
                    {getLastRegion(area)}
                  </span>
                  <button
                    onClick={() => handleRemoveArea(area)}
                    className="ml-2 text-sub hover:text-green-700"
                  >
                    <Image src={BorderX} alt="X" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="flex flex-row pt-[15px] border-t border-[#666666] p-[15px_24px] gap-[4px] ">
          <button
            onClick={() => setSelectedAreas([])}
            className=" font-semibold flex w-[86px] h-[52px] border  rounded-[10px] justify-center items-center border border-[#666666]"
          >
            초기화
          </button>
          <button
            onClick={() => onConfirm(selectedAreas)}
            className="flex-1 h-[52px] bg-key w-[264px] text-white rounded-[10px]"
          >
            확인
          </button>
        </div>
      </div>
    </div>
  );
}
