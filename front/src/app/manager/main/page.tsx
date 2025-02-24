"use client";

import Navigation from "@/components/common/Navigation";
import Account from "@/components/manager/main/Account";
import ElderCare from "@/components/manager/main/ElderCare";
import RequestList from "@/components/manager/main/RequestList";
import axios from "axios";
import { useEffect, useState } from "react";
import { ElderData } from "@/types/ElderData";

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

export default function Home() {
  const [selected, setSelected] = useState<number>(0);

  const [centerData, setCenterData] = useState<CareCenter>();
  const [elderData, setElderData] = useState<ElderData[]>([]);

  useEffect(() => {
    const fetchGet = async () => {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL_KEY}/api/profiles/care-centers/3`
      );
      setCenterData(response.data);
    };
    fetchGet();
  }, []);

  useEffect(() => {
    const fetchGet = async () => {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL_KEY}/api/profiles/elderly/`
      );
      setElderData(response.data);
      console.log(response.data);
    };
    fetchGet();
  }, []);

  return (
    <div className="w-full h-full flex justify-center relative">
      <div className="h-screen">
        <Navigation selected={selected} setSelected={setSelected} />
      </div>
      {selected == 0 ? (
        centerData && (
          <ElderCare centerData={centerData} elderData={elderData} />
        )
      ) : selected == 1 ? (
        <RequestList />
      ) : selected == 2 ? (
        <Account />
      ) : (
        <></>
      )}
    </div>
  );
}
