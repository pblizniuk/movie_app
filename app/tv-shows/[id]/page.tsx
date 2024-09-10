import HeroTVDetail from '@/components/HeroTVDetail'
import Reel from '@/components/Reel'
import Seasons from '@/components/Seasons'
import getData from '@/utils/get_data'

export default async function TVShow({ params: { id } }: any) {
  const movieDetails = await getData(
    `tv/${id}?language=en-US&append_to_response=release_dates`,
  )
  const { results: similarTV } = await getData(
    `tv/${id}/similar?language=en-US&page=1`,
  )

  if (!movieDetails) return

  const { seasons } = movieDetails

  return (
    <div>
      <HeroTVDetail data={movieDetails} isTV />
      <main className="mx-auto w-full max-w-[2000px] px-6">
        {seasons && <Seasons seasons={seasons} showId={id} />}
        {similarTV && (
          <Reel data={similarTV} isTV title="TV Shows You May Like" />
        )}
      </main>
    </div>
  )
}
