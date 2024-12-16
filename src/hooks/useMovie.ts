import { useQuery } from "@tanstack/react-query";
import { QueryKeys } from "../enums/QueryKeys.ts";
import { fetchMovie } from "../api/movies.ts";

export function useMovie(id: string) {
  return useQuery({
    queryKey: [QueryKeys.MOVIE_DETAILS, id],
    queryFn: () => fetchMovie(id),
  });
}
