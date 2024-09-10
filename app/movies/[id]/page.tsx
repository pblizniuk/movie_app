import HeroDetail from '@/components/HeroDetail'
import Reel from '@/components/Reel'
import getData from '@/utils/get_data'

export default async function Movie({ params }: { params: never }) {
  const { id }: { id: string } = params
  const titleDetails = await getData(
    `movie/${id}?append_to_response=release_dates,videos,credits`,
  )
  const recommendedTitles = await getData(`movie/${id}/recommendations?page=1`)

  return (
    <div>
      <HeroDetail data={titleDetails} />
      <main className="mx-auto w-full max-w-[2000px] px-6">
        {recommendedTitles && (
          <Reel data={recommendedTitles?.results} title="Movies You May Like" />
        )}
      </main>
    </div>
  )
}
