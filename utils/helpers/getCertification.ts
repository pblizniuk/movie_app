import { ReleaseDates } from '@/utils/types'

export default function getCertification(release_dates: ReleaseDates) {
  const { results = [] } = Object(release_dates)
  const usReleaseDate = results?.find(
    (result: { iso_3166_1: string }) => result?.iso_3166_1 === 'US',
  )
  const parentRating =
    usReleaseDate && usReleaseDate?.release_dates[0].certification
  return parentRating
}
