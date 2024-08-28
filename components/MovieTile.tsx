'use client'
import Image from 'next/image'
import Link from 'next/link'
import { imageTileData } from '@/global_constants'

type MovieTileProps = {
  item: {
    id: number
    title?: string
    name?: string
    poster_path: string
  }
  width?: number
  height?: number
  isTV?: boolean
}

export default function MovieTile({ item, width, height, isTV = false }: MovieTileProps) {
  if (!item) {
    return null
  }

  const { poster_path, id, title, name } = item

  return (
    <Link href={isTV ? `/tv-shows/${id}` : `/movies/${id}`} key={id} className="mr-3 inline-block">
      <div className="overflow-hidden rounded-md border-2 border-stone-800 transition-all duration-500 hover:border-lime-500">
        <Image
          src={`https://image.tmdb.org/t/p/w500${poster_path}`}
          alt={isTV ? name : title}
          width={width}
          height={height}
          loading="lazy"
          placeholder="blur"
          blurDataURL={imageTileData}
        />
      </div>
      <h3 className="pr-4">{isTV ? name : title}</h3>
    </Link>
  )
}
