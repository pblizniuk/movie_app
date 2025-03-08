import MovieGrid from '@/components/MovieGrid'
import getData from '@/utils/get_data'
import { Suspense } from 'react'

const Page: React.FC = async () => {
  const comingSoonMovies = await getData('movie/upcoming?page=1')
  const { results, total_pages } = comingSoonMovies
  return (
    <main className="mx-auto mt-36 w-full max-w-[2000px] px-6">
      <Suspense fallback={<div>Loading...</div>}>
        <MovieGrid
          title="Coming Soon"
          data={results}
          pagingUrl="movie/upcoming?page="
          total_pages={total_pages}
        />
      </Suspense>
    </main>
  )
}

export default Page
