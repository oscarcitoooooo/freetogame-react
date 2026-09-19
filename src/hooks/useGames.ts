import { useCallback, useEffect, useState } from 'react'
import { getGames } from '../services/freeToGameApi'
import type { Game } from '../types/Game'

export const useGames = () => {
  const [games, setGames] = useState<Game[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  const loadGames = useCallback(async () => {
    setLoading(true)
    setError('')

    try {
      const data = await getGames()
      setGames(data)
    } catch {
      setError('No se pudieron cargar los videojuegos')
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    loadGames()
  }, [loadGames])

  return {
    games,
    loading,
    error,
    retry: loadGames,
  }
}