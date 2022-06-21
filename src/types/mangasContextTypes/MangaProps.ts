export interface MangaProps {
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
