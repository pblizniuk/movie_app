'use client'
import { useCallback, useEffect, useState } from 'react'
import videojs from 'video.js'
import 'videojs-youtube'

interface PlayerProps {
  techOrder: string[]
  autoplay: boolean
  controls: boolean
  sources: {
    src: string
    type: string
  }[]
}

/**
 * A simple video player component for displaying videos from external websites.
 * @returns A Video.js video player element.
 */
const Player = (props: PlayerProps) => {
  const [videoEl, setVideoEl] = useState<HTMLVideoElement | null>(null)
  const onVideo = useCallback((el: HTMLVideoElement) => {
    setVideoEl(el)
  }, [])

  useEffect(() => {
    if (videoEl == null) {
      return
    }

    const player = videojs(videoEl, props)

    return () => {
      player.dispose()
    }
  }, [props, videoEl])

  return (
    <>
      <div data-vjs-player>
        <video ref={onVideo} className="video-js" />
      </div>
    </>
  )
}

export default Player
