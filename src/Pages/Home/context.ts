import { createContext, useContext } from 'react';

interface Movie {
  id: number;
  title: string;
  poster_path: string;
  release_date: string;
}

export const ListMovie = createContext<Movie[]>([] as Movie[]);

export function useListMovie() {
  return useContext(ListMovie);
}
