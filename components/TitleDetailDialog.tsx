'use client'
import { useRef } from 'react'
import { useRouter } from 'next/navigation'
import TitleMeta from '@/components/TitleMeta'
import { MotionDiv } from '@/components/MotionDiv'
import type { Movie } from '@/utils/types'

export default function TitleDetailDialog({
  titleDetails,
}: {
  titleDetails: Movie
}) {
  const router = useRouter()
  const dialogRef = useRef<HTMLDialogElement>(null)

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
        className="fixed inset-0 bottom-0 left-0 right-0 top-0 z-[999] m-auto flex h-[100vh] w-full flex-col overflow-y-auto bg-stone-900 p-3 lg:w-[80vw] lg:p-24"
      >
        <button
          onClick={() => handleClose()}
          className="fixed right-3 top-2 z-[999] p-3 text-6xl text-lime-500"
        >
          &times;
        </button>
        <TitleMeta data={titleDetails} />
      </dialog>
    </>
  )
}
