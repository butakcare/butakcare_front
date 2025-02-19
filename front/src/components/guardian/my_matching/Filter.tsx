import { Dispatch, SetStateAction } from "react";

interface FilterProps {
  selectedFilter: string;
  setSelectedFilter: Dispatch<SetStateAction<string>>;
}

export default function Filter({
  selectedFilter,
  setSelectedFilter,
}: FilterProps) {
  const filters = ["신규 매칭", "조율 중인 매칭", "수락한 매칭", "거절한 매칭"];
  return (
    <div
      className="h-[31px] flex gap-[6px] ml-[26px] overflow-auto"
      style={{
        scrollbarWidth: "none",
        msOverflowStyle: "none",
      }}
    >
      {filters.map((filter, index) => (
        <button
          key={index}
          onClick={() => setSelectedFilter(filter)}
          className={`whitespace-nowrap px-[13px] py-[5px] text-[18px] font-[500] rounded-[6px] flex items-center justify-center ${
            selectedFilter === filter
              ? "bg-[#D7F3D1] text-[#2D8859]"
              : "bg-[#F7F8FA] text-[#666666]"
          }`}
        >
          {filter}
        </button>
      ))}
    </div>
  );
}
