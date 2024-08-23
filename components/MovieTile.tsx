'use client'
import Image from 'next/image'
import Link from 'next/link'

interface Props {
  movie: {
    id: number
    title: string
    poster_path: string
  }
  width?: number
  height?: number
}

export default function MovieTile({ movie, width, height }: Props) {
  if (!movie) {
    return null
  }

  const { poster_path, id, title } = movie

  return (
    <Link href={`/movies/${id}`} key={id} className="mr-3 inline-block">
      <div className="overflow-hidden rounded-md border-2 border-stone-800 transition-all duration-500 hover:border-lime-500">
        <Image
          src={`https://image.tmdb.org/t/p/w500${poster_path}`}
          alt={title}
          // width={375}
          // height={582}
          width={width}
          height={height}
          loading="lazy"
        />
      </div>
      <h3 className="pr-4">{title}</h3>
    </Link>
  )
}
