'use client'
import Image from 'next/image'

export default function HeroImage({
  title,
  backdrop_path,
}: {
  title: string
  backdrop_path: string
}) {
  return (
    <Image
      src={`https://image.tmdb.org/t/p/w1280${backdrop_path}`}
      alt={title}
      width={1280}
      height={1080}
      quality={100}
      className="h-full w-full object-cover object-top transition-all delay-150 duration-[8000ms] [&.active]:scale-110"
      priority={true}
      placeholder="blur"
      blurDataURL={`https://image.tmdb.org/t/p/w1280${backdrop_path}`}
      onLoad={(e) => (e.currentTarget.className += ' active')}
    />
  )
}
