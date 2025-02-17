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
    <>
      <label
        htmlFor="name"
        className={`text-stroke font-semibold text-[18px] pb-[10px] w-[354px] ${
          on ? "" : "hidden"
        }`}
      >
        {label}
      </label>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className=" w-[354px] h-[52px] p-[15px_16px] rounded-[10px] border border-stroke focus:outline-none"
      />
    </>
  );
}
