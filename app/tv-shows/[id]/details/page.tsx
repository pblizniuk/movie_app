import TitleMeta from '@/components/TitleMeta'
import getData from '@/utils/get_data'

export default async function Details({
  params: { id },
}: {
  params: { id: number | string }
}) {
  const titleDetails = await getData(
    `tv/${id}?append_to_response=release_dates,videos,credits,images&include_image_language=en,null`,
  )

  return (
    <main className="mx-auto mt-36 flex w-full max-w-[2000px] px-6">
      <TitleMeta data={titleDetails} />
    </main>
  )
}
