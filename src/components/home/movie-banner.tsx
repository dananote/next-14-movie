import { IMovie } from "@/app/types/movies-type";
import { getMovieData } from "@/utils/getData";
import Image from "next/image";

const MOVIE_ID = ["957452", "365177", "519182"];

export default async function MovieBanner() {
  const movies: IMovie[] = [];
  for (const id of MOVIE_ID) {
    movies.push(await getMovieData(id));
  }

  return (
    <ul>
      {movies.map((movie) => {
        return (
          <li key={movie.id}>
            <Image
              width={500}
              height={250}
              src={movie.backdrop_path}
              alt={movie.title}
            />
          </li>
        );
      })}
    </ul>
  );
}
