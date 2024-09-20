"use client";

import { getMovie } from "@/app/api/movie-api";
import { DialogContent, DialogDescription, DialogTitle } from "../ui/dialog";
import { useEffect, useState } from "react";
import { IMovie } from "@/app/types/movies-type";

const getMovieData = async (id: string) => {
  try {
    const res = await getMovie(id);
    return res;
  } catch (error) {
    console.log(error);
    return {};
  }
};

//TODO 로딩 처리 하긴 했는데.. 서버 에서 렌더링한게 아니어서 fetch가 안되네 이거 고민해 봐야할듯
export default function MovieModal({ id }: { id: string }) {
  const [movie, setMovie] = useState<IMovie>({} as IMovie);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchMovie = async () => {
      const movie = await getMovieData(id);
      setMovie(movie);
      setLoading(false);
    };
    fetchMovie();
  }, []);
  return (
    <DialogContent>
      <DialogTitle>영화</DialogTitle>
      <DialogDescription>영화 상세 정보</DialogDescription>
      {loading ? <h1>Loading...</h1> : <h1>{movie.title}</h1>}
    </DialogContent>
  );
}
