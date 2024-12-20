import React from "react";
import { IconProps } from "../../types/IconProps";

export function HeartIcon({
  isFilled = null,
  size = 24,
  color = "red",
  isActive = false,
  isHeader = false,
}: IconProps) {
  let strokeColor = isFilled ? color : "gray";

  if (isHeader) {
    strokeColor = isActive ? "yellow" : color;
  }

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 -1 24 24"
      xmlns="http://www.w3.org/2000/svg"
      fill={isFilled ? color : "none"}
      stroke={strokeColor}
      strokeWidth="1"
      className={`w-10 h-10 px-2 py-2 transition-all duration-300 ${
        isHeader ? "transform hover:scale-110 hover:stroke-yellow-400" : ""
      }`}
    >
      <path d="M12 19.654L11.242 18.969C9.61 17.4783 8.26 16.2023 7.192 15.141C6.12467 14.079 5.282 13.1423 4.664 12.331C4.046 11.5197 3.614 10.7863 3.368 10.131C3.122 9.47567 2.99933 8.81533 3 8.15C3 6.878 3.432 5.81 4.296 4.946C5.16 4.082 6.228 3.65 7.5 3.65C8.38 3.65 9.205 3.875 9.975 4.325C10.745 4.775 11.42 5.42967 12 6.289C12.58 5.42967 13.255 4.775 14.025 4.325C14.795 3.875 15.62 3.65 16.5 3.65C17.772 3.65 18.84 4.082 19.704 4.946C20.568 5.81 21 6.878 21 8.15C21 8.814 20.8773 9.474 20.632 10.13C20.386 10.7873 19.954 11.5213 19.336 12.332C18.718 13.1427 17.8783 14.079 16.817 15.141C15.7557 16.2023 14.4023 17.4783 12.757 18.969L12 19.654Z" />
    </svg>
  );
}
