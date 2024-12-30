import {
  InvalidateQueryFilters,
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";
import { deleteMovie } from "../api/movies.ts";
import { QueryKeys } from "../enums/QueryKeys.ts";
import { useContext } from "react";
import { MovieStore } from "../store/MovieProvider.tsx";

export function useDeleteMovieMutation(id: string) {
  const { deleteFromFavorites } = useContext(MovieStore);
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: () => deleteMovie(id),
    onSuccess: () => {
      queryClient.invalidateQueries([
        QueryKeys.ALL_MOVIES,
      ] as InvalidateQueryFilters);

      deleteFromFavorites(id);
    },
  });

  const isLoading = mutation.status === "pending";
  const isError = mutation.status === "error";

  return { mutation, isLoading, isError };
}
