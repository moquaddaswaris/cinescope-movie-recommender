export type Movie = {
  id: number;
  title: string;
  poster_path: string;
  vote_average: number;
  release_date: string;
  similarity: number;
  genres: string;
  overview: string;
};

export type RecommendationResponse = {
  success: boolean;
  movie?: string;
  message?: string;
  recommendations: Movie[];
};