import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import SearchIcon from "@/../public/assets/icons/icon_search.svg";
import { LongBtn } from "@/components/common/Button";
import axios from "axios";

interface CenterSearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelect: (centerName: string) => void;
}

export default function CenterSearchModal({
  isOpen,
  onClose,
  onSelect,
}: CenterSearchModalProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredCenters, setFilteredCenters] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const searchCenters = async (term: string) => {
    if (!term.trim()) {
      setFilteredCenters([]);
      return;
    }

    setIsLoading(true);
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL_KEY}/api/profiles/care-centers/?search=${term}`
      );
      console.log("API 응답:", response.data);
      const centerNames =
        response.data.map((center: { name: string }) => center.name) || [];
      console.log("추출된 센터 이름들:", centerNames);

      setFilteredCenters(centerNames);
    } catch (error) {
      console.error("검색 중 오류 발생:", error);
      setFilteredCenters([]);
    } finally {
      setIsLoading(false);
    }
  };
  console.log(filteredCenters);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);
    searchCenters(value);
  };

  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    },
    [onClose]
  );

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
    } else {
      document.removeEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, handleKeyDown]);

  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="fixed inset-0 bg-black bg-opacity-50" />

      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white w-full h-full relative rounded-[10px] overflow-hidden 
        tablet:w-[640px] tablet:h-[582px] tablet:fixed tablet:top-1/2 tablet:left-1/2 tablet:transform tablet:-translate-x-1/2 tablet:-translate-y-1/2"
      >
        <div className="p-[15px_24px] m-[19px_33px]">
          <div className="font-semibold text-black text-[30px] w-full mb-[25px] text-center">
            등록된 센터 찾기
          </div>
          <div className="relative flex flex-row items-center align-center">
            <input
              type="text"
              defaultValue={searchTerm}
              onChange={handleSearchChange}
              placeholder="검색"
              className="w-full h-[52px] pl-[16px] font-semibold pr-12 border border-[#666666] rounded-[10px] focus:outline-none
    tablet:h-[58px] tablet:text-[22px]"
            />
            <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
              {isLoading ? (
                <div className="animate-spin h-5 w-5 border-2 border-[#666666] border-t-transparent rounded-full" />
              ) : (
                <Image src={SearchIcon} alt="search" width={24} height={24} />
              )}
            </div>
          </div>
        </div>

        <div
          className="max-h-[300px] overflow-y-auto tablet:w-[526px] ml-[55px] bg-white
        tablet:max-h-[300px]"
        >
          {filteredCenters.map((center, index) => (
            <div key={index} className="group w-full border-b border-[#DFE3E2]">
              <button
                onClick={() => {
                  onSelect(center);
                  onClose();
                }}
                className="w-full p-[10px_20px] bg-white text-left text-[22px] font-semibold hover:bg-sub rounded-[10px]"
              >
                {center}
              </button>
            </div>
          ))}
          {searchTerm && filteredCenters.length === 0 && !isLoading && (
            <div className="p-4 text-center text-gray-500">
              검색 결과가 없습니다
            </div>
          )}
        </div>

        {/* 닫기 버튼을 하단에 고정 */}
        <div className="absolute bottom-0 left-[160px] p-6 bg-white">
          <LongBtn
            text="닫기"
            disabled={false}
            onClick={onClose}
            type="button"
            width={269}
          />
        </div>
      </div>
    </div>
  );
}
