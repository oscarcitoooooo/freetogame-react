import { useEffect, useState } from 'react'

const STORAGE_KEY = 'favoriteGames'

export const useFavorites = () => {
  const [favoriteIds, setFavoriteIds] = useState<number[]>(() => {
    const savedFavorites = localStorage.getItem(STORAGE_KEY)

    if (!savedFavorites) {
      return []
    }

    try {
      const parsedFavorites: unknown = JSON.parse(savedFavorites)

      if (
        Array.isArray(parsedFavorites) &&
        parsedFavorites.every(
          (favoriteId) => typeof favoriteId === 'number'
        )
      ) {
        return parsedFavorites
      }

      return []
    } catch {
      return []
    }
  })

  useEffect(() => {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(favoriteIds)
    )
  }, [favoriteIds])

  const toggleFavorite = (id: number) => {
    setFavoriteIds((currentFavorites) => {
      if (currentFavorites.includes(id)) {
        return currentFavorites.filter(
          (favoriteId) => favoriteId !== id
        )
      }

      return [...currentFavorites, id]
    })
  }

  const isFavorite = (id: number) => {
    return favoriteIds.includes(id)
  }

  return {
    favoriteIds,
    favoriteCount: favoriteIds.length,
    toggleFavorite,
    isFavorite,
  }
}