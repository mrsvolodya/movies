import React, { useContext } from "react";
import { Movie } from "../../types/Movie";
import { Button } from "../UI/Button.tsx";
import { HeartIcon } from "../UI/HeartIcon.tsx";
import { MovieStore } from "../../store/MovieProvider.tsx";
import { EditIcon } from "../UI/EditIcon.tsx";
import { DeleteIcon } from "../UI/DeleteIcon.tsx";
import { useDelete } from "../../hooks/useDelete.ts";
import { useNavigate } from "react-router-dom";
import { getMovieDetails } from "../../utils/movieDetails.ts";
type DetailProps = {
  movie: Movie;
};

export function MovieDetails({ movie }: DetailProps) {
  const navigate = useNavigate();
  const { mutation, isLoading, isError } = useDelete(movie.id);
  const { favoritesMovies, toggleFavorite, isInFavorites, handleToEdit } =
    useContext(MovieStore);

  function handleToDelete() {
    mutation.mutate();

    if (!isError) {
      navigate("/");
    }
  }

  const details = getMovieDetails(movie);

  const isFavorites = isInFavorites(favoritesMovies, movie.id);
  return (
    <div>
      <div
        className="relative h-96 bg-cover bg-center"
        style={{ backgroundImage: `url(${movie.image})` }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="text-center">
            <h1 className="text-5xl font-bold drop-shadow-lg">{movie.title}</h1>
          </div>
          <div className="absolute bottom-0 right-0 p-4">
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

      <div className="relative max-w-4xl mx-auto bg-gradient-to-t from-[rgba(0,0,0,0.5)] to-transparent  p-8 rounded-lg  mt-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-3xl font-semibold mb-4">Description</h2>
            <p className="text-gray-300 text-lg">{movie.description}</p>
          </div>

          <div className="space-y-6">
            {details.map(({ label, value }) => (
              <div key={label} className="p-4 rounded-lg ">
                <p className="text-xl font-semibold">{label}</p>
                <p
                  className={
                    label === "Rating"
                      ? "text-yellow-400 text-lg"
                      : "text-gray-200"
                  }
                >
                  {value}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="flex bottom-0 right-0 gap-2 m-4 absolute">
          <Button onClick={() => handleToEdit(movie)}>
            <EditIcon />
          </Button>
          <Button onClick={handleToDelete} disabled={isLoading}>
            <DeleteIcon />
          </Button>
        </div>
      </div>
    </div>
  );
}
