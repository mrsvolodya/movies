import React from "react";
import { IconProps } from "../../types/IconProps";

export function AddIcon({
  isFilled = false,
  size = 24,
  color = "white",
  isActive = false,
}: IconProps) {
  const strokeColor = isActive ? "yellow" : color;

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 25 25"
      fill={isFilled ? color : "none"}
      stroke={strokeColor}
      xmlns="http://www.w3.org/2000/svg"
      strokeWidth="1"
      className="w-10 h-10 px-2 py-2 transition-all duration-300 flex items-center justify-center transform hover:scale-110 hover:stroke-yellow-400"
    >
      <path d="M3.64583 11.4583C3.64583 9.47917 3.64687 8.04792 3.79374 6.95625C3.93854 5.87917 4.21666 5.21146 4.71354 4.71354C5.21145 4.21667 5.87916 3.93854 6.95624 3.79375C8.04791 3.64792 9.47916 3.64584 11.4583 3.64584H13.5417C15.5208 3.64584 16.9521 3.64688 18.0448 3.79375C19.1208 3.93854 19.7885 4.21667 20.2865 4.71354C20.7833 5.21146 21.0615 5.87917 21.2062 6.95625C21.3521 8.04792 21.3542 9.47917 21.3542 11.4583V13.5417C21.3542 15.5208 21.3531 16.9521 21.2062 18.0448C21.0615 19.1208 20.7833 19.7885 20.2865 20.2865C19.7885 20.7833 19.1208 21.0615 18.0448 21.2063C16.9521 21.3521 15.5208 21.3542 13.5417 21.3542H11.4583C9.47916 21.3542 8.04791 21.3531 6.95624 21.2063C5.87916 21.0615 5.21145 20.7833 4.71354 20.2865C4.21666 19.7885 3.93854 19.1208 3.79374 18.0448C3.64791 16.9521 3.64583 15.5208 3.64583 13.5417V11.4583Z" />
      <path d="M12.5 8.33334V16.6667M16.6667 12.5H8.33333" />
    </svg>
  );
}
