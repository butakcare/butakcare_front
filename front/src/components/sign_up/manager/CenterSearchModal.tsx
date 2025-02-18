import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import SearchIcon from "@/../public/assets/icons/icon_search.svg";
import { LongBtn } from "@/components/common/Button";

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

  useEffect(() => {
    if (searchTerm) {
      fetch(
        `/${process.env.API_URL_KEY}/profiles/care-centers/search=${searchTerm}`
      )
        .then((response) => response.json())
        .then((data) => {
          setFilteredCenters(data.centers);
        })
        .catch((error) => {
          console.error("Error fetching centers:", error);
        });
    } else {
      setFilteredCenters([]);
    }
  }, [searchTerm]);

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
    <div className="fixed inset-0 flex items-center justify-center z-50 top-[110px] ">
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white w-full h-full fixed rounded-lg overflow-hidden"
      >
        <div className="p-[15px_24px]">
          <div className="relative flex flex-row items-center align-center">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="검색"
              className="w-full h-[52px] pl-[16px] font-semibold pr-12 border border-[#666666] rounded-[10px] focus:outline-none"
            />
            <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
              <Image src={SearchIcon} alt="search" width={24} height={24} />
            </div>
          </div>
        </div>

        <div className="max-h-[400px] overflow-y-auto pl-[24px] pr-[24px] bg-white">
          {filteredCenters.map((center, index) => (
            <div key={index} className="group w-full border-b border-[#DFE3E2]">
              <button
                onClick={() => {
                  onSelect(center);
                  onClose();
                }}
                className="w-full p-[10px_20px] bg-white text-left text-[22px] font-semibold hover:bg-[#F7F8FA]"
              >
                {center}
              </button>
            </div>
          ))}
        </div>
        <div className="flex align-center items-center flex-col pt-[589px]">
          <LongBtn
            text="닫기"
            disabled={true}
            onClick={onClose}
            type="button"
            width={354}
          />
        </div>
      </div>
    </div>
  );
}
