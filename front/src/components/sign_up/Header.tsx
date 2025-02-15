import Image from "next/image";
import back from "@/../public/assets/icons/back.svg";
export default function SignUpPage() {
  return (
    <>
      <div className="h-[55px] w-screen p-[18px_24px]">
        <Image src={back} alt="back" />
      </div>
    </>
  );
}
