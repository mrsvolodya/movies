import React from "react";
import { useParams } from "react-router-dom";
import { Header } from "../../components/Header/Header.tsx";
import { Loader } from "../../components/common/Loader.tsx";
import { NotFound } from "../../components/common/NotFound.tsx";
import { ErrorMessage } from "../../components/common/ErrorMessage.tsx"
import { useGetOneMovieQuery } from "../../hooks/useGetOneMovieQuery.ts";
import { MovieDetails } from "../../components/MovieDetails/MovieDetails.tsx";

export function DetailsPage() {
  const { id } = useParams<{ id: string }>();
  const { data: movie, isLoading, error } = useGetOneMovieQuery(id || "");

  if (isLoading) return <Loader />;
  if (!movie) return <NotFound name="Movie" />;
  if (error instanceof Error) {
    return <ErrorMessage message={error.message} />;
  }

  return (
    <div className="bg-mainBack min-h-screen text-white custom-scrollbar overflow-x-hidden h-[96px]">
      <Header />
      <MovieDetails movie={movie} />
    </div>
  );
}
