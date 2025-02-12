import { Dispatch, SetStateAction } from "react";

interface FilterProps {
  selectedFilter: string;
  setSelectedFilter: Dispatch<SetStateAction<string>>;
}

export default function Filter({
  selectedFilter,
  setSelectedFilter,
}: FilterProps) {
  const filters = ["신규 매칭", "조율 중인 매칭", "수락한 요청", "거절한 요청"];
  return (
    <div
      className="max-tablet:h-[31px] max-tablet:flex max-tablet:gap-[6px] max-tablet:ml-[26px] max-tablet:overflow-auto"
      style={{
        scrollbarWidth: "none",
        msOverflowStyle: "none",
      }}
    >
      {filters.map((filter, index) => (
        <button
          key={index}
          onClick={() => setSelectedFilter(filter)}
          className={`max-tablet:whitespace-nowrap max-tablet:px-[13px] max-tablet:py-[5px] max-tablet:text-[18px] max-tablet:font-[500] max-tablet:rounded-[6px] max-tablet:flex max-tablet:items-center max-tablet:justify-center ${
            selectedFilter === filter
              ? "max-tablet:bg-[#6A6A6A] max-tablet:text-[#FFFFFF]"
              : "max-tablet:bg-[#CECECE] max-tablet:text-[#FFFFFF]"
          }`}
        >
          {filter}
        </button>
      ))}
    </div>
  );
}
