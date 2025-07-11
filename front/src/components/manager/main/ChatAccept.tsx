import Link from "next/link";

interface Props {
  elderName: string;
  guardianName: string;
}

export default function ChatAccept({ elderName, guardianName }: Props) {
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
      <div className="flex items-center w-full justify-center mt-[63px] gap-[20px]">
        <div className="flex flex-col items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="84"
            height="84"
            viewBox="0 0 84 84"
            fill="none"
          >
            <circle
              cx="42"
              cy="42"
              r="40.5"
              fill="white"
              stroke="white"
              strokeWidth="3"
            />
            <mask
              id="mask0_803_10858"
              maskUnits="userSpaceOnUse"
              x="3"
              y="3"
              width="78"
              height="78"
            >
              <circle cx="42" cy="42" r="39" fill="#DFDDDB" />
            </mask>
            <g mask="url(#mask0_803_10858)">
              <path
                d="M27.2766 32.3633C17.9237 32.3633 10.3418 39.9452 10.3418 49.298C10.3418 55.954 14.1817 61.7131 19.767 64.4809C14.1817 67.2488 10.3418 73.0079 10.3418 79.6638C10.3418 89.0166 17.9237 96.5986 27.2766 96.5986C33.9325 96.5986 39.6916 92.7587 42.4594 87.1734C45.2273 92.7587 50.9864 96.5986 57.6423 96.5986C66.9951 96.5986 74.5771 89.0166 74.5771 79.6638C74.5771 73.0079 70.7372 67.2488 65.1519 64.4809C70.7372 61.7131 74.5771 55.954 74.5771 49.298C74.5771 39.9452 66.9951 32.3633 57.6423 32.3633C50.9864 32.3633 45.2273 36.2032 42.4594 41.7885C39.6916 36.2032 33.9325 32.3633 27.2766 32.3633Z"
                fill="#191A1C"
              />
              <path
                d="M32.3649 43.8329C32.3649 45.6067 30.927 47.0446 29.1532 47.0446C27.3794 47.0446 25.9414 45.6067 25.9414 43.8329C25.9414 42.059 27.3794 40.6211 29.1532 40.6211C30.927 40.6211 32.3649 42.059 32.3649 43.8329Z"
                fill="white"
              />
              <path
                d="M58.9782 43.8329C58.9782 45.6067 57.5403 47.0446 55.7665 47.0446C53.9926 47.0446 52.5547 45.6067 52.5547 43.8329C52.5547 42.059 53.9926 40.6211 55.7665 40.6211C57.5403 40.6211 58.9782 42.059 58.9782 43.8329Z"
                fill="white"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M39.708 47.0113C38.7901 46.6441 37.8711 45.9552 37.8711 44.75H38.7887C38.7887 45.3801 39.2462 45.8382 40.0488 46.1593C40.8376 46.4748 41.8073 46.5853 42.4593 46.5853C43.1114 46.5853 44.0811 46.4748 44.8698 46.1593C45.6725 45.8382 46.1299 45.3801 46.1299 44.75H47.0476C47.0476 45.9552 46.1285 46.6441 45.2106 47.0113C44.2788 47.384 43.1837 47.5029 42.4593 47.5029C41.7349 47.5029 40.6399 47.384 39.708 47.0113Z"
                fill="white"
              />
            </g>
          </svg>
          <p className="text-[30px] font-[700] text-[191A1C] mt-[10px]">
            {elderName}
          </p>
          <p className="text-[24px] font-[600] text-[#A7ABA5]">어르신</p>
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
            width="84"
            height="84"
            viewBox="0 0 84 84"
            fill="none"
          >
            <circle
              cx="42"
              cy="42"
              r="40.5"
              fill="white"
              stroke="white"
              strokeWidth="3"
            />
            <mask
              id="mask0_803_10858"
              maskUnits="userSpaceOnUse"
              x="3"
              y="3"
              width="78"
              height="78"
            >
              <circle cx="42" cy="42" r="39" fill="#DFDDDB" />
            </mask>
            <g mask="url(#mask0_803_10858)">
              <path
                d="M27.2766 32.3633C17.9237 32.3633 10.3418 39.9452 10.3418 49.298C10.3418 55.954 14.1817 61.7131 19.767 64.4809C14.1817 67.2488 10.3418 73.0079 10.3418 79.6638C10.3418 89.0166 17.9237 96.5986 27.2766 96.5986C33.9325 96.5986 39.6916 92.7587 42.4594 87.1734C45.2273 92.7587 50.9864 96.5986 57.6423 96.5986C66.9951 96.5986 74.5771 89.0166 74.5771 79.6638C74.5771 73.0079 70.7372 67.2488 65.1519 64.4809C70.7372 61.7131 74.5771 55.954 74.5771 49.298C74.5771 39.9452 66.9951 32.3633 57.6423 32.3633C50.9864 32.3633 45.2273 36.2032 42.4594 41.7885C39.6916 36.2032 33.9325 32.3633 27.2766 32.3633Z"
                fill="#191A1C"
              />
              <path
                d="M32.3649 43.8329C32.3649 45.6067 30.927 47.0446 29.1532 47.0446C27.3794 47.0446 25.9414 45.6067 25.9414 43.8329C25.9414 42.059 27.3794 40.6211 29.1532 40.6211C30.927 40.6211 32.3649 42.059 32.3649 43.8329Z"
                fill="white"
              />
              <path
                d="M58.9782 43.8329C58.9782 45.6067 57.5403 47.0446 55.7665 47.0446C53.9926 47.0446 52.5547 45.6067 52.5547 43.8329C52.5547 42.059 53.9926 40.6211 55.7665 40.6211C57.5403 40.6211 58.9782 42.059 58.9782 43.8329Z"
                fill="white"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M39.708 47.0113C38.7901 46.6441 37.8711 45.9552 37.8711 44.75H38.7887C38.7887 45.3801 39.2462 45.8382 40.0488 46.1593C40.8376 46.4748 41.8073 46.5853 42.4593 46.5853C43.1114 46.5853 44.0811 46.4748 44.8698 46.1593C45.6725 45.8382 46.1299 45.3801 46.1299 44.75H47.0476C47.0476 45.9552 46.1285 46.6441 45.2106 47.0113C44.2788 47.384 43.1837 47.5029 42.4593 47.5029C41.7349 47.5029 40.6399 47.384 39.708 47.0113Z"
                fill="white"
              />
            </g>
          </svg>
          <p className="text-[30px] font-[700] text-[191A1C] mt-[10px]">
            {guardianName ? guardianName : `송재현`}
          </p>
          <p className="text-[24px] font-[600] text-[#A7ABA5]">요양보호사</p>
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
