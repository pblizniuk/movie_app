import Search from '@/components/Search'
import getData from '@/utils/get_data'
import MovieGrid from '@/components/MovieGrid'

export default async function SearchPage({
  searchParams,
}: {
  searchParams: { query: string }
}) {
  const { query } = searchParams

  if (!query) {
    return (
      <main className="mx-auto flex h-[100vh] w-full max-w-[2000px] px-6">
        <div className="m-auto flex flex-col">
          <h3 className="mb-4 text-5xl font-semibold">
            What would you like to watch?
          </h3>
          <Search />
        </div>
      </main>
    )
  }

  const data = await getData(
    `search/multi?include_video=false&language=en-US&page=1&query=${query}&sort_by=popularity.desc`,
  )

  return (
    <main className="mx-auto mt-40 w-full max-w-[2000px] px-6">
      <div className="mx-auto flex flex-col">
        <Search />
      </div>
      {data && (
        <MovieGrid
          title={`Search results for: ${query}`}
          data={data?.results}
        />
      )}
    </main>
  )
}
