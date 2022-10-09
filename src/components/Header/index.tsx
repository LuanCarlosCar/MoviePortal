import MenuCell from './MenuCell';
import {
  Container,
  ContainerMenuCell,
  Navbar,
  Search,
  TitleLogo,
  Wrapper,
} from './styles';

export default function Header() {
  return (
    <Container>
      <TitleLogo>Movies</TitleLogo>

      <Wrapper>
        <Navbar>
          <li>Início</li>
          <li>Lista</li>
          <li>Gênero</li>
          <li>Novos episódios</li>
        </Navbar>

        <Search placeholder="Buscar" type="text" />
      </Wrapper>
      <ContainerMenuCell>
        <MenuCell />
      </ContainerMenuCell>
    </Container>
  );
}
