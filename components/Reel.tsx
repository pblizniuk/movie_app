'use client'
import React from 'react'
// Swiper components, modules and styles
import { Keyboard, Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { SwiperOptions } from 'swiper/types'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import MovieTile from './MovieTile'
import Link from 'next/link'

interface Slide {
  id: number
  title?: string
  name?: string
  tagline: string
  backdrop_path: string
  poster_path: string
  buttons: ButtonProps[]
  options?: SwiperOptions
}

interface ButtonProps {
  id: number
  text: string
  link: string
  type: string
}

interface ReelProps {
  data: Slide[]
  title: string
  isTV?: boolean
  link?: string
}

const Reel: React.FC<ReelProps> = ({ data, isTV = false, title, link }) => {
  return (
    <>
      <div className="flex items-center justify-between">
        {title && (
          <h3 className="mb-3 text-2xl font-bold md:text-3xl">{title}</h3>
        )}
        {link && (
          <Link
            href={link}
            className="text-md mb-3 font-bold uppercase md:mr-4"
          >
            View more
          </Link>
        )}
      </div>
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
              slidesPerGroup: 4,
            },
            1024: {
              slidesPerView: 6.5,
              slidesPerGroup: 6,
            },
            1440: {
              slidesPerView: 8,
              slidesPerGroup: 8,
            },
          }}
        >
          {data?.map((item, index) => {
            if (!item?.poster_path) return null

            return (
              <SwiperSlide
                key={item.id}
                className="max-w-[250px] flex-auto items-center justify-center overflow-hidden"
              >
                <MovieTile
                  item={item}
                  width={228}
                  height={342}
                  isTV={isTV}
                  index={index}
                />
              </SwiperSlide>
            )
          })}
        </Swiper>
      </section>
    </>
  )
}

export default Reel
