import {
  InvalidateQueryFilters,
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";
import { useContext } from "react";
import { Movie } from "../types/Movie.ts";
import { updateMovie as update } from "../api/movies.ts";
import { QueryKeys } from "../enums/QueryKeys.ts";
import { MovieStore } from "../store/MovieProvider.tsx";

export function useUpdateMovieMutation() {
  const queryClient = useQueryClient();
  const { setIsFormOpen } = useContext(MovieStore);

  const updateMovie = useMutation({
    mutationFn: (movieData: Movie) => update(movieData),
    onSuccess: () => {
      queryClient.invalidateQueries([
        QueryKeys.ALL_MOVIES,
      ] as InvalidateQueryFilters);
      setIsFormOpen(false);
    },
    onError: (error) => {
      throw new Error(`Error update movie ${error}`);
    },
  });

  const isLoading = updateMovie.status === "pending";
  const isError = updateMovie.status === "error";

  return { updateMovie, isError, isLoading };
}
