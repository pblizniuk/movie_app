import Image from 'next/image'
import Link from 'next/link'
import { imageTileData } from '@/global_constants'
import type { MovieTileProps } from '@/utils/types'
import { MotionDiv } from '@/components/MotionDiv'

const variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
}
export default function MovieTile({
  item,
  width,
  height,
  isTV = false,
  // index = 0,
}: MovieTileProps) {
  if (!item) {
    return null
  }

  const { poster_path, id, title, name } = item

  return (
    <Link
      href={isTV ? `/tv-shows/${id}` : `/movies/${id}`}
      key={id}
      className="mr-3 inline-block"
    >
      <MotionDiv
        className="overflow-hidden rounded-md border-2 border-stone-800 transition-all duration-500 hover:border-lime-500"
        variants={variants}
        initial="hidden"
        animate="visible"
        transition={{
          delay: Math.random() * 0.5,
          duration: 0.5,
          ease: [0.43, 0.13, 0.23, 0.96],
        }}
        viewport={{ amount: 0 }}
      >
        <Image
          src={`https://image.tmdb.org/t/p/w500${poster_path}`}
          alt={`image of ${isTV ? name : title}`}
          width={width}
          height={height}
          loading="lazy"
          placeholder="blur"
          blurDataURL={imageTileData}
        />
      </MotionDiv>
      <h3 className="pr-4">{isTV ? name : title}</h3>
    </Link>
  )
}
