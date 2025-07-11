import Link from "next/link";
import { useEffect, useState } from "react";
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

interface MatchingRespondProps {
  match: matchProps;
}

export default function MatchingRespond({ match }: MatchingRespondProps) {
  const router = useRouter();
  const [matches, setMatches] = useState<matchProps[]>([]);
  const [isModalOpen, setModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState(""); // 모달 제목 상태
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isAccepted, setIsAccepted] = useState<string | null>(null); // 수락/거절 상태 관리

  // 컴포넌트가 처음 렌더링될 때 localStorage에서 matches를 불러와 상태를 초기화
  useEffect(() => {
    const storedMatches = localStorage.getItem("matches");

    if (storedMatches) {
      localStorage.clear();
      setMatches(JSON.parse(storedMatches));
    }
  }, []);

  useEffect(() => {
    setMatches((prev) => {
      // match가 이미 있는지 확인 후 추가
      if (!prev.some((existingMatch) => existingMatch.id === match.id)) {
        return [...prev, match];
      }
      return prev;
    });
  }, [match]);

  const handleOpenModal = (action: "accept" | "reject") => {
    setModalOpen(true);
    // 버튼에 따라 모달 제목 변경
    if (action === "accept") {
      setModalTitle("수락");
    } else {
      setModalTitle("거절");
    }
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const handleAccept = () => {
    console.log("수락하기 클릭! 관리자에게 알림 전송");
    setIsAccepted("수락됨"); // 수락 상태로 설정
    setModalOpen(false); // 모달 닫기
  };

  const handleReject = () => {
    console.log("거절하기 클릭");
    setIsAccepted("거절됨"); // 거절 상태로 설정
    setModalOpen(false); // 모달 닫기
  };

  const handleLead = () => {
    localStorage.setItem("matches", JSON.stringify(matches));
    router.push("/guardian/current_matching/tuning");
  };

  return (
    <div className="tablet:flex tablet:flex-col tablet:items-center">
      <div className="flex items-center gap-[11px] justify-center">
        <div className="w-[103px] h-[2px] bg-[#CFCFCF]"></div>
        <p className="text-[18px] font-[600] text-[#8E8E8E]">
          {matches[0]?.created_at}
        </p>
        <div className="w-[103px] h-[2px] bg-[#CFCFCF]"></div>
      </div>

      {matches.map((match, idx) => (
        <div key={idx}>
          <div
            className={`w-[281px] bg-[#F7F8FA] rounded-[14px] mt-[27px] ${
              idx === 0 ? "ml-[20px]" : "ml-[100px]"
            }`}
          >
            <div className="pl-[19px] pt-[17px]">
              {/* 요청 제목 */}
              <p className="text-[22px] font-[600] text-[#000000]">
                {idx == 0 ? "매칭 요청이 왔어요." : "조율을 요청했어요."}
              </p>
              {/* 필터 */}
              <div className="flex gap-[4px] mt-[12px]">
                {match?.filters.map((filter, index) => (
                  <div
                    key={index}
                    className="text-[#58C185] h-[31px] flex justify-center items-center px-[10px] py-[5px] bg-[#D7F3D1] rounded-[8px]"
                  >
                    <p>{filter}</p>
                  </div>
                ))}
              </div>
              {/* 기간 */}
              <div className="flex h-[21px] gap-[23px] mt-[15px]">
                <p className="text-[18px] font-[500] text-[#9A9A9A]">기간</p>
                <p className="text-[18px] font-[500] text-[#000000]">
                  {match?.schedules.join(", ")}
                </p>
              </div>
              {/* 시간 */}
              <div className="flex gap-[23px] mt-[12px]">
                <p className="text-[18px] font-[500] text-[#9A9A9A]">시간</p>
                <div>
                  {match.times.map((time, idx) => (
                    <p
                      key={idx}
                      className="text-[18px] font-[500] text-[#000000]"
                    >
                      {time}
                    </p>
                  ))}
                </div>
              </div>
              {/* 장소 */}
              <div className="flex h-[21px] gap-[23px] mt-[12px]">
                <p className="text-[18px] font-[500] text-[#9A9A9A]">장소</p>
                <p className="text-[18px] font-[500] text-[#000000]">
                  {match?.location}
                </p>
              </div>
              {/* 급여 */}
              <div className="flex gap-[23px] mt-[14px]">
                <p className="text-[18px] h-[21px] font-[500] text-[#9A9A9A]">
                  급여
                </p>
                <p className="text-[22px] font-[600] text-[#000000] leading-[26px]">
                  {idx == 0 ? `${match?.salary}` : `시급${match?.salary}`}
                  <br />
                  월급 1,500,000원
                </p>
              </div>
              <div className="flex mt-[16px] pb-[14px]">
                <Link
                  href="/guardian/main/matching_info"
                  className="text-[#000000] font-[600] w-[153px] h-[52px] bg-[#FFFFFF] rounded-[10px] flex justify-center items-center cursor-pointer"
                >
                  자세히 보기
                </Link>
              </div>
            </div>
          </div>
          <p
            className={` ${
              idx == 0 ? "ml-[26px]" : "ml-[120px]"
            } mt-[9px] tablet:w-[300px] text-[18px] h-[21px] font-[500] text-[#9A9A9A]`}
          >
            {idx == 0 ? "오전 10:34분" : "오후 1시 20분"}
          </p>
        </div>
      ))}
      {matches.length <= 1 ? (
        <div className="flex flex-col items-center gap-[6px] mt-[20px]">
          <button
            onClick={() => handleOpenModal("accept")}
            className="w-[353px] h-[50px] flex items-center justify-center text-[20px] font-[600] text-[#828282] border border-[1px] border-[#D1D1D1] rounded-[10px] hover:bg-[#58C185] hover:text-[#FFFFFF]"
          >
            수락하기
          </button>
          <button
            onClick={() => handleLead()}
            className="w-[353px] h-[50px] flex items-center justify-center text-[20px] font-[600] text-[#828282] border border-[1px] border-[#D1D1D1] rounded-[10px] hover:bg-[#58C185] hover:text-[#FFFFFF]"
          >
            조율 요청하기
          </button>
          <button
            onClick={() => handleOpenModal("reject")}
            className="w-[353px] h-[50px] flex items-center justify-center text-[20px] font-[600] text-[#828282] border border-[1px] border-[#D1D1D1] rounded-[10px] hover:bg-[#58C185] hover:text-[#FFFFFF]"
          >
            거절하기
          </button>
        </div>
      ) : (
        <></>
      )}

      {isModalOpen && (
        <div className="fixed inset-0 flex justify-center items-center z-50 bg-black bg-opacity-50">
          <div className="w-[305px] h-[468px] bg-[#F7F8FA] rounded-[14px] flex flex-col gap-[11px] items-center">
            <div className="flex mt-[19px]">
              <p className="text-[22px] font-[600] text-[#000000]">
                {`매칭을 ${modalTitle}할까요?`}
              </p>
            </div>
            <p className="text-[18px] w-[281px] text-center font-[600] text-[#58C185]">
              {modalTitle == "수락"
                ? `* 매칭 수락시 조율 요청이 불가능하며,
관리자에게 근무 확정 알림이 가요.`
                : `* 매칭 거절시 요청이 성사되지 않으며,
관리자에게 근무 거절 알림이 가요.`}
            </p>
            <div className="w-[262px] h-[239px] rounded-[14px] bg-[#FFFFFF] px-[16px] py-[12px]">
              {/* 시작날짜 */}
              <div className="flex h-[21px] gap-[23px]">
                <p className="text-[18px] w-[68px] font-[500] text-[#9A9A9A]">
                  시작 날짜
                </p>
                <p className="text-[18px] font-[500] text-[#000000]">
                  2023.03.02
                </p>
              </div>
              {/* 기간 */}
              <div className="flex  gap-[23px] mt-[15px]">
                <p className="text-[18px] w-[68px] font-[500] text-[#9A9A9A]">
                  기간
                </p>
                <p className="text-[18px] font-[500] text-[#000000]">
                  {match?.schedules.join(", ")}
                </p>
              </div>
              {/* 시간 */}
              <div className="flex  gap-[23px] mt-[12px]">
                <p className="text-[18px] w-[68px] font-[500] text-[#9A9A9A]">
                  시간
                </p>
                {match.times.map((time, idx) => (
                  <p
                    key={idx}
                    className="text-[18px] font-[500] text-[#000000]"
                  >
                    {time}
                  </p>
                ))}
              </div>
              {/* 장소 */}
              <div className="flex gap-[23px] mt-[12px]">
                <p className="text-[18px] w-[68px] font-[500] text-[#9A9A9A]">
                  장소
                </p>
                <p className="text-[18px] font-[500] text-[#000000]">
                  {match?.location}
                </p>
              </div>
              {/* 급여 */}
              <div className="flex gap-[23px] mt-[14px]">
                <p className="text-[18px] w-[68px] font-[500] text-[#9A9A9A]">
                  급여
                </p>
                <p className="text-[18px] font-[500] text-[#000000]">
                  {match?.salary} <br />
                  월급 1,500,000원
                </p>
              </div>
            </div>

            <div className="flex gap-[4px] items-center mt-[27px]">
              <button
                className="max-table:flex max-table:justify-center items-center w-[142px] h-[50px] bg-[#FFFFFF] text-[#787878] border border-[#D1D1D1] rounded-[10px] text-[18px] font-[600]"
                onClick={handleCloseModal}
              >
                아니오
              </button>
              <Link
                href={
                  modalTitle === "수락"
                    ? "/guardian/matching_info"
                    : "/guardian/my_matching"
                }
                className="px-[42px] py-[11px] whitespace-nowrap w-[142px] h-[50px] bg-[#C3C3C3] text-[#FFFFFF] border border-[#D1D1D1] rounded-[10px] text-[18px] font-[600] hover:bg-[#58C185] hover:text-[#FFFFFF]"
                onClick={modalTitle === "수락" ? handleAccept : handleReject}
              >
                {modalTitle === "수락" ? "수락하기" : "거절하기"}
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
