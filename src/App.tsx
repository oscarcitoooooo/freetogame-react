import { useEffect, useState } from 'react'
import './App.css'
import Header from './components/Header'
import GameDetails from './components/GameDetails'
import GameFilters from './components/GameFilters'
import GameList from './components/GameList'
import { useFavorites } from './hooks/useFavorites'
import { useGames } from './hooks/useGames'
import { getGameById } from './services/freeToGameApi'
import type { GameDetails as GameDetailsType } from './types/GameDetails'
import { filterGames, sortGames } from './utils/gameUtils'

function App() {
  const {
    games,
    loading,
    error,
    retry,
  } = useGames()

  const [search, setSearch] = useState('')
  const [debouncedSearch, setDebouncedSearch] = useState('')
  const [genre, setGenre] = useState('Todos')
  const [platform, setPlatform] = useState('Todas')
  const [sortOrder, setSortOrder] = useState('default')
  const [selectedGame, setSelectedGame] =
    useState<GameDetailsType | null>(null)

  const {
    favoriteIds,
    favoriteCount,
    toggleFavorite,
  } = useFavorites()

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

  const filteredGames = filterGames(games, {
    search: debouncedSearch,
    genre,
    platform,
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
      setSelectedGame(null)
    }
  }

  if (loading) {
    return <p>Cargando videojuegos...</p>
  }

  if (error) {
    return (
      <section>
        <p>{error}</p>

        <button onClick={retry}>
          Reintentar
        </button>
      </section>
    )
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

      <p className="favorites-count">
        Favoritos: {favoriteCount}
      </p>

      <p className="results-count">
        {filteredGames.length}{' '}
        {filteredGames.length === 1
          ? 'videojuego encontrado'
          : 'videojuegos encontrados'}
      </p>

      <GameList
        games={sortedGames}
        favoriteIds={favoriteIds}
        onToggleFavorite={toggleFavorite}
        onViewDetails={handleViewDetails}
      />
    </main>
  )
}

export default App