import { Link } from 'react-router-dom';
import { Container, ContainerDescription, Description, Title } from './styles';
interface Props {
  title: string;
  backdrop_path: string;
  overview: string;
  movieId: number;
}
export default function Banner(props: Props) {
  const { title, backdrop_path, overview, movieId } = props;
  const url = 'https://image.tmdb.org/t/p/original';

  return (
    <Link to={`/detalhe/${movieId}`} >
      <Container background={url + backdrop_path}>

        <ContainerDescription>
          <Title>{title}</Title>
          <Description>{overview}</Description>
        </ContainerDescription>
      </Container>
    </Link>
  );
}
