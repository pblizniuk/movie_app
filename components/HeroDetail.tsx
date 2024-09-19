import Image from 'next/image'
import Buttons from '@/components/HeroDetailButtons'
import HeroImage from '@/components/HeroImage'
import Link from 'next/link'
import { MotionDiv } from '@/components/MotionDiv'
import type { MovieData } from '@/utils/types'
import getCertification from '@/utils/helpers/getCertification'
import UserScore from './UserScore'

type HeroDetailTypes = {
  isTV?: boolean
} & MovieData

const HeroDetail = async ({ data, isTV = false }: HeroDetailTypes) => {
  if (!data) return null

  const {
    backdrop_path,
    poster_path,
    id,
    title = '',
    name = '',
    overview,
    genres,
    release_date,
    release_dates,
    videos,
    vote_average,
    runtime,
    tagline,
  } = data
  const hours = Math.floor(runtime / 60)
  const minutes = runtime % 60
  const parentRating = getCertification(release_dates)
  const officialTrailer = videos?.results?.filter(
    (video) => video?.type === 'Trailer' && video?.official === true,
  )
  const trailerKey = officialTrailer
    ? officialTrailer[0]?.key
    : videos?.results[0]?.key

  return (
    <section>
      <div className="absolute top-0 flex min-h-[70vh] w-full justify-center overflow-hidden lg:h-[90vh]">
        <HeroImage
          backdrop_path={backdrop_path}
          title={isTV ? name : title}
          deferred
          animated
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-900 from-15%"></div>
      </div>
      <div className="relative left-0 right-0 top-10 mb-28">
        <div className="mx-auto flex w-full max-w-[2000px] flex-col justify-end lg:min-h-[90vh]">
          <div className="mt-20 max-w-5xl px-6">
            <div className="mb-20 items-center gap-10 md:mb-8 md:flex">
              <MotionDiv
                className="hidden md:block"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.2, ease: 'easeInOut' }}
              >
                <Image
                  src={`https://image.tmdb.org/t/p/w500${poster_path}`}
                  alt={title}
                  width={500}
                  height={750}
                  className="max-w-[300px] rounded-md shadow-sm"
                  loading="eager"
                  priority={true}
                />
              </MotionDiv>
              <div>
                <div className="mb-3 flex items-center gap-5">
                  {parentRating ? (
                    <div className="rounded-sm bg-lime-500 px-2 py-1 font-bold text-white">
                      {parentRating}
                    </div>
                  ) : null}
                  {runtime ? (
                    <div className="font-bold">
                      {hours}h {minutes} min
                    </div>
                  ) : null}
                  {vote_average ? (
                    <div className="flex items-center gap-2 font-bold">
                      <UserScore vote_average={vote_average} />
                      User Score
                    </div>
                  ) : null}
                </div>
                <h3 className="mb-2 text-3xl font-bold lg:text-6xl">
                  {isTV ? name : title}
                </h3>
                {tagline ? (
                  <h4 className="mb-2 text-xl lg:text-4xl">{tagline}</h4>
                ) : null}
                {/* extract to separate component */}
                <div className="mb-10 text-white/60">
                  <span>
                    {genres?.map((genre, index) => (
                      <span key={genre.id}>
                        {index > 0 && <span className="mx-1">⸱</span>}
                        <span key={genre.id}>{genre.name}</span>
                      </span>
                    ))}
                  </span>
                  {release_date && (
                    <>
                      <span className="mx-1">⸱</span>
                      <span>{new Date(release_date).getFullYear()}</span>
                    </>
                  )}
                </div>
                <div className="mb-8">
                  <Buttons id={id} trailerKey={trailerKey} isTV={isTV} />
                </div>
              </div>
            </div>
            <h3 className="mb-4 text-3xl font-semibold md:text-4xl">Summary</h3>
            <p className="mb-4 text-xl text-white/70">{overview}</p>
            <Link
              href={isTV ? `/tv-shows/${id}/details` : `/movies/${id}/details`}
              className="text-lg font-semibold uppercase text-lime-500"
            >
              More details
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroDetail
