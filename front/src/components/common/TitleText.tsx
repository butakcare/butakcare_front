interface TitleTextProps {
  text1: string;
  text2: string;
  on: boolean;
}
export default function TitleText({ text1, text2, on }: TitleTextProps) {
  return (
    <>
      <div className="flex flex-row w-[354px]">
        <div className="  text-[26px] font-bold leading-[40px]">
          {text1}
          {text2 && (
            <>
              <br /> {text2}
            </>
          )}
          <span
            className={`font-semibold text-[#FF602B] text-[26px] ${
              on ? "" : "hidden"
            }`}
          >
            *
          </span>
        </div>
      </div>
    </>
  );
}
