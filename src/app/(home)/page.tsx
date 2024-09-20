import { Button } from "@/components/ui/button";
import { getMovies } from "../api/movie-api";
import { IMovies } from "../types/movies-type";

const getMoviesData = async () => {
  try {
    const res = await getMovies();
    return res;
  } catch (error) {
    console.log(error);
    return [];
  }
};

export default async function HomePage() {
  const movies: IMovies[] = await getMoviesData();
  console.log(movies);
  return (
    <div>
      <Button variant={"link"}>Button</Button>
      {movies && movies.length > 0 ? (
        <ul>
          {movies.map((movie: IMovies) => {
            return <li key={movie.id}>{movie.title}</li>;
          })}
        </ul>
      ) : (
        <p>데이터가 없습니다.</p>
      )}
    </div>
  );
}
