import { Input } from "@headlessui/react";
import React from "react";
import { useSearchParams } from "react-router-dom";
import { QueryParams } from "../../enums/QueryParams.ts";

export function MovieSearchInput() {
  const [searchParams, setSearchParams] = useSearchParams("");
  const params = new URLSearchParams(searchParams);
  const filterQuery = searchParams.get(QueryParams.query) || "";

  function handleInputQuery(e: React.ChangeEvent<HTMLInputElement>) {
    params.set(QueryParams.query, e.target.value);
    setSearchParams(params);
  }
  return (
    <div className="mx-3">
      <Input
        type="text"
        value={filterQuery}
        onChange={(e) => handleInputQuery(e)}
        placeholder="Search for movies..."
        className="placeholder:text-sm sm:placeholder:text-lg w-full px-2 text-2 bg-mainBack rounded-lg border border-gray-300 focus:outline-none focus:ring-1 md:focus:ring-2 md:text-lg focus:ring-blue-500 focus:border-blue-500 shadow-md hover:shadow-lg"
      />
    </div>
  );
}
