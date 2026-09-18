import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import GameCard from './components/GameCard'

const games = [
  {
    id: 1,
    title: 'Overwatch 2',
    genre: 'Shooter',
    platform: 'PC (Windows)',
    thumbnail: 'https://www.freetogame.com/g/540/thumbnail.jpg',
  },
  {
    id: 2,
    title: 'Diablo Immortal',
    genre: 'MMORPG',
    platform: 'PC (Windows)',
    thumbnail: 'https://www.freetogame.com/g/521/thumbnail.jpg',
  },
  {
    id: 3,
    title: 'Lost Ark',
    genre: 'ARPG',
    platform: 'PC (Windows)',
    thumbnail: 'https://www.freetogame.com/g/517/thumbnail.jpg',
  },
]

function App() {
  const [search, setSearch] = useState('')
  const [genre, setGenre] = useState('Todos')

  const filteredGames = games.filter((game) => {
    const matchesSearch = game.title
      .toLowerCase()
      .includes(search.toLowerCase())

    const matchesGenre =
      genre === 'Todos' || game.genre === genre

    return matchesSearch && matchesGenre
  })

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

      <section className="games-grid">
        {filteredGames.map((game) => (
          <GameCard
            key={game.id}
            title={game.title}
            genre={game.genre}
            platform={game.platform}
            thumbnail={game.thumbnail}
          />
        ))}
      </section>
    </main>
  )
}

export default App