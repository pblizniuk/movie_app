import AuthButton from '@/components/AuthButton'
import { createClient } from '@/utils/supabase/server'
import { redirect } from 'next/navigation'

export default async function ProtectedPage() {
  const supabase = createClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()
  if (!user) {
    return redirect('/login')
  }

  const { data, error } = await supabase
    .from('wishlist')
    .select()
    .eq('user_id', user?.id)

  if (error) {
    console.log(error)
    throw new Error(error.message)
  }

  return (
    <main className="m-auto w-full max-w-[600px] px-6">
      <h3 className="mb-4 text-5xl font-semibold">
        This is a protected page that you can only see as an authenticated user
      </h3>
      <AuthButton />
    </main>
  )
}
