import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { MangasProvider } from './contexts/MangasContext'
import Home from './pages/Home'
import Manga from './pages/Manga'

function App() {
  return (
    <MangasProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/manga" element={<Manga />} />
        </Routes>
      </BrowserRouter>
    </MangasProvider>
  )
}

export default App
