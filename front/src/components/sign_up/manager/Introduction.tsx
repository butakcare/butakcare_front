"use client";
import TitleText from "@/components/common/TitleText";
import Image from "next/image";
import ProfileIcon from "@/../public/assets/images/profile.png";
import { useRef, useState } from "react";

interface ManagerStep9Props {
  introduction: string;
  onIntroductionChange: (value: string) => void;
}

export default function ManagerStep8({
  introduction,
  onIntroductionChange,
}: ManagerStep9Props) {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleButtonClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        if (e.target?.result) {
          setSelectedImage(e.target.result as string);
        }
      };
      reader.readAsDataURL(file);
    }
  };
  return (
    <div>
      <TitleText text1="프로필 사진을 등록해주세요." text2="" on={false} />
      <div className="hidden sm:block">
        <div className="flex flex-row">
          <div className="text-[30px] leading-[50px] font-bold flex items-center">
            프로필 사진을 등록해주세요.
            <div className="flex items-end">
              <span className="font-semibold text-black text-[22px] ml-[10px]">
                (선택)
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[30px]" />
      <div className="flex flex-col w-[354px]  tablet:items-start justify-center items-center">
        {selectedImage ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={selectedImage}
            alt="selected profile"
            className="w-[141px] h-[141px] rounded-full object-cover"
          />
        ) : (
          <Image
            src={ProfileIcon}
            alt="profile"
            className="w-[141px] h-[141px]"
          />
        )}
        <div className="h-[21px]" />
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleFileChange}
          accept="image/*"
          className="hidden"
        />
        <button
          onClick={handleButtonClick}
          type="button"
          className="border border-stroke text-black text-[18px] font-semibold w-[143px] rounded-[10px] h-[52px]"
        >
          사진 등록
        </button>
      </div>
      <div className="h-[49px]" />

      <TitleText text1="한줄 소개를 입력해주세요." text2="" on={false} />
      <div className="hidden sm:block">
        <div className="flex flex-row">
          <div className="text-[30px] leading-[50px] font-bold flex items-center">
            한줄 소개를 입력해주세요.
            <div className="flex items-end">
              <span className="font-semibold text-black text-[22px] ml-[10px]">
                (선택)
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[21px]" />

      <form className="flex flex-col  tablet:items-start justify-center items-center align-center">
        <div className="relative w-[354px]  tablet:w-[516px]">
          <textarea
            className="w-full h-[138px] p-4 border rounded-lg resize-none focus:outline-none text-semibold text-black font-semibold border-[#666666]"
            placeholder="예시) 세심한 전문성으로 돌봄을 실천합니다.                                                       어르신의 일상을 위해 최선을 다합니다."
            value={introduction}
            onChange={(e) => onIntroductionChange(e.target.value)}
            maxLength={50}
          />
          <div className="absolute bottom-[15px] right-4 text-[18px] text-[#666666] font-semibold">
            {introduction.length} / 50
          </div>
        </div>
        <div className="h-[41px]" />
      </form>
    </div>
  );
}
