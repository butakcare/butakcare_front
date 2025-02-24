"use client";

import TitleText from "@/components/common/TitleText";
import { useState } from "react";

interface ManagerStep1_5Props {
  role: string;
  onRoleChange: (role: string) => void;
}

export default function ManagerStep1_5({
  role,
  onRoleChange,
}: ManagerStep1_5Props) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedRole, setSelectedRole] = useState(role || "");

  const roles = [
    { id: "센터장", name: "센터장" },
    { id: "사회복지사", name: "사회복지사" },
  ];

  const handleRoleSelect = (roleValue: string) => {
    setSelectedRole(roleValue);
    onRoleChange(roleValue);
    setIsOpen(false);
  };

  return (
    <div className="w-full h-auto max-tablet:flex max-tablet:flex-col max-tablet:items-center">
      <div>
        <TitleText text1="센터 직위를" text2="선택해주세요." on={true} />
      </div>
      <div className="hidden sm:block">
        <div className="flex flex-row">
          <div className="text-[30px] leading-[50px] font-bold flex items-center">
            센터 직위를 선택해주세요.
            <div className="flex items-end">
              <span className="font-semibold text-[#FF602B] text-[26px]">
                *
              </span>
            </div>
          </div>
        </div>
      </div>

      <form className="flex flex-col tablet:items-start justify-center items-center align-center pt-[25px] font-semibold text-[22px]">
        <div className="relative w-full max-w-md">
          <button
            type="button"
            className="w-[156px] h-[58px] px-4 text-left border border-[#666666] rounded-[10px] flex items-center justify-between bg-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className={selectedRole ? "text-black" : "text-[#666666]"}>
              {selectedRole || "센터 직위"}
            </span>
            <svg
              className={`w-5 h-5 transition-transform ${
                isOpen ? "rotate-180" : ""
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>

          {isOpen && (
            <div className="absolute z-10 w-[156px]  mt-1 bg-white border border-[#666666] rounded-[10px] shadow-lg">
              {roles.map((role) => (
                <button
                  key={role.id}
                  type="button"
                  className="w-[156px] px-4 py-3 text-left hover:bg-key hover:text-white focus:bg-key rounded-[10px]"
                  onClick={() => handleRoleSelect(role.id)}
                >
                  {role.name}
                </button>
              ))}
            </div>
          )}
        </div>
      </form>
    </div>
  );
}
