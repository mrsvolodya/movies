import React from "react";
import { useParams } from "react-router-dom";
import { useDetails } from "../../hooks/useDetails.ts";
import { Loader } from "../../components/UI/Loader.tsx";
import { NotFound } from "../../components/UI/NotFound.tsx";
import { Header } from "../../components/Header/Header.tsx";
import { ErrorMessage } from "../../components/UI/ErrorMessage.tsx";
import { MovieDetails } from "../../components/MovieDetails/MovieDetails.tsx";

export function DetailsPage() {
  const { id } = useParams<{ id: string }>();
  const { data: movie, isLoading, error } = useDetails(id || "");

  if (isLoading) return <Loader />;
  if (!movie) return <NotFound name="Movie" />;
  if (error instanceof Error) {
    return <ErrorMessage message={error.message} />;
  }

  return (
    <div className="bg-mainBack min-h-screen text-white">
      <Header />
      <MovieDetails movie={movie} />
    </div>
  );
}
