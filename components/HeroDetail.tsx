import Image from 'next/image'
import Buttons from '@/components/HeroDetailButtons'
import HeroImage from './HeroImage'
import Link from 'next/link'

type Movie = {
  data: {
    id: number
    title: string
    tagline: string
    backdrop_path: string
    poster_path: string
    overview: string
    genres: { id: number; name: string }[]
    release_date: string
    release_dates: {
      results: {
        iso_3166_1: string
        release_dates: {
          certification: string
        }[]
      }[]
    }
    runtime: number
    vote_average: number
    vote_count: number
    videos: {
      results: {
        official: boolean
        type: string
        key: string
      }[]
    }
  }
}

const HeroDetail = async ({ data }: Movie) => {
  if (!data) return null

  const {
    backdrop_path,
    poster_path,
    id,
    title,
    overview,
    genres,
    release_date,
    release_dates,
    videos,
    vote_average,
    vote_count,
    runtime,
    tagline,
  } = data
  const { results = [] } = Object(release_dates)
  const result = results?.find(
    (result: { iso_3166_1: string }) => result?.iso_3166_1 === 'US',
  )
  const hours = Math.floor(runtime / 60)
  const minutes = runtime % 60
  const parentRating = result && result?.release_dates[0].certification
  const officialTrailer = videos?.results?.filter(
    (video) => video?.type === 'Trailer' && video?.official === true,
  )
  const trailerKey = officialTrailer
    ? officialTrailer[0]?.key
    : videos?.results[0]?.key

  return (
    <section>
      <div className="absolute flex w-full justify-center overflow-hidden lg:h-[90vh]">
        <HeroImage backdrop_path={backdrop_path} title={title} />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-900 from-15%"></div>
      </div>
      <div className="relative left-0 right-0 top-10">
        <div className="mx-auto flex w-full max-w-[2000px] flex-col justify-end lg:h-[90vh]">
          <div className="my-10 max-w-5xl px-6 lg:my-32">
            <div className="mb-8 items-center gap-10 md:flex">
              <div className="hidden md:block">
                <Image
                  src={`https://image.tmdb.org/t/p/w500${poster_path}`}
                  alt={title}
                  width={500}
                  height={750}
                  className="max-w-[300px] rounded-md shadow-sm"
                />
              </div>

              <div>
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
                  {vote_average && (
                    <div className="flex items-center gap-2 font-bold">
                      <span className="text-xl text-lime-500">
                        {Math.round(vote_average * 10)}%
                      </span>{' '}
                      User Score
                    </div>
                  )}
                </div>
                <h3 className="mb-2 text-3xl font-bold lg:text-6xl">{title}</h3>
                {tagline && (
                  <h4 className="mb-2 text-xl lg:text-4xl">{tagline}</h4>
                )}
                {/* extract to separate component */}
                <div className="mb-10 text-gray-400">
                  <span>
                    {genres?.map((genre, index) => (
                      <span key={genre.id}>
                        {index > 0 && <span className="mx-1">⸱</span>}
                        <span key={genre.id}>{genre.name}</span>
                      </span>
                    ))}
                  </span>
                  <span className="mx-1">⸱</span>
                  <span>{new Date(release_date).getFullYear()}</span>
                </div>
                <div className="mb-8">
                  <Buttons id={id} trailerKey={trailerKey} />
                </div>
              </div>
            </div>
            <h3 className="mb-4 text-4xl font-semibold">Summary</h3>
            <p className="text-xl">{overview}</p>
            <Link href={`/movies/${id}/details`}>See more</Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroDetail
