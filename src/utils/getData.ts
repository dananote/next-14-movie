import { getMovie, getMovies } from "@/app/api/movie-api";

export const getMovieData = async (id: string) => {
  try {
    const res = await getMovie(id);
    return res;
  } catch (error) {
    console.log(error);
    return {};
  }
};

export const getMoviesData = async () => {
  try {
    const res = await getMovies();
    return res;
  } catch (error) {
    console.log(error);
    return [];
  }
};
