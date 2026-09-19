import type { GameDetails as GameDetailsType } from '../types/GameDetails'

type Props = {
  game: GameDetailsType
  onBack: () => void
}

function GameDetails({ game, onBack }: Props) {
  return (
    <section className="game-details">
      <button onClick={onBack}>
        Volver al catálogo
      </button>

      <h2>{game.title}</h2>

      <img
        src={game.thumbnail}
        alt={game.title}
      />

      <p>{game.description}</p>

      <p>
        <strong>Género:</strong> {game.genre}
      </p>

      <p>
        <strong>Plataforma:</strong> {game.platform}
      </p>

      <p>
        <strong>Desarrollador:</strong> {game.developer}
      </p>

      <p>
        <strong>Publicador:</strong> {game.publisher}
      </p>

      <p>
        <strong>Fecha de lanzamiento:</strong> {game.release_date}
      </p>

      <p>
        <strong>Estado:</strong> {game.status}
      </p>

      <a
        href={game.game_url}
        target="_blank"
        rel="noreferrer"
      >
        Jugar ahora
      </a>
    </section>
  )
}

export default GameDetails