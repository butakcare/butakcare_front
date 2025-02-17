"use client";

import { useState } from "react";
import TitleText from "@/components/common/TitleText";
import AreaSelectModal from "@/components/guardian/work/AreaSelectModal";

interface WorkStep1Props {
  available_area: string[];
  available_areaChange: (value: string[]) => void;
}

export default function WorkStep1({
  available_area,
  available_areaChange,
}: WorkStep1Props) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleConfirm = (selectedAreas: string[]) => {
    available_areaChange(selectedAreas);
    setIsModalOpen(false);
  };

  // 전체 주소에서 동/읍/면만 추출하는 함수
  const getLastRegion = (fullAddress: string) => {
    const parts = fullAddress.split(" ");
    return parts[parts.length - 1];
  };

  // 선택된 지역 삭제
  const handleRemoveArea = (areaToRemove: string) => {
    const updatedAreas = available_area.filter((area) => area !== areaToRemove);
    available_areaChange(updatedAreas);
  };

  return (
    <div>
      <TitleText text1="근무 가능한 지역을" text2="선택해주세요." on={true} />

      <form className="flex flex-col justify-center items-center align-center pt-[25px]">
        <div
          className="w-full max-w-md cursor-pointer"
          onClick={handleOpenModal}
        >
          <div className="relative w-full h-12 px-4 border rounded-lg bg-white flex items-center justify-between">
            <input
              type="text"
              className="w-full h-full outline-none cursor-pointer text-gray-600"
              placeholder="지역을 선택해 주세요."
              readOnly
            />
            <svg
              className="w-5 h-5 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
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
          <div className="w-full max-w-md overflow-x-auto whitespace-nowrap pb-2 scrollbar-hide">
            <div className="inline-flex gap-2">
              {available_area.map((area, index) => (
                <div
                  key={index}
                  className="inline-flex items-center px-3 py-1 bg-green-50 rounded-full"
                >
                  <span className="text-green-700 text-sm">
                    {getLastRegion(area)}
                  </span>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleRemoveArea(area);
                    }}
                    className="ml-2 text-green-500 hover:text-green-700"
                  >
                    ×
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
