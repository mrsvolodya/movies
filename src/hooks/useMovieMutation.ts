import {
  useMutation,
  useQueryClient,
  InvalidateQueryFilters,
} from "@tanstack/react-query";
import { postMovie, updateMovie } from "../api/movies.ts";
import { QueryKeys } from "../enums/QueryKeys.ts";
import { useContext } from "react";
import { MovieStore } from "../store/MovieProvider.tsx";

export function useMovieMutation() {
  const queryClient = useQueryClient();
  const { setIsFormOpen } = useContext(MovieStore);

  const movieMutation = useMutation({
    mutationFn: (movieData: any) => {
      if (movieData.id) {
        return updateMovie(movieData);
      } else {
        return postMovie(movieData);
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries([
        QueryKeys.ALL_MOVIES,
      ] as InvalidateQueryFilters);
      setIsFormOpen(false);
    },
    onError: (error) => {
      console.error("Error in movie mutation:", error);
    },
  });

  const isLoading = movieMutation.status === "pending";
  const isError = movieMutation.status === "error";

  return { movieMutation, isLoading, isError };
}
