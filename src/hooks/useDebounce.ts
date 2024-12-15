import { useEffect, useState } from "react";

export function useDebounce(query: string, delay: number = 500) {
  const [inputQuery, setInputQuery] = useState("");

  useEffect(() => {
    const timeout = setTimeout(() => {
      setInputQuery(query);
    }, delay);

    return () => {
      clearTimeout(timeout);
    };
  }, [query, delay]);

  return inputQuery;
}
