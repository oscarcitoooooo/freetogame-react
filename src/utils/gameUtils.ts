import type { Game } from '../types/Game'

type GameFilters = {
  search: string
  genre: string
  platform: string
}

export const filterGames = (
  games: Game[],
  filters: GameFilters
): Game[] => {
  return games.filter((game) => {
    const matchesSearch = game.title
      .toLowerCase()
      .includes(filters.search.toLowerCase())

    const matchesGenre =
      filters.genre === 'Todos' ||
      game.genre === filters.genre

    const matchesPlatform =
      filters.platform === 'Todas' ||
      game.platform.includes(filters.platform)

    return matchesSearch && matchesGenre && matchesPlatform
  })
}

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