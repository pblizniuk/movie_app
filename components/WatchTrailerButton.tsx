'use client'
import { useState } from 'react'
import Icon from './Icons'
export default function WatchTrailerButton({
  trailerKey,
}: {
  movie_id: number
  trailerKey: string
}) {
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
              type="button"
              onClick={() => setDialogOpen(false)}
              className="absolute right-0 top-0 z-[99999] cursor-default"
            >
              <Icon
                className="m-6 h-6 w-6 rotate-45 cursor-pointer text-white"
                name="cross"
                size="40"
              />
            </button>
          </div>
          <div className="fixed inset-0 flex items-center justify-center p-4">
            <iframe
              src={`https://www.youtube.com/embed/${trailerKey}`}
              allowFullScreen
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
