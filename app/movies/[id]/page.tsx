import HeroDetail from "@/components/HeroDetail";
import Reel from "@/components/Reel";
import getData from "@/utils/get_data";

export default async function Movie({ params: { id } }: any) {
  const movieDetails = await getData(`movie/${id}?language=en-US&append_to_response=release_dates,videos,credits`)
  const similarMovies = await getData(`movie/${id}/similar?language=en-US&page=1`)

  return (
    <div>
      <HeroDetail data={movieDetails} />
      <main className="w-full max-w-[2000px] px-6  mx-auto">
        <h3 className="text-2xl font-bold mb-4">Similar Movies</h3>
        <Reel data={similarMovies?.results} />
      </main>
    </div>
  );
}