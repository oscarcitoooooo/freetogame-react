import './GameCard.css'

type GameCardProps = {
  title: string
  genre: string
  platform: string
  thumbnail: string
  description: string
  publisher: string
  developer: string
  releaseDate: string
  gameUrl: string
}

function GameCard({
  title,
  genre,
  platform,
  thumbnail,
  description,
  publisher,
  developer,
  releaseDate,
  gameUrl,
}: GameCardProps) {
  return (
    <article className="game-card">
      <h2>{title}</h2>
      <img src={thumbnail} alt={title} />
      <p>{description}</p>
      <p>Género: {genre}</p>
      <p>Plataforma: {platform}</p>
      <p>Publisher: {publisher}</p>
      <p>Desarrollador: {developer}</p>
      <p>Fecha de lanzamiento:{releaseDate}</p>
      <a href={gameUrl} 
      target="_blank" 
      rel="noopener noreferrer"
      > 
      Jugar ahora
      </a>
    </article>
  )
}

export default GameCard