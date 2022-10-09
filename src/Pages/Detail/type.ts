export interface DetailMovieProps {
  title: string;
  backdrop_path: string;
  overview: string;
  poster_path: string;
  release_date: string;
  genres: { id: number; name: string }[];
  production_companies: { id: number; name: string }[];
}
