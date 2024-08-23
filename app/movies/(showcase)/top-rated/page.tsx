import MovieGrid from "@/components/MovieGrid";
import getData from "@/utils/get_data";

export default async function Page() {
  const movies = await getData('movie/top_rated?language=en-US&page=1')
  return (
    <main className="w-full max-w-[2000px] px-6 mt-36 mx-auto">
      <MovieGrid title="Top Rated Movies" data={movies?.results} pagingUrl='movie/upcoming?language=en-US&page=1' />
    </main>
  )
}