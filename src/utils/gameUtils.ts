import type { Game } from '../types/Game'

export const sortGames = (
  games: Game[],
  sortOrder: string
): Game[] => {
  return [...games].sort((a, b) => {
    if (sortOrder === 'az') {
      return a.title.localeCompare(b.title)
    }

    if (sortOrder === 'za') {
      return b.title.localeCompare(a.title)
    }

    if (sortOrder === 'newest') {
      return (
        new Date(b.release_date).getTime() -
        new Date(a.release_date).getTime()
      )
    }

    if (sortOrder === 'oldest') {
      return (
        new Date(a.release_date).getTime() -
        new Date(b.release_date).getTime()
      )
    }

    return 0
  })
}