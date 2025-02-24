"use client";

import ElderSearch from "./ElderSearch";
import Filter from "./Filter";
import ElderInfo from "./ElderInfo";
import { useState } from "react";
import { ElderData } from "@/types/ElderData";

interface Props {
  centerData: CareCenter;
  elderData: ElderData[];
}

interface CareCenter {
  id: number;
  name: string;
  photo: string | null;
  phone: string;
  has_bathing_vehicle: boolean;
  address: string;
  address_detail: string;
  description: string;
  center_site: string;
  business_registration_number: string;
  center_rank: string;
  center_period_year: number;
  center_period_month: number;
}

export default function ElderCare({ centerData, elderData }: Props) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [searchText, setSearchText] = useState<string>("");
  const [size, setSize] = useState<number>(0);
  const [filter, setFilter] = useState({
    days: [] as string[], // 근무 요일
    gender: "",
    grade: "", // 장기요양등급
  });

  return (
    <div className="w-full h-full flex flex-col items-center">
      <div>
        <ElderSearch
          centerData={centerData}
          size={size}
          setSearchText={setSearchText}
        />
      </div>
      <div>
        <Filter filter={filter} setFilter={setFilter} />
      </div>
      <div>
        <ElderInfo elderData={elderData} Filter={filter} setSize={setSize} />
      </div>
    </div>
  );
}
