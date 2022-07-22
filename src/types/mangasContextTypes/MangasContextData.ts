import { MangaProps } from './MangaProps'

export interface MangasContextData {
  loadOneManga: (manga: MangaProps) => void
  mangaSelected: MangaProps | null
}
