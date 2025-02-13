"use client";
interface LongBtnProps {
  text: string;
  disabled?: boolean;
  onClick?: () => void;
}

interface ShortsBtnProps {
  next: string;
  back: string;
  disabled?: boolean;
  onClick?: () => void;
}

export function LongBtn({ text, disabled, onClick }: LongBtnProps) {
  return (
    <div>
      <button
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

export function ShortsBtn({ next, back, disabled, onClick }: ShortsBtnProps) {
  return (
    <div className="flex flex-row gap-[4px]">
      <button
        className="w-[175px] h-[52px] rounded-[10px] font-semibold text-[18px] transition-all border border-stroke"
        onClick={onClick}
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
        onClick={onClick}
      >
        {next}
      </button>
    </div>
  );
}
