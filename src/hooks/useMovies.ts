import { useQuery } from "@tanstack/react-query";
import { QueryKeys } from "../keys/QueryKeys.ts";
import { fetchMovies } from "../api/movies.ts";

export function useMovies() {
  return useQuery({
    queryKey: [QueryKeys.allMovies],
    queryFn: fetchMovies,
  });
}
