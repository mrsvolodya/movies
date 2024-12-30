import {
  useMutation,
  useQueryClient,
  InvalidateQueryFilters,
} from "@tanstack/react-query";
import { CreateMovie } from "../types/CreateMovie.ts";
import { postMovie } from "../api/movies.ts";
import { QueryKeys } from "../enums/QueryKeys.ts";
import { useContext } from "react";
import { MovieStore } from "../store/MovieProvider.tsx";

export function useCreateMovieMutation() {
  const queryClient = useQueryClient();
  const { setIsFormOpen } = useContext(MovieStore);

  const createMovie = useMutation({
    mutationFn: (movieData: CreateMovie) => postMovie(movieData),
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

  const isLoading = createMovie.status === "pending";
  const isError = createMovie.status === "error";

  return { createMovie, isError, isLoading };
}
