import React from "react";

type ErrorProps = {
  message: string;
  error?: boolean;
};

export function ErrorMessage({ message, error = true }: ErrorProps) {
  return (
    <div className="absolute  inset-0 flex justify-center items-center min-h-full bg-mainBack">
      <div className=" text-red-800 p-6 rounded-lg shadow-lg border border-red-800 max-w-sm w-full">
        {error && (
          <h2 className="text-xl font-bold mb-4 text-center">
            Oops! Something went wrong.
          </h2>
        )}

        <p className="text-center italic font-mono">{message}</p>
      </div>
    </div>
  );
}
