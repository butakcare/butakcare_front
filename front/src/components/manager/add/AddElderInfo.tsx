"use client";

import { useState } from "react";
import Image from "next/image";

interface Props {
  selectedOne: number;
  elderName: string;
  elderBirth: string;
  elderAddress: string;
  elderGender: string;
  elderGrade: number;
  elderAddress2: string;
  image: string | null;
  setElderName: React.Dispatch<React.SetStateAction<string>>;
  setElderBirth: React.Dispatch<React.SetStateAction<string>>;
  setElderGender: React.Dispatch<React.SetStateAction<string>>;
  setElderGrade: React.Dispatch<React.SetStateAction<number>>;
  setElderAddress: React.Dispatch<React.SetStateAction<string>>;
  setImage: React.Dispatch<React.SetStateAction<string | null>>;
  setSelectedOne: React.Dispatch<React.SetStateAction<number>>;
  setSelected: React.Dispatch<React.SetStateAction<number>>;
  setElderAddress2: React.Dispatch<React.SetStateAction<string>>;
}

export default function AddElder({
  selectedOne,
  elderName,
  elderBirth,
  elderAddress,
  elderAddress2,
  elderGender,
  elderGrade,

  image,
  setElderName,
  setElderBirth,
  setElderGender,
  setElderGrade,
  setElderAddress,
  setElderAddress2,
  setImage,
  setSelectedOne,
  setSelected,
}: Props) {
  const [showCareGradeDropdown, setShowCareGradeDropdown] = useState(false);
  const [selectedGender, setSelectedGender] = useState<string | null>(null);
  const [careGrade, setCareGrade] = useState<number>(0);

  const maxSteps = 2;
  const handleGauge1 = () => {
    if (selectedOne < maxSteps) {
      if (elderName) {
        setSelectedOne((prev) => prev + 1);
      }
    } else {
      setSelected(1);
    }
  };

  const handleGauge2 = () => {
    if (selectedOne < maxSteps) {
      if (elderBirth && elderGender) {
        setSelectedOne((prev) => prev + 1);
      }
    } else {
      setSelected(1);
    }
  };

  const handleGauge3 = () => {
    if (selectedOne < maxSteps) {
      if (elderAddress && elderGrade) {
        setSelectedOne((prev) => prev + 1);
      }
    } else {
      setSelected(1);
    }
  };

  const careGrades = ["1", "2", "3", "4", "5", "인지자원"];

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImage(imageUrl);
    }
  };

  const handleGenderSelect = (gender: string) => {
    setElderGender(gender);
    setSelectedGender(gender);
  };

  const handleCareGradeChange = (grade: string) => {
    if (grade == "인지자원") {
      setCareGrade(6);
      setElderGrade(6);
      setShowCareGradeDropdown(false);
    } else {
      setCareGrade(Number(grade));
      setElderGrade(Number(grade));
      setShowCareGradeDropdown(false);
    }
  };

  return (
    <div className="h-[600px] w-full ml-[31px]">
      {selectedOne == 0 ? (
        <div>
          <p className="text-[30px] text-[#000000] font-[600] mt-[45px]">
            어르신 성함을 입력해주세요.
            <span className="w-[12px] text-[#FF602B] text-[30px] font-[600]">
              *
            </span>
          </p>
          <input
            placeholder="어르신 성함을 입력해주세요.(필수)"
            onChange={(e) => setElderName(e.target.value)}
            value={elderName}
            className="placeholder:text-[#909090] placeholder:text-[22px] text-[22px] font-[600] placeholder:font-[600] mt-[25px] w-[516px] p-[16px] rounded-[10px] bg-[#FFFFFF] border border-[#909090]"
          />
          <div className="mt-[40px]">
            <p className="text-[30px] font-[600] text-[#000000]">
              어르신 사진을 등록해주세요.{" "}
              <span className="text-[22px] fotn-[500] text-[#191A1C]">
                (선택)
              </span>
            </p>
            <label htmlFor="file-upload" className="cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="171"
                height="171"
                viewBox="0 0 171 171"
                fill="none"
              >
                {image ? (
                  <image
                    href={image}
                    width="100%"
                    height="100%"
                    clipPath="circle(50%)"
                  />
                ) : (
                  <>
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M85.5 96.1875C93.0587 96.1875 100.308 93.1848 105.653 87.84C110.997 82.4953 114 75.2462 114 67.6875C114 60.1288 110.997 52.8797 105.653 47.535C100.308 42.1902 93.0587 39.1875 85.5 39.1875C77.9413 39.1875 70.6922 42.1902 65.3475 47.535C60.0027 52.8797 57 60.1288 57 67.6875C57 75.2462 60.0027 82.4953 65.3475 87.84C70.6922 93.1848 77.9413 96.1875 85.5 96.1875ZM85.5 89.0625C88.307 89.0625 91.0865 88.5096 93.6799 87.4354C96.2732 86.3612 98.6296 84.7868 100.614 82.8019C102.599 80.8171 104.174 78.4607 105.248 75.8674C106.322 73.274 106.875 70.4945 106.875 67.6875C106.875 64.8805 106.322 62.101 105.248 59.5076C104.174 56.9143 102.599 54.5579 100.614 52.5731C98.6296 50.5882 96.2732 49.0138 93.6799 47.9396C91.0865 46.8654 88.307 46.3125 85.5 46.3125C79.831 46.3125 74.3942 48.5645 70.3856 52.5731C66.377 56.5817 64.125 62.0185 64.125 67.6875C64.125 73.3565 66.377 78.7933 70.3856 82.8019C74.3942 86.8105 79.831 89.0625 85.5 89.0625Z"
                      fill="black"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M156.75 85.5C156.75 124.851 124.851 156.75 85.5 156.75C46.1486 156.75 14.25 124.851 14.25 85.5C14.25 46.1486 46.1486 14.25 85.5 14.25C124.851 14.25 156.75 46.1486 156.75 85.5ZM119.807 139.686C109.552 146.199 97.649 149.648 85.5 149.625C73.061 149.648 60.8869 146.032 50.4771 139.223C49.6221 138.154 48.7552 137.049 47.8764 135.909C46.8572 134.574 46.3074 132.94 46.3125 131.26C46.3125 127.424 49.0699 124.207 52.7571 123.669C77.1424 120.106 93.9324 120.413 118.35 123.793C120.117 124.052 121.732 124.94 122.896 126.294C124.061 127.649 124.697 129.378 124.688 131.164C124.688 132.874 124.1 134.534 123.038 135.831C121.943 137.163 120.866 138.448 119.807 139.686ZM131.759 129.91C131.189 123.241 126.127 117.677 119.326 116.736C94.3314 113.277 76.8609 112.946 51.7275 116.618C44.8875 117.616 39.8466 123.23 39.2481 129.917C27.7602 117.987 21.3524 102.062 21.375 85.5C21.375 50.0852 50.0852 21.375 85.5 21.375C120.915 21.375 149.625 50.0852 149.625 85.5C149.648 102.059 143.243 117.98 131.759 129.91Z"
                      fill="black"
                    />
                  </>
                )}
              </svg>
            </label>
            <input
              id="file-upload"
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="hidden"
            />
            <button
              onClick={() => document.getElementById("file-upload")?.click()}
              className="w-[156px] h-[58px] ml-[8px] flex items-center justify-center bg-[#FFFFFF] rounded-[10px] border border-[1px] border-[#909090] mb-[20px] "
            >
              사진등록
            </button>
          </div>
          <div className="w-[726px] flex justify-end">
            <button
              onClick={() => handleGauge1()}
              className={`w-[254px] h-[58px] flex items-center justify-center ${
                elderName
                  ? "bg-[#D7F3D1] text-[#000000]"
                  : "bg-[#CFCFCF]  text-[#FFFFFF]"
              } rounded-[10px] text-[22px] font-[600]`}
            >
              다음
            </button>
          </div>
        </div>
      ) : selectedOne == 1 ? (
        <div>
          <p className="text-[30px] text-[#000000] font-[600] mt-[45px]">
            어르신 생년월일을 입력해주세요.
            <span className="w-[12px] text-[#FF602B] text-[30px] font-[600]">
              *
            </span>
          </p>
          <input
            placeholder="YYYY-MM-DD(필수)"
            value={elderBirth}
            onChange={(e) => setElderBirth(e.target.value)}
            className="placeholder:text-[#909090] placeholder:text-[22px] text-[22px] font-[600] placeholder:font-[600] mt-[25px] w-[516px] p-[16px] rounded-[10px] bg-[#FFFFFF] border border-[#909090]"
          />
          <p className="text-[30px] text-[#000000] font-[600] mt-[45px]">
            어르신 성별을 선택해주세요.
            <span className="w-[12px] text-[#FF602B] text-[30px] font-[600]">
              *
            </span>
          </p>
          <div className="flex gap-[8px] mt-[25px]">
            <button
              onClick={() => handleGenderSelect("여")}
              className={`text-[22px] font-[600] w-[254px] h-[58px] flex justify-center items-center rounded-[10px] border border-[#909090] transition-all duration-200 ${
                selectedGender === "여"
                  ? "bg-[#58C185] text-[#FFFFFF]"
                  : "bg-[#FFFFFF] text-[#909090]"
              }`}
            >
              여성
            </button>
            <button
              onClick={() => handleGenderSelect("남")}
              className={`text-[22px] font-[600] w-[254px] h-[58px] flex justify-center items-center rounded-[10px] border border-[#909090] transition-all duration-200 ${
                selectedGender === "남"
                  ? "bg-[#58C185] text-[#FFFFFF]"
                  : "bg-[#FFFFFF] text-[#909090]"
              }`}
            >
              남성
            </button>
          </div>
          <div className="flex w-[726px] justify-between relative">
            <button
              onClick={() => setSelectedOne((prev) => prev - 1)}
              className="absolute bottom-[-250px] w-[254px] h-[58px] flex items-center justify-center bg-[#FFFFFF] rounded-[10px] border border-[1px] border-[#000000] text-[22px] text-[#191A1C] font-[600]"
            >
              이전
            </button>

            <button
              onClick={handleGauge2}
              className={`absolute bottom-[-250px] right-[0px] w-[254px] h-[58px] flex items-center justify-center ${
                elderBirth.length == 10 && elderGender
                  ? "bg-[#D7F3D1] text-[#000000]"
                  : "bg-[#CFCFCF]  text-[#FFFFFF]"
              } rounded-[10px] text-[22px] font-[600]`}
            >
              다음
            </button>
          </div>
        </div>
      ) : selectedOne == 2 ? (
        <div>
          <p className="text-[30px] text-[#000000] font-[600] mt-[45px]">
            장기 요양 등급을 선택해주세요.
            <span className="w-[12px] text-[#FF602B] text-[30px] font-[600]">
              *
            </span>
          </p>
          <div className="relative mt-[25px]">
            <button
              onClick={() => setShowCareGradeDropdown(!showCareGradeDropdown)}
              className="flex items-center justify-center w-[174px] h-[47px] border border-[#909090] rounded-[10px] text-[22px] font-[600] gap-[30px] text-[#000000]"
            >
              <span>
                {careGrade == 0 ? "요양등급" : `${Number(careGrade)}등급`}
              </span>
              <Image
                src="/assets/icons/icon_down_arrow.svg"
                alt="화살표"
                width={24}
                height={24}
              />
            </button>

            {showCareGradeDropdown && (
              <div className="absolute left-0 mt-2 w-[174px] bg-white border border-gray-300 shadow-md rounded-[10px] z-10">
                {careGrades.map((grade) => (
                  <div
                    key={grade}
                    className="p-3 cursor-pointer text-[#000000] text-[22px] w-[174px] font-[600] hover:bg-[#65CCB2] hover:text-[#FFFFFF] rounded-[10px]"
                    onClick={() => handleCareGradeChange(grade)}
                  >
                    {grade}
                  </div>
                ))}
              </div>
            )}
          </div>
          <p className="text-[30px] text-[#000000] font-[600] mt-[45px]">
            어르신 주소를 입력해주세요.
            <span className="w-[12px] text-[#FF602B] text-[30px] font-[600]">
              *
            </span>
          </p>
          <div className="absolute w-[516px] h-[58px]">
            <input
              placeholder="도로명, 지번 혹은 건물명으로 검색"
              value={elderAddress}
              onChange={(e) => setElderAddress(e.target.value)}
              className="placeholder:text-[#909090] placeholder:text-[22px] text-[22px] font-[600] placeholder:font-[600] mt-[25px] w-[516px] p-[16px] rounded-[10px] bg-[#FFFFFF] border border-[#909090]"
            />

            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="26"
              viewBox="0 0 26 26"
              fill="none"
              className="relative bottom-[45px] left-[460px]"
            >
              <path
                d="M21.2333 22.75L14.4083 15.925C13.8667 16.3583 13.2438 16.7014 12.5396 16.9542C11.8354 17.2069 11.0861 17.3333 10.2917 17.3333C8.32361 17.3333 6.65817 16.6516 5.29533 15.288C3.9325 13.9244 3.25072 12.259 3.25 10.2917C3.24928 8.32433 3.93106 6.65889 5.29533 5.29533C6.65961 3.93178 8.32506 3.25 10.2917 3.25C12.2583 3.25 13.9241 3.93178 15.2891 5.29533C16.6541 6.65889 17.3355 8.32433 17.3333 10.2917C17.3333 11.0861 17.2069 11.8354 16.9542 12.5396C16.7014 13.2438 16.3583 13.8667 15.925 14.4083L22.75 21.2333L21.2333 22.75ZM10.2917 15.1667C11.6458 15.1667 12.7971 14.6929 13.7453 13.7453C14.6936 12.7978 15.1674 11.6466 15.1667 10.2917C15.1659 8.93678 14.6922 7.78592 13.7453 6.83908C12.7985 5.89225 11.6473 5.41811 10.2917 5.41667C8.93606 5.41522 7.7852 5.88936 6.83908 6.83908C5.89297 7.78881 5.41883 8.93967 5.41667 10.2917C5.4145 11.6437 5.88864 12.7949 6.83908 13.7453C7.78953 14.6958 8.94039 15.1696 10.2917 15.1667Z"
                fill="#909090"
              />
            </svg>
            {elderAddress && (
              <input
                placeholder="도로명, 지번 혹은 건물명으로 검색"
                value={elderAddress2}
                onChange={(e) => setElderAddress2(e.target.value)}
                className="placeholder:text-[#909090] placeholder:text-[22px] text-[22px] font-[600] placeholder:font-[600] mt-[25px] w-[516px] p-[16px] rounded-[10px] bg-[#FFFFFF] border border-[#909090]"
              />
            )}
          </div>
          <div className="flex w-[726px] justify-between relative">
            <button
              onClick={() => setSelectedOne((prev) => prev - 1)}
              className="absolute bottom-[-350px] w-[254px] h-[58px] flex items-center justify-center bg-[#FFFFFF] rounded-[10px] border border-[1px] border-[#000000] text-[22px] text-[#191A1C] font-[600]"
            >
              이전
            </button>

            <button
              onClick={handleGauge3}
              className={`absolute bottom-[-350px] right-[0px] w-[254px] h-[58px] flex items-center justify-center ${
                elderGrade && elderAddress
                  ? "bg-[#D7F3D1] text-[#000000]"
                  : "bg-[#CFCFCF]  text-[#FFFFFF]"
              } rounded-[10px] text-[22px] font-[600]`}
            >
              다음
            </button>
          </div>
        </div>
      ) : (
        <></>
      )}
      {/* <div className="flex w-[726px] justify-between relative">
        {selectedOne !== 0 && (
          <button
            onClick={() => setSelectedOne((prev) => prev - 1)}
            className="absolute left-[30px] w-[254px] h-[58px] flex items-center justify-center bg-[#FFFFFF] rounded-[10px] border border-[1px] border-[#000000] text-[22px] text-[#191A1C] font-[600]"
          >
            이전
          </button>
        )}

        <button
          onClick={handleGauge}
          className="absolute right-[0px] w-[254px] h-[58px] flex items-center justify-center bg-[#CFCFCF] rounded-[10px] text-[22px] text-[#FFFFFF] font-[600]"
        >
          다음
        </button>
      </div> */}
    </div>
  );
}
