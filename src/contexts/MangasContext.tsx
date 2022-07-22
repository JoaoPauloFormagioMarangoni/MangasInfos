import { createContext, ReactNode, useContext, useState } from 'react'

import { MangaProps } from '../types/mangasContextTypes/MangaProps'
import { MangasContextData } from '../types/mangasContextTypes/MangasContextData'

interface MangasProviderProps {
  children: ReactNode
}

const MangasContext = createContext({} as MangasContextData)

export function MangasProvider({ children }: MangasProviderProps) {
  const [mangaSelected, setMangaSelected] = useState<MangaProps | null>(null)

  function loadOneManga(manga: MangaProps) {
    setMangaSelected(manga)
  }

  return (
    <MangasContext.Provider
      value={{
        loadOneManga,
        mangaSelected,
      }}
    >
      {children}
    </MangasContext.Provider>
  )
}

export const useMangas = () => useContext(MangasContext)
