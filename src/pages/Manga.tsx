import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { useMangas } from '../contexts/MangasContext'

export default function Manga() {
  const { mangaSelected } = useMangas()

  return (
    <div className="bg-slate-700">
      <Header />
      {mangaSelected !== null && (
        <div>
          <div className="flex w-[70vw] m-[auto] my-16">
            <img
              src={mangaSelected.images.webp.image_url}
              alt="Image mangá"
              className="w-[300px] rounded-sm"
            />
            <div className="ml-8 text-white h-[100%] flex justify-between flex-col">
              <h1 className="text-lg font-bold">{mangaSelected.title}</h1>
              <span>Rank: {mangaSelected.rank}</span>
              <span>Favorites: {mangaSelected.favorites}</span>
              <span>Chapters: {mangaSelected.chapters}</span>
              <span>Score: {mangaSelected.score}</span>
              <span>Status: {mangaSelected.status}</span>
              <span>{mangaSelected.published.string}</span>
              <a
                href={mangaSelected.url}
                className="underline underline-offset-2"
                target="_blank"
              >
                {mangaSelected.url}
              </a>
              <h4 className="mt-4">Author:</h4>
              <ul className="ml-5">
                {mangaSelected.authors.map((author) => (
                  <li key={author.mal_id} className="flex flex-col">
                    <span>Name: {author.name}</span>
                    <a
                      href={author.url}
                      className="underline underline-offset-2"
                      target="_blank"
                    >
                      URL: {author.url}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <p className="w-[70vw] m-[auto] mb-16 text-white text-justify text-lg tracking-wider leading-7">
            {mangaSelected.synopsis}
          </p>
        </div>
      )}
      <Footer />
    </div>
  )
}
