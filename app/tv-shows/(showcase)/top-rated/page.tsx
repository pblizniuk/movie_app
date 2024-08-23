import MovieGrid from "@/components/MovieGrid";
import getData from "@/utils/get_data";

export default async function Page() {
  const data = await getData('tv/top_rated?language=en-US&page=1')

  return (
    <main className="w-full max-w-[2000px] px-6 mt-36 mx-auto">
      <MovieGrid title="Top Rated TV Shows" data={data?.results} pagingUrl='tv/top_rated?language=en-US&page=' />
    </main>
  )
}