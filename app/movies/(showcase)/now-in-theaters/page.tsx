import MovieGrid from '@/components/MovieGrid'
import getData from '@/utils/get_data'

export default async function Page() {
  const nowPlayingMovies = await getData('movie/now_playing?page=1')
  const { results, total_pages } = nowPlayingMovies
  return (
    <main className="mx-auto mt-36 w-full max-w-[2000px] px-6">
      <MovieGrid
        title="Now Playing In Theaters"
        data={results}
        pagingUrl="movie/now_playing?page="
        total_pages={total_pages}
      />
    </main>
  )
}
