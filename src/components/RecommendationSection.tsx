import MovieCard from "./MovieCard";
import type { Movie } from "../types/movie";

type RecommendationSectionProps = {
  recommendations: Movie[];
  onMovieClick: (movie: Movie) => void;
};

export default function RecommendationSection({
  recommendations,
  onMovieClick,
}: RecommendationSectionProps) {
  if (recommendations.length === 0) {
    return null;
  }

  return (
    <section id="recommendations" className="relative overflow-hidden border-t border-white/10 px-6 py-20 lg:px-16">
      {/* Background Glow */}
      <div className="pointer-events-none absolute left-1/2 top-0 -z-10 h-96 w-96 -translate-x-1/2 rounded-full bg-red-600/10 blur-[140px]" />

      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-10 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-red-500">
              Based on your selection
            </p>

            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Recommended Movies
            </h2>

            <p className="mt-3 max-w-xl text-sm leading-6 text-gray-400 sm:text-base">
              Discover your next favorite movie with recommendations tailored
              to your taste.
            </p>
          </div>

          <div className="hidden text-sm text-gray-500 sm:block">
            {recommendations.length} movies found
          </div>
        </div>

        {/* Movie Grid */}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-6 lg:grid-cols-5">
          {recommendations.map((movie, index) => (
            <MovieCard
              key={`${movie.title}-${index}`}
              movie={movie}
              onClick={onMovieClick}
            />
          ))}
        </div>
      </div>
    </section>
  );
}