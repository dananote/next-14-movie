import instance from "./axios";

// movie list api
export async function getMovies() {
  const res = await instance.get("");
  return res.data;
}

// movie detail api
export async function getMovie(id: string) {
  const res = await instance.get(`/${id}`);
  return res.data;
}
