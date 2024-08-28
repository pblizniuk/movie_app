import Search from '@/components/Search'
import getData from '@/utils/get_data'
import MovieGrid from '@/components/MovieGrid'

export default async function SearchPage({ searchParams }: { searchParams: { query: string } }) {

  const {query} = searchParams

  if (!query) {
    return (
      <main className="mx-auto w-full max-w-[2000px] px-6 h-[100vh] flex">
        <div className='flex flex-col m-auto'>
          <h3 className="mb-4 text-5xl font-semibold">Want to search for something?</h3>
          <Search />
        </div>
      </main>
    )
  }

  const data = await getData(`search/multi?include_adult=false&include_video=false&language=en-US&page=1&query=${query}&sort_by=popularity.desc`)

  return (
    <main className="mx-auto w-full max-w-[2000px] px-6 mt-40">
      <div className='flex flex-col mx-auto'>
        <Search />
        </div>
      {data && <MovieGrid title={`Search results for: ${query}`} data={data?.results} />}
    </main>

  )
}