export type MovieGridTypes = {
  title: string
  data: []
  pagingUrl?: string // will use for fetching additional pages
  isTV?: boolean // for tv shows
}

export type MovieTileProps = {
  id?: number
  poster_path?: string
  item: {
    id?: number
    title?: string
    name?: string
    poster_path?: string
    alt?: string
  }
  width?: number
  height?: number
  isTV?: boolean
  index?: number
}

export type ReleaseDates = {
  results: {
    iso_3166_1: string
    release_dates: {
      certification: string
      release_date: string
    }[]
  }[]
}

export type MovieData = {
  data: {} & Movie
}
export type Movie = {
  id: number | string
  title?: string
  name?: string
  tagline: string
  backdrop_path: string
  poster_path: string
  overview: string
  genres: { id: number; name: string }[]
  release_date: string
  release_dates: ReleaseDates
  credits: {
    cast: {
      name: string
      character: string
      profile_path: string
    }[]
    crew: {
      name: string
      job: string
      profile_path: string
    }[]
  }
  images: Images
  original_language: string
  original_title: string
  original_name: string
  popularity: number
  production_countries: { name: string; iso_3166_1: string }[]
  spoken_languages: { name: string; iso_639_1: string }[]
  status: string
  homepage: string
  imdb_id: string
  production_companies: { name: string; id: number }[]
  runtime: number
  vote_average: number
  vote_count: number
  videos: {
    results: {
      official: boolean
      type: string
      key: string
    }[]
  }
}

export type Images = {
  backdrops: {
    file_path: string
  }[]
  posters: {
    file_path: string
  }[]
  logos: {
    file_path: string
  }[]
}

export type ImagesObject = {
  images: {} & Images
}

export type Actor = {
  id: number
  name: string
  profile_path: string
  character: string
  credit_id: string
  order: number
}

export type Season = {
  air_date: string
  episode_count: number
  id: number
  name: string
  overview: string
  poster_path: string
  season_number: number
  vote_average: number
}
