'use client'
import Image from "next/image";
import Link from "next/link";

interface Props {
  movie: {
    id: number;
    title: string;
    poster_path: string;
  }
}

export default function MovieTile({movie}: Props) {

  if (!movie) {
    return null
  }

  const { poster_path, id, title } = movie

  return (
    <Link href={`/movies/${id}`} key={id} className="inline-block mr-3">
      <div className='rounded-md overflow-hidden border-2 border-stone-800 hover:border-lime-500 transition-all duration-500'>
        <Image
          src={`https://image.tmdb.org/t/p/w500${poster_path}`}
          alt={title}
          width={375}
          height={582}
          loading="lazy"
        />
      </div>
      <h3 className="pr-4">{title}</h3>
    </Link>
  )
}