"use client";

import Header from "@/components/guardian/main/Header";
import Matching from "@/components/guardian/main/Matching";
import MyMatching from "@/components/guardian/main/MyMatching";
import axios from "axios";
import { useEffect, useState } from "react";
// import MySchedule from "@/components/guardian/main/MySchedule";

interface Area {
  id: number;
  name: string;
}

interface Caregiver {
  id: string;
  name: string;
  gender: string;
  photo: string | null;
  phone: string;
  has_car: boolean;
  has_dementia_training: boolean;
  address: string;
  address_detail: string;
  available_area: Area[];
  times: string[];
  days: string[];
  min_wage: number;
  max_wage: number;
  caregiver_qualification: string;
  social_worker_qualification: string | null;
  nursing_assistant_qualification: string | null;
  birth: string; // "YYYY-MM-DD" 형식
  career_year: number | null;
  career_month: number | null;
  career_content: string | null;
  description: string | null;
}

interface Matching {
  id: number;
  status: string;
  elderly: string;
  caregiver: string;
  days: string[];
  start_hour: number;
  start_minute: number;
  end_hour: number;
  end_minute: number;
  wage: number;
  created_at: string;
  cares: string[];
}

export default function Home() {
  const [guardianData, setGaurdianData] = useState<Caregiver>();
  useEffect(() => {
    const fetchGet = async () => {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL_KEY}/api/profiles/caregivers/sjh121476/?full=true`
      );
      setGaurdianData(response.data);
      console.log(response.data);
    };
    fetchGet();
  }, []);

  return (
    <div className="tablet:w-[450px] tablet:border tablet:border-[#909090] w-full h-full flex flex-col items-center">
      <div className="flex w-full">
        <Header
          name={guardianData?.name || ""}
          address={guardianData?.address || ""}
        />
      </div>
      <Matching />
      <MyMatching />
      {/* <MySchedule /> */}
    </div>
  );
}
