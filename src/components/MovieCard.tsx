import { Star } from "lucide-react";
import type { Movie } from "../types/movie";

type MovieCardProps = {
  movie: Movie;
  onClick: (movie: Movie) => void;
};

export default function MovieCard({
  movie,
  onClick,
}: MovieCardProps) {
  const posterUrl = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : null;

  return (
    <button
      onClick={() => onClick(movie)}
      className="group relative w-full overflow-hidden rounded-xl border border-white/10 bg-white/5 text-left transition-all duration-500 hover:-translate-y-2 hover:border-red-500/50 hover:shadow-2xl hover:shadow-red-950/30"
    >
      {/* Poster */}
      <div className="relative aspect-[2/3] overflow-hidden bg-gradient-to-br from-gray-800 to-gray-950">
        {posterUrl ? (
          <img
            src={posterUrl}
            alt={movie.title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        ) : (
          <div className="flex h-full items-center justify-center">
            <span className="text-6xl opacity-60">🎬</span>
          </div>
        )}

        {/* Cinematic Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />

        {/* Rating */}
        <div className="absolute right-3 top-3 flex items-center gap-1 rounded-md bg-black/70 px-2 py-1 text-sm font-medium text-yellow-400 backdrop-blur-md">
          <Star size={14} fill="currentColor" />

          <span>
            {movie.vote_average > 0
              ? movie.vote_average.toFixed(1)
              : "N/A"}
          </span>
        </div>

        {/* Hover Details */}
        <div className="absolute inset-x-0 bottom-0 translate-y-full bg-gradient-to-t from-black/90 to-transparent px-4 pb-4 pt-10 transition-transform duration-300 group-hover:translate-y-0">
          <span className="text-sm font-medium text-white">
            View details →
          </span>
        </div>
      </div>

      {/* Movie Information */}
      <div className="p-4">
        <h3 className="line-clamp-2 text-base font-semibold leading-6 text-white transition-colors group-hover:text-red-400">
          {movie.title}
        </h3>

        <p className="mt-2 line-clamp-1 text-xs font-medium text-red-400">
          {movie.release_date
            ? movie.release_date.slice(0, 4)
            : "Movie"}
        </p>
      </div>
    </button>
  );
}