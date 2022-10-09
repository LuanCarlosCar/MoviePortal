import axios from 'axios';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import { Container, LoadingContainer, RecommendedMovie, Title } from './styles';
import { useState, useEffect } from 'react';
import DetailMovie from './components/DetailMovie';
import { DetailMovieProps } from './type';
import Card from '../../components/Card';
import ReactLoading from 'react-loading';

interface VideoProps {
  name: string;
  key: string;
}
interface RecommendedListMoviePros {
  title: string;
  poster_path: string;
  release_date: string;
  id: number;
}

export default function Detail() {
  const [detailMovie, setDetailMovie] = useState<DetailMovieProps>(
    {} as DetailMovieProps
  );
  const [videoMovie, setVideoMovie] = useState<VideoProps>({} as VideoProps);
  const [recommendedListMovie, setRecommendedListMovie] = useState<
    RecommendedListMoviePros[]
  >([]);

  const idMovie = window.location.href.split('/').pop();

  useEffect(() => {
    getDetailMovie();
  }, [idMovie]);

  async function getDetailMovie() {
    if (!idMovie) return;

    const resDetailMovie = await axios.get(
      `https://api.themoviedb.org/3/movie/${idMovie}?api_key=4e9cbdb6188d564ab3062e486d67953a&language=pt-BR`
    );

    const resVideoMovie = await axios.get(
      `https://api.themoviedb.org/3/movie/${idMovie}/videos?api_key=4e9cbdb6188d564ab3062e486d67953a&language=pt-BR`
    );

    const resRecommendedListMovie = await axios.get(
      `https://api.themoviedb.org/3/movie/${idMovie}/similar?api_key=4e9cbdb6188d564ab3062e486d67953a&language=pt-BR&page=1`
    );

    setDetailMovie(resDetailMovie.data);
    setVideoMovie(resVideoMovie.data.results[0]);
    setRecommendedListMovie(resRecommendedListMovie.data.results);
  }

  function renderLayout() {
    if (!videoMovie?.key) {
      return (
        <LoadingContainer>
          <ReactLoading color="#00a3ff" height={667} width="30rem" />
        </LoadingContainer>
      );
    }

    return (
      <>
        <DetailMovie detailMovie={detailMovie} path_key={videoMovie.key} />
        <Title>Relacionados</Title>
        <RecommendedMovie>
          {recommendedListMovie?.slice(0, 6).map((movie) => (
            <Card
              key={movie.id}
              title={movie.title}
              poster_path={movie.poster_path}
              id={movie.id}
            />
          ))}
        </RecommendedMovie>
      </>
    );
  }

  return (
    <Container>
      <Header />
      {renderLayout()}
      <Footer />
    </Container>
  );
}
