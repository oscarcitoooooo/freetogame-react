import { useEffect, useState } from 'react'
import './App.css'
import Header from './components/Header'
import GameDetails from './components/GameDetails'
import GameFilters from './components/GameFilters'
import GameList from './components/GameList'
import { getGameById, getGames } from './services/freeToGameApi'
import { sortGames } from './utils/gameUtils'
import type { Game } from './types/Game'
import type { GameDetails as GameDetailsType } from './types/GameDetails'

function App() {
  const [games, setGames] = useState<Game[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [search, setSearch] = useState('')
  const [debouncedSearch, setDebouncedSearch] = useState('')
  const [genre, setGenre] = useState('Todos')
  const [platform, setPlatform] = useState('Todas')
  const [sortOrder, setSortOrder] = useState('default')
  const [selectedGame, setSelectedGame] =
    useState<GameDetailsType | null>(null)

  useEffect(() => {
    getGames()
      .then((data) => {
        setGames(data)
        setLoading(false)
      })
      .catch(() => {
        setError('No se pudieron cargar los videojuegos')
        setLoading(false)
      })
  }, [])

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebouncedSearch(search)
    }, 400)

    return () => {
      clearTimeout(timeout)
    }
  }, [search])

  const genres = Array.from(
    new Set(games.map((game) => game.genre))
  ).sort()

  const filteredGames = games.filter((game) => {
    const matchesSearch = game.title
      .toLowerCase()
      .includes(debouncedSearch.toLowerCase())

    const matchesGenre =
      genre === 'Todos' || game.genre === genre

    const matchesPlatform =
      platform === 'Todas' || game.platform.includes(platform)

    return matchesSearch && matchesGenre && matchesPlatform
  })

  const sortedGames = sortGames(filteredGames, sortOrder)

  const hasActiveFilters =
    search !== '' ||
    genre !== 'Todos' ||
    platform !== 'Todas' ||
    sortOrder !== 'default'

  const clearFilters = () => {
    setSearch('')
    setGenre('Todos')
    setPlatform('Todas')
    setSortOrder('default')
  }

  const handleViewDetails = async (id: number) => {
    try {
      const gameDetails = await getGameById(id)
      setSelectedGame(gameDetails)
    } catch {
      setError('No se pudo cargar el detalle del videojuego')
    }
  }

  if (loading) {
    return <p>Cargando videojuegos...</p>
  }

  if (error) {
    return <p>{error}</p>
  }

  if (selectedGame) {
    return (
      <main>
        <Header />
        <GameDetails
          game={selectedGame}
          onBack={() => setSelectedGame(null)}
        />
      </main>
    )
  }

  return (
    <main>
      <Header />

      <GameFilters
        search={search}
        genre={genre}
        platform={platform}
        sortOrder={sortOrder}
        genres={genres}
        hasActiveFilters={hasActiveFilters}
        onSearchChange={setSearch}
        onGenreChange={setGenre}
        onPlatformChange={setPlatform}
        onSortChange={setSortOrder}
        onClearFilters={clearFilters}
      />

      <p className="results-count">
        {filteredGames.length}{' '}
        {filteredGames.length === 1
          ? 'videojuego encontrado'
          : 'videojuegos encontrados'}
      </p>

      <GameList
        games={sortedGames}
        onViewDetails={handleViewDetails}
      />
    </main>
  )
}

export default App