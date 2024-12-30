import { useQuery } from "@tanstack/react-query";
import { QueryKeys } from "../enums/QueryKeys.ts";
import { fetchMovies } from "../api/movies.ts";

export function useGetAllMoviesQuery() {
  return useQuery({
    queryKey: [QueryKeys.ALL_MOVIES],
    queryFn: fetchMovies,
  });
}
