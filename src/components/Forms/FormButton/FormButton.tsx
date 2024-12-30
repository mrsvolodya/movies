import React, { ReactNode } from "react";
const buttonDisabledClass = "opacity-50 cursor-not-allowed";
const buttonClass = `bg-gray-600 hover:bg-slate-800 font-bold px-4 rounded w-full transition-color duration-300`;

type ButtonProps = {
  children: ReactNode;
  type: "submit" | "reset" | "button";
  isLoading: boolean;
  handleCancel?: () => void;
};

export function FormButton({
  type,
  isLoading,
  handleCancel,
  children,
}: ButtonProps) {
  return (
    <button
      type={type}
      disabled={isLoading}
      onClick={handleCancel}
      className={`${buttonClass} ${isLoading ? buttonDisabledClass : ""}`}
    >
      {children}
    </button>
  );
}
