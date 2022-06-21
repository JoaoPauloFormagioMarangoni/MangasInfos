import { createContext, ReactNode, useContext, useState } from 'react'
import { apiManga } from '../services/api'
import { CharactersProps } from '../types/mangasContextTypes/CharactersProps'

import { MangaProps } from '../types/mangasContextTypes/MangaProps'
import {
  MangasContextData,
  PaginationProps,
} from '../types/mangasContextTypes/MangasContextData'

interface MangasProviderProps {
  children: ReactNode
}

const MangasContext = createContext({} as MangasContextData)

export function MangasProvider({ children }: MangasProviderProps) {
  const [mangas, setMangas] = useState<MangaProps[]>([])
  const [pageMangas, setPageMangas] = useState<PaginationProps>({
    current_page: 1,
    has_next_page: true,
  })
  
  const [favoriteCharacter, setFavoriteCharacter] = useState<CharactersProps[]>(
    [],
  )
  const [pageCharacters, setPageCharacters] = useState<PaginationProps>({
    current_page: 1,
    has_next_page: true,
  })

  const [topMangas, setTopMangas] = useState<MangaProps[]>(
    [],
  )
  const [pageTopMangas, setPageTopMangas] = useState<PaginationProps>({
    current_page: 1,
    has_next_page: true,
  })

  const [isLoadingMangas, setIsLoadingMangas] = useState(false)
  const [isLoadingCharacter, setIsLoadingCharacter] = useState(false)
  const [isLoadingBestMangas, setIsLoadingBestMangas] = useState(false)

  async function loadMangas(page: number) {
    setIsLoadingMangas(true)

    const response = await apiManga.get(`manga?page=${page}`)

    setMangas(response.data.data)
    setPageMangas(response.data.pagination)
    setIsLoadingMangas(false)
  }

  async function loadFavoriteCharacter(page: number) {
    setIsLoadingCharacter(true)

    const response = await apiManga.get(
      `characters?order_by=favorites&sort=desc&page=${page}`,
    )
    console.log(response.data.data[0])

    setFavoriteCharacter(response.data.data)
    setPageCharacters(response.data.pagination)
    setIsLoadingCharacter(false)
  }

  async function loadTopMangas(page: number) {
    setIsLoadingBestMangas(true)

    const response = await apiManga.get(
      `top/manga?order_by=favorites&sort=desc&page=${page}`,
    )
    console.log(response.data.data[0])

    setTopMangas(response.data.data)
    setPageTopMangas(response.data.pagination)
    setIsLoadingBestMangas(false)
  }

  return (
    <MangasContext.Provider
      value={{
        mangas,
        favoriteCharacter,
        topMangas,
        pageMangas,
        pageCharacters,
        pageTopMangas,
        isLoadingMangas,
        isLoadingCharacter,
        isLoadingBestMangas,
        loadMangas,
        loadFavoriteCharacter,
        loadTopMangas,
      }}
    >
      {children}
    </MangasContext.Provider>
  )
}

export const useMangas = () => useContext(MangasContext)
