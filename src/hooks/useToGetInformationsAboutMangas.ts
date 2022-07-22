import { useInfiniteQuery } from '@tanstack/react-query'
import { apiManga } from '../services/api'

export function useToGetInformationsAboutMangas(keyQuery: string, pathData: string) {
  const fetchManga = async (pageParam = 1) => {
    const { data } = await apiManga.get(pathData + pageParam)

    return data
  }

  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    status,
  } = useInfiniteQuery(
    [keyQuery],
    ({ pageParam = 1 }) => fetchManga(pageParam),
    {
      getNextPageParam: (lastPage, pages) =>
        lastPage.pagination.current_page + 1,
    },
  )

  return { data, fetchNextPage, hasNextPage, isFetchingNextPage, status }
}
