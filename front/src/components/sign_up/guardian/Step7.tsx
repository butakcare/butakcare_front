"use client";
import TitleText from "@/components/common/TitleText";
import { useState } from "react";
import SearchIcon from "@/../public/assets/icons/search_black.svg";
import Image from "next/image";
import axios from "axios";

interface GuardianStep6Props {
  address: string;
  addressDetail: string;
  onAddressChange: (value: string) => void;
  onAddressDetailChange: (value: string) => void;
}

export default function GuardianStep6({
  address = "",
  addressDetail = "",
  onAddressChange,
  onAddressDetailChange,
}: GuardianStep6Props) {
  const [showDetailInput, setShowDetailInput] = useState(false);
  const [currentAddress, setCurrentAddress] = useState(address);
  const [searchQuery, setSearchQuery] = useState("");

  const handleAddressSearch = async () => {
    if (currentAddress) {
      setCurrentAddress("");
    } else {
      const fetchGet = async () => {
        try {
          const response = await axios.get(
            `${process.env.NEXT_PUBLIC_API_URL_KEY}/api/location/address/?search=${searchQuery}`
          );
          console.log(response);

          setCurrentAddress(response.data.road_address);
          setSearchQuery(response.data.road_address);
          onAddressChange(response.data.road_address);
          setShowDetailInput(true);
        } catch (error) {
          console.error("Error fetching address:", error);
        }
      };
      fetchGet();
    }
  };

  const handleDetailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onAddressDetailChange(e.target.value);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleAddressSearch();
  };

  return (
    <div>
      <TitleText text1="주소를 입력해주세요." text2="" on={true} />

      <form
        className="flex flex-col justify-center items-center align-center pt-[21px]"
        onSubmit={handleSubmit}
      >
        <div className="w-full relative font-semibold ">
          <input
            type="text"
            className="w-full h-[52px] px-4 border rounded-[10px] pr-12 border-[#666666] text-black focus:outline-none"
            placeholder="도로명, 지번 혹은 건물명으로 검색"
            value={searchQuery}
            onChange={handleInputChange}
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
      </form>
    </div>
  );
}
