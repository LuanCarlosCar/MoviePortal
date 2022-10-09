import axios from 'axios';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import { Container } from './styles';
import { useState, useEffect } from 'react';
import DetailMovie from './components/DetailMovie';

interface DetailMovieProps {
  title: string;
  backdrop_path: string;
  overview: string;
}

interface VideoProps {
  name: string;
  key: string;
}



export default function Detail() {
  const [detailMovie, setDetailMovie] = useState<DetailMovieProps>({} as DetailMovieProps);
  const [videoMovie, setVideoMovie] = useState<VideoProps>({} as VideoProps);
  const idMovie = window.location.href.split("/").pop();

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

    setDetailMovie(resDetailMovie.data)
    setVideoMovie(resVideoMovie.data.results[0])

  }


  return (
    <Container>
      <Header />
      {videoMovie?.key && <DetailMovie name={detailMovie.title} path_key={videoMovie.key} />}
      <Footer />
    </Container>
  );
}
