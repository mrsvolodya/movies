import React from "react";

export function Loader() {
  return (
    <div className="absolute inset-0 bg-mainBack flex items-center justify-center z-10">
      <div className="flex items-center justify-center h-lvh">
        <div className="rounded-full w-8 h-8 mt-4 mx-auto border-l-2 border-l-white animate-load8"></div>
      </div>
    </div>
  );
}
