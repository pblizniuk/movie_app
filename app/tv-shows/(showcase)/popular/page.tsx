import MovieGrid from '@/components/MovieGrid'
import getData from '@/utils/get_data'

export default async function Page() {
  const data = await getData('tv/popular?language=en-US&page=1')

  return (
    <main className="mx-auto mt-36 w-full max-w-[2000px] px-6">
      <MovieGrid
        title="Popular TV Shows"
        data={data?.results}
        pagingUrl="tv/popular?language=en-US&page="
        isTV
      />
    </main>
  )
}
