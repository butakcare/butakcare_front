"use client";
import TitleText from "@/components/common/TitleText";
import Script from "next/script";
import { useEffect, useState } from "react";
import SearchIcon from "@/../public/assets/icons/search_black.svg";
import Image from "next/image";
interface ManagerStep6Props {
  address: string;
  addressDetail: string;
  onAddressChange: (value: string) => void;
  onAddressDetailChange: (value: string) => void;
}

declare global {
  interface Window {
    daum: {
      Postcode: new (config: {
        oncomplete: (data: {
          address: string;
          addressType: string;
          bname: string;
          buildingName: string;
        }) => void;
        onclose: (state: string) => void;
        width: string;
        height: string;
      }) => { open: () => void };
    };
  }
}

export default function ManagerStep6({
  address = "",
  addressDetail = "",
  onAddressChange,
  onAddressDetailChange,
}: ManagerStep6Props) {
  const [isScriptLoaded, setIsScriptLoaded] = useState(false);
  const [showDetailInput, setShowDetailInput] = useState(false);

  // Handle address search using Daum Postcode
  const handleAddressSearch = async () => {
    if (!isScriptLoaded || !window.daum) {
      alert("주소 검색 서비스를 불러오는 중입니다. 잠시 후 다시 시도해주세요.");
      return;
    }

    new window.daum.Postcode({
      oncomplete: (data: {
        address: string;
        addressType: string;
        bname: string;
        buildingName: string;
      }) => {
        let fullAddress = data.address;
        let extraAddress = "";

        if (data.addressType === "R") {
          if (data.bname !== "") {
            extraAddress += data.bname;
          }
          if (data.buildingName !== "") {
            extraAddress +=
              extraAddress !== ""
                ? `, ${data.buildingName}`
                : data.buildingName;
          }
          fullAddress += extraAddress !== "" ? ` (${extraAddress})` : "";
        }

        onAddressChange(fullAddress);
        setShowDetailInput(true);
      },
      onclose: (state: string) => {
        if (state === "FORCE_CLOSE") {
          console.log("사용자에 의해 검색이 취소되었습니다.");
        } else if (state === "COMPLETE_CLOSE") {
          console.log("검색이 완료되었습니다.");
        }
      },
      width: "100%",
      height: "100%",
    }).open();
  };

  const handleDetailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onAddressDetailChange(e.target.value);
  };

  useEffect(() => {
    if (address) {
      setShowDetailInput(true);
    }
  }, [address]);

  return (
    <div>
      <TitleText text1="주소를 입력해주세요." text2="" on={true} />
      <Script
        src="//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js"
        onLoad={() => setIsScriptLoaded(true)}
        strategy="lazyOnload"
      />

      <form className="flex flex-col justify-center items-center align-center pt-[21px]">
        <div className="w-full relative font-semibold ">
          <input
            type="text"
            className="w-full h-[52px] px-4 border rounded-[10px] pr-12 border-[#666666] text-black focus:outline-none"
            placeholder="도로명, 지번 혹은 건물명으로 검색"
            value={address}
            readOnly
            onClick={handleAddressSearch}
          />
          <button
            type="button"
            className="absolute right-3 top-1/2 transform -translate-y-1/2"
            onClick={handleAddressSearch}
          >
            <Image src={SearchIcon} alt="search" className="opacity-60" />
          </button>
        </div>

        {showDetailInput && (
          <div className="w-full mt-4 font-semibold ">
            <p className="text-[18px] text-black mb-[10px]">상세 주소</p>
            <input
              type="text"
              className="w-full h-[52px] px-4 border rounded-[10px] border-[#666666] text-black focus:outline-none"
              placeholder="상세 주소를 입력해주세요. (필수)"
              value={addressDetail}
              onChange={handleDetailChange}
            />
          </div>
        )}
        <div className={`h-[${showDetailInput ? "347px" : "455px"}]`} />
      </form>
    </div>
  );
}
