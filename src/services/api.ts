import axios from 'axios'

export const api = axios.create({
  baseURL: 'http://localhost:3333',
})

export const apiMangas = axios.create({
  baseURL: 'https://api.jikan.moe/v4/manga/{id}/full',
})

export const apiMangasPage = axios.create({
  baseURL: 'https://api.jikan.moe/v4',
})

export const apiSearchCharacter = axios.create({
  baseURL:
    'https://api.jikan.moe/v4/characters?q={character}&order_by=favorites&sort=desc',
})

export const apiCharactersFavorite = axios.create({
  baseURL: 'https://api.jikan.moe/v4/characters?order_by=favorites&sort=desc',
})

export const apiCharacterVoice = axios.create({
  baseURL: 'https://api.jikan.moe/v4/characters/1/voices',
})

export const apiTopMangas = axios.create({
  baseURL: 'https://api.jikan.moe/v4/top/manga',
})

export const apiReviews = axios.create({
  baseURL: 'https://api.jikan.moe/v4/reviews/manga',
})
