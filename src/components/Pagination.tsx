import { ArrowRight, ArrowLeft } from 'phosphor-react'
import { useMangas } from '../contexts/MangasContext'

export function Pagination() {
  const { pageSettings, loadMangas } = useMangas()

  return (
    <div className="flex items-center justify-center gap-[15px] py-[20px] w-[100%] text-[1.3rem] font-bold text-pink-600">
      {pageSettings.current_page > 1 && (
        <ArrowLeft
          className="text-[1.5rem] cursor-pointer"
          onClick={() => loadMangas(pageSettings.current_page - 1)}
        />
      )}
      {pageSettings.current_page > 2 && (
        <span className="cursor-pointer" onClick={() => loadMangas(1)}>
          1
        </span>
      )}
      {pageSettings.current_page > 1 && (
        <span
          className="cursor-pointer"
          onClick={() => loadMangas(pageSettings.current_page - 1)}
        >
          ... {pageSettings.current_page - 1}
        </span>
      )}
      <span className="text-pink-400 font-extrabold cursor-pointer">
        {pageSettings.current_page}
      </span>
      <span
        className="cursor-pointer"
        onClick={() => loadMangas(pageSettings.current_page + 1)}
      >
        {pageSettings.current_page + 1} ...
      </span>
      <ArrowRight
        className="text-[1.5rem] cursor-pointer"
        onClick={() => loadMangas(pageSettings.current_page + 1)}
      />
    </div>
  )
}
