'use client'
import Link from "next/link"
import { useSearchParams } from 'next/navigation'
import AuthDialog from "./AuthDialog"

type SearchParamProps = {
  searchParams: {
    show: boolean | undefined
  }
};
export default function DialogTrigger() {
  const searchParams = useSearchParams()
  const show = searchParams.get('show')
console.log(searchParams)
  return (
    <>
      <Link href="?show=true">
      Log In Test
    </Link>
    { show && (
      <AuthDialog searchParams={searchParams} />
    )}
    </>
  )
}