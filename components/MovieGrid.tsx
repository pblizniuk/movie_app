import MovieTile from './MovieTile'

type MovieGridProps = {
  title: string
  data: []
  pagingUrl: string // will use for fetching additional pages
}
export default async function MovieGrid({ title, data }: MovieGridProps) {
  return (
    <div>
      <h3 className="mb-12 text-5xl font-semibold lg:mb-20">{title}</h3>
      <div className="grid grid-cols-2 gap-y-6 md:grid-cols-3 lg:grid-cols-5">
        {data.map((movie) => (
          <MovieTile key={movie.id} movie={movie} width={375} height={582} />
        ))}
      </div>
    </div>
  )
}
