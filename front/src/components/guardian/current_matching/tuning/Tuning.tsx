"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import WorkModal from "./WorkModal";
import { useRouter } from "next/navigation";

interface matchProps {
  id: number;
  created_at: string;
  filters: string[];
  schedules: string[];
  times: string[];
  location: string;
  salary: string;
  isSentByCaregiver: boolean;
}

export default function Tuning() {
  const router = useRouter();
  const [workModal, setWorkModal] = useState<boolean>(false);
  const [selectedDays, setSelectedDays] = useState<string[]>([]);
  const [selectedTimes, setSelectedTimes] = useState<string[]>([]);
  const [wage, setWage] = useState<number>(10300);
  const [startDay, setStartDay] = useState<string>("");
  const [matches, setMatches] = useState<matchProps[]>([]);

  useEffect(() => {
    const storedMatches = localStorage.getItem("matches");
    if (storedMatches) {
      setMatches(JSON.parse(storedMatches));
    }
  }, []);

  const calculateMonthlySalary = () => {
    const hoursPerSession = 3; // 시간대당 근무 시간
    const weeklyHours =
      selectedDays.length * selectedTimes.length * hoursPerSession;
    const monthlyHours = weeklyHours * 4;
    return Math.round(wage * monthlyHours);
  };

  const handleComplete = () => {
    if (startDay && selectedDays && selectedTimes && wage) {
      const newMatch: matchProps = {
        id: Date.now(), // 고유 ID로 현재 시간을 사용
        created_at: startDay,
        filters: ["3등급", "이동보조", "일상보조"], // 추가적인 필터가 있다면 여기에 추가
        schedules: selectedDays,
        times: selectedTimes,
        location: "서울특별시 동작구",
        salary: `${wage}원`,
        isSentByCaregiver: false,
      };

      // 상태 업데이트 후 바로 localStorage에 저장
      const updatedMatches = [...matches, newMatch];
      setMatches(updatedMatches);
      localStorage.setItem("matches", JSON.stringify(updatedMatches));

      router.back();
    }
  };

  const formatCurrency = (value: number) => {
    return value.toLocaleString("ko-kr");
  };

  return (
    <div>
      <div className="w-[352px] h-[52px] bg-[#D7F3D1] rounded-[10px] flex justify-between items-center px-[17px]">
        <p className="text-[18px] font-[600] text-[191A1C]">
          어르신 정보 / 근무 조건 자세히 보기
        </p>
        <Link href="/guardian/main/matching_info">
          <Image
            src="/assets/icons/icon_right_arrow.svg"
            alt="화살표"
            width={20}
            height={20}
            className="w-[20px] h-[20px]"
          />
        </Link>
      </div>
      <div className="flex flex-col gap-[14px] items-center mt-[36px]">
        <div className="flex gap-[12px] w-[352px]">
          <strong className="text-[26px] text-[#000000] font-[700] leading-[31px]">
            근무 조건
          </strong>
          <Image
            src="/assets/icons/icon_tuning.svg"
            alt="이미지"
            width={24}
            height={24}
            onClick={() => setWorkModal(true)}
            className="w-[24px] h-[24px]"
          />
        </div>

        <div className="flex flex-col w-[352px] bg-[#F7F8FA] items-start justify-center pl-[22px] gap-[10px] py-[14px] rounded-[14px]">
          <div className="flex gap-[16px] h-[26px]">
            <p className="w-[75px] text-[22px] whitespace-nowrap font-[500] text-[#9A9A9A]">
              시작날짜
            </p>
            <p className="text-[22px] whitespace-nowrap font-[500] text-[#000000]">
              {startDay ? startDay : "-"}
            </p>
          </div>
          <div className="flex gap-[16px] h-[26px]">
            <p className="w-[75px] text-[22px] whitespace-nowrap font-[500] text-[#9A9A9A]">
              기간
            </p>
            <p className="text-[22px] whitespace-nowrap font-[500] text-[#000000]">
              {selectedDays.length > 0 ? selectedDays.join(", ") : "-"}
            </p>
          </div>
          <div className="flex gap-[16px] ">
            <p className="w-[75px] text-[22px] whitespace-nowrap font-[500] text-[#9A9A9A]">
              시간
            </p>

            {selectedTimes.length > 0 ? (
              <div className="flex flex-col">
                {selectedTimes.map((time, idx) => (
                  <p
                    key={idx}
                    className="text-[22px] font-[500] text-[#000000]"
                  >
                    {time}
                  </p>
                ))}
              </div>
            ) : (
              <p className="text-[22px] whitespace-nowrap font-[500] text-[#000000]">
                -
              </p>
            )}
          </div>
          <div className="flex gap-[16px] ">
            <p className="w-[75px] text-[22px] whitespace-nowrap font-[500] text-[#9A9A9A]">
              급여
            </p>
            <p className="text-[22px] whitespace-nowrap font-[500] text-[#000000]">
              {`시급 ${formatCurrency(wage)}원`}
              <br />
              월급 {formatCurrency(calculateMonthlySalary())}원
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-[14px] items-center mt-[36px]">
        <div className="flex gap-[12px] w-[352px]">
          <strong className="text-[26px] text-[#000000] font-[700] leading-[31px]">
            추가 요청사항
          </strong>
        </div>
        <textarea
          placeholder="0/500"
          className="w-[352px] h-[115px] rounded-[14px] bg-[#F7F8FA] text-[#676767] text-[22px] font-[500] py-[16px] px-[21px]"
        />
      </div>
      <div>
        <p className="text-[#A5A5A5] text-[18px] font-[600] mt-[61px]">
          꼼꼼히 확인하셨나요?
          <br />
          조율 요청을 보내면 관리자에게 바로 알람이 가요.
        </p>
        <button
          onClick={() => handleComplete()}
          className="w-[354px] h-[52px] mt-[21px] bg-[#58C185] rounded-[10px] flex justify-center items-center text-[#FFFFFF] text-[18px] font-[600] mb-[19px]"
        >
          조율 요청 보내기
        </button>
      </div>
      {workModal && (
        <WorkModal
          selectedDays={selectedDays}
          setSelectedDays={setSelectedDays}
          selectedTimes={selectedTimes}
          setSelectedTimes={setSelectedTimes}
          startDay={startDay}
          setStartDay={setStartDay}
          wage={wage}
          setWage={setWage}
          onClose={setWorkModal}
        />
      )}
    </div>
  );
}
