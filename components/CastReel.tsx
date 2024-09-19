import { MotionDiv } from '@/components/MotionDiv'
import Image from 'next/image'
import type { Actor } from '@/utils/types'

const CastReel = ({ cast }: any) => {
  if (!cast) return null

  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  }

  return (
    <div className="my-8 w-full overflow-hidden">
      <div className="be-scroll relative m-auto max-w-none snap-x snap-mandatory overflow-x-scroll pb-8">
        <div className="flex flex-row gap-4">
          {cast?.map((actor: Actor) => {
            if (!actor?.profile_path) return null
            return (
              <MotionDiv
                key={actor?.id}
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
                  src={`https://image.tmdb.org/t/p/original${actor?.profile_path}`}
                  alt={actor?.name}
                  width={384}
                  height={576}
                  className="min-w-40 snap-center rounded-md border-2 border-stone-800 shadow-sm"
                  loading="lazy"
                />
                <p className="font-bold">{actor?.name}</p>
                <p>{actor?.character}</p>
              </MotionDiv>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default CastReel
