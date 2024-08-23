"use client";
import React from "react";
// Swiper components, modules and styles
import { Keyboard, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { SwiperOptions } from 'swiper/types'
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import MovieTile from "./MovieTile";

interface Slide {
  id: number;
  title: string;
  tagline: string;
  backdrop_path: string;
  poster_path: string;
  buttons: ButtonProps[];
  options?: SwiperOptions;
}

interface ButtonProps {
  id: number;
  text: string;
  link: string;
  type: string;
}

interface ReelProps {
  data: Slide[];
}

const Reel: React.FC<ReelProps> = ({ data }) => {

  return (
    <section className="reel">
      <Swiper
        navigation
        modules={[Keyboard, Navigation, Pagination]}
        slidesPerView={2.3}
        grabCursor={true}
        watchSlidesProgress={true}
        slidesPerGroup={2}

        breakpoints={{
          640: {
            slidesPerView: 4.2,
            slidesPerGroup: 4
          },
          1024: {
            slidesPerView: 6.5,
            slidesPerGroup: 6
          },
          1440: {
            slidesPerView: 8,
            slidesPerGroup: 8
          },
        }}
      >
        {data.map(movie => (
            <SwiperSlide key={movie.id} className="flex-auto justify-center items-center overflow-hidden max-w-[250px]">
              <MovieTile movie={movie} width={228} height={342} />
            </SwiperSlide>
          ))}
      </Swiper>
    </section>
  );
};

export default Reel;
