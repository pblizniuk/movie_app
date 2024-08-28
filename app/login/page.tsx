import Auth from '@/components/Auth'
import AuthButton from '@/components/AuthButton'
import { getUser } from '@/utils/supabase/helpers/get_user'

export default async function Login({
  searchParams,
}: {
  searchParams: { message: string }
}) {
  const id = await getUser()

  return (
    <main className="m-auto w-full max-w-[600px] px-6">
      {!id ? (
        <>
          <h3 className="mb-4 text-5xl font-semibold">
            Welcome! Sign in or create your free account.
          </h3>
          <Auth searchParams={searchParams} />
        </>
      ) : (
        <>
          <h3 className="mb-4 text-5xl font-semibold">
            You're already logged in. Not you? Log out..
          </h3>
          <AuthButton />
        </>
      )}
    </main>
  )
}
