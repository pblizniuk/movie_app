import Header from "@/components/Header";
import getData from "@/utils/get_data";
import Reel from "@/components/Reel";
import { Suspense } from "react";

async function PopularMovies() {
  const data = await getData('movie/popular?language=en-US&page=1')
  return (
    <>
      <h2 className="text-3xl font-bold mb-3">Popular</h2>
      <Reel data={data?.results} />
      <div className="w-full p-[1px] bg-gradient-to-r from-transparent via-foreground/10 to-transparent my-8" />
    </>
  )
}
async function NowPlayingMovies() {
  const data = await getData('movie/now_playing?language=en-US&page=1')
  return (
    <>
      <h2 className="text-3xl font-bold mb-3">Now Playing</h2>
      <Reel data={data?.results} />
      <div className="w-full p-[1px] bg-gradient-to-r from-transparent via-foreground/10 to-transparent my-8" />
    </>
  )
}

async function TopRatedMovies() {
  const data = await getData('movie/top_rated?language=en-US&page=1')
  return (
    <>
      <h2 className="text-3xl font-bold mb-3">Top Rated</h2>
      <Reel data={data?.results} />
      <div className="w-full p-[1px] bg-gradient-to-r from-transparent via-foreground/10 to-transparent my-8" />
    </>
  )
}

async function UpcomingMovies() {
  const data = await getData('movie/upcoming?language=en-US&page=1')
  return (
    <>
      <h2 className="text-3xl font-bold mb-3">Coming Soon</h2>
      <Reel data={data?.results} />
      <div className="w-full p-[1px] bg-gradient-to-r from-transparent via-foreground/10 to-transparent my-8" />
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
    }
  };

  const popularMovies = await getData('movie/popular?language=en-US&page=1')

  return (
    <div>
      <Header data={popularMovies?.results} />
      <main className="w-full max-w-[2000px] mx-auto p-6">
        <Suspense fallback={<div>Loading...</div>}>
          <PopularMovies />
        </Suspense>
        <Suspense fallback={<div>Loading...</div>}>
          <TopRatedMovies />
        </Suspense>
        <Suspense fallback={<div>Loading...</div>}>
          <NowPlayingMovies />
        </Suspense>
        <Suspense fallback={<div>Loading...</div>}>
          <UpcomingMovies />
        </Suspense>
      </main>
    </div>
  );
}
