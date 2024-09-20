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

//TODO 데이터 없을 경우 처리
export default async function MoviePage({
  params: { id },
}: {
  params: { id: string };
}) {
  const movie = await getMovieData(id);

  return (
    <div>
      <p>{movie.title}</p>
    </div>
  );
}
