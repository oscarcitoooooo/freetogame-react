import type { Game } from '../types/Game'
const BASE_URL = 'https://www.freetogame.com/api'

export const getGames = async (): Promise<Game[]> => {
  const response = await fetch(`${BASE_URL}/games`)
  return response.json()
}