import Auth from '@/components/Auth';

export default function Login({
  searchParams,
}: {
  searchParams: { message: string };
}) {
  return (
    <main className="w-full max-w-[600px] px-6 m-auto">
      <h3 className="text-5xl font-semibold mb-4">Welcome! Sign in or create your free account.
      </h3>
      <Auth searchParams={searchParams} />
    </main>
  )
}
