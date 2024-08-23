import Header from '@/components/Header'
import getData from '@/utils/get_data'
import Reel from '@/components/Reel'
import { Suspense } from 'react'
import { ReelSkeleton } from '@/components/Skeletons'

async function PopularMovies() {
  const data = await getData('movie/popular?language=en-US&page=1')
  return (
    <>
      <h2 className="mb-3 text-3xl font-bold">Popular</h2>
      <Reel data={data?.results} />
      <div className="my-8 w-full bg-gradient-to-r from-transparent via-foreground/10 to-transparent p-[1px]" />
    </>
  )
}
async function NowPlayingMovies() {
  const data = await getData('movie/now_playing?language=en-US&page=1')
  return (
    <>
      <h2 className="mb-3 text-3xl font-bold">Now Playing</h2>
      <Reel data={data?.results} />
      <div className="my-8 w-full bg-gradient-to-r from-transparent via-foreground/10 to-transparent p-[1px]" />
    </>
  )
}

async function TopRatedMovies() {
  const data = await getData('movie/top_rated?language=en-US&page=1')
  return (
    <>
      <h2 className="mb-3 text-3xl font-bold">Top Rated</h2>
      <Reel data={data?.results} />
      <div className="my-8 w-full bg-gradient-to-r from-transparent via-foreground/10 to-transparent p-[1px]" />
    </>
  )
}

async function UpcomingMovies() {
  const data = await getData('movie/upcoming?language=en-US&page=1')
  return (
    <>
      <h2 className="mb-3 text-3xl font-bold">Coming Soon</h2>
      <Reel data={data?.results} />
      <div className="my-8 w-full bg-gradient-to-r from-transparent via-foreground/10 to-transparent p-[1px]" />
    </>
  )
}

// TODO: create renders for tv shows
// getData('tv/popular?language=en-US&page=1'),
// getData('tv/top_rated?language=en-US&page=1')

export default async function HomePage() {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_API_KEY}`,
    },
  }

  const popularMovies = await getData('movie/popular?language=en-US&page=1')

  return (
    <div>
      <Header data={popularMovies?.results} />
      <main className="mx-auto w-full max-w-[2000px] p-6">
        <Suspense fallback={<ReelSkeleton />}>
          <PopularMovies />
        </Suspense>
        <Suspense fallback={<ReelSkeleton />}>
          <TopRatedMovies />
        </Suspense>
        <Suspense fallback={<ReelSkeleton />}>
          <NowPlayingMovies />
        </Suspense>
        <Suspense fallback={<ReelSkeleton />}>
          <UpcomingMovies />
        </Suspense>
      </main>
    </div>
  )
}
