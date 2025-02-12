"use client";
interface LongBtnProps {
  text: string;
  disabled?: boolean;
  onClick?: () => void;
}
export default function LongBtn({ text, disabled, onClick }: LongBtnProps) {
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
