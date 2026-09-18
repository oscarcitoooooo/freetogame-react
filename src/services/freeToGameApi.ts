const BASE_URL = 'https://www.freetogame.com/api'

export const getGames = async () => {
  const response = await fetch(`${BASE_URL}/games`)
  return response.json()
}