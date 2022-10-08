import axios from 'axios';
import { useEffect, useState } from 'react';
import Card from '../../../../components/Card';
import { ButtonAddMovie, Container, ContainerList, Title } from './styles';



interface Movie {
  id: number,
  title: string;
  poster_path: string;
  release_date: string
}

export default function MovieList() {
  const [listMovie, setListMovie] = useState<Movie[]>([]);
  const [listMovie2, setListMovie2] = useState<Movie[]>([]);



  useEffect(() => {
    getData();
    getData2();
  }, []);

  const api_key = '4e9cbdb6188d564ab3062e486d67953a';

  async function getData() {

    const res = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=4e9cbdb6188d564ab3062e486d67953a&language=pt-BR&page=1`
    );

    setListMovie(res.data.results)
    console.log('getdata', res.data.results);
    return;
  }

  async function getData2() {

    const res = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=4e9cbdb6188d564ab3062e486d67953a&language=pt-BR&page=3`
    );


    setListMovie2(res.data.results)
    console.log('getdata', res.data.results);


  }




  return (
    <Container>
      <Title>Últimas atualizações</Title>
      <ContainerList>
        {listMovie?.slice(0, 12).map((movie) => (
          <Card title={movie.title} poster_path={movie.poster_path} release_date={movie.release_date} />
        ))}
      </ContainerList>
      {listMovie.length === 12 ? (
        <ButtonAddMovie

        >
          Ver mais
        </ButtonAddMovie>
      ) : (
        <ButtonAddMovie

        >
          Ver menos
        </ButtonAddMovie>
      )}
      <Title>Animes recentes</Title>
      <ContainerList>
        {listMovie2?.slice(0, 6).map((movie) => (
          <Card title={movie.title} poster_path={movie.poster_path} release_date={movie.release_date} />
        ))}
      </ContainerList>
    </Container>
  );
}
