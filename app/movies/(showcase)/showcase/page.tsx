import MovieGrid from '@/components/MovieGrid'
import getData from '@/utils/get_data'

export default async function Page() {
  const movies = await getData(
    'discover/movie?include_adult=false&include_video=false&sort_by=popularity.desc&language=en-US&page=1',
  )
  return (
    <main className="mx-auto mt-36 w-full max-w-[2000px] px-6">
      <MovieGrid
        title="Movie Showcase"
        data={movies?.results}
        pagingUrl="discover/movie?include_adult=false&include_video=false&sort_by=popularity.desc&language=en-US&page="
      />
    </main>
  )
}
