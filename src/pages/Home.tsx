import { Header } from '../components/Header'
import backgroundHome from '../assets/background.jpg'
import { ListMangas } from '../components/ListMangas'
import { Footer } from '../components/Footer'
import { ListTopCharacters } from '../components/ListTopCharacters'
import { ListTopMangas } from '../components/ListTopMangas'

export default function Home() {
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
