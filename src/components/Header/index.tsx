import { MagnifyingGlass } from 'phosphor-react'

export function Header() {
  return (
    <header className="bg-gray-700 border-b-4 border-pink-600 shadow-2xl shadow-pink-600/20 before:content='' before:shadow-2xl before:shadow-pink-600/50 before:h-100px before:absolute before:top-[-41px] before:left-[-168px] before:border-[400px] before:border-r-[100px] before:border-l-[100px] before:border-transparent before:border-t-gray-700 before:border-r-gray-700 before:rotate-[24deg] before:outline before:outline-4 before:outline-pink-600 after:content='' after:shadow-2xl after:shadow-pink-600/50 after:h-100px after:absolute after:top-[-41px] after:right-[-168px] after:border-[400px] after:border-r-[100px] after:border-l-[100px] after:border-transparent after:border-t-gray-700 after:border-l-gray-700 after:rotate-[-24deg] after:outline after:outline-4 after:outline-pink-600">
      <span className="absolute top-0 left-10 text-pink-600 text-[7rem] rotate-[24deg] font-bold font-title">
        M
      </span>
      <span className="absolute top-0 right-10 text-pink-600 text-[7rem] rotate-[-24deg] font-bold font-title z-10">
        i
      </span>
      <nav className="flex justify-between p-5 w-[70vw] m-auto text-white">
        <h1 className="text-pink-600 text-xl font-bold font-title">
          Mangás.Infos
        </h1>
        <ul className="flex gap-10 text-lg items-center">
          <li className="hover:bg-pink-600 hover:shadow-xl hover:shadow-pink-600/50 cursor-pointer pr-2 pl-2 rounded-sm transition-all">
            Fórum
          </li>
          <li className="hover:bg-pink-600 hover:shadow-xl hover:shadow-pink-600/50 cursor-pointer pr-2 pl-2 rounded-sm transition-all">
            Recomendados
          </li>
          <li className="hover:bg-pink-600 hover:shadow-xl hover:shadow-pink-600/50 cursor-pointer pr-2 pl-2 rounded-sm transition-all">
            Gêneros
          </li>
          <li className="hover:bg-pink-600 hover:shadow-xl hover:shadow-pink-600/50 cursor-pointer pr-2 pl-2 rounded-sm transition-all">
            Random
          </li>
          <li>
            <MagnifyingGlass size={20} />
          </li>
        </ul>
      </nav>
    </header>
  )
}
