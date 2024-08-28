import Header from '@/components/Header'
import getData from '@/utils/get_data'
import Reel from '@/components/Reel'
import { Suspense } from 'react'
import { ReelSkeleton } from '@/components/Skeletons'

async function PopularMovies() {
  const data = await getData('movie/popular?language=en-US&page=1')
  if (!data) return null

  return (
    <>
      <Reel data={data?.results} title="Popular" link="movies/popular" />
      <div className="my-8 w-full bg-gradient-to-r from-transparent via-foreground/10 to-transparent p-[1px]" />
    </>
  )
}
async function NowPlayingMovies() {
  const data = await getData('movie/now_playing?language=en-US&page=1')
  return (
    <>
      <Reel
        data={data?.results}
        link="movies/now-in-theaters"
        title="Now Playing"
      />
      <div className="my-8 w-full bg-gradient-to-r from-transparent via-foreground/10 to-transparent p-[1px]" />
    </>
  )
}

async function TopRatedMovies() {
  const data = await getData('movie/top_rated?language=en-US&page=1')
  return (
    <>
      <Reel
        data={data?.results}
        title="Top Rated Movies"
        link="movies/top-rated"
      />
      <div className="my-8 w-full bg-gradient-to-r from-transparent via-foreground/10 to-transparent p-[1px]" />
    </>
  )
}

async function UpcomingMovies() {
  const data = await getData('movie/upcoming?language=en-US&page=1')
  return (
    <>
      <Reel
        data={data?.results}
        title="Coming Soon"
        link="movies/coming-soon"
      />
      <div className="my-8 w-full bg-gradient-to-r from-transparent via-foreground/10 to-transparent p-[1px]" />
    </>
  )
}

async function PopularTV() {
  const data = await getData('tv/popular?language=en-US&page=1')
  return (
    <>
      <Reel
        data={data?.results}
        isTV
        title="Popular TV"
        link="tv-shows/popular"
      />
      <div className="my-8 w-full bg-gradient-to-r from-transparent via-foreground/10 to-transparent p-[1px]" />
    </>
  )
}

async function TopRatedTV() {
  const data = await getData('tv/top_rated?language=en-US&page=1')
  return (
    <>
      <Reel
        data={data?.results}
        isTV
        title="Top Rated TV Shows"
        link="tv-shows/top-rated"
      />
      <div className="my-8 w-full bg-gradient-to-r from-transparent via-foreground/10 to-transparent p-[1px]" />
    </>
  )
}

export default async function HomePage() {
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
        <Suspense fallback={<ReelSkeleton />}>
          <PopularTV />
        </Suspense>
        <Suspense fallback={<ReelSkeleton />}>
          <TopRatedTV />
        </Suspense>
      </main>
    </div>
  )
}
