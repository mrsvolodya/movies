import React, { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Movie } from "../../../types/Movie.ts";
import { Loader } from "../../Common/Loader.tsx";
import { InputField } from "../InputField/InputField.tsx";
import { FormValues } from "../../../types/FormValues.ts";
import { FormButton } from "../FormButton/FormButton.tsx";
import { AddNewMovie } from "../../../types/AddNewMovie.ts";
import { ErrorMessage } from "../../Common/ErrorMessage.tsx";
import { MovieStore } from "../../../store/MovieProvider.tsx";
import { useKeyListener } from "../../../hooks/useKeyListener.ts";
import { DEFAULT_VALUES } from "../../../constants/DEFAULT_VALUES.ts";
import { useCreateMovieMutation } from "../../../hooks/useCreateMovieMutation.ts";
import { useUpdateMovieMutation } from "../../../hooks/useUpdateMovieMutation.ts";

type FormProps = {
  movieToEdit?: Movie | null;
};

export function AddEditForm({ movieToEdit }: FormProps) {
  const { closeForm, updateFavFromEditMovie } = useContext(MovieStore);
  const { register, handleSubmit, reset, setValue } = useForm<FormValues>();
  const {
    updateMovie,
    isLoading: updateIsLoading,
    isError: updateIsError,
  } = useUpdateMovieMutation();
  const {
    createMovie,
    isLoading: createIsLoading,
    isError: createIsError,
  } = useCreateMovieMutation();

  useEffect(() => {
    if (movieToEdit) {
      const {
        title,
        image,
        genre,
        rating,
        director,
        description,
        releaseDate,
        actors,
      } = movieToEdit;

      const values = {
        title,
        image,
        genre,
        rating,
        director,
        description,
        releaseDate,
        actors: actors.join(","),
      };

      Object.entries(values).forEach(([key, value]) =>
        setValue(key as keyof FormValues, value)
      );
    } else {
      reset();
    }
  }, [movieToEdit, reset, setValue]);

  function handleCancel() {
    closeForm();
    reset(DEFAULT_VALUES);
  }

  useKeyListener({ key: "Escape", handler: handleCancel });

  function onSubmit(data: FormValues) {
    const actorsArray = data.actors.split(",");
    const addNewMovie: AddNewMovie = { ...data, actors: actorsArray };

    if (movieToEdit) {
      const updatedMovie = { ...addNewMovie, id: movieToEdit.id };

      updateFavFromEditMovie(updatedMovie);
      updateMovie.mutate(updatedMovie);
    } else {
      createMovie.mutate(addNewMovie);
    }

    reset(DEFAULT_VALUES);
  }

  const isLoading = updateIsLoading || createIsLoading;
  const isError = updateIsError || createIsError;

  return (
    <div>
      {isLoading && <Loader />}
      {isError && <ErrorMessage message={"Please try again."} />}

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-4 text-white pb-24 px-4 overflow-y-auto max-h-[90vh] custom-scrollbar"
      >
        <div>
          <InputField
            id="title"
            textLabel="Movie Title"
            type="text"
            register={register}
            placeholder="Enter the movie title, e.g., The Godfather"
          />
        </div>

        <div>
          <InputField
            id="image"
            textLabel="Image URL"
            type="url"
            register={register}
            placeholder="Paste the movie poster URL"
          />
        </div>

        <div>
          <InputField
            id="rating"
            textLabel="Rating"
            type="number"
            step={0.1}
            min={0}
            max={10}
            register={register}
            placeholder="Enter a rating between 0 and 10"
          />
        </div>

        <div>
          <InputField
            id="releaseDate"
            textLabel="Release Date"
            type="date"
            register={register}
          />
        </div>

        <div>
          <InputField
            id="description"
            textLabel="Description"
            type="text"
            register={register}
            placeholder="Write a short movie description"
          />
        </div>

        <div>
          <InputField
            id="actors"
            textLabel="Actors"
            type="text"
            register={register}
            placeholder="Actors"
          />
        </div>

        <div>
          <InputField
            id="director"
            textLabel="Director"
            type="text"
            register={register}
            placeholder="Enter the director's full name"
          />
        </div>

        <div>
          <InputField
            id="genre"
            textLabel="Genre"
            type="text"
            register={register}
            placeholder="e.g., Action, Drama, Thriller"
          />
        </div>
        <div className="flex gap-2">
          <FormButton type="submit" isLoading={isLoading}>
            {isLoading ? "Submitting..." : "Submit"}
          </FormButton>
          <FormButton
            type="button"
            isLoading={isLoading}
            handleCancel={handleCancel}
          >
            {isLoading ? "Canceling..." : "Cancel"}
          </FormButton>
        </div>
      </form>
    </div>
  );
}
