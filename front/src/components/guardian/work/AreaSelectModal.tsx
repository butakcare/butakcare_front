"use client";

import { useState } from "react";

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
      <div className="flex items-center justify-between p-4 border-b">
        <h2 className="text-lg font-medium">근무 지역 선택</h2>
        <button onClick={onClose} className="p-2">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>

      <div className="p-4">
        <div className="relative">
          <input
            type="text"
            className="w-full h-12 px-4 border rounded-lg pr-12"
            placeholder="지역명을 검색하세요."
          />
          <svg
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
      </div>

      <div className="flex border-t border-b">
        <div className="flex-1 border-r h-64 overflow-y-auto">
          {Object.keys(koreaRegions).map((sido) => (
            <div
              key={sido}
              className={`p-3 cursor-pointer ${
                selectedSido === sido ? "bg-green-100" : ""
              }`}
              onClick={() => setSelectedSido(sido)}
            >
              {sido}
            </div>
          ))}
        </div>
        <div className="flex-1 border-r h-64 overflow-y-auto">
          {selectedSido &&
            Object.keys(koreaRegions[selectedSido]).map((sigungu) => (
              <div
                key={sigungu}
                className={`p-3 cursor-pointer ${
                  selectedSigungu === sigungu ? "bg-green-100" : ""
                }`}
                onClick={() => setSelectedSigungu(sigungu)}
              >
                {sigungu}
              </div>
            ))}
        </div>
        <div className="flex-1 h-64 overflow-y-auto">
          {selectedSido &&
            selectedSigungu &&
            koreaRegions[selectedSido][selectedSigungu].map((dong) => (
              <div
                key={dong}
                className={`p-3 cursor-pointer ${
                  selectedDong === dong ? "bg-green-100" : ""
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

      <div className="p-4">
        <p className="text-sm text-gray-500 mb-2">
          최대 10개까지 선택할 수 있어요.
        </p>
        <div className="flex flex-wrap gap-2">
          {selectedAreas.map((area) => (
            <div
              key={area}
              className="px-3 py-1 bg-green-50 rounded-full flex items-center"
            >
              <span className="text-green-700 text-sm">
                {getLastRegion(area)}
              </span>
              <button
                onClick={() => handleRemoveArea(area)}
                className="ml-2 text-green-500 hover:text-green-700"
              >
                ×
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className="fixed bottom-0 left-0 right-0 p-4 flex gap-4 border-t bg-white">
        <button
          onClick={() => setSelectedAreas([])}
          className="flex-1 h-12 border rounded-lg"
        >
          초기화
        </button>
        <button
          onClick={() => onConfirm(selectedAreas)}
          className="flex-1 h-12 bg-gray-800 text-white rounded-lg"
        >
          확인
        </button>
      </div>
    </div>
  );
}
