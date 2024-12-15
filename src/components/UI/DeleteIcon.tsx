import React from "react";
import { IconProps } from "../../types/IconProps";

export function DeleteIcon({ size = 24, color = "gray" }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      stroke={color}
      strokeWidth="1"
      className="w-10 h-10 px-2 py-2 transition-colors duration-300 hover:fill-gray-500"
    >
      <path d="M4.88229 6.47187L7.08333 19.7667C7.18401 20.3753 7.49749 20.9284 7.96792 21.3275C8.43835 21.7266 9.03518 21.9457 9.65208 21.9458H13.1396M20.1167 6.47187L17.9167 19.7667C17.816 20.3753 17.5025 20.9284 17.0321 21.3275C16.5617 21.7266 15.9648 21.9457 15.3479 21.9458H11.8604M10.4396 11.5792V16.8385M14.5604 11.5792V16.8385M2.86458 6.47187H22.1354M15.3927 6.47187V4.61771C15.3927 4.20331 15.2281 3.80588 14.9351 3.51285C14.642 3.21983 14.2446 3.05521 13.8302 3.05521H11.1698C10.7554 3.05521 10.358 3.21983 10.0649 3.51285C9.77191 3.80588 9.60729 4.20331 9.60729 4.61771V6.47187Z" />
    </svg>
  );
}
