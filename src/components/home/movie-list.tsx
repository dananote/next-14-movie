import { IMovies } from "@/app/types/movies-type";
import { getMoviesData } from "@/utils/getData";
import MovieCard from "../movie/movie-card";

export default async function MovieList() {
  const movies: IMovies[] = await getMoviesData();

  return (
    <div className="absolute p-12 mt-[-120px]">
      <h2 className="font-JosefinSans text-white text-3xl mb-6">Best Movies</h2>
      {movies && movies.length > 0 ? (
        <ul className="grid sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
          {movies.map((movie: IMovies) => {
            return <MovieCard key={movie.id} movie={movie} />;
          })}
        </ul>
      ) : (
        <p>데이터가 없습니다.</p>
      )}
    </div>
  );
}
