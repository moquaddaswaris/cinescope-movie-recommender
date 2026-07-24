"use client";

import { Search, Sparkles } from "lucide-react";

type HeroProps = {
  movie: string;
  setMovie: (movie: string) => void;
  onRecommend: () => void;
  loading: boolean;
};

const suggestions = ["Inception", "The Dark Knight", "Interstellar"];

export default function Hero({
  movie,
  setMovie,
  onRecommend,
  loading,
}: HeroProps) {
  return (
    <section className="relative min-h-[calc(100vh-80px)] overflow-hidden">
      {/* Hero Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/movies.jpg')",
        }}
      />

      {/* Dark Cinematic Overlay */}
      <div className="absolute inset-0 bg-black/45" />

      {/* Left Gradient - Netflix Style */}
      <div className="absolute inset-0 bg-linear-to-r from-black via-black/75 to-transparent" />

      {/* Bottom Gradient */}
      <div className="absolute inset-x-0 bottom-0 h-64 bg-linear-to-t from-black via-black/70 to-transparent" />

      {/* Top Gradient */}
      <div className="absolute inset-x-0 top-0 h-32 bg-linear-to-b from-black/70 to-transparent" />

      {/* Content */}
      <div className="relative z-10 flex min-h-[calc(100vh-80px)] items-center px-6 py-7 sm:px-10 lg:px-20">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/30 px-4 py-2 text-sm text-gray-300 backdrop-blur-md">
            <Sparkles size={16} className="text-red-500" />
            <span>AI-Powered Movie Recommendations</span>
          </div>

          {/* Heading */}
          <h1 className="max-w-3xl text-5xl font-black leading-[1.05] tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl">
            Find Your Next
            <span className="mt-2 block text-red-500">
              Favorite Movie
            </span>
          </h1>

          {/* Description */}
          <p className="mt-7 max-w-xl text-base leading-7 text-gray-300 sm:text-lg sm:leading-8">
            Tell us what you love watching and discover movies that match your
            taste using intelligent, AI-powered recommendations.
          </p>

          {/* Search Box */}
          <div className="mt-10 flex w-full max-w-2xl flex-col gap-3 rounded-xl border border-white/10 bg-black/50 p-2 backdrop-blur-xl sm:flex-row">
            <div className="flex min-w-0 flex-1 items-center gap-3 px-4">
              <Search
                size={22}
                className="shrink-0 text-gray-400"
              />

              <input
                type="text"
                value={movie}
                onChange={(e) => setMovie(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && !loading && movie.trim()) {
                    onRecommend();
                  }
                }}
                placeholder="Search for a movie..."
                className="w-full bg-transparent py-3 text-white outline-none placeholder:text-gray-400"
              />
            </div>

            <button
              onClick={onRecommend}
              disabled={loading || !movie.trim()}
              className="group flex items-center justify-center gap-2 rounded-lg bg-red-600 px-7 py-3 font-semibold text-white transition-all duration-300 hover:bg-red-700 hover:shadow-lg hover:shadow-red-600/30 disabled:cursor-not-allowed disabled:opacity-50"
            >
              <Sparkles
                size={18}
                className="transition-transform duration-300 group-hover:rotate-12"
              />

              {loading ? "Finding..." : "Recommend"}
            </button>
          </div>

          {/* Suggestions */}
          <div className="mt-6 flex flex-wrap items-center gap-3 text-sm text-gray-400">
            <span className="text-gray-500">Try:</span>

            {suggestions.map((suggestion) => (
              <button
                key={suggestion}
                onClick={() => setMovie(suggestion)}
                className="rounded-md border border-white/10 bg-white/5 px-3 py-1.5 transition-all duration-300 hover:border-red-500/40 hover:bg-red-500/10 hover:text-white"
              >
                {suggestion}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-linear-to-t from-black to-transparent" />
    </section>
  );
}