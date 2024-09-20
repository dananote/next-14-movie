import { getMovies } from "./api/movie-api";
import { IMovies } from "./types/movies-type";
import Link from "next/link";

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
  return (
    <div>
      {movies && movies.length > 0 ? (
        <ul>
          {movies.map((movie: IMovies) => {
            return (
              <li key={movie.id}>
                <Link href={`/movies/${movie.id}`}>{movie.title}</Link>
              </li>
            );
          })}
        </ul>
      ) : (
        <p>데이터가 없습니다.</p>
      )}
    </div>
  );
}
