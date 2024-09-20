import { getMovie } from "@/app/api/movie-api";

const getMovieData = async (id: string) => {
  try {
    const res = await getMovie(id);
    return res;
  } catch (error) {
    console.log(error);
    return {};
  }
};

export default async function MoviePage({
  params: { id },
}: {
  params: { id: string };
}) {
  const movie = await getMovieData(id);
  console.log("=====================================================");
  console.log(movie);

  return (
    <div>
      <p>{movie.title}</p>
    </div>
  );
}
