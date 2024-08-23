import Image from "next/image";
import Buttons from "@/components/HeroDetailButtons";

type Movie = {
  data: {
    id: number;
    title: string;
    tagline: string;
    backdrop_path: string;
    poster_path: string;
    overview: string;
    genres: { id: number; name: string }[];
    release_date: string;
    release_dates: { results: { iso_3166_1: string, release_dates: { certification: string } }[] };
    runtime: number;
    vote_average: number;
    vote_count: number;
    videos: { results: { key: string }[] };
  }
}


const HeroReel = async ({ data }: Movie) => {
  const { backdrop_path, id, title, overview, genres, release_date, release_dates, videos } = data
  const { results = [] } = release_dates
  const result = results.find(result => result.iso_3166_1 === "US")
console.log(data)
  const parentRating = result?.release_dates[0].certification

  const trailerKey = videos?.results[0]?.key

  return (
    <section>
      <div className="flex justify-center relative overflow-hidden h-[90vh]">

        <Image
          src={`https://image.tmdb.org/t/p/w1280${backdrop_path}&include_adult=false`}
          alt={title}
          width={1920}
          height={1080}
          quality={100}
          className="w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-900 from-15%"></div>
      </div>
      <div className="absolute left-0 top-10 right-0">
        <div className="w-full max-w-[2000px] mx-auto flex flex-col h-[90vh] justify-end">
          <div className="px-6 max-w-5xl mb-32">
            {parentRating && (
              <div className="bg-lime-500/80 text-white font-bold px-1 py-1 rounded-sm mb-3 inline-block">
              {parentRating}
            </div>
            )}
            <h3 className="text-6xl font-bold mb-2">{title}</h3>
            {/* extract to separate component */}
            <div className="mb-10 text-gray-400">
              <span>
                {genres.map((genre, index) => (
                  <span key={index}>
                    { index > 0 && <span key={genre.id} className="mx-1">⸱</span>}
                    <span key={genre.id}>{genre.name}</span>
                  </span>
                ))}
              </span>
              <span className="mx-1">⸱</span>
              <span>{new Date(release_date).getFullYear()}</span>
            </div>
            <div className="mb-8">
              <Buttons id={id} trailerKey={trailerKey} />
            </div>
            <p className="text-xl">{overview}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroReel;
