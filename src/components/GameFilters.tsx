type GameFiltersProps = {
  search: string
  genre: string
  platform: string
  sortOrder: string
  genres: string[]
  hasActiveFilters: boolean
  onSearchChange: (value: string) => void
  onGenreChange: (value: string) => void
  onPlatformChange: (value: string) => void
  onSortChange: (value: string) => void
  onClearFilters: () => void
}

function GameFilters({
  search,
  genre,
  platform,
  sortOrder,
  genres,
  hasActiveFilters,
  onSearchChange,
  onGenreChange,
  onPlatformChange,
  onSortChange,
  onClearFilters,
}: GameFiltersProps) {
  return (
    <section className="game-filters">
      <input
        className="search-input"
        type="text"
        placeholder="Buscar videojuego..."
        value={search}
        onChange={(event) => onSearchChange(event.target.value)}
      />

      <select
        value={genre}
        onChange={(event) => onGenreChange(event.target.value)}
      >
        <option>Todos</option>

        {genres.map((gameGenre) => (
          <option key={gameGenre} value={gameGenre}>
            {gameGenre}
          </option>
        ))}
      </select>

      <select
        value={platform}
        onChange={(event) => onPlatformChange(event.target.value)}
      >
        <option>Todas</option>
        <option>PC (Windows)</option>
        <option>Web Browser</option>
      </select>

      <select
        value={sortOrder}
        onChange={(event) => onSortChange(event.target.value)}
      >
        <option value="default">Orden original</option>
        <option value="az">Nombre A-Z</option>
        <option value="za">Nombre Z-A</option>
        <option value="newest">Más recientes</option>
        <option value="oldest">Más antiguos</option>
      </select>

      <button onClick={onClearFilters}>
        Limpiar filtros
      </button>

      {hasActiveFilters && (
        <p className="active-filters">
          Hay filtros activos
        </p>
      )}
    </section>
  )
}

export default GameFilters