'use client'

import React, { useRef } from 'react'
import Image from 'next/image'

// Swiper components, modules and styles
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import Buttons from './HeroReelButtons'

interface Slide {
  id: number
  title: string
  tagline: string
  backdrop_path: string
  poster_path: string
  overview: string
}

interface HeroReelProps {
  data: Slide[]
}

const HeroReel: React.FC<HeroReelProps> = ({ data }) => {
  const showcase = data?.slice(0, 5)
  const progressCircle = useRef(null)
  const progressContent = useRef(null)
  const onAutoplayTimeLeft = (s: number, time: number, progress: number) => {
    if (showcase?.length < 2 || showcase === undefined) {
      return null
    } else {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      progressCircle?.current?.style.setProperty('--progress', 1 - progress)
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      progressContent.current.textContent = `${Math.ceil(time / 1000)}s`
    }
  }

  return (
    <section>
      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        slidesPerView={1}
        loop={true}
        speed={1000}
        autoplay={{
          delay: 8000,
          pauseOnMouseEnter: true,
        }}
        keyboard={{ enabled: true }}
        pagination={{ clickable: true }}
        // @ts-expect-error
        onAutoplayTimeLeft={onAutoplayTimeLeft}
      >
        {showcase?.map((movie) => {
          const { backdrop_path, id, title, overview } = movie
          return (
            <SwiperSlide key={id} className="group">
              <div key={id}>
                <div className="relative z-0 h-[80vh] overflow-hidden">
                  <Image
                    src={`https://image.tmdb.org/t/p/w1280${backdrop_path}`}
                    alt={title}
                    width={1920}
                    height={1080}
                    quality={100}
                    className="h-full w-full object-cover object-top transition-all delay-150 duration-[8000ms] group-[.swiper-slide-active]:scale-110"
                    priority={true}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-900 from-0%"></div>
                </div>
                <div className="absolute inset-0 z-10 mx-auto max-w-[2000px] px-6">
                  <div className="flex h-full max-w-screen-md flex-col justify-center">
                    <h3 className="mb-8 text-6xl font-bold">{title}</h3>
                    <p className="mb-8 text-xl">{overview}</p>
                    <Buttons id={id}>
                      {/* TODO: need to figure out how to get wishlist status on initial render, as WishListButton is a server component passed to a client component */}
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
  )
}

export default HeroReel
