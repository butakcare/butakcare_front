import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";
import XIcon from "@/../public/assets/icons/X.svg";
import Search from "@/../public/assets/icons/6_search.svg";
import BorderX from "@/../public/assets/icons/ic_round-cancel.svg";

interface AreaSelectModalProps {
  onClose: () => void;
  onConfirm: (selectedAreaIds: number[], selectedAreaNames: string[]) => void;
  initialSelected: number[];
}
interface RegionData {
  id: number;
  name: string;
}

export default function AreaSelectModal({
  onClose,
  onConfirm,
  initialSelected,
}: AreaSelectModalProps) {
  const [selectedSido, setSelectedSido] = useState<string>("");
  const [selectedSigungu, setSelectedSigungu] = useState<string>("");
  const [selectedDong, setSelectedDong] = useState<number | null>(null);
  const [selectedAreaIds, setSelectedAreaIds] =
    useState<number[]>(initialSelected);
  const [selectedAreaNames, setSelectedAreaNames] = useState<string[]>([]);
  const [regions, setRegions] = useState<RegionData[]>([]);
  const [sigugunData, setSigugunData] = useState<RegionData[]>([]); // 시/군/구
  const [dongData, setDongData] = useState<RegionData[]>([]);

  useEffect(() => {
    axios
      .get(`${process.env.NEXT_PUBLIC_API_URL_KEY}/api/location/sigudong`)
      .then((res) => {
        setRegions(res.data);
      })
      .catch((error) => console.error("Error fetching regions:", error));
  }, []);

  useEffect(() => {
    if (selectedSido) {
      axios
        .get(
          `${process.env.NEXT_PUBLIC_API_URL_KEY}/api/location/sigudong?si=${selectedSido}`
        )
        .then((res) => {
          setSigugunData(res.data);
        })
        .catch((error) => console.error("Error fetching sigungu:", error));
    } else {
      setSigugunData([]);
    }
  }, [selectedSido]);

  useEffect(() => {
    if (selectedSido && selectedSigungu) {
      axios
        .get(
          `${process.env.NEXT_PUBLIC_API_URL_KEY}/api/location/sigudong?si=${selectedSido}&gu=${selectedSigungu}`
        )
        .then((res) => {
          setDongData(res.data);
        })
        .catch((error) => console.error("Error fetching dong:", error));
    } else {
      setDongData([]);
    }
  }, [selectedSido, selectedSigungu]);

  const handleAreaSelect = (dongId: number, dongName: string) => {
    if (selectedAreaIds.length >= 10) {
      alert("최대 10개까지 선택할 수 있습니다.");
      return;
    }
    setSelectedDong(dongId);
    if (!selectedAreaIds.includes(dongId)) {
      setSelectedAreaIds([...selectedAreaIds, dongId]);
      setSelectedAreaNames([...selectedAreaNames, dongName]);
    }
  };

  const handleRemoveArea = (areaId: number) => {
    const index = selectedAreaIds.indexOf(areaId);
    const updatedIds = selectedAreaIds.filter((id) => id !== areaId);
    const updatedNames = selectedAreaNames.filter((_, i) => i !== index);
    setSelectedAreaIds(updatedIds);
    setSelectedAreaNames(updatedNames);
  };

  return (
    <div className="fixed inset-0 bg-white z-50">
      <div className="tablet:w-full w-screen h-[55px] flex items-center justify-center relative">
        <p className="text-[22px] font-[600] text-[#000000]">근무 지역 선택</p>
        <Image
          src={XIcon}
          alt="X"
          onClick={onClose}
          className="w-[16px] h-[16px] absolute right-[30px] tablet:right-[-120px]"
        />
      </div>

      <div className="p-[24px] bg-[#F7F8FA]">
        <div className="relative ">
          <input
            type="text"
            className="w-full h-[52px] px-4 border border-[#666666] rounded-[10px] pr-12"
            placeholder="지역명을 검색하세요."
          />
          <Image
            className="absolute right-4 top-1/2 transform -translate-y-1/2 "
            src={Search}
            alt="search"
          />
        </div>
      </div>

      <div className="flex border-t border-b border-[#666666]">
        <div className="flex-1 border-r border-[#666666] h-auto overflow-y-auto text-[18px] font-medium text-center">
          <div className="leading-[51px] text-center bg-[#F7F8FA] border-b border-[#666666]">
            시/도
          </div>

          {regions.map((region: RegionData) => (
            <div
              key={region.id}
              className={`p-3 cursor-pointer ${
                selectedSido === region.name ? "bg-key text-white" : ""
              }`}
              onClick={() => setSelectedSido(region.name)}
            >
              {region.name}
            </div>
          ))}
        </div>
        <div className="flex-1 border-r border-[#666666] h-auto overflow-y-auto text-[18px] font-medium text-center">
          <div className="leading-[51px] text-center bg-[#F7F8FA] border-b border-[#666666]">
            시/군/구
          </div>

          {sigugunData.map((gu: RegionData) => (
            <div
              key={gu.id}
              className={`p-3 cursor-pointer ${
                selectedSigungu === gu.name ? "bg-key text-white" : ""
              }`}
              onClick={() => setSelectedSigungu(gu.name)}
            >
              {gu.name}
            </div>
          ))}
        </div>
        <div className="flex-1 border-r h-auto overflow-y-auto text-[18px] font-medium text-center">
          <div className="leading-[51px] text-center bg-[#F7F8FA] border-b border-[#666666] ">
            동/읍/면
          </div>
          {dongData.map((dong: RegionData) => (
            <div
              key={dong.id}
              className={`p-3 cursor-pointer ${
                selectedDong === dong.id ? "bg-key text-white" : ""
              }`}
              onClick={() => handleAreaSelect(dong.id, dong.name)}
            >
              {dong.name}
            </div>
          ))}
        </div>
      </div>

      <div className="fixed flex-col bottom-0 left-0 right-0 flex  border-t border-[#666666] bg-white">
        <div className="p-[15px_24px] bg-[#F7F8FA]">
          <p className="text-[18px] text-black">
            최대 10개까지 선택할 수 있어요.
          </p>
          <div className="w-full overflow-x-auto no-scrollbar scrollbar-hide  pt-[15px]">
            <div className="inline-flex gap-1 pb-2">
              {selectedAreaIds.map((id, index) => (
                <div
                  key={id}
                  className="flex-none px-5 py-3.5 bg-sub rounded-lg flex items-center whitespace-nowrap"
                >
                  <span className="text-[#2D8859] text-lg">
                    {selectedAreaNames[index]}
                  </span>
                  <button
                    onClick={() => handleRemoveArea(id)}
                    className="ml-2 text-sub hover:text-green-700"
                  >
                    <Image src={BorderX} alt="X" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="flex flex-row pt-[15px] border-t border-[#666666] p-[15px_24px] gap-[4px] ">
          <button
            onClick={() => {
              setSelectedAreaIds([]);
              setSelectedAreaNames([]);
            }}
            className=" font-semibold flex w-[86px] h-[52px] border  rounded-[10px] justify-center items-center border border-[#666666]"
          >
            초기화
          </button>
          <button
            onClick={() => onConfirm(selectedAreaIds, selectedAreaNames)}
            className="flex-1 h-[52px] bg-key w-[264px] text-white rounded-[10px]"
          >
            확인
          </button>
        </div>
      </div>
    </div>
  );
}
