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
      src={`https://image.tmdb.org/t/p/w1280${backdrop_path}&include_adult=false`}
      alt={title}
      width={1280}
      height={1080}
      quality={100}
      className="h-full w-full [&.active]:scale-110 object-cover object-top transition-all delay-150 duration-[8000ms]"
      priority={true}
      placeholder="blur"
      blurDataURL={`https://image.tmdb.org/t/p/w1280${backdrop_path}&include_adult=false`}
      onLoad={(e) => e.currentTarget.className += " active"}
    />
  )
}
