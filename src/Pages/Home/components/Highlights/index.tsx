import Banner from './components/Banner';
import { Container, SubTitle, Title } from './styles';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { useListMovie } from '../../context';
import { useState, useEffect } from 'react';
import axios from 'axios';

interface ListBannerType {
  title: string;
  backdrop_path: string;
  overview: string;
}

interface DataProps {
  data: ListBannerType;
}
export default function Highlights() {
  const [listBanner, setListBanner] = useState<ListBannerType[]>([]);
  const listMovie = useListMovie();

  useEffect(() => {
    getData();
  }, [listMovie]);

  async function getData() {
    if (!listMovie) return;
    const listMovieReduced = listMovie.slice(0, 3);
    const list = [];

    for await (let movie of listMovieReduced) {
      const res: DataProps = await axios.get(
        `https://api.themoviedb.org/3/movie/${movie.id}?api_key=4e9cbdb6188d564ab3062e486d67953a&language=pt-BR`
      );

      console.log(movie.id)
      list.push(res.data);
    }

    setListBanner(list);
  }

  return (
    <Container>
      <Title>Últimas novidades</Title>
      <SubTitle>O que você vai assistir hoje?</SubTitle>
      <AliceCarousel
        mouseTracking
        autoPlay
        animationDuration={1000}
        autoPlayInterval={2000}
        disableButtonsControls
      >
        {listBanner.map((movie) => (
          <Banner
            title={movie.title}
            backdrop_path={movie.backdrop_path}
            overview={movie.overview}
          />
        ))}
      </AliceCarousel>
    </Container>
  );
}
