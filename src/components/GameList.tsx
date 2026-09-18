import GameCard from './GameCard'
import type { Game } from '../types/Game'

type GameListProps = {
  games: Game[]
  onViewDetails: (id: number) => void
}

function GameList({
  games,
  onViewDetails,
}: GameListProps) {
  return (
    <section className="games-grid">
      {games.length > 0 ? (
        games.map((game) => (
          <GameCard
            key={game.id}
            id={game.id}
            title={game.title}
            genre={game.genre}
            platform={game.platform}
            thumbnail={game.thumbnail}
            description={game.short_description}
            publisher={game.publisher}
            developer={game.developer}
            releaseDate={game.release_date}
            gameUrl={game.game_url}
            onViewDetails={onViewDetails}
          />
        ))
      ) : (
        <p className="no-results">
          No se encontraron videojuegos.
        </p>
      )}
    </section>
  )
}

export default GameList