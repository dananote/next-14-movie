"use client"

import Image from "next/image";
import {Carousel, CarouselContent, CarouselItem} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import {useRef} from "react";

// TODO 이미지 로드시 어떻게 처리 할건지
// TODO 노이즈 이미지 추가하기 현재는 tailwind bg image 넣는 법을 모르겠음

// 자동으로 넘어가는 기능을 구현하기 위해 react hook인 useRef를 사용해야하는데 그렇게 되면 클라이언트 렌더링이 필요하기 때문에 컴포넌트 자체를 async 하지 못함
// 서버 컴포넌트 안에서 클라이언트 컴포넌트를 가질 수 있으며로 부모에서 데이터를 받고 자식에게 넘기는 쪽으로 해도 될듯..?
export default function MovieBanner({bannerMovies}) {

  // 2초 후 캐러셀 전환
    const plugin = useRef(
      Autoplay({delay: 3000, stopOnInteraction: true})
    )

    const imageStyle = {
        marginTop: "-250px",
        marginLeft: "150px"
    }

  return (
    <Carousel plugins={[plugin.current]} onMouseEnter={plugin.current.stop}
              onMouseLeave={plugin.current.play}>
      <CarouselContent>
        {bannerMovies.map(movie => (
            <CarouselItem key={movie.id}>
                <Image src={movie.backdrop_path} alt={movie.title} layout="responsive" width={1200} height={1000} priority quality={100} unoptimized  style={imageStyle}/>
            </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
