import { Container, ContainerImg, Title } from './styles';
import moment from 'moment';
import { Link } from 'react-router-dom';

interface Props {
  title: string;
  poster_path: string;
  release_date: string;
  id: number;
}

export default function Card(props: Props) {
  const { title, poster_path, release_date, id } = props;
  const url = 'https://image.tmdb.org/t/p/w342';

  moment.updateLocale('pt', {
    months: [
      'Janeiro',
      'Fevereiro',
      'Março',
      'Abril',
      'Maio',
      'Junho',
      'Julho',
      'Agosto',
      'Setembro',
      'Outubro',
      'Novembro',
      'Dezembro',
    ],
  });

  return (
    <Container>
      <Link to={`/detalhe/${id}`} >
        <ContainerImg background={url + poster_path}>
          {/* <p>{moment(release_date).format('MMMM/YYYY')}</p> */}
        </ContainerImg>
        <Title>{title}</Title>
      </Link>
    </Container>
  );
}
