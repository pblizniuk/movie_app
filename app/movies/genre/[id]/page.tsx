import MovieGrid from '@/components/MovieGrid'
import getData from '@/utils/get_data'

const GenrePage = async ({ params }: { params: { id: string } }) => {
  const dataUrl = `discover/movie?with_genres=${params.id}`
  const movies = await getData(dataUrl)
  const { genres } = await getData('genre/movie/list')

  if (!movies || !genres) return

  const genre = genres?.find((genre: { id: number; name: string }) => {
    return genre.id === parseInt(params.id)
  })

  return (
    <main className="mx-auto mt-36 w-full max-w-[2000px] px-6">
      <MovieGrid
        title={`Browse ${genre?.name}`}
        data={movies?.results}
        pagingUrl={`${dataUrl}&page=`}
      />
    </main>
  )
}

export default GenrePage
