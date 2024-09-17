'use client'
import { useEffect, useState, useRef } from 'react'
import { useRouter } from 'next/navigation'
import getData from '@/utils/get_data'
import TitleMeta from '@/components/TitleMeta'
import { MotionDiv } from '@/components/MotionDiv'
import type { Movie } from '@/utils/types'

export default function DetailModal({
  params,
}: {
  params: { id: string | number }
}) {
  const { id } = params
  const router = useRouter()
  const dialogRef = useRef<HTMLDialogElement>(null)
  const [details, setDetails] = useState({} as Movie)

  useEffect(() => {
    if (id) {
      const getDetails = async () => {
        const titleDetails = await getData(
          `movie/${id}?append_to_response=release_dates,videos,credits,images&include_image_language=en,null`,
        )
        setDetails(titleDetails)
      }

      getDetails()
    }
  }, [id])

  const handleClose = () => {
    router.back()
  }

  const bgVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  }

  return (
    <>
      <MotionDiv
        onClick={() => handleClose()}
        variants={bgVariants}
        initial="hidden"
        animate="visible"
        transition={{
          duration: 0.5,
          ease: [0.43, 0.13, 0.23, 0.96],
        }}
        viewport={{ amount: 0 }}
        className="absolute inset-0 z-[998] flex h-full min-h-[100vh] w-full min-w-[100vw] items-center justify-center overflow-y-auto bg-stone-900/90"
      />
      <dialog
        ref={dialogRef}
        onClose={() => handleClose()}
        className="fixed inset-0 bottom-0 left-0 right-0 top-0 z-[999] m-auto flex h-[100vh] w-[80vw] flex-col overflow-y-auto bg-stone-900 p-24"
      >
        <button
          onClick={() => handleClose()}
          className="absolute right-3 top-2 p-3 text-6xl text-lime-500"
        >
          &times;
        </button>
        <TitleMeta data={details} />
      </dialog>
    </>
  )
}
