export default function TitleLayout({
  children,
  modal,
}: {
  children: React.ReactNode
  modal: React.ReactNode
}) {
  return (
    <div className="title-detail-layout">
      {children}
      {modal}
    </div>
  )
}
