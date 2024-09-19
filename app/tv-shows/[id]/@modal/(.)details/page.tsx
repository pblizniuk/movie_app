import TitleDetailDialog from '@/components/TitleDetailDialog'
import getData from '@/utils/get_data'

export default async function DetailModal({
  params,
}: {
  params: { id: string | number }
}) {
  const { id } = params

  const titleDetails = await getData(
    `tv/${id}?append_to_response=release_dates,videos,credits,images&include_image_language=en,null`,
  )

  return (
    <>
      <TitleDetailDialog titleDetails={titleDetails} />
    </>
  )
}
