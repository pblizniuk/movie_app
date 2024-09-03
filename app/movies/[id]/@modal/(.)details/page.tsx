'use client'
import { useEffect, useState, useRef } from 'react'
import { useRouter } from 'next/navigation'
import getData from '@/utils/get_data'

export default function DetailModal({ params }: { params: { id: string } }) {
  const { id }: { id: string } = params
  const router = useRouter()
  const dialogRef = useRef<HTMLDialogElement>(null)
  const [details, setDetails] = useState({})

  useEffect(() => {
    if (id) {
      const getDetails = async () => {
        const titleDetails = await getData(
          `movie/${id}?language=en-US&append_to_response=release_dates,videos,credits`,
        )
        setDetails(titleDetails)
      }

      getDetails()
    }
  }, [id])
  const handleClose = () => {
    router.back()
  }

  console.log(id, details)

  return (
    <>
      <div className=""></div>
      <dialog
        ref={dialogRef}
        onClose={() => handleClose()}
        className="fixed inset-0 bottom-0 left-0 right-0 top-0 z-[999] m-auto flex h-[100vh] w-[100vw] flex-col overflow-y-auto bg-black"
      >
        <button
          onClick={() => handleClose()}
          className="absolute -top-2 right-0 pr-2 text-6xl text-lime-500"
        >
          &times;
        </button>
        <h3 className="mb-4 block px-6 py-10 text-3xl font-semibold text-white">
          {details?.title}
        </h3>
        <p>{details?.overview}</p>
      </dialog>
    </>
  )
}
