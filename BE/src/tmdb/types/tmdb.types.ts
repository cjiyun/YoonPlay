export const TMDB_MOVIE_CATEGORIES = [
  'popular',
  'now_playing',
  'top_rated',
  'upcoming',
] as const;
export type TmdbMovieCategory = (typeof TMDB_MOVIE_CATEGORIES)[number];
