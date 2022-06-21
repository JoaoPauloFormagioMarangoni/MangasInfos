import { Header } from '../components/Header'
import backgroundHome from '../assets/background.jpg'
import { ListMangas } from '../components/ListMangas'
import { Footer } from '../components/Footer'
import { useMangas } from '../contexts/MangasContext'
import { useEffect } from 'react'
import { Pagination } from '../components/Pagination'
import { ListTopCharacters } from '../components/ListTopCharacters'
import { ListTopMangas } from '../components/ListTopMangas'

export default function Home() {
  const {
    favoriteCharacter,
    isLoadingCharacter,
    pageCharacters,
    loadFavoriteCharacter,
    isLoadingBestMangas,
    loadTopMangas,
    pageTopMangas,
    topMangas
  } = useMangas()

  useEffect(() => {
    loadFavoriteCharacter(1)
    loadTopMangas(1)
  }, [])

  return (
    <div>
      <img src={backgroundHome} className="fixed top-0 left-0 z-[-1]" />
      <Header />
      <ListMangas />
      <ListTopCharacters />
      <ListTopMangas />
      <Footer />
    </div>
  )
}
