import MainLeft from "@/components/main/MainLeft";
import MainRight from "@/components/main/MainRight";

export default function Home() {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <MainLeft />
      <MainRight />
    </div>
  );
}
