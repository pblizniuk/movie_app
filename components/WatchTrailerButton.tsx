'use client'
import { useState } from 'react'
import Player from '@/components/Player/Player'
export default function WatchTrailerButton({
  movie_id,
  trailerKey,
}: {
  movie_id: number
  trailerKey: string
}) {
  if (!trailerKey) {
    return null
  }

  const [dialogOpen, setDialogOpen] = useState(false)
  const videoJsOptions = {
    techOrder: ['youtube'],
    autoplay: false,
    controls: true,
    sources: [
      {
        src: `https://www.youtube.com/watch?v=${trailerKey}`,
        type: 'video/youtube',
      },
    ],
  }

  const onPlayVideoClick = () => {
    // Do something
    videoJsOptions.autoplay = true
    videoJsOptions.controls = true
    setDialogOpen(true)
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
        <div className="fixed inset-0 z-[99999] bg-black bg-opacity-50 transition-opacity">
          <div>
            <button
              type="button"
              onClick={() => setDialogOpen(false)}
              className="absolute right-0 top-0 z-[99999] cursor-default"
            >
              Close Dialog
            </button>
          </div>
          <div className="fixed inset-0 flex items-center justify-center p-4">
            <iframe
              src={`https://www.youtube.com/embed/${trailerKey}`}
              frameborder="0"
              allowfullscreen
              className="h-[90vh] w-[90vw]"
            />
          </div>
        </div>

        //   <Player {...videoJsOptions} />
        //   {/* <iframe
        //       src={`https://www.youtube.com/embed/${trailerKey}`}
        //       frameborder="0"
        //       allowfullscreen
        //     /> */}
        // </div>
      )}
    </>
  )
}
