import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { MangasProvider } from './contexts/MangasContext'
import Home from './pages/Home'

function App() {
  return (
    <MangasProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </MangasProvider>
  )
}

export default App
