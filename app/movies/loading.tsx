import Icon from '@/components/Icons'

export default function LoadingPage() {
  return (
    <div className="flex h-screen items-center justify-center">
      <Icon
        name="spinner"
        className="-ml-1 mr-3 h-12 w-12 animate-spin text-lime-500"
      />
    </div>
  )
}
