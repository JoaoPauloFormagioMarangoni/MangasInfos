import { useMangas } from '../contexts/MangasContext'

export default function Manga() {
  const { mangaSelected, isLoading } = useMangas()

  return (
    <>
      {!isLoading && (
        <div>
          <h1>{mangaSelected?.title}</h1>
        </div>
      )}
    </>
  )
}
