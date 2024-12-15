import React from "react";

type Props = {
  children: React.ReactNode;
  extraClass?: string;
  onClick?: () => void;
  disabled?: boolean;
};

export function Button({
  children,
  extraClass,
  onClick,
  disabled = false,
}: Props) {
  const styleGeneral =
    "flex items-center justify-center rounded-full font-semibold transition-all duration-300 hover:scale-105 bg-gray-800 bg-opacity-40 hover:bg-opacity-80";
  const styleExtra = extraClass ? extraClass : "";
  const style = styleGeneral + " " + styleExtra;
  return (
    <button className={style} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
}
