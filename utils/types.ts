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
