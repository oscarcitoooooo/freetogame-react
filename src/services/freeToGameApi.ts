import type { Game } from '../types/Game'
import type { GameDetails } from '../types/GameDetails'

const BASE_URL = 'https://www.freetogame.com/api'

export const getGames = async (
  signal?: AbortSignal
): Promise<Game[]> => {
  const response = await fetch(
    `${BASE_URL}/games`,
    { signal }
  )

  if (!response.ok) {
    throw new Error('Error al obtener los videojuegos')
  }

  const games: Game[] = await response.json()

  return games
}

export const getGameById = async (
  id: number
): Promise<GameDetails> => {
  const response = await fetch(
    `${BASE_URL}/game?id=${id}`
  )

  if (!response.ok) {
    throw new Error('Error al obtener el videojuego')
  }

  const game: GameDetails = await response.json()

  return game
}