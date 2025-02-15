"use client";
interface LongBtnProps {
  text: string;
  disabled?: boolean;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
}

interface ShortsBtnProps {
  next: string;
  back: string;
  disabled?: boolean;
  onClickNext?: () => void;
  onClickBack?: () => void;
}

export function LongBtn({ text, disabled, onClick, type }: LongBtnProps) {
  return (
    <div>
      <button
        type={type}
        className={`w-[354px] h-[52px] rounded-[10px] font-semibold text-[18px] transition-all
        ${
          disabled
            ? "bg-gray90 text-white cursor-not-allowed"
            : "bg-key text-white"
        }`}
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
}: ShortsBtnProps) {
  return (
    <div className="flex flex-row gap-[4px]">
      <button
        className="w-[175px] h-[52px] rounded-[10px] font-semibold text-[18px] transition-all border border-stroke"
        onClick={onClickBack}
      >
        {back}
      </button>
      <button
        className={`w-[175px] h-[52px] rounded-[10px] font-semibold text-[18px] transition-all
        ${
          disabled
            ? "bg-gray90 text-white cursor-not-allowed"
            : "bg-key text-white"
        }`}
        disabled={disabled}
        onClick={onClickNext}
      >
        {next}
      </button>
    </div>
  );
}
