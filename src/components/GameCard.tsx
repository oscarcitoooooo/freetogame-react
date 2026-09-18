import './GameCard.css'
 
type GameCardProps = {
  title: string
  genre: string
  platform: string
  thumbnail: string
  description: string
}
 
function GameCard({
  title,
  genre,
  platform,
  thumbnail,
  description,
}: GameCardProps) {
  return (
<article className="game-card">
<h2>{title}</h2>
<img src={thumbnail} alt={title} />
<p>{description}</p>
<p>Género: {genre}</p>
<p>Plataforma: {platform}</p>
</article>
  )
}
 
export default GameCard