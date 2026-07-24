"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import RecommendationSection from "@/components/RecommendationSection";
import MovieDetails from "@/components/MovieDetails";
import type { Movie } from "@/types/movie";

export default function Home() {
  const [movie, setMovie] = useState("");
  const [recommendations, setRecommendations] = useState<Movie[]>([]);
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);
  const [loading, setLoading] = useState(false);

  const handleRecommend = async () => {
    if (!movie.trim()) {
      return;
    }

    try {
      setLoading(true);

      const response = await fetch(
        "http://127.0.0.1:5001/recommend",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            title: movie.trim(),
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to fetch recommendations");
      }

      const data = await response.json();

      setRecommendations(data.recommendations);

      setTimeout(() => {
        document
          .getElementById("recommendations")
          ?.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
      }, 100);
    } catch (error) {
      console.error("Recommendation error:", error);
      alert("Unable to fetch recommendations. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleMovieClick = (movie: Movie) => {
    setSelectedMovie(movie);
  };

  const handleBack = () => {
    setSelectedMovie(null);
  };

  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />

      {selectedMovie ? (
        <MovieDetails
          movie={selectedMovie}
          onBack={handleBack}
        />
      ) : (
        <>
          <Hero
            movie={movie}
            setMovie={setMovie}
            onRecommend={handleRecommend}
            loading={loading}
          />

          <RecommendationSection
            recommendations={recommendations}
            onMovieClick={handleMovieClick}
          />
        </>
      )}
    </main>
  );
}