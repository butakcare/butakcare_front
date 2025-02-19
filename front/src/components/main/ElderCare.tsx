"use client";

import ElderSearch from "./ElderSearch";
import Filter from "./Filter";
import ElderInfo from "./ElderInfo";
import { useState } from "react";

interface Props {
  centerData: CareCenter;
  elderData: ElderData[];
}

interface ElderData {
  id: number;
  name: string;
  gender: string;
  birth: string;
  address: string;
  address_detail: string;
  care_details: CareDetails;
  care_grade: string;
  center: string | null;
  days: string[];
  detail: string;
  start_hour: number;
  start_minute: number;
  end_hour: number;
  end_minute: number;
  wage: number | null;
  weight: number | null;
  matching_status: string;
  photo: string | null;
}
interface CareDetails {
  [key: string]: string;
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
