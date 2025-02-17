"use client";
import TitleText from "@/components/common/TitleText";
import Script from "next/script";
import { useEffect, useState } from "react";

interface GuardianStep7Props {
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

export default function GuardianStep7({
  address,
  addressDetail,
  onAddressChange,
  onAddressDetailChange,
}: GuardianStep7Props) {
  const [isScriptLoaded, setIsScriptLoaded] = useState(false);
  const [showDetailInput, setShowDetailInput] = useState(false);

  // Handle address search using Daum Postcode
  const handleAddressSearch = () => {
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

      <form className="flex flex-col justify-center items-center align-center pt-[25px]">
        <div className="w-full relative mb-4">
          <input
            type="text"
            className="w-full h-12 px-4 border rounded-md pr-12"
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
            <svg
              className="w-6 h-6 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
        </div>

        {showDetailInput && (
          <div className="w-full mt-4">
            <p className="text-sm text-gray-600 mb-2">상세 주소</p>
            <input
              type="text"
              className="w-full h-12 px-4 border rounded-md"
              placeholder="상세 주소를 입력해주세요. (필수)"
              value={addressDetail}
              onChange={handleDetailChange}
            />
          </div>
        )}
      </form>
    </div>
  );
}
