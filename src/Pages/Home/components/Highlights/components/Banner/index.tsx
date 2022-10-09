import { Container, ContainerDescription, Description, Title } from './styles';
interface Props {
  title: string;
  backdrop_path: string;
  overview: string;
}
export default function Banner(props: Props) {
  const { title, backdrop_path, overview } = props;
  const url = 'https://image.tmdb.org/t/p/original';

  return (
    <Container background={url + backdrop_path}>
      <ContainerDescription>
        <Title>{title}</Title>
        <Description>{overview}</Description>
      </ContainerDescription>
    </Container>
  );
}
