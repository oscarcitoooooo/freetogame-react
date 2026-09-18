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
  return (
    <main>
      <Header />

      {games.map((game) => (
        <GameCard
          key={game.id}
          title={game.title}
          genre={game.genre}
          platform={game.platform}
          thumbnail={game.thumbnail}
        />
      ))}
    </main>
  )
}

export default App