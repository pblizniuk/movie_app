'use client'
import { useEffect, useRef } from 'react'
import { useRouter } from 'next/navigation'

import Auth from '@/components/Auth'

export default function LoginModal() {
  const router = useRouter()
  const dialogRef = useRef<HTMLDialogElement>(null)

  useEffect(() => {
    dialogRef.current?.showModal()
  }, [])

  const handleSubmit = () => {
    dialogRef.current?.close()
  }

  return (
    <>
      <div className="fixed inset-0 bottom-0 left-0 right-0 top-0 z-[999] flex h-full min-h-[100vh] w-full min-w-[100vw] items-center justify-center overflow-y-auto bg-stone-900/90"></div>
      <dialog
        ref={dialogRef}
        onClose={() => router.back()}
        className="fixed inset-0 bottom-0 left-0 right-0 top-0 z-[999] m-auto flex h-[50vh] w-[50vh] items-center justify-center overflow-y-auto bg-black"
      >
        <button
          onClick={handleSubmit}
          className="absolute right-0 top-0 pr-2 text-6xl text-lime-500"
        >
          &times;
        </button>
        <Auth onHandleSubmit={handleSubmit} isDialog />
      </dialog>
    </>
  )
}
