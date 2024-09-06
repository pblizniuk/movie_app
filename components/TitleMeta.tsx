import getCertification from '@/utils/helpers/getCertification'
import UserScore from '@/components/UserScore'
import { MovieData } from '@/utils/types'
import TitleDetailImages from '@/components/TitleDetailImages'

const TitleMeta = ({ data }: MovieData) => {
  const {
    title,
    release_dates,
    overview,
    tagline,
    production_companies,
    credits,
    vote_average,
    images,
    runtime,
    genres,
  } = data

  const hours = Math.floor(runtime / 60)
  const minutes = runtime % 60

  const parentRating = getCertification(release_dates)

  if (!data) return null

  const director = credits?.crew?.filter(
    (i: { job: string; name: string }) => i.job === 'Director',
  )
  const cast = credits?.cast

  return (
    <>
      <div className="modal-details my-auto text-white">
        <div className="mb-3 flex items-center gap-5">
          <UserScore vote_average={vote_average} size={'large'} />
          <span className="text-lg font-bold">User Score</span>
        </div>
        <div className="mb-3 flex items-center gap-5">
          {parentRating && (
            <div className="rounded-sm bg-lime-500 px-1 py-1 font-bold text-white">
              {parentRating}
            </div>
          )}
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
          {title}
        </h2>
        {tagline && <h4 className="mb-4 text-xl lg:text-4xl">{tagline}</h4>}
        <p className="mb-4 max-w-[70%] text-xl">{overview}</p>
        <div className="my-8 w-full bg-gradient-to-r from-transparent via-foreground/10 to-transparent p-[1px]" />
        <h2 className="mb-4 text-3xl font-bold">Crew:</h2>
        <div className="grid grid-cols-3 gap-4">
          <div className="rounded-md bg-stone-800/80 p-3">
            <p className="text-xl font-bold">Director(s):</p>
            {director &&
              director
                ?.slice(0, 4)
                ?.map((director: { name: string }, index: number) => (
                  <div key={index}>{director.name}</div>
                ))}
          </div>
          <div className="rounded-md bg-stone-800/80 p-3">
            <p className="text-xl font-bold">Cast:</p>
            {cast &&
              cast
                ?.slice(0, 10)
                ?.map((actor: { name: string }, index: number) => (
                  <div key={index}>{actor.name}</div>
                ))}
          </div>
          <div className="rounded-md bg-stone-800/80 p-3">
            <p className="text-xl font-bold">Studio(s):</p>
            {production_companies &&
              production_companies
                ?.slice(0, 4)
                ?.map((company: { name: string }, index: number) => (
                  <div key={index}>{company.name}</div>
                ))}
          </div>
        </div>
        <div>{/* <TitleDetailImages images={images} /> */}</div>
      </div>
    </>
  )
}

export default TitleMeta
