import getData from '@/utils/get_data'
import MovieTile from './MovieTile'

export default async function WishlistTile(props: { movie_id: number }) {
  const { movie_id, type } = props
  const movieDetails = await getData(
    `${type === 'movie' ? 'movie' : 'tv'}/${movie_id}?language=en-US&append_to_response=release_dates`,
  )

  return (
    <div className="relative">
      <MovieTile item={movieDetails} isTV={type === 'tv_show'} width={375} height={582} />
    </div>
  )
}
