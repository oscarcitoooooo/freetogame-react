type GameCardProps = {
  title: string
  genre: string
  platform: string
}

function GameCard({ title, genre, platform }: GameCardProps) {
  return (
    <article>
      <h2>{title}</h2>
      <p>Género: {genre}</p>
      <p>Plataforma: {platform}</p>
    </article>
  )
}

export default GameCard