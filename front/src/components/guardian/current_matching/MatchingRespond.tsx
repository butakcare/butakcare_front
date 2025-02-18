import Link from "next/link";
import { useState } from "react";

interface matchProps {
  id: number;
  created_at: string;
  filters: string[];
  day: string;
  time: string;
  location: string;
  salary: string;
}

interface MatchingRespondProps {
  match: matchProps;
}

export default function MatchingRespond({ match }: MatchingRespondProps) {
  const [isModalOpen, setModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState(""); // 모달 제목 상태
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isAccepted, setIsAccepted] = useState<string | null>(null); // 수락/거절 상태 관리

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
    // 수락하기 버튼 클릭 시 알림 보내는 로직을 여기에 추가
    console.log("수락하기 클릭! 관리자에게 알림 전송");
    setIsAccepted("수락됨"); // 수락 상태로 설정
    setModalOpen(false); // 모달 닫기
  };

  const handleReject = () => {
    console.log("거절하기 클릭");
    setIsAccepted("거절됨"); // 거절 상태로 설정
    setModalOpen(false); // 모달 닫기
  };

  return (
    <div className="tablet:flex tablet:flex-col tablet:items-center">
      <div className="flex items-center gap-[11px] justify-center">
        <div className="w-[103px] h-[2px] bg-[#CFCFCF]"></div>
        <p className="text-[18px] font-[600] text-[#8E8E8E]">
          {match?.created_at}
        </p>
        <div className="w-[103px] h-[2px] bg-[#CFCFCF]"></div>
      </div>
      <div className="w-[281px] h-[322px] max-tablet:ml-[24px] bg-[#F0F0F0] rounded-[14px] mt-[27px]">
        <div className="pl-[19px] pt-[17px]">
          {/* 요청 제목 */}
          <p className="text-[22px] font-[600] text-[#000000]">
            매칭 요청이 왔어요.
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
              {match?.day}
            </p>
          </div>
          {/* 시간 */}
          <div className="flex h-[21px] gap-[23px] mt-[12px]">
            <p className="text-[18px] font-[500] text-[#9A9A9A]">시간</p>
            <p className="text-[18px] font-[500] text-[#000000]">
              {match?.time}
            </p>
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
            <p className="text-[22px] h-[26px] font-[600] text-[#000000] leading-[26px]">
              {match?.salary}
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
      <p className="ml-[26px] mt-[9px] tablet:w-[300px] text-[18px] h-[21px] font-[500] text-[#9A9A9A]">
        오전 10:34분
      </p>
      <div className="flex flex-col items-center gap-[6px] mt-[20px]">
        <button
          onClick={() => handleOpenModal("accept")}
          className="w-[353px] h-[50px] flex items-center justify-center text-[20px] font-[600] text-[#828282] border border-[1px] border-[#D1D1D1] rounded-[10px] hover:bg-[#58C185] hover:text-[#FFFFFF]"
        >
          수락하기
        </button>
        <Link
          href="/guardian/current_matching/tuning"
          className="w-[353px] h-[50px] flex items-center justify-center text-[20px] font-[600] text-[#828282] border border-[1px] border-[#D1D1D1] rounded-[10px] hover:bg-[#58C185] hover:text-[#FFFFFF]"
        >
          조율 요청하기
        </Link>
        <button
          onClick={() => handleOpenModal("reject")}
          className="w-[353px] h-[50px] flex items-center justify-center text-[20px] font-[600] text-[#828282] border border-[1px] border-[#D1D1D1] rounded-[10px] hover:bg-[#58C185] hover:text-[#FFFFFF]"
        >
          거절하기
        </button>
      </div>
      {isModalOpen && (
        <div className="fixed inset-0 flex justify-center items-center z-50 bg-black bg-opacity-50">
          <div className="w-[305px] h-[341px] bg-[#F0F0F0] rounded-[14px] flex flex-col gap-[11px] items-center">
            <div className="flex mt-[19px]">
              <p className="text-[22px] font-[600] text-[#000000]">
                {`매칭을 ${modalTitle}할까요?`}
              </p>
            </div>
            <div className="w-[228px] h-[149px] rounded-[14px] bg-[#FFFFFF] pl-[24px] py-[12px]">
              {/* 기간 */}
              <div className="flex h-[21px] gap-[23px]">
                <p className="text-[18px] font-[500] text-[#9A9A9A]">기간</p>
                <p className="text-[18px] font-[500] text-[#000000]">
                  {match?.day}
                </p>
              </div>
              {/* 시간 */}
              <div className="flex h-[21px] gap-[23px] mt-[12px]">
                <p className="text-[18px] font-[500] text-[#9A9A9A]">시간</p>
                <p className="text-[18px] font-[500] text-[#000000]">
                  {match?.time}
                </p>
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
                <p className="text-[18px] font-[500] text-[#000000]">
                  {match?.salary}
                </p>
              </div>
            </div>
            <p className="text-center text-[18px] font-[500] text-[#A5A5A5]">
              {`${modalTitle === "수락" ? "수락하기" : "거절하기"}`}를 누르시면
              <br />
              관리자에게 바로 알림이 가요.
            </p>
            <div className="flex gap-[4px] items-center">
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
