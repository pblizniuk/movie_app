'use client'
import { useRef } from 'react'
import { useRouter } from 'next/navigation'
import getData from '@/utils/get_data'

export default async function DetailModal({
  params,
}: {
  params: { id: string }
}) {
  const { id }: { id: string } = params
  const router = useRouter()
  const dialogRef = useRef<HTMLDialogElement>(null)

  const titleDetails = await getData(
    `movie/${id}?language=en-US&append_to_response=release_dates,videos,credits`,
  )
  const handleClose = () => {
    router.back()
  }

  return (
    <>
      <div className="absolute inset-0 z-[999] flex h-full min-h-[100vh] w-full min-w-[100vw] items-center justify-center overflow-y-auto bg-stone-900/90"></div>
      <dialog
        ref={dialogRef}
        onClose={() => handleClose()}
        className="fixed inset-0 bottom-0 left-0 right-0 top-0 z-[999] m-auto flex h-[50vh] w-[50vh] flex-col items-center justify-center overflow-y-auto bg-black"
      >
        <button
          onClick={() => handleClose()}
          className="absolute -top-2 right-0 pr-2 text-6xl text-lime-500"
        >
          &times;
        </button>
        <h3 className="mb-4 block px-6 py-10 text-3xl font-semibold text-white">
          {titleDetails?.title}
        </h3>
        <p>{titleDetails?.overview}</p>
      </dialog>
    </>
  )
}
