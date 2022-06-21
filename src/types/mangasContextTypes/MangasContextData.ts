import { CharactersProps } from './CharactersProps'
import { MangaProps } from './MangaProps'

export interface PaginationProps {
  current_page: number
  has_next_page: boolean
}

export interface MangasContextData {
  mangas: MangaProps[]
  favoriteCharacter: CharactersProps[]
  topMangas: MangaProps[]

  isLoadingMangas: boolean
  isLoadingCharacter: boolean
  isLoadingBestMangas: boolean

  pageMangas: PaginationProps
  pageCharacters: PaginationProps
  pageTopMangas: PaginationProps

  loadMangas: (page: number) => void
  loadTopMangas: (page: number) => void
  loadFavoriteCharacter: (page: number) => void

  loadOneManga: (id: number) => void
  mangaSelected: MangaProps
}
