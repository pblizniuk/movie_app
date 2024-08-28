'use client'
import { useEffect, useRef } from 'react'
import { useRouter } from 'next/navigation'
import Auth from '@/components/Auth'

export default function LoginModal({
  searchParams,
}: {
  searchParams: { message: string }
}) {
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
        auto-scroll='false'
        onClose={() => router.back()}
        className="fixed inset-0 bottom-0 left-0 right-0 top-0 z-[999] m-auto flex flex-col h-[50vh] w-[50vh] items-center justify-center overflow-y-auto bg-black"
      >
        <button
          onClick={handleSubmit}
          className="absolute right-0 -top-2 pr-2 text-6xl text-lime-500"
        >
          &times;
        </button>
        <h3 className="mb-4 text-3xl font-semibold text-white px-6 py-10 block">
          Welcome! Sign in or create your free account.
        </h3>
        <Auth onHandleSubmit={handleSubmit} isDialog searchParams={searchParams} />
      </dialog>
    </>
  )
}
