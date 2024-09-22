import { IMovies } from "@/app/types/movies-type";
import { getMoviesData } from "@/utils/getData";
import Link from "next/link";

export default async function MovieList() {
  const movies: IMovies[] = await getMoviesData();

  return (
    <div>
      {movies && movies.length > 0 ? (
        <ul>
          {movies.map((movie) => {
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
