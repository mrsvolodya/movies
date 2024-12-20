import React, { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import { FormValues } from "../../types/FormValues.ts";
import { useMovieMutation } from "../../hooks/useMovieMutation.ts";
import { Loader } from "../common/Loader.tsx";
import { ErrorMessage } from "../common/ErrorMessage.tsx";
import { Movie } from "../../types/Movie.ts";
import { MovieStore } from "../../store/MovieProvider.tsx";
import { AddNewMovie } from "../../types/AddNewMovie.ts";
import { useKeyListener } from "../../hooks/useKeyListener.ts";

type FormProps = {
  movieToEdit?: Movie | null;
};

const defaultValues = {
  title: "",
  image: "",
  genre: "",
  rating: 0,
  actors: "",
  director: "",
  description: "",
  releaseDate: "",
};

const baseLabelClass = "block mb-1 text-sm";
const baseInputClass = "w-full px-4 bg-gray-800 rounded";
const buttonDisabledClass = "opacity-50 cursor-not-allowed";
const buttonClass = `bg-gray-600 hover:bg-slate-800 font-bold px-4 rounded w-full transition-color duration-300`;

export function AddEditForm({ movieToEdit }: FormProps) {
  const { closeForm, updateFavFromEditMovie } = useContext(MovieStore);
  const { register, handleSubmit, reset } = useForm<FormValues>();
  const { movieMutation, isLoading, isError } = useMovieMutation();

  useEffect(() => {
    if (movieToEdit) {
      reset({
        title: movieToEdit.title,
        image: movieToEdit.image,
        genre: movieToEdit.genre,
        rating: movieToEdit.rating,
        director: movieToEdit.director,
        description: movieToEdit.description,
        releaseDate: movieToEdit.releaseDate,
        actors: movieToEdit.actors.join(","),
      });
    }
  }, [movieToEdit, reset]);

  function handleCancel() {
    closeForm();
    reset(defaultValues);
  }

  useKeyListener({ key: "Escape", handler: handleCancel });

  function onSubmit(data: FormValues) {
    const actorsArray = data.actors.split(",");
    const addNewMovie: AddNewMovie = { ...data, actors: actorsArray };
    let updatedMovie = { ...addNewMovie, id: movieToEdit?.id };

    if (movieToEdit) {
      updateFavFromEditMovie(updatedMovie as Movie);
    }

    movieMutation.mutate(movieToEdit ? updatedMovie : addNewMovie);
    reset(defaultValues);
  }

  return (
    <div>
      {isLoading && <Loader />}
      {isError && <ErrorMessage message={"Please try again."} />}

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-4 text-white pb-24 px-4 overflow-y-auto max-h-[90vh] custom-scrollbar"
      >
        <div>
          <label htmlFor="title" className={baseLabelClass}>
            Movie Title
          </label>
          <input
            id="title"
            type="text"
            placeholder="Enter the movie title, e.g., The Godfather"
            className={baseInputClass}
            {...register("title", { required: true })}
          />
        </div>

        <div>
          <label htmlFor="image" className={baseLabelClass}>
            Image URL
          </label>
          <input
            id="image"
            type="url"
            placeholder="Paste the movie poster URL"
            className={baseInputClass}
            {...register("image", { required: true })}
          />
        </div>

        <div>
          <label htmlFor="rating" className={baseLabelClass}>
            Rating
          </label>
          <input
            id="rating"
            type="number"
            step={0.1}
            min={0}
            max={10}
            placeholder="Enter a rating between 0 and 10"
            className={baseInputClass}
            {...register("rating", {
              required: true,
            })}
          />
        </div>

        <div>
          <label htmlFor="releaseDate" className={baseLabelClass}>
            Release Date
          </label>
          <input
            id="releaseDate"
            type="date"
            className={baseInputClass}
            {...register("releaseDate", { required: true })}
          />
        </div>

        <div>
          <label htmlFor="description" className={baseLabelClass}>
            Description
          </label>
          <input
            id="description"
            type="text"
            placeholder="Write a short movie description"
            className={baseInputClass}
            {...register("description", { required: true })}
          />
        </div>

        <div>
          <label htmlFor="actors" className={baseLabelClass}>
            Actors
          </label>
          <input
            id="actors"
            type="text"
            placeholder="Actors"
            className={baseInputClass}
            {...register("actors", { required: true })}
          />
        </div>

        <div>
          <label htmlFor="director" className={baseLabelClass}>
            Director
          </label>
          <input
            id="director"
            type="text"
            placeholder="Enter the director's full name"
            className={baseInputClass}
            {...register("director", { required: true })}
          />
        </div>

        <div>
          <label htmlFor="genre" className={baseLabelClass}>
            Genre
          </label>
          <input
            id="genre"
            type="text"
            placeholder="e.g., Action, Drama, Thriller"
            className={baseInputClass}
            {...register("genre", { required: true })}
          />
        </div>
        <div className="flex gap-2">
          <button
            type="submit"
            disabled={isLoading}
            className={`${buttonClass} ${isLoading ? buttonDisabledClass : ""}`}
          >
            {isLoading ? "Submitting..." : "Submit"}
          </button>
          <button
            type="button"
            disabled={isLoading}
            onClick={handleCancel}
            className={`${buttonClass} ${isLoading ? buttonDisabledClass : ""}`}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}
