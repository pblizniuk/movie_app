import MovieGrid from '@/components/MovieGrid'
import getData from '@/utils/get_data'

export default async function Page() {
  const movies = await getData('movie/popular?page=1')
  return (
    <main className="mx-auto mt-36 w-full max-w-[2000px] px-6">
      <MovieGrid
        title="Popular Movies"
        data={movies?.results}
        pagingUrl="movie/popular?page="
      />
    </main>
  )
}
