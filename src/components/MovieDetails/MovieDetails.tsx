import React, { useContext } from "react";
import { Movie } from "../../types/Movie";
import { Button } from "../common/Button.tsx";
import { useNavigate } from "react-router-dom";
import { EditIcon } from "../common/EditIcon.tsx";
import { HeartIcon } from "../common/HeartIcon.tsx";
import { useDelete } from "../../hooks/useDelete.ts";
import { DeleteIcon } from "../common/DeleteIcon.tsx";
import { MovieStore } from "../../store/MovieProvider.tsx";

type DetailProps = {
  movie: Movie;
};

const containerClass = "relative h-96 bg-cover bg-center";
const overlayClass = "absolute inset-0 bg-black opacity-50";
const textContainerClass =
  "relative z-10 flex items-center justify-center h-full";
const titleClass = "text-5xl font-bold drop-shadow-lg";
const buttonClass = "absolute bottom-0 right-0 p-4";
const descriptionClass = "text-gray-300 text-lg";
const sectionClass = "p-3 rounded-lg";
const labelClass = "text-xl font-semibold";
const valueClass = "text-gray-200";

export function MovieDetails({ movie }: DetailProps) {
  const navigate = useNavigate();
  const { mutation, isLoading, isError } = useDelete(movie.id);
  const { favoritesMovies, toggleFavorite, isInFavorites, handleToEdit } =
    useContext(MovieStore);

  function handleDelete() {
    mutation.mutate();

    if (!isError) {
      navigate("/");
    }
  }

  const isFavorites = isInFavorites(favoritesMovies, movie.id);
  return (
    <div>
      <div
        className={containerClass}
        style={{ backgroundImage: `url(${movie.image})` }}
      >
        <div className={overlayClass}></div>
        <div className={textContainerClass}>
          <div className="text-center">
            <h1 className={titleClass}>{movie.title}</h1>
          </div>
          <div className={buttonClass}>
            <Button
              onClick={() => toggleFavorite(movie)}
              extraClass="bg-gray-600 hover:scale-100"
              aria-label={
                isFavorites ? "Remove from favorites" : "Add to favorites"
              }
            >
              <HeartIcon isFilled={isFavorites} />
            </Button>
          </div>
        </div>
      </div>

      <div className="relative max-w-4xl mx-auto bg-gradient-to-t from-[rgba(0,0,0,0.5)] to-transparent p-8 rounded-lg mt-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-3xl font-semibold mb-4">Description</h2>
            <p className={descriptionClass}>{movie.description}</p>
          </div>

          <div>
            <div className={sectionClass}>
              <p className={labelClass}>Actors</p>
              <p className={valueClass}>{movie.actors.join(", ")}</p>
            </div>
            <div className={sectionClass}>
              <p className={labelClass}>Director</p>
              <p className={valueClass}>{movie.director}</p>
            </div>
            <div className={sectionClass}>
              <p className={labelClass}>Genre</p>
              <p className={valueClass}>{movie.genre}</p>
            </div>
            <div className={sectionClass}>
              <p className={labelClass}>Release date</p>
              <p className={valueClass}>{movie.releaseDate}</p>
            </div>
            <div className={sectionClass}>
              <p className={labelClass}>Rating</p>
              <p className="text-yellow-400 text-lg">{movie.rating}</p>
            </div>
          </div>
        </div>

        <div className="flex bottom-0 right-0 gap-2 m-4 absolute">
          <Button onClick={() => handleToEdit(movie)}>
            <EditIcon />
          </Button>
          <Button onClick={handleDelete} disabled={isLoading}>
            <DeleteIcon />
          </Button>
        </div>
      </div>
    </div>
  );
}
