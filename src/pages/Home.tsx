import { Header } from '../components/Header'
import backgroundHome from '../assets/background.jpg'
import { ListMangas } from '../components/ListMangas'
import { Footer } from '../components/Footer'

export default function Home() {
  return (
    <div>
      <img src={backgroundHome} className="fixed top-0 left-0 z-[-1]" />
      <Header />
      <ListMangas />
      <Footer />
    </div>
  )
}
