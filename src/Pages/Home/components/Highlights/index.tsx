import Banner from './components/Banner';
import { Container, SubTitle, Title } from './styles';

export default function Highlights() {
  return (
    <Container>
      <Title>Últimas novidades</Title>
      <SubTitle>O que você vai assistir hoje?</SubTitle>
      <Banner />
    </Container>
  );
}
