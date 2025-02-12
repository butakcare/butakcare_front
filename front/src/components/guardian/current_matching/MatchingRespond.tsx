import Link from "next/link";
import { useState } from "react";

interface matchProps {
  id: number;
  created_at: string;
  fileter: string[];
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
    <div>
      <div className="max-tablet:flex max-tablet:items-center max-tablet:gap-[11px] max-tablet:justify-center">
        <div className="max-tablet:w-[103px] max-tablet:h-[2px] max-tablet:bg-[#CFCFCF]"></div>
        <p className="max-tablet:text-[18px] max-tablet:font-[600] max-tablet:text-[#8E8E8E]">
          {match?.created_at}
        </p>
        <div className="max-tablet:w-[103px] max-tablet:h-[2px] max-tablet:bg-[#CFCFCF]"></div>
      </div>
      <div className="max-tablet:w-[281px] max-tablet:h-[322px] max-tablet:ml-[24px] max-tablet:bg-[#F0F0F0] max-tablet:rounded-[14px] max-tablet:mt-[27px]">
        <div className="max-tablet:pl-[19px] max-tablet:pt-[17px]">
          {/* 요청 제목 */}
          <p className="max-tablet:text-[22px] max-tablet:font-[600] max-tablet:text-[#000000]">
            매칭 요청이 왔어요.
          </p>
          {/* 필터 */}
          <div className="max-tablet:flex max-tablet:gap-[4px] max-tablet:mt-[12px]">
            {match?.fileter.map((filter, index) => (
              <div
                key={index}
                className="max-tablet:text-[#FFFFFF] max-tablet:h-[31px] max-tablet:flex max-tablet:justify-center max-tablet:items-center max-tablet:px-[10px] max-tablet:py-[5px] max-tablet:bg-[#B3B3B3] max-tablet:rounded-[8px]"
              >
                <p>{filter}</p>
              </div>
            ))}
          </div>
          {/* 기간 */}
          <div className="max-tablet:flex max-tablet:h-[21px] max-tablet:gap-[23px] max-tablet:mt-[15px]">
            <p className="max-tablet:text-[18px] max-tablet:font-[500] max-tablet:text-[#9A9A9A]">
              기간
            </p>
            <p className="max-tablet:text-[18px] max-tablet:font-[500] max-tablet:text-[#000000]">
              {match?.day}
            </p>
          </div>
          {/* 시간 */}
          <div className="max-tablet:flex max-tablet:h-[21px] max-tablet:gap-[23px] max-tablet:mt-[12px]">
            <p className="max-tablet:text-[18px] max-tablet:font-[500] max-tablet:text-[#9A9A9A]">
              시간
            </p>
            <p className="max-tablet:text-[18px] max-tablet:font-[500] max-tablet:text-[#000000]">
              {match?.time}
            </p>
          </div>
          {/* 장소 */}
          <div className="max-tablet:flex max-tablet:h-[21px] max-tablet:gap-[23px] max-tablet:mt-[12px]">
            <p className="max-tablet:text-[18px] max-tablet:font-[500] max-tablet:text-[#9A9A9A]">
              장소
            </p>
            <p className="max-tablet:text-[18px] max-tablet:font-[500] max-tablet:text-[#000000]">
              {match?.location}
            </p>
          </div>
          {/* 급여 */}
          <div className="max-tablet:flex max-tablet:gap-[23px] max-tablet:mt-[14px]">
            <p className="max-tablet:text-[18px] max-tablet:h-[21px] max-tablet:font-[500] max-tablet:text-[#9A9A9A]">
              급여
            </p>
            <p className="max-tablet:text-[22px] max-tablet:h-[26px] max-tablet:font-[600] max-tablet:text-[#000000] max-tablet:leading-[26px]">
              {match?.salary}
            </p>
          </div>
          <div className="max-tablet:flex max-tablet:mt-[16px] max-tablet:pb-[14px]">
            <Link
              href="/guardian/current_matching"
              className="max-tablet:text-[#000000] max-tablet:font-[600] max-tablet:w-[153px] max-tablet:h-[52px] max-tablet:bg-[#FFFFFF] max-tablet:rounded-[10px] max-tablet:flex max-tablet:justify-center max-tablet:items-center max-tablet:cursor-pointer"
            >
              자세히 보기
            </Link>
          </div>
        </div>
      </div>
      <p className="max-tablet:ml-[26px] max-tablet:mt-[9px] max-tablet:text-[18px] max-tablet:h-[21px] max-tablet:font-[500] max-tablet:text-[#9A9A9A]">
        오전 10:34분
      </p>
      <div className="max-tablet:flex max-tablet:flex-col max-tablet:items-center max-tablet:gap-[6px] max-tablet:mt-[20px]">
        <button
          onClick={() => handleOpenModal("accept")}
          className="max-tablet:w-[353px] max-tablet:h-[50px] max-tablet:flex max-tablet:items-center max-tablet:justify-center max-tablet:text-[20px] max-tablet:font-[600] max-tablet:text-[#828282] max-tablet:border max-tablet:border-[1px] max-tablet:border-[#D1D1D1] max-tablet:rounded-[10px]"
        >
          수락하기
        </button>
        <button className="max-tablet:w-[353px] max-tablet:h-[50px] max-tablet:flex max-tablet:items-center max-tablet:justify-center max-tablet:text-[20px] max-tablet:font-[600] max-tablet:text-[#828282] max-tablet:border max-tablet:border-[1px] max-tablet:border-[#D1D1D1] max-tablet:rounded-[10px]">
          조율 요청하기
        </button>
        <button
          onClick={() => handleOpenModal("reject")}
          className="max-tablet:w-[353px] max-tablet:h-[50px] max-tablet:flex max-tablet:items-center max-tablet:justify-center max-tablet:text-[20px] max-tablet:font-[600] max-tablet:text-[#828282] max-tablet:border max-tablet:border-[1px] max-tablet:border-[#D1D1D1] max-tablet:rounded-[10px]"
        >
          거절하기
        </button>
      </div>
      {isModalOpen && (
        <div className="max-tablet:fixed max-tablet:inset-0 max-tablet:flex max-tablet:justify-center max-tablet:items-center max-tablet:z-50 max-tablet:bg-black max-tablet:bg-opacity-50">
          <div className="max-tablet:w-[305px] max-tablet:h-[341px] max-tablet:bg-[#F0F0F0] max-tablet:rounded-[14px] max-tablet:flex max-tablet:flex-col max-tablet:gap-[11px] max-tablet:items-center">
            <div className="max-tablet:flex max-tablet:mt-[19px]">
              <p className="max-tablet:text-[22px] max-tablet:font-[600] max-tablet:text-[#000000]">
                {`매칭을 ${modalTitle}할까요?`}
              </p>
            </div>
            <div className="max-tablet:w-[228px] max-tablet:h-[149px] max-tablet:rounded-[14px] max-tablet:bg-[#FFFFFF] max-tablet:pl-[24px] max-tablet:py-[12px]">
              {/* 기간 */}
              <div className="max-tablet:flex max-tablet:h-[21px] max-tablet:gap-[23px]">
                <p className="max-tablet:text-[18px] max-tablet:font-[500] max-tablet:text-[#9A9A9A]">
                  기간
                </p>
                <p className="max-tablet:text-[18px] max-tablet:font-[500] max-tablet:text-[#000000]">
                  {match?.day}
                </p>
              </div>
              {/* 시간 */}
              <div className="max-tablet:flex max-tablet:h-[21px] max-tablet:gap-[23px] max-tablet:mt-[12px]">
                <p className="max-tablet:text-[18px] max-tablet:font-[500] max-tablet:text-[#9A9A9A]">
                  시간
                </p>
                <p className="max-tablet:text-[18px] max-tablet:font-[500] max-tablet:text-[#000000]">
                  {match?.time}
                </p>
              </div>
              {/* 장소 */}
              <div className="max-tablet:flex max-tablet:h-[21px] max-tablet:gap-[23px] max-tablet:mt-[12px]">
                <p className="max-tablet:text-[18px] max-tablet:font-[500] max-tablet:text-[#9A9A9A]">
                  장소
                </p>
                <p className="max-tablet:text-[18px] max-tablet:font-[500] max-tablet:text-[#000000]">
                  {match?.location}
                </p>
              </div>
              {/* 급여 */}
              <div className="max-tablet:flex max-tablet:gap-[23px] max-tablet:mt-[14px]">
                <p className="max-tablet:text-[18px] max-tablet:h-[21px] max-tablet:font-[500] max-tablet:text-[#9A9A9A]">
                  급여
                </p>
                <p className="max-tablet:text-[18px] max-tablet:font-[500] max-tablet:text-[#000000]">
                  {match?.salary}
                </p>
              </div>
            </div>
            <p className="max-tablet:text-center max-tablet:text-[18px] max-tablet:font-[500] max-tablet:text-[#A5A5A5]">
              {`${modalTitle === "수락" ? "수락하기" : "거절하기"}`}를 누르시면
              <br />
              관리자에게 바로 알림이 가요.
            </p>
            <div className="max-tablet:flex max-tablet:gap-[4px] max-tablet:items-center">
              <button
                className="max-table:flex max-table:justify-center max-tablet:items-center max-tablet:w-[142px] max-tablet:h-[50px] max-tablet:bg-[#FFFFFF] max-tablet:text-[#787878] max-tablet:border max-tablet:border-[#D1D1D1] max-tablet:rounded-[10px] max-tablet:text-[18px] max-tablet:font-[600]"
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
                className="max-tablet:px-[42px] max-tablet:py-[11px] max-tablet:whitespace-nowrap max-tablet:w-[142px] max-tablet:h-[50px] max-tablet:bg-[#C3C3C3] max-tablet:text-[#FFFFFF] max-tablet:border max-tablet:border-[#D1D1D1] max-tablet:rounded-[10px] max-tablet:text-[18px] max-tablet:font-[600]"
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
