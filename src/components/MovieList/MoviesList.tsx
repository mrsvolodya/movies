import React from "react";
import { Loader } from "../Common/Loader.tsx";
import { Movie } from "../../types/Movie.ts";
import { NotFound } from "../Common/NotFound.tsx";
import { useSearchParams } from "react-router-dom";
import { useGetAllMoviesQuery } from "../../hooks/useGetAllMoviesQuery.ts";
import { ErrorMessage } from "../Common/ErrorMessage.tsx";
import { MovieCard } from "../MovieCard/MovieCard.tsx";
import { QueryParams } from "../../enums/QueryParams.ts";
import { useDebounce } from "../../hooks/useDebounce.ts";
import { useFilterMoviesByQuery } from "../../hooks/useFilterMoviesByQuery.ts";

type MoviesListProps = {
  favoritesMovies?: Movie[];
};

export function MoviesList({ favoritesMovies = [] }: MoviesListProps) {
  const [searchParams] = useSearchParams();
  const { data: movies, isLoading, error } = useGetAllMoviesQuery();

  const movieList = favoritesMovies.length > 0 ? favoritesMovies : movies;
  const filterQuery = searchParams.get(QueryParams.query) || "";
  const debounceQuery = useDebounce(filterQuery);
  const filterMovieList = useFilterMoviesByQuery(
    movieList ?? [],
    debounceQuery
  );

  if (isLoading) return <Loader />;
  if (!movies) return <NotFound name="Movies" />;
  if (error instanceof Error) return <ErrorMessage message={error.message} />;

  return (
    <div className="grid grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))] gap-5 w-full p-5">
      {filterMovieList.length ? (
        filterMovieList.map((movie: Movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))
      ) : (
        <NotFound name={"Movies"} />
      )}
    </div>
  );
}
