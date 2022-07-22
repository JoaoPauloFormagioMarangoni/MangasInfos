import { Fragment } from 'react'
import { useNavigate } from 'react-router-dom'
import { useMangas } from '../contexts/MangasContext'
import { useToGetInformationsAboutMangas } from '../hooks/useToGetInformationsAboutMangas'
import { MangaProps } from '../types/mangasContextTypes/MangaProps'

export function ListTopMangas() {
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    status,
  } = useToGetInformationsAboutMangas(
    'topMangas',
    'top/manga?order_by=favorites&sort=desc&page=',
  )

  const { loadOneManga } = useMangas()
  const navigate = useNavigate()

  function handleSelectManga(manga: MangaProps) {
    loadOneManga(manga)

    navigate('/manga')
  }

  return status === 'loading' ? (
    <p>Loading...</p>
  ) : status === 'error' ? (
    <p>Error...</p>
  ) : (
    <section className="w-[70vw] m-auto text-center bg-gray-700 border-pink-600 border-4 p-3 mt-14 rounded-lg h-[500px] overflow-y-auto scrollbar scrollbar-thumb-pink-600 scrollbar-track-gray-500 scrollbar-thin">
      <h2 className="mb-4 text-xl text-white">Top mangás</h2>
      <ul className="grid grid-cols-3 gap-2">
        {data?.pages.map((pages, idx) => (
          <Fragment key={idx}>
            {pages.data.map((manga: MangaProps) => (
              <li
                key={manga.mal_id}
                className="flex items-center border-pink-600 border-4 rounded-md text-white cursor-pointer hover:shadow-[3px_3px_5px,-3px_-3px_5px] hover:shadow-pink-600 transition-all duration-200"
              >
                <img
                  src={manga.images.webp.image_url}
                  alt="Image"
                  className="w-[120px] h-[100%] object-cover"
                />
                <div className="flex flex-col justify-around text-start ml-3 h-[100%] w-[100%]">
                  <h3 className="text-lg font-bold">{manga.title}</h3>
                  <span>Rank: {manga.rank}</span>
                  <span>Score: {manga.score}</span>
                  <span>Status: {manga.status}</span>
                </div>
              </li>
            ))}
          </Fragment>
        ))}
      </ul>
      <button
        onClick={() => fetchNextPage()}
        disabled={!hasNextPage || isFetchingNextPage}
        className="text-white border-2 border-pink-600 px-5 py-2 mt-6 rounded-md text-base hover:bg-pink-600 transition-all duration-200"
      >
        {isFetchingNextPage
          ? 'Loading more...'
          : hasNextPage
          ? 'Load More'
          : 'Nothing more to load'}
      </button>
    </section>
  )
}
