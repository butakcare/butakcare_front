"use client";

import Navigation from "@/components/common/Navigation";
import Account from "@/components/main/Account";
import ElderCare from "@/components/main/ElderCare";
import MatchingStat from "@/components/main/MatchingStat";
import RequestList from "@/components/main/RequestList";
import { useState } from "react";

export default function Home() {
  const [selected, setSelected] = useState<number>(0);
  return (
    <div className="w-full h-full flex justify-center relative">
      <div className="h-full">
        <Navigation selected={selected} setSelected={setSelected} />
      </div>
      {selected == 0 ? (
        <ElderCare />
      ) : selected == 1 ? (
        <RequestList />
      ) : selected == 2 ? (
        <MatchingStat />
      ) : (
        <Account />
      )}
    </div>
  );
}
