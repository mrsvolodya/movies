import axios from "axios";

export async function fetchMovies() {
  const url = `http://localhost:5000/movies`;
  const { data } = await axios.get(url);

  return data;
}
