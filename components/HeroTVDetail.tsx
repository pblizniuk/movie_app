import Image from 'next/image'
import Buttons from '@/components/HeroDetailButtons'

type Movie = {
  data: {
    id: number
    name: string
    tagline: string
    backdrop_path: string
    poster_path: string
    overview: string
    genres: { id: number; name: string }[]
    release_date: string
    // release_dates: {
    //   results: {
    //     iso_3166_1: string
    //     release_dates: {
    //       certification: string
    //     }[]
    //   }[]
    // }
    runtime: number
    vote_average: number
    vote_count: number
    videos: { results: { key: string }[] }
  }
  isTV?: boolean
}

const HeroTVDetail = async ({ data, isTV }: Movie) => {
  const {
    backdrop_path,
    poster_path,
    id,
    name,
    overview,
    genres,
    release_date,
    // release_dates,
    videos,
    vote_average,
    vote_count,
    runtime,
  } = data
  // const { results = [] } = release_dates
  // const result = results.find((result) => result.iso_3166_1 === 'US')
  // const parentRating = result && result?.release_dates[0].certification
  const trailerKey = videos?.results[0]?.key

  return (
    <section>
      <div className="relative flex h-[90vh] justify-center overflow-hidden">
        <Image
          src={`https://image.tmdb.org/t/p/w1280${backdrop_path}`}
          alt={name}
          width={1920}
          height={1080}
          quality={100}
          className="h-full w-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-900 from-15%"></div>
      </div>
      <div className="absolute left-0 right-0 top-10">
        <div className="mx-auto flex h-[90vh] w-full max-w-[2000px] flex-col justify-end">
          <div className="mb-32 max-w-5xl px-6">
            <div className="mb-8 flex items-center gap-10">
              <div>
                <Image
                  src={`https://image.tmdb.org/t/p/w500${poster_path}`}
                  alt={name}
                  width={300}
                  height={500}
                  className="rounded-md shadow-sm"
                />
              </div>
              <div>
                <div className="mb-3 flex items-center gap-5">
                  {/* {parentRating && (
                    <div className="rounded-sm bg-lime-500/80 px-1 py-1 font-bold text-white">
                      {parentRating}
                    </div>
                  )} */}
                  {vote_average && (
                    <div className="flex items-center gap-2 font-bold">
                      <span className="text-xl text-lime-500">
                        {Math.round(vote_average * 10)}%
                      </span>{' '}
                      User Score
                    </div>
                  )}
                </div>
                <h3 className="mb-2 text-6xl font-bold">{name}</h3>
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
            <h3 className="mb-4 text-4xl font-semibold">Summary</h3>
            <p className="text-xl text-white/70">{overview}</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroTVDetail
