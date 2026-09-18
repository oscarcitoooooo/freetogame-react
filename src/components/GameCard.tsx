import './GameCard.css'

type GameCardProps = {
  id: number
  title: string
  genre: string
  platform: string
  thumbnail: string
  description: string
  publisher: string
  developer: string
  releaseDate: string
  gameUrl: string
  isFavorite: boolean
  onToggleFavorite: (id: number) => void
  onViewDetails: (id: number) => void
}

function GameCard({
  id,
  title,
  genre,
  platform,
  thumbnail,
  gameUrl,
  isFavorite,
  onToggleFavorite,
  onViewDetails,
}: GameCardProps) {
  return (
    <article className="game-card">
      <h2>{title}</h2>

      <img src={thumbnail} alt={title} />

      <p>Género: {genre}</p>
      <p>Plataforma: {platform}</p>

      <button onClick={() => onToggleFavorite(id)}>
        {isFavorite
          ? 'Quitar de favoritos'
          : 'Agregar a favoritos'}
      </button>

      <button onClick={() => onViewDetails(id)}>
        Ver detalles
      </button>

      <a
        href={gameUrl}
        target="_blank"
        rel="noopener noreferrer"
      >
        Jugar ahora
      </a>
    </article>
  )
}

export default GameCard