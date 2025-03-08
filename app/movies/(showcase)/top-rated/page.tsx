import MovieGrid from '@/components/MovieGrid'
import getData from '@/utils/get_data'

export default async function Page() {
  const topRatedMovies = await getData('movie/top_rated?page=1')
  const { results, total_pages } = topRatedMovies
  return (
    <main className="mx-auto mt-36 w-full max-w-[2000px] px-6">
      <MovieGrid
        title="Top Rated Movies"
        data={results}
        pagingUrl="movie/top_rated?page="
        total_pages={total_pages}
      />
    </main>
  )
}
