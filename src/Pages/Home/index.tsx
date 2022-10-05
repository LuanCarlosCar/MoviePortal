import Header from '../../components/Header';
import Highlights from './components/Highlights';
import MovieList from './components/MovieList';
import OptionsList from './components/OptionsList';
import { Container } from './styles';

export default function Home() {
  return (
    <Container>
      <Header />
      <OptionsList />
      <Highlights />
      <MovieList />
    </Container>
  );
}
