import type { ImagesObject } from '@/utils/types'
import Image from 'next/image'

const TitleDetailImages = async ({ images }: ImagesObject) => {
  if (!images) return null
  const { backdrops, posters, logos } = images

  const imageArray = [
    { gallery: backdrops?.slice(0, 9), title: 'Backdrops:' },
    { gallery: posters?.slice(0, 9), title: 'Posters:' },
    { gallery: logos?.slice(0, 9), title: 'Logos:' },
  ]

  return (
    <>
      {imageArray?.map((group) => (
        <div className="my-8">
          {group?.gallery?.length > 0 && (
            <h2 className="mb-4 text-3xl font-bold">{group.title}</h2>
          )}
          <div className="w-full overflow-hidden">
            <div className="be-scroll relative m-auto max-w-none snap-x snap-mandatory overflow-x-scroll pb-8">
              <div className="flex flex-row gap-4">
                {group?.gallery?.map((item: { file_path: string }) => (
                  <Image
                    key={item.file_path}
                    src={`https://image.tmdb.org/t/p/original${item.file_path}`}
                    alt={item.file_path}
                    width={300}
                    height={500}
                    className="rounded-md shadow-sm"
                    loading="lazy"
                  />
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
