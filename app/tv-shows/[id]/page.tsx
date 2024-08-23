import HeroDetail from '@/components/HeroDetail'
import Reel from '@/components/Reel'
import getData from '@/utils/get_data'

export default async function Movie({ params: { id } }: any) {
  //   adult: false,
  //   backdrop_path: '/yDHYTfA3R0jFYba16jBB1ef8oIt.jpg',
  //   belongs_to_collection: {
  //     id: 448150,
  //     name: 'Deadpool Collection',
  //     poster_path: '/30c5jO7YEXuF8KiWXLg9m28GWDA.jpg',
  //     backdrop_path: '/hBQOWY8qWXJVFAc8yLTh1teIu43.jpg'
  //   },
  //   budget: 200000000,
  //   genres: [
  //     { id: 28, name: 'Action' },
  //     { id: 35, name: 'Comedy' },
  //     { id: 878, name: 'Science Fiction' }
  //   ],
  //   homepage: 'https://www.marvel.com/movies/deadpool-and-wolverine',
  //   id: 533535,
  //   imdb_id: 'tt6263850',
  //   origin_country: [ 'US' ],
  //   original_language: 'en',
  //   original_title: 'Deadpool & Wolverine',
  //   overview: 'A listless Wade Wilson toils away in civilian life with his days as the morally flexible mercenary, Deadpool, behind him. But when his homeworld faces an existential threat, Wade must reluctantly suit-up again with an even more reluctant Wolverine.',
  //   popularity: 8858.912,
  //   poster_path: '/8cdWjvZQUExUUTzyp4t6EDMubfO.jpg',
  //   production_companies: [
  //     {
  //       id: 420,
  //       logo_path: '/hUzeosd33nzE5MCNsZxCGEKTXaQ.png',
  //       name: 'Marvel Studios',
  //       origin_country: 'US'
  //     },
  //     {
  //       id: 104228,
  //       logo_path: '/hx0C1XcSxGgat8N62GpxoJGTkCk.png',
  //       name: 'Maximum Effort',
  //       origin_country: 'US'
  //     },
  //     {
  //       id: 2575,
  //       logo_path: '/9YJrHYlcfHtwtulkFMAies3aFEl.png',
  //       name: '21 Laps Entertainment',
  //       origin_country: 'US'
  //     },
  //     {
  //       id: 127928,
  //       logo_path: '/h0rjX5vjW5r8yEnUBStFarjcLT4.png',
  //       name: '20th Century Studios',
  //       origin_country: 'US'
  //     },
  //     {
  //       id: 176762,
  //       logo_path: null,
  //       name: 'Kevin Feige Productions',
  //       origin_country: 'US'
  //     },
  //     {
  //       id: 22213,
  //       logo_path: '/qx9K6bFWJupwde0xQDwOvXkOaL8.png',
  //       name: 'TSG Entertainment',
  //       origin_country: 'US'
  //     }
  //   ],
  //   production_countries: [ { iso_3166_1: 'US', name: 'United States of America' } ],
  //   release_date: '2024-07-24',
  //   revenue: 1142616895,
  //   runtime: 128,
  //   spoken_languages: [ { english_name: 'English', iso_639_1: 'en', name: 'English' } ],
  //   status: 'Released',
  //   tagline: 'Come together.',
  //   title: 'Deadpool & Wolverine',
  //   video: false,
  //   vote_average: 7.78,
  //   vote_count: 2113
  // }

  const movieDetails = await getData(
    `tv/${id}?language=en-US&append_to_response=release_dates`,
  )
  const similarMovies = await getData(`tv/${id}/similar?language=en-US&page=1`)

  return (
    <div>
      <HeroDetail data={movieDetails} />
      <main className="mx-auto w-full max-w-[2000px] px-6">
        <h3 className="mb-4 text-2xl font-bold">Similar Movies</h3>
        <Reel data={similarMovies?.results} />
      </main>
    </div>
  )
}
