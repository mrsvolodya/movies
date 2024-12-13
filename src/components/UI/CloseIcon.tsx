import React from "react";
import { IconProps } from "../../types/IconProps";

export function CloseIcon({ isFilled, size = 24, color = "red" }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill={isFilled ? color : "none"}
      stroke={color}
      strokeWidth="1"
    >
      <path d="M18.75 6.25L6.25 18.75M6.25 6.25L18.75 18.75" />
    </svg>
  );
}
