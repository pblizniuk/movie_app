import HeroDetail from '@/components/HeroDetail'
import Reel from '@/components/Reel'
import Seasons from '@/components/Seasons'
import getData from '@/utils/get_data'

export default async function TVShow({ params: { id } }: any) {
  const titleDetails = await getData(
    `tv/${id}?append_to_response=content_ratings`,
  )
  const { results: similarTV } = await getData(
    `tv/${id}/recommendations?page=1`,
  )

  if (!titleDetails) return

  const { seasons } = titleDetails

  return (
    <div>
      <HeroDetail data={titleDetails} isTV />
      <main className="mx-auto w-full max-w-[2000px] px-6">
        {seasons && <Seasons seasons={seasons} showId={id} />}
        {similarTV && (
          <Reel data={similarTV} isTV title="TV Shows You May Like" />
        )}
      </main>
    </div>
  )
}
