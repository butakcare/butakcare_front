import Header from "@/components/guardian/main/Header";
import Matching from "@/components/guardian/main/Matching";
import MyMatching from "@/components/guardian/main/MyMatching";

export default function Home() {
  return (
    <div className="w-screen h-screen max-tablet:flex max-tablet:flex-col max-tablet:items-center">
      <Header />
      <Matching />
      <MyMatching />
    </div>
  );
}
