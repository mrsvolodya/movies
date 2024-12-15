import { useMemo } from "react";
import { Movie } from "../types/Movie";

export function useFilterByQuery(movies: Movie[], filterQuery: string) {
  return useMemo(() => {
    if (!movies) return [];

    return movies.filter((movie) =>
      movie.title.toLocaleLowerCase().includes(filterQuery)
    );
  }, [movies, filterQuery]);
}
