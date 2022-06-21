import { useMangas } from '../contexts/MangasContext'

export default function Manga() {
  const { mangaSelected, isLoadingMangas } = useMangas()

  return (
    <>
      {!isLoadingMangas && (
        <div>
          <h1>{mangaSelected?.title}</h1>
        </div>
      )}
    </>
  )
}
