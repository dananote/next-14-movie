"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";
import { IMovie } from "@/app/types/movies-type";
import Image from "next/image";
import { Button } from "../ui/button";
import { MoveRight } from "lucide-react";

// TODO 이미지 로드시 어떻게 처리 할건지
// TODO 노이즈 이미지 추가하기 현재는 tailwind bg image 넣는 법을 모르겠음

// 자동으로 넘어가는 기능을 구현하기 위해 react hook인 useRef를 사용해야하는데 그렇게 되면 클라이언트 렌더링이 필요하기 때문에 컴포넌트 자체를 async 하지 못함
// 서버 컴포넌트 안에서 클라이언트 컴포넌트를 가질 수 있으며로 부모에서 데이터를 받고 자식에게 넘기는 쪽으로 해도 될듯..?
export default function MovieBanner({
  bannerMovies,
}: {
  bannerMovies: IMovie[];
}) {
  // 3초 후 캐러셀 전환
  const plugin = useRef(Autoplay({ delay: 3000, stopOnInteraction: true }));

  //TODO onMouseLeave에는 boolean으로 return 하는 값을 넣어줘야하는 ispalying을 넣어주면 동작하지 않음 play로 넣어줘야만 동작함
  return (
    <Carousel
      className="mt-[-100px]"
      plugins={[plugin.current]}
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.isPlaying}
    >
      <CarouselContent>
        {bannerMovies.map((movie: IMovie) => (
          <CarouselItem key={movie.id}>
            <div className="relative w-full h-80">
              <div className="absolute top-[40%] left-[5%] translate-y-[-50% w-[40vw] z-50">
                <h2 className="font-JosefinSans font-black text-5xl mb-6">
                  {movie.title}
                </h2>
                <h3 className="text-gray-500">{movie.overview}</h3>
                <Button variant="link" className="mt-6 animate-fadein">
                  <MoveRight
                    size={40}
                    strokeWidth={0.5}
                    className=" text-white"
                  />
                </Button>
              </div>
              <div className="absolute w-full h-80 bg-black opacity-50"></div>
              <Image
                src={movie.backdrop_path}
                width={1920}
                height={1080}
                alt={movie.title}
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
