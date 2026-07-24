"use client";

import { ArrowLeft, Star } from "lucide-react";
import type { Movie } from "../types/movie";

type MovieDetailsProps = {
  movie: Movie;
  onBack: () => void;
};

export default function MovieDetails({
  movie,
  onBack,
}: MovieDetailsProps) {
  const posterUrl = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : null;

  return (
    <main className="min-h-screen bg-black text-white">
      <section className="relative min-h-[70vh] overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(220,38,38,0.15),transparent_50%)]" />

        <div className="absolute inset-0 bg-linear-to-b from-black via-black/80 to-black" />

        <div className="relative z-10 mx-auto flex min-h-[70vh] max-w-7xl items-center px-6 py-20 lg:px-16">
          <div className="grid w-full items-center gap-12 lg:grid-cols-[280px_1fr]">
            {/* Poster */}
            <div className="overflow-hidden rounded-2xl border border-white/10 shadow-2xl shadow-black/50">
              {posterUrl ? (
                <img
                  src={posterUrl}
                  alt={movie.title}
                  className="aspect-[2/3] w-full object-cover"
                />
              ) : (
                <div className="flex aspect-[2/3] items-center justify-center bg-white/5">
                  <span className="text-6xl opacity-60">🎬</span>
                </div>
              )}
            </div>

            {/* Movie Information */}
            <div className="max-w-3xl">
              <button
                onClick={onBack}
                className="mb-10 flex items-center gap-2 text-sm text-gray-400 transition hover:text-white"
              >
                <ArrowLeft size={18} />
                Back to recommendations
              </button>

              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-red-500">
                {movie.genres || "Movie"}
              </p>

              <h1 className="text-5xl font-black leading-tight sm:text-6xl lg:text-8xl">
                {movie.title}
              </h1>

              <div className="mt-6 flex items-center gap-2 text-yellow-400">
                <Star size={20} fill="currentColor" />

                <span className="text-lg font-semibold">
                  {movie.vote_average?.toFixed(1) || "N/A"}
                </span>

                <span className="text-gray-500">/ 10</span>
              </div>

              <p className="mt-8 max-w-2xl text-base leading-8 text-gray-300 sm:text-lg">
                {movie.overview ||
                  "No overview available for this movie."}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-16">
        <h2 className="text-3xl font-bold">
          About This Movie
        </h2>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-xl border border-white/10 bg-white/5 p-5">
            <p className="text-sm text-gray-500">
              Rating
            </p>

            <p className="mt-2 text-xl font-semibold">
              ⭐ {movie.vote_average?.toFixed(1) || "N/A"}
            </p>
          </div>

          <div className="rounded-xl border border-white/10 bg-white/5 p-5">
            <p className="text-sm text-gray-500">
              Genre
            </p>

            <p className="mt-2 text-xl font-semibold">
              {movie.genres || "N/A"}
            </p>
          </div>

          <div className="rounded-xl border border-white/10 bg-white/5 p-5">
            <p className="text-sm text-gray-500">
              Release Date
            </p>

            <p className="mt-2 text-xl font-semibold">
              {movie.release_date || "N/A"}
            </p>
          </div>

          <div className="rounded-xl border border-white/10 bg-white/5 p-5">
            <p className="text-sm text-gray-500">
              Recommendation
            </p>

            <p className="mt-2 text-xl font-semibold text-red-400">
              AI Selected
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}