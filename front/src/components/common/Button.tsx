"use client";

interface LongBtnProps {
  text: string;
  disabled?: boolean;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  borderColor?: string;
  backgroundColor?: string;
  width?: number;
}

interface ShortsBtnProps {
  next: string;
  back: string;
  disabled?: boolean;
  onClickNext?: () => void;
  onClickBack?: () => void;
  borderColor?: string;
  backgroundColor?: string;
  width?: number;
}

export function LongBtn({
  text,
  disabled,
  onClick,
  type,
  width,
}: LongBtnProps) {
  return (
    <div>
      <button
        type={type}
        className={`w-[${width}px] tablet:ml-[505px] h-[52px] rounded-[10px] font-semibold text-[18px] transition-all
          ${
            disabled
              ? "bg-sub text-[#666666] cursor-not-allowed"
              : "bg-key text-white"
          } `}
        disabled={disabled}
        onClick={onClick}
      >
        {text}
      </button>
    </div>
  );
}

export function ShortsBtn({
  next,
  back,
  disabled,
  onClickNext,
  onClickBack,
  width,
}: ShortsBtnProps) {
  return (
    <div className="flex flex-row gap-[4px] tablet:gap-[218px] ">
      <button
        className={`w-[${width}px] tablet:bg-[#DFE3E2] h-[52px] rounded-[10px] font-semibold text-[18px] transition-all
        border border-stroke text-black`}
        onClick={onClickBack}
      >
        {back}
      </button>
      <button
        className={`w-[${width}px] h-[52px] rounded-[10px] font-semibold text-[18px] transition-all
        ${
          disabled
            ? "bg-sub text-[#666666] cursor-not-allowed"
            : "bg-key text-white"
        } `}
        disabled={disabled}
        onClick={onClickNext}
      >
        {next}
      </button>
    </div>
  );
}

export function XBLBtn({ text, onClick, type, width }: LongBtnProps) {
  return (
    <div>
      <button
        type={type}
        className={`w-[${width}px] h-[52px] rounded-[10px] font-semibold text-[18px] transition-all
       border border-key bg-white text-black`}
        onClick={onClick}
      >
        {text}
      </button>
    </div>
  );
}
