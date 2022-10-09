import { Container, ContainerImg, Title } from './styles';
import moment from 'moment';

interface Props {
  title: string;
  poster_path: string;
  release_date: string;
}

export default function Card(props: Props) {
  const { title, poster_path, release_date } = props;
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
      <ContainerImg background={url + poster_path}>
        {/* <p>{moment(release_date).format('MMMM/YYYY')}</p> */}
      </ContainerImg>
      <Title>{title}</Title>
    </Container>
  );
}
