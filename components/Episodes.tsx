import Image from 'next/image'
import { MotionDiv } from './MotionDiv'
import type { Episodes } from '@/utils/types'

const variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
}

const Episodes = ({ episodes }: Episodes) => {
  if (!episodes?.length) return null

  return (
    <>
      <div className="mb-12 grid grid-cols-1 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {episodes?.map((episode: any) => {
          const { id, name, overview, still_path, air_date, episode_number } =
            episode
          const isFutureEpisode = new Date(air_date) > new Date()

          if (isFutureEpisode) return null
          return (
            <div key={id} className="mb-8 flex flex-col gap-4">
              {still_path && (
                <MotionDiv
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
                    className="w-full overflow-hidden rounded-md border-2 border-stone-800 transition-all duration-500 hover:border-lime-500"
                    src={`https://image.tmdb.org/t/p/w500${still_path}`}
                    alt={name}
                    width={500}
                    height={281}
                  />
                </MotionDiv>
              )}
              <div>
                <p className="mb-1 text-sm font-bold uppercase text-white/50">
                  Episode {episode_number}
                </p>
                <h4 className="mb-1 text-xl font-bold">{name}</h4>
                <p className="text-white/70">{overview}</p>
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default Episodes
