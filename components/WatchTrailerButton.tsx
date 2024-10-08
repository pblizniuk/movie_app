'use client'
import { useState } from 'react'
export default function WatchTrailerButton({
  trailerKey,
}: {
  movie_id: string | number
  trailerKey: string
}) {
  const [dialogOpen, setDialogOpen] = useState(false)

  const onPlayVideoClick = () => {
    setDialogOpen(true)
  }

  if (!trailerKey) {
    return null
  }

  return (
    <>
      <button
        type="button"
        onClick={onPlayVideoClick}
        className="shadow-light-3 hover:shadow-light-2 focus:shadow-light-2 active:shadow-light-2 inline-block rounded bg-lime-500 px-6 py-2 font-semibold leading-normal text-white transition duration-150 ease-in-out hover:bg-lime-600 focus:bg-lime-600 focus:outline-none focus:ring-0 active:bg-lime-600 motion-reduce:transition-none"
      >
        Watch Trailer
      </button>
      {dialogOpen && (
        <div className="fixed inset-0 z-[99999] bg-black bg-opacity-80 transition-opacity">
          <div>
            <button
              onClick={() => setDialogOpen(false)}
              className="fixed right-3 top-2 z-[999] p-3 text-6xl text-lime-500"
            >
              &times;
            </button>
          </div>
          <div className="fixed inset-0 m-auto flex h-auto w-full items-center justify-center p-4 xl:w-[80vw]">
            <div className="relative w-full pt-[56.25%]">
              <iframe
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${trailerKey}`}
                allowFullScreen
                className="absolute bottom-0 left-0 right-0 top-0 h-full w-full"
              />
            </div>
          </div>
        </div>
      )}
    </>
  )
}
