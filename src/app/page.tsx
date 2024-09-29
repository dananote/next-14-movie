import MovieBanner from "@/components/home/movie-banner";
import MovieList from "@/components/home/movie-list";
import { Suspense } from "react";
import { IMovie } from "@/app/types/movies-type";
import { getMovieData } from "@/utils/getData";

// type 세분화 해주기 banner에 필ㄹ요한 데이터만 넘기기
const MOVIE_ID = ["519182", "957452", "1079091"];
export default async function HomePage() {
  const bannerMovies: IMovie[] = [];
  for (const id of MOVIE_ID) {
    bannerMovies.push(await getMovieData(id));
  }

  return (
    <div>
      <MovieBanner bannerMovies={bannerMovies} />
      <Suspense fallback={<h1>Loading...</h1>}>
        <MovieList />
      </Suspense>
    </div>
  );
}
