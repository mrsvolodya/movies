import React from "react";

type Props = {
  children: React.ReactNode;
  extraClass?: string;
  onClick?: () => void;
};

export function Button({ children, extraClass, onClick }: Props) {
  const styleGeneral =
    "flex items-center justify-center px-2 py-2 rounded-full font-semibold transition-colors";
  const styleExtra = extraClass ? extraClass : "";
  const style = styleGeneral + " " + styleExtra;
  return (
    <button className={style} onClick={onClick}>
      {children}
    </button>
  );
}
