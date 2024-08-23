import MovieTile from "./MovieTile";

type MovieGridProps = {
  title: string
  data: []
  pagingUrl: string // will use for fetching additional pages
}
export default async function MovieGrid({title, data} : MovieGridProps) {

  return (
    <div>
      <h3 className="text-5xl font-semibold mb-12 lg:mb-20">{title}</h3>
      <div className="grid grid-cols-2 xs:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-y-6">
        {data.map((movie) => (
          <MovieTile key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  )
}