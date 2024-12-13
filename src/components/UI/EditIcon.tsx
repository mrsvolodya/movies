import React from "react";
import { IconProps } from "../../types/IconProps";

export function EditIcon({ isFilled, size = 24, color = "yellow" }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      fill={isFilled ? color : "none"}
      stroke={color}
      strokeWidth="1"
    >
      <path d="M26.6669 10.9869L9.65312 28H4V22.3469L21.0131 5.33312C21.7631 4.58392 22.7799 4.16309 23.84 4.16309C24.9001 4.16309 25.9169 4.58392 26.6669 5.33312C27.4161 6.08314 27.8369 7.09989 27.8369 8.16C27.8369 9.22011 27.4161 10.2369 26.6669 10.9869Z" />
    </svg>
  );
}
