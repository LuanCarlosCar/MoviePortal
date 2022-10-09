import { Link } from 'react-router-dom';
import MenuCell from './components/MenuCell';
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
          <Link to="/">
            <li>Início</li>
          </Link>
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
