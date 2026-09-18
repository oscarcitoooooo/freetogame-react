import { useEffect, useState } from 'react'
import './App.css'
import Header from './components/Header'
import GameCard from './components/GameCard'
import { getGames } from './services/freeToGameApi'
import type { Game } from './types/Game'

function App() {
  const [games, setGames] = useState<Game[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [search, setSearch] = useState('')
  const [genre, setGenre] = useState('Todos')
  const [platform, setPlatform] = useState('Todas')

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

  const filteredGames = games.filter((game) => {
    const matchesSearch = game.title
      .toLowerCase()
      .includes(search.toLowerCase())

    const matchesGenre =
      genre === 'Todos' || game.genre === genre

    const matchesPlatform =
      platform === 'Todas' || game.platform === platform  

    return matchesSearch && matchesGenre && matchesPlatform
  })

  if (loading) {
    return <p>Cargando videojuegos...</p>
  }

  if (error) {
    return <p>{error}</p>
  }

  return (
    <main>
      <Header />

      <input
        className="search-input"
        type="text"
        placeholder="Buscar videojuego..."
        value={search}
        onChange={(event) => setSearch(event.target.value)}
      />

      <select
        value={genre}
        onChange={(event) => setGenre(event.target.value)}
      >
        <option>Todos</option>
        <option>Shooter</option>
        <option>MMORPG</option>
        <option>ARPG</option>
      </select>

      <select
       value={platform}
       onChange={(event) => setPlatform(event.target.value)}
      >
       <option>Todas</option>
       <option>PC (Windows)</option>
       <option>Web Browser</option>
      </select>

      <p className="results-count">
        {filteredGames.length}{' '}
        {filteredGames.length === 1
          ? 'videojuego encontrado'
          : 'videojuegos encontrados'}
      </p>

      <section className="games-grid">
        {filteredGames.length > 0 ? (
          filteredGames.map((game) => (
            <GameCard
              key={game.id}
              title={game.title}
              genre={game.genre}
              platform={game.platform}
              thumbnail={game.thumbnail}
              description={game.short_description}
              publisher={game.publisher}
              developer={game.developer}
              releaseDate={game.release_date}
            />
          ))
        ) : (
          <p className="no-results">
            No se encontraron videojuegos.
          </p>
        )}
      </section>
    </main>
  )
}

export default App