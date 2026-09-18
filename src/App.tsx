import './App.css'
import Header from './components/Header'
import GameCard from './components/GameCard'

const games = [
  {
    id: 1,
    title: 'Overwatch 2',
    genre: 'Shooter',
    platform: 'PC (Windows)',
  },
  {
    id: 2,
    title: 'Diablo Immortal',
    genre: 'MMORPG',
    platform: 'PC (Windows)',
  },
  {
    id: 3,
    title: 'Lost Ark',
    genre: 'ARPG',
    platform: 'PC (Windows)',
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
        />
      ))}
    </main>
  )
}

export default App