import { IMovies } from "@/app/types/movies-type";
import Image from "next/image";
import Link from "next/link";

export default function MovieCard({ movie }: { movie: IMovies }) {
  return (
    <li
      key={movie.id}
      className="group relative w-full aspect-[2/3] rounded-md hover:scale-125 transition-transform duration-300 overflow-hidden hover:z-50"
    >
      <Link href={`/movies/${movie.id}`}>
        <div className="absolute group-hover:bg-gradient-to-t from-black/80 from-20% to-transparent bg-opacity-0 w-full h-full p-6 inset-0 transition-opacity duration-300 group-hover:z-50">
          <div className="absolute bottom-9 group-hover:opacity-100 opacity-0">
            <Image
              src={
                movie.adult
                  ? "https://i.namu.wiki/i/CLhQiPZyOB0c50kkVKBKrlpEL3SwrhgQGNe7NNVtiatq49QxoHx68cASxEfQAgtSuMo_-7pcNtetfr0RV68xgQ.svg"
                  : "https://i.namu.wiki/i/DETrbiUOHvaG5H5TItU3DMEw_o4rxYC46u4t2oFSgWf5v553BWoqJNx6IAVfA8jH_nIdEO7IFqpRv-WDBaUCg4CW5_jSrrIi38pWWc0bqOS5JBjdjFaMtv3M_wW4uK1DB6nzbNAc4hVY3CU3GC3wZg.svg"
              }
              width={24}
              height={24}
              alt="play"
            />

            <h3 className="font-JosefinSans text-lg mt-2">{movie.title}</h3>
            <p className="text-xs text-slate-400 font-semibold">
              {movie.release_date}
            </p>
          </div>
        </div>

        <Image
          src={movie.poster_path}
          alt={movie.title}
          objectFit="cover"
          width={1200}
          height={1200}
        />
      </Link>
    </li>
  );
}
