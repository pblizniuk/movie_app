import { SubmitButton } from './SubmitButton'
import { signIn, signUp } from '@/utils/actions/auth'

type SearchParams = {
  message?: string
  onHandleSubmit?: () => void
  isDialog?: boolean
}
export default function Login({
  searchParams,
  onHandleSubmit,
  isDialog = false,
}: {
  searchParams: SearchParams
  onHandleSubmit: () => void
  isDialog?: boolean
}) {
  const handleSubmit = async (formData: FormData) => {
    await onHandleSubmit()
    await signIn(formData)
  }

  return (
    <div className="flex w-full flex-1 flex-col justify-center gap-2 sm:max-w-md">
      <form className="flex w-full flex-1 flex-col justify-center gap-2 text-foreground">
        <label className="text-md" htmlFor="email">
          Email
        </label>
        <input
          className="mb-6 rounded-md border bg-inherit px-4 py-2"
          name="email"
          placeholder="you@example.com"
          required
        />
        <label className="text-md" htmlFor="password">
          Password
        </label>
        <input
          className="mb-6 rounded-md border bg-inherit px-4 py-2"
          type="password"
          name="password"
          placeholder="••••••••"
          required
        />
        <SubmitButton
          formAction={isDialog ? handleSubmit : signIn}
          className="shadow-light-3 hover:shadow-light-2 focus:shadow-light-2 active:shadow-light-2 inline-block rounded bg-lime-500 px-6 py-2 font-semibold leading-normal text-white transition duration-150 ease-in-out hover:bg-lime-600 focus:bg-lime-600 focus:outline-none focus:ring-0 active:bg-lime-600 motion-reduce:transition-none"
          pendingText="Signing In..."
        >
          Sign In
        </SubmitButton>
        <SubmitButton
          formAction={signUp}
          className="hover:shadow-light-2 focus:shadow-light-2 active:shadow-light-2 mb-2 rounded-md border border-lime-500 px-4 py-2 text-foreground transition duration-150 ease-in-out hover:bg-lime-600/5 focus:bg-lime-600/5 focus:outline-none focus:ring-0 active:bg-lime-600/5 motion-reduce:transition-none"
          pendingText="Signing Up..."
        >
          Sign Up
        </SubmitButton>
        {searchParams?.message && (
          <p className="mt-4 bg-foreground/10 p-4 text-center text-foreground">
            {searchParams.message}
          </p>
        )}
      </form>
    </div>
  )
}
