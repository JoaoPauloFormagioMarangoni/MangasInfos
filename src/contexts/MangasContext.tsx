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
  isLoading: boolean
  page: PaginationProps
  loadMangas: (page: number) => void
}

const MangasContext = createContext({} as MangasContextData)

export function MangasProvider({ children }: MangasProviderProps) {
  const [mangas, setMangas] = useState<MangaProps[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [page, setPage] = useState<PaginationProps>({
    current_page: 1,
    has_next_page: true,
  })

  async function loadMangas(page: number) {
    setIsLoading(true)
    
    const response = await apiMangasPage.get(`manga?page=${page}`)

    setMangas(response.data.data)
    setPage(response.data.pagination)
    setIsLoading(false)
  }

  return (
    <MangasContext.Provider value={{ mangas, page, isLoading, loadMangas }}>
      {children}
    </MangasContext.Provider>
  )
}

export const useMangas = () => useContext(MangasContext)
