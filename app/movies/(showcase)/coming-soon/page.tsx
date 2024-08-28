import MovieGrid from '@/components/MovieGrid'
import getData from '@/utils/get_data'
import { Suspense } from 'react'

const Page: React.FC = async () => {
  const movies = await getData('movie/upcoming?language=en-US&page=1')
  return (
    <main className="mx-auto mt-36 w-full max-w-[2000px] px-6">
      <Suspense fallback={<div>Loading...</div>}>
        <MovieGrid
          title="Coming Soon"
          data={movies?.results}
          pagingUrl="movie/upcoming?language=en-US&page="
        />
      </Suspense>
    </main>
  )
}

export default Page
