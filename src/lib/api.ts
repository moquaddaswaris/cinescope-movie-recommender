import type { RecommendationResponse } from "../types/movie"

const API_URL = "http://127.0.0.1:8000";

export async function getRecommendations(
  title: string
): Promise<RecommendationResponse> {
  const response = await fetch(
    `${API_URL}/recommend?title=${encodeURIComponent(title)}&n=5`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch recommendations");
  }

  return response.json();
}