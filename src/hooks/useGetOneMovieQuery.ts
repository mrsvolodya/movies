import { fetchMovie } from "../api/movies.ts";
import { useQuery } from "@tanstack/react-query";
import { QueryKeys } from "../enums/QueryKeys.ts";

export function useGetOneMovieQuery(id: string) {
  return useQuery({
    queryKey: [QueryKeys.MOVIE_DETAILS, id],
    queryFn: () => fetchMovie(id),
  });
}
