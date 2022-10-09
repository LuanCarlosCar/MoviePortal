import axios from 'axios';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Highlights from './components/Highlights';
import MovieList from './components/MovieList';
import OptionsList from './components/OptionsList';
import { ListMovie } from './context';
import { Container } from './styles';
import { useState, useEffect } from 'react';

interface Movie {
  id: number;
  title: string;
  poster_path: string;
  release_date: string;
}

export default function Home() {
  const [listMovie, setListMovie] = useState<Movie[]>([]);

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    const res = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=4e9cbdb6188d564ab3062e486d67953a&language=pt-BR&page=1`
    );

    setListMovie(res.data.results);
    console.log('getdata', res.data.results);
    return;
  }

  return (
    <Container>
      <Header />
      <OptionsList />
      <ListMovie.Provider value={listMovie}>
        <Highlights />
        <MovieList />
      </ListMovie.Provider>
      <Footer />
    </Container>
  );
}
