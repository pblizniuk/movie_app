import getData from "@/utils/get_data"
import MovieTile from "./MovieTile"

export default async function WishlistTile(props: { movie_id: number }) {

  const { movie_id } = props

  const movieDetails = await getData(`movie/${movie_id}?language=en-US&append_to_response=release_dates`)

  return (
    <form className="relative">
      <MovieTile movie={movieDetails} width={375} height={582} />
    </form>
  )
}