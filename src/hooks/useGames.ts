import { useCallback, useEffect, useRef, useState } from 'react'
import { getGames } from '../services/freeToGameApi'
import type { Game } from '../types/Game'

export const useGames = () => {
  const [games, setGames] = useState<Game[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const controllerRef = useRef<AbortController | null>(null)

  useEffect(() => {
    const controller = new AbortController()
    controllerRef.current = controller

    const loadInitialGames = async () => {
      try {
        const data = await getGames(controller.signal)

        if (!controller.signal.aborted) {
          setGames(data)
        }
      } catch (error) {
        if (error instanceof DOMException && error.name === 'AbortError') {
          return
        }

        if (!controller.signal.aborted) {
          setError('No se pudieron cargar los videojuegos')
        }
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false)
        }
      }
    }

    void loadInitialGames()

    return () => {
      controller.abort()
    }
  }, [])

  const retry = useCallback(async () => {
    controllerRef.current?.abort()

    const controller = new AbortController()
    controllerRef.current = controller

    setLoading(true)
    setError('')

    try {
      const data = await getGames(controller.signal)

      if (!controller.signal.aborted) {
        setGames(data)
      }
    } catch (error) {
      if (error instanceof DOMException && error.name === 'AbortError') {
        return
      }

      if (!controller.signal.aborted) {
        setError('No se pudieron cargar los videojuegos')
      }
    } finally {
      if (!controller.signal.aborted) {
        setLoading(false)
      }
    }
  }, [])

  return {
    games,
    loading,
    error,
    retry,
  }
}