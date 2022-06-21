import { ArrowRight, ArrowLeft } from 'phosphor-react'
import { PaginationProps } from '../types/mangasContextTypes/MangasContextData'

interface PaginationComponentProps {
  page: PaginationProps
  loadFunction: (page: number) => void
}

export function Pagination({ page, loadFunction }: PaginationComponentProps) {

  return (
    <div className="flex items-center justify-center gap-[15px] py-[20px] w-[100%] text-[1.3rem] font-bold text-pink-600">
      {page.current_page > 1 && (
        <ArrowLeft
          className="text-[1.5rem] cursor-pointer"
          onClick={() => loadFunction(page.current_page - 1)}
        />
      )}
      {page.current_page > 2 && (
        <span className="cursor-pointer" onClick={() => loadFunction(1)}>
          1
        </span>
      )}
      {page.current_page > 1 && (
        <span
          className="cursor-pointer"
          onClick={() => loadFunction(page.current_page - 1)}
        >
          ... {page.current_page - 1}
        </span>
      )}
      <span className="text-pink-400 font-extrabold cursor-pointer">
        {page.current_page}
      </span>
      <span
        className="cursor-pointer"
        onClick={() => loadFunction(page.current_page + 1)}
      >
        {page.current_page + 1} ...
      </span>
      <ArrowRight
        className="text-[1.5rem] cursor-pointer"
        onClick={() => loadFunction(page.current_page + 1)}
      />
    </div>
  )
}
