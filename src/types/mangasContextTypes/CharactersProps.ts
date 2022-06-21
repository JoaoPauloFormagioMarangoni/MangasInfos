export interface CharactersProps {
  mal_id: number
  url: string
  images: {
    webp: {
      image_url: string
    }
  }
  name: string
  name_kanji: string
  nicknames: [string]
  favorites: number
  about: string
}
