import {
  getCertification,
  getTVContentRating,
} from '@/utils/helpers/getCertification'
import UserScore from '@/components/UserScore'
import { MovieData } from '@/utils/types'
import TitleDetailImages from '@/components/TitleDetailImages'
import CastReel from '@/components/CastReel'
import Image from 'next/image'
import HeroImage from './HeroImage'

const TitleMeta = ({ data }: MovieData) => {
  const {
    title = '',
    name = '',
    release_dates,
    content_ratings,
    overview,
    tagline,
    production_companies,
    credits,
    vote_average,
    images,
    runtime,
    genres,
    backdrop_path,
  } = data

  const hours = Math.floor(runtime / 60)
  const minutes = runtime % 60

  const parentRating = getCertification(release_dates)
  const tvRating = content_ratings && getTVContentRating(content_ratings)

  if (!data) return null

  const directorList = credits?.crew?.filter(
    (i: { job: string; name: string }) => i.job === 'Director',
  )
  const cast = credits?.cast

  const directorLabel = directorList?.length > 1 ? 'Directors' : 'Director'
  const studioLabel = production_companies?.length > 1 ? 'Studios' : 'Studio'

  return (
    <>
      <div className="absolute left-0 top-0 -z-10 flex min-h-[70vh] w-full justify-center overflow-hidden lg:h-[90vh]">
        <HeroImage backdrop_path={backdrop_path} title={title} />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-900 from-0% to-stone-900/50"></div>
      </div>
      <div className="modal-details relative z-10 my-auto text-white">
        <div className="mb-3 flex items-center gap-5">
          <UserScore vote_average={vote_average} size={'large'} />
          <span className="text-lg font-bold">User Score</span>
        </div>
        <div className="mb-3 flex items-center gap-5">
          {parentRating || tvRating ? (
            <div className="rounded-sm bg-lime-500 px-2 py-1 font-bold text-white">
              {parentRating || tvRating}
            </div>
          ) : null}
          {runtime && (
            <div className="font-bold">
              {hours}h {minutes} min
            </div>
          )}
          <span>
            {genres?.map((genre, index) => (
              <span key={genre.id}>
                {index > 0 && <span className="mx-1">⸱</span>}
                <span key={genre.id}>{genre.name}</span>
              </span>
            ))}
          </span>
        </div>
        <h2 className="mb-4 max-w-[70%] text-3xl font-bold lg:text-6xl">
          {title || name}
        </h2>
        {tagline && <h4 className="mb-4 text-xl lg:text-4xl">{tagline}</h4>}
        <p className="mb-4 text-xl text-white/70">{overview}</p>
        <div className="my-8 w-full bg-gradient-to-r from-transparent via-foreground/10 to-transparent p-[1px]" />
        <h2 className="mb-4 text-3xl font-bold">Cast & Crew:</h2>
        <CastReel cast={cast} />
        <div className="grid grid-cols-2 gap-4">
          {directorList?.length > 0 && (
            <div className="rounded-md bg-stone-800/60 p-3">
              <p className="text-xl font-bold">{directorLabel}:</p>
              {directorList
                ?.slice(0, 4)
                ?.map(
                  (
                    director: { name: string; profile_path: string },
                    index: number,
                  ) => (
                    <div key={index}>
                      {director?.profile_path !== null && (
                        <Image
                          src={`https://image.tmdb.org/t/p/original${director?.profile_path}`}
                          alt={director?.name}
                          width={384}
                          height={576}
                          className="max-w-24 snap-center rounded-md shadow-sm"
                          loading="lazy"
                        />
                      )}
                      <p key={index} className="font-bold">
                        {director.name}
                      </p>
                    </div>
                  ),
                )}
            </div>
          )}
          <div className="rounded-md bg-stone-800/60 p-3">
            <p className="text-xl font-bold">{studioLabel}:</p>
            {production_companies &&
              production_companies
                ?.slice(0, 4)
                ?.map((company: { name: string }, index: number) => (
                  <div key={index}>{company.name}</div>
                ))}
          </div>
        </div>
        <div>
          <TitleDetailImages images={images} />
        </div>
      </div>
    </>
  )
}

export default TitleMeta
