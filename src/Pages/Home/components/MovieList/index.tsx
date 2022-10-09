import axios from 'axios';
import { useEffect, useState } from 'react';
import Card from '../../../../components/Card';
import { useListMovie } from '../../context';
import { ButtonAddMovie, Container, ContainerList, Title } from './styles';

interface Movie {
  id: number;
  title: string;
  poster_path: string;
  release_date: string;
}

export default function MovieList() {
  const [listMovie2, setListMovie2] = useState<Movie[]>([]);
  const [number, setNumber] = useState(18);

  const listMovie = useListMovie();

  useEffect(() => {
    getDataListMoviePopular();
  }, []);

  async function getDataListMoviePopular() {
    const res = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=4e9cbdb6188d564ab3062e486d67953a&language=pt-BR&page=3`
    );

    setListMovie2(res.data.results);
  }

  function addMovie() {
    setNumber(number !== 12 ? 12 : 18);
  }

  return (
    <Container>
      <Title>Últimas atualizações</Title>
      <ContainerList>
        {listMovie?.slice(0, number).map((movie) => (
          <Card
            title={movie.title}
            poster_path={movie.poster_path}
            release_date={movie.release_date}
            id={movie.id}
            key={movie.id}
          />
        ))}
      </ContainerList>
      {number === 12 ? (
        <ButtonAddMovie onClick={addMovie}>Ver mais</ButtonAddMovie>
      ) : (
        <ButtonAddMovie onClick={addMovie}>Ver menos</ButtonAddMovie>
      )}
      <Title>Filmes populares</Title>
      <ContainerList>
        {listMovie2?.slice(0, 6).map((movie) => (
          <Card
            title={movie.title}
            poster_path={movie.poster_path}
            release_date={movie.release_date}
            id={movie.id}
            key={movie.id}
          />
        ))}
      </ContainerList>
    </Container>
  );
}
