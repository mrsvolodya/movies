import React from "react";
import { IconProps } from "../../types/IconProps";

export function BackIcon({ size = 24, color = "yellow" }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      stroke={color}
      strokeWidth={1}
      fill="blue"
      viewBox="0 0 28 28"
      xmlns="http://www.w3.org/2000/svg"
      className="group-hover:fill-red-500 transition-all duration-300"
    >
      <path d="M2.08333 11.4583L9.37499 2.08333V7.29167C21.826 7.29167 23.2625 17.3729 22.9167 22.9167C22.3937 20.1198 22.151 15.625 9.37499 15.625V20.8333L2.08333 11.4583Z" />
    </svg>
  );
}
