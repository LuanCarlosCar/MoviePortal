import { Container, ContainerImg, Title } from './styles';
import { Link } from 'react-router-dom';

interface Props {
  title: string;
  poster_path: string;
  id: number;
}

export default function Card(props: Props) {
  const { title, poster_path, id } = props;
  const url = 'https://image.tmdb.org/t/p/w342';

  return (
    <Container>
      <Link to={`/detalhe/${id}`}>
        <ContainerImg background={url + poster_path}></ContainerImg>
        <Title>{title}</Title>
      </Link>
    </Container>
  );
}
