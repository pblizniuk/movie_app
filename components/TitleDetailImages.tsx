import type { ImagesObject } from '@/utils/types'
import Image from 'next/image'
import { MotionDiv } from '@/components/MotionDiv'
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'

const TitleDetailImages = ({ images }: ImagesObject) => {
  if (!images) return null
  const { backdrops, posters, logos } = images

  const imageArray = [
    {
      gallery: backdrops?.slice(0, 9),
      title: 'Backdrops:',
      width: 640,
      height: 360,
    },
    {
      gallery: posters?.slice(0, 9),
      title: 'Posters:',
      width: 640,
      height: 905,
    },
    {
      gallery: logos?.slice(0, 9),
      title: 'Logos:',
      width: 640,
      height: 293,
    },
  ]

  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  }

  return (
    <>
      {imageArray?.map((group, index) => (
        <div className="my-8" key={index}>
          <div className="my-8 w-full bg-gradient-to-r from-transparent via-foreground/10 to-transparent p-[1px]" />
          {group?.gallery?.length > 0 && (
            <h2 className="mb-4 text-3xl font-bold">{group.title}</h2>
          )}
          <div className="w-full overflow-hidden">
            <div className="be-scroll relative m-auto max-w-none snap-x snap-mandatory overflow-x-scroll pb-8">
              <div className="flex flex-row gap-4">
                {group?.gallery?.map((item: { file_path: string }) => (
                  <MotionDiv
                    key={item.file_path}
                    variants={variants}
                    initial="hidden"
                    animate="visible"
                    transition={{
                      delay: Math.random() * 0.5,
                      duration: 0.5,
                      ease: [0.43, 0.13, 0.23, 0.96],
                    }}
                    viewport={{ amount: 0 }}
                  >
                    <Zoom classDialog="custom-zoom">
                      <Image
                        src={`https://image.tmdb.org/t/p/original${item.file_path}`}
                        alt={item.file_path}
                        width={group?.width}
                        height={group?.height}
                        className="min-w-60 snap-center rounded-md shadow-sm"
                        loading="lazy"
                      />
                    </Zoom>
                  </MotionDiv>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  )
}

export default TitleDetailImages
