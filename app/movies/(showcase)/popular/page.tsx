import MovieGrid from '@/components/MovieGrid'
import getData from '@/utils/get_data'

export default async function Page() {
  const popularMovies = await getData('movie/popular?page=1')
  const { results, total_pages } = popularMovies
  return (
    <main className="mx-auto mt-36 w-full max-w-[2000px] px-6">
      <MovieGrid
        title="Popular Movies"
        data={results}
        pagingUrl="movie/popular?page="
        total_pages={total_pages}
      />
    </main>
  )
}
