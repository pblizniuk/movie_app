"use client"; // <===== REQUIRED

import React, { useRef } from "react";
import Image from "next/image";
import WishlistButton from "./WishlistButton";

// Swiper components, modules and styles
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Buttons from "./HeroReelButtons";

interface Slide {
  id: number;
  title: string;
  tagline: string;
  backdrop_path: string;
  poster_path: string;
  overview: string;
}

interface HeroReelProps {
  data: Slide[];
}

const HeroReel: React.FC<HeroReelProps> = ({ data }) => {
  const showcase = data?.slice(1, 4)
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s: number, time: number, progress: number) => {
    if (showcase?.length < 2 || showcase === undefined) {
      return null
    } else {
      progressCircle?.current?.style.setProperty('--progress', 1 - progress);
      progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    }
  };

  return (
    <section className="mb-16">
      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 8000,
          pauseOnMouseEnter: true,
        }}
        keyboard={{ enabled: true }}
        pagination={{ clickable: true }}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
      >
        {showcase?.map(movie => {
          const { backdrop_path, id, title, overview } = movie
          return (
            <SwiperSlide key={id} className="group">
              <div key={id}>
                <div className='overflow-hidden h-[60vh] relative z-0'>
                  <Image
                  src={`https://image.tmdb.org/t/p/w1280${backdrop_path}&include_adult=false`}
                  alt={title}
                  width={1920}
                  height={1080}
                  quality={100}
                  className="w-full h-full object-cover object-top group-[.swiper-slide-active]:scale-110 delay-150 transition-all duration-[8000ms]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-900 from-0%"></div>
                </div>
                <div className="absolute inset-0 max-w-[2000px] mx-auto px-6 z-10">
                  <div className="flex flex-col justify-center h-full max-w-screen-md">
                    <h3 className="text-6xl font-bold mb-8">{title}</h3>
                    <p className="text-xl mb-8">{overview}</p>
                    <Buttons id={id}>
                      {/* <WishlistButton movie_id={id} /> */}
                    </Buttons>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          )
        })}
        {showcase?.length > 1 && (
        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
        )}
      </Swiper>
    </section>
  );
};

export default HeroReel;
