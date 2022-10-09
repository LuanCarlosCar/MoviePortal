import axios from 'axios';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import { Container } from './styles';
import { useState, useEffect } from 'react';
import DetailMovie from './components/DetailMovie';

interface DetailMovie {
  title: string;
  backdrop_path: string;
  overview: string;
}

interface VideoProps {
  name: string;
  key: string;
}



export default function Detail() {
  const [detailMovie, setDetailMovie] = useState<DetailMovie>({} as DetailMovie);
  const [videoMovie, setVideoMovie] = useState<VideoProps>({} as VideoProps);

  useEffect(() => {
    getDetailMovie();
  }, []);

  async function getDetailMovie() {
    const res = await axios.get(
      `https://api.themoviedb.org/3/movie/${760161}?api_key=4e9cbdb6188d564ab3062e486d67953a&language=pt-BR`
    );
    const res2 = await axios.get(
      `https://api.themoviedb.org/3/movie/${760161}/videos?api_key=4e9cbdb6188d564ab3062e486d67953a&language=pt-BR`
    );
    const resVideo: VideoProps = res2.data.results[0]

    setDetailMovie(res.data)
    setVideoMovie(resVideo)
    // setListMovie(res.data.results); 642885
    //YouTube: https://www.youtube.com/watch?v=
    console.log('Detail5', res);

    return;
  }

  console.log('Detailvideo', videoMovie.key);

  return (
    <Container>
      <Header />
      {videoMovie.key && <DetailMovie name={detailMovie.title} path_key={videoMovie.key} />}
      <Footer />
    </Container>
  );
}
