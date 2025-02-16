import Header from "@/components/guardian/main/Header";
import Matching from "@/components/guardian/main/Matching";
import MyMatching from "@/components/guardian/main/MyMatching";
// import MySchedule from "@/components/guardian/main/MySchedule";

export default function Home() {
  return (
    <div className="tablet:w-[450px] tablet:border tablet:border-[#909090] w-full h-full flex flex-col items-center">
      <div className="flex w-full">
        <Header />
      </div>
      <Matching />
      <MyMatching />
      {/* <MySchedule /> */}
    </div>
  );
}
