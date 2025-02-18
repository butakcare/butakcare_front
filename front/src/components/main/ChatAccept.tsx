import Link from "next/link";

export default function ChatAccept() {
  return (
    <div className="w-full h-full pl-[31px] pt-[20px]">
      <p className="text-[26px] font-[600] text-[#191A1C] mb-[52px]">
        매칭 수락
      </p>
      <strong className="text-[30px] font-[600] text-[#191A1C] ">
        {"매칭이 성사되었습니다 :)"}
      </strong>
      <p className="text-[24px] font-[600] text-[#666666] mt-[13px]">
        어르신 관리에서 매칭된 요양보호사를
        <br />
        확인하실 수 있습니다.
      </p>
      <div className="flex items-center w-full justify-center mt-[63px]">
        <div className="flex flex-col items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="107"
            height="106"
            viewBox="0 0 107 106"
            fill="none"
          >
            <circle cx="53.5" cy="53" r="53" fill="#D9D9D9" />
          </svg>
          <p className="text-[30px] font-[700] text-[191A1C] mt-[10px]">
            김복순
          </p>
          <p className="text-[24px] font-[600] text-[#A7ABA5]">어르신</p>
          <Link
            href="/"
            className="text-[22px] mt-[10px] font-[500] text-[#666666] w-[141px] h-[48px] bg-[#DFE3E2] rounded-[10px] flex items-center justify-center"
          >
            프로필 보기
          </Link>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="57"
          height="57"
          viewBox="0 0 57 57"
          fill="none"
        >
          <path
            d="M15.0517 0C6.73887 0 0 6.73889 0 15.0517C0 20.9306 3.3704 26.0224 8.28435 28.5C3.3704 30.9776 0 36.0694 0 41.9483C0 50.2611 6.73887 57 15.0517 57C20.9306 57 26.0222 53.6296 28.4999 48.7156C30.9775 53.6296 36.0692 57 41.9481 57C50.2609 57 56.9997 50.2611 56.9997 41.9482C56.9997 36.0694 53.6294 30.9777 48.7156 28.5C53.6295 26.0224 57 20.9307 57 15.0517C57 6.73889 50.2611 0 41.9483 0C36.0693 0 30.9776 3.37052 28.5 8.2846C26.0224 3.37052 20.9307 0 15.0517 0Z"
            fill="#58C185"
          />
        </svg>
        <div className="flex flex-col items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="107"
            height="106"
            viewBox="0 0 107 106"
            fill="none"
          >
            <circle cx="53.5" cy="53" r="53" fill="#D9D9D9" />
          </svg>
          <p className="text-[30px] font-[700] text-[191A1C] mt-[10px]">
            김요양
          </p>
          <p className="text-[24px] font-[600] text-[#A7ABA5]">요양보호사</p>
          <Link
            href="/"
            className="text-[22px] mt-[10px] font-[500] text-[#666666] w-[141px] h-[48px] bg-[#DFE3E2] rounded-[10px] flex items-center justify-center"
          >
            프로필 보기
          </Link>
        </div>
      </div>
      <div className="w-full flex justify-end pr-[30px] mt-[130px]">
        <Link
          href="/manager/main"
          onClick={(e) => {
            e.preventDefault();
            window.location.href = "/manager/main";
          }}
          className="w-[287px] h-[58px] flex items-center justify-center bg-[#58C185] rounded-[10px] text-[22px] font-[600] text-[#FFFFFF]"
        >
          메인 페이지로 이동하기
        </Link>
      </div>
    </div>
  );
}
