import axios from "axios";
import { Movie } from "../types/Movie";

const BASE_URL = "http://localhost:5000/movies";

export async function fetchMovies() {
  const url = BASE_URL;
  const { data } = await axios.get(url);

  return data;
}

export async function fetchMovie(id: string) {
  const url = `${BASE_URL}/${id}`;
  const { data } = await axios.get(url);

  return data;
}

export async function deleteMovie(id: number) {
  await axios.delete(`${BASE_URL}/${id}`);
}

export async function postMovie(newMovie: Omit<Movie, "id">) {
  const { data } = await axios.post(BASE_URL, newMovie);

  return data;
}

export const updateMovie = async (updatedMovie: Movie) => {
  const response = await axios.patch(
    `${BASE_URL}/${updatedMovie.id}`,
    updatedMovie
  );

  return response.data;
};
