interface InputFieldProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  on: boolean;
}

export default function InputField({
  label,
  value,
  onChange,
  placeholder,
  on,
}: InputFieldProps) {
  return (
    <div className="flex flex-col">
      <label
        htmlFor="name"
        className={`tablet:text-[24px] text-[#666666] font-semibold text-[18px] pb-[10px] w-[354px] ${
          on ? "" : "hidden"
        }`}
      >
        {label}
      </label>
      <div className="relative">
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className="w-[354px] tablet:w-[516px] tablet:text-[22px] tablet:h-[58px] font-semibold h-[52px] p-[15px_16px] text-black rounded-[10px] border border-[#666666] focus:outline-none"
        />
      </div>
    </div>
  );
}
