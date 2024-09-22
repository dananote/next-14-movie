import MovieBanner from "@/components/home/movie-banner";
import MovieList from "@/components/home/movie-list";
import { Suspense } from "react";

export default function HomePage() {
  return (
    <div>
      <Suspense fallback={<h1>Loading...</h1>}>
        <MovieBanner />
      </Suspense>
      <Suspense fallback={<h1>Loading...</h1>}>
        <MovieList />
      </Suspense>
    </div>
  );
}
