import AuthButton from "@/components/AuthButton";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

export default async function ProtectedPage() {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) {
    return redirect("/login");
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
    <main className="w-full max-w-[600px] px-6 m-auto">
        <h3 className="text-5xl font-semibold mb-4">This is a protected page that you can only see as an authenticated
        user
        </h3>
        <AuthButton />
      </main>
  )
}