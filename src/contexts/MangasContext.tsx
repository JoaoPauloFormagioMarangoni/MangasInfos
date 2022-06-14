import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react'
import { apiMangasPage } from '../services/api'

interface MangasProviderProps {
  children: ReactNode
}

interface MangaProps {
  mal_id: number
  url: string
  images: {
    webp: {
      image_url: string
    }
  }
  title: string
  title_english: string
  title_japanese: string
  chapters: number
  volumes: number
  status: string
  published: {
    prop: {
      from: {
        day: number
        month: number
        year: number
      }
      to: {
        day: number
        month: number
        year: number
      }
    }
    string: string
  }
  score: number
  rank: number
  favorites: number
  synopsis: string
  authors: [
    {
      mal_id: number
      type: string
      name: string
      url: string
    },
  ]
}

interface PaginationProps {
  current_page: number
  has_next_page: boolean
}

interface MangasContextData {
  mangas: MangaProps[]
  pageSettings: PaginationProps
  isLoading: boolean
  loadMangas: (page: number) => void
  loadOneManga: (id: number) => void
  mangaSelected: MangaProps
}

const MangasContext = createContext({} as MangasContextData)

export function MangasProvider({ children }: MangasProviderProps) {
  const [mangas, setMangas] = useState<MangaProps[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [pageSettings, setPageSettings] = useState<PaginationProps>({
    current_page: 1,
    has_next_page: true,
  })
  const [mangaSelected, setMangaSelected] = useState<MangaProps>(() => {
    return mangas[0]
  })

  useEffect(() => {
    loadMangas(1)
  }, [])

  async function loadMangas(page: number) {
    setIsLoading(true)
    if (pageSettings.has_next_page) {
      const response = await apiMangasPage.get(`manga?page=${page}`)
      setMangas(response.data.data)
      setPageSettings(response.data.pagination)
      setMangaSelected(response.data.data[0])
    }
    setIsLoading(false)
  }

  function loadOneManga(id: number) {
    const mangaFilter = mangas.filter((manga) => manga.mal_id === id)

    setMangaSelected(mangaFilter[0])
  }

  return (
    <MangasContext.Provider
      value={{
        mangas,
        pageSettings,
        isLoading,
        loadMangas,
        loadOneManga,
        mangaSelected,
      }}
    >
      {children}
    </MangasContext.Provider>
  )
}

export const useMangas = () => useContext(MangasContext)
