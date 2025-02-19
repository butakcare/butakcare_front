"use client";

import { useState } from "react";
import AreaSelectModal from "@/components/guardian/work/AreaSelectModal";
import Image from "next/image";
import BorderX from "@/../public/assets/icons/ic_round-cancel.svg";

interface WorkStep1Props {
  available_area: number[];
  available_areaChange: (value: number[]) => void;
}

export default function WorkStep1({
  available_area,
  available_areaChange,
}: WorkStep1Props) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [areaNames, setAreaNames] = useState<string[]>([]);
  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleConfirm = (
    selectedAreaIds: number[],
    selectedNames: string[]
  ) => {
    available_areaChange(selectedAreaIds);
    setAreaNames(selectedNames);
    setIsModalOpen(false);
  };

  const handleRemoveArea = (indexToRemove: number) => {
    const updatedIds = available_area.filter(
      (_, index) => index !== indexToRemove
    );
    const updatedNames = areaNames.filter(
      (_, index) => index !== indexToRemove
    );
    available_areaChange(updatedIds);
    setAreaNames(updatedNames);
  };

  return (
    <div>
      <div className="flex flex-col w-[354px]">
        <div className="text-[26px] font-bold flex items-center">
          근무 가능한 지역을
        </div>
        <div className="text-[26px] font-bold flex items-center">
          선택해주세요.
          <div className="flex items-end">
            <span className="font-semibold text-[#FF602B] text-[26px]">*</span>
          </div>
        </div>
      </div>

      <form className="flex flex-col justify-center items-center align-center pt-[25px]">
        <div
          className="w-full max-w-md cursor-pointer"
          onClick={handleOpenModal}
        >
          <div className="relative w-full h-12 px-4 border text-black border-[#666666] rounded-[10px] flex items-center justify-between">
            <input
              type="text"
              className="w-full h-full cursor-pointer "
              placeholder="지역을 선택해 주세요."
              readOnly
            />
            <svg
              className="w-5 h-5 text-[#666666]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 20 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </div>
        </div>

        {/* 선택된 지역 태그 목록 */}
        {available_area.length > 0 && (
          <div className="w-full overflow-x-auto no-scrollbar scrollbar-hide pt-[15px]">
            <div className="font-semibold inline-flex gap-1 pb-2">
              {areaNames.map((name, index) => (
                <div
                  key={available_area[index]}
                  className="flex-none px-5 py-3.5 bg-sub rounded-lg flex items-center whitespace-nowrap"
                >
                  <span className="text-[#2D8859] text-lg">{name}</span>
                  <button
                    onClick={() => handleRemoveArea(index)}
                    className="ml-2 text-sub hover:text-green-700"
                  >
                    <Image src={BorderX} alt="X" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {isModalOpen && (
          <AreaSelectModal
            onClose={handleCloseModal}
            onConfirm={handleConfirm}
            initialSelected={available_area}
          />
        )}
      </form>
    </div>
  );
}
