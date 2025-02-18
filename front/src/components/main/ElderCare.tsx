"use client";

import ElderSearch from "./ElderSearch";
import Filter from "./Filter";
import ElderInfo from "./ElderInfo";
import { useState } from "react";

export default function ElderCare() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [searchText, setSearchText] = useState<string>("");
  const [size, setSize] = useState<number>(0);
  const [filter, setFilter] = useState({
    schedules: [] as string[], // 근무 요일
    gender: "",
    grade: 0, // 장기요양등급
  });

  return (
    <div className="w-full h-full flex flex-col items-center">
      <div>
        <ElderSearch size={size} setSearchText={setSearchText} />
      </div>
      <div>
        <Filter filter={filter} setFilter={setFilter} />
      </div>
      <div>
        <ElderInfo Filter={filter} setSize={setSize} />
      </div>
    </div>
  );
}
