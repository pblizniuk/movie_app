'use client'
import { useState, useEffect } from 'react'
import Episodes from '@/components/Episodes'
import getData from '@/utils/get_data'
import Icon from './Icons'

const Seasons = ({
  seasons,
  showId,
}: {
  seasons: [{ season_number: number }]
  showId: number
}) => {
  // filter out season 0 because it has no episodes
  const filteredSeasons = seasons?.filter(
    (season: any) => season?.season_number > 0,
  )
  const [seasonNumber, setSeasonNumber] = useState(
    filteredSeasons?.[0]?.season_number,
  )
  const [open, setOpen] = useState(false)
  const [episodes, setEpisodes] = useState([])

  console.log({ episodes })

  useEffect(() => {
    const getEpisodes = async () => {
      const episodeList = await getData(`tv/${showId}/season/${seasonNumber}`)

      console.log({ episodeList })

      setEpisodes(episodeList?.episodes)
    }

    getEpisodes()
  }, [showId, seasonNumber])

  if (!seasons?.length) return null

  const onSeasonChange = (seasonNum: number) => {
    setSeasonNumber(seasonNum)
    setOpen(false)
  }

  return (
    <>
      <h3 className="mb-6 text-3xl font-semibold">Select Season</h3>
      <div className="dropdown relative mb-8">
        <button
          id="dropdownDefaultButton"
          data-dropdown-toggle="dropdown"
          className="inline-flex min-w-64 items-center justify-between rounded bg-lime-500 px-5 py-2.5 text-lg font-semibold leading-normal text-white hover:bg-lime-600"
          type="button"
          onClick={() => setOpen(!open)}
        >
          Season {seasonNumber}{' '}
          <Icon
            name="arrow"
            size="20"
            color="white"
            className="ml-auto ms-3 h-2.5 w-2.5"
          />
        </button>
        <div
          id="dropdown"
          className={`absolute z-10 ${open ? 'block' : 'hidden'} min-w-64 bg-stone-800/90`}
        >
          <ul
            className="w-full py-2 text-sm text-gray-700"
            aria-labelledby="dropdownDefaultButton"
          >
            {filteredSeasons?.map((season: any) => {
              return (
                <li
                  key={season?.season_number}
                  className={`${season?.season_number === seasonNumber ? 'selected' : ''} group`}
                >
                  <button
                    onClick={() => onSeasonChange(season?.season_number)}
                    className="block w-full px-4 py-2 text-left text-lg font-semibold text-white hover:bg-stone-900/90 group-[.selected]:bg-stone-900/90"
                  >
                    Season {season?.season_number}
                  </button>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
      <Episodes episodes={episodes} />
    </>
  )
}

export default Seasons
