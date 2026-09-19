import GameCard from './GameCard'
import type { Game } from '../types/Game'

type GameListProps = {
  games: Game[]
  favoriteIds: number[]
  onToggleFavorite: (id: number) => void
  onViewDetails: (id: number) => void
}

function GameList({
  games,
  favoriteIds,
  onToggleFavorite,
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
            isFavorite={favoriteIds.includes(game.id)}
            onToggleFavorite={onToggleFavorite}
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