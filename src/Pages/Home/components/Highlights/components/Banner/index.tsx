import { Container, ContainerDescription, Description, Title } from './styles';
import OneImg from './one-punch-man.svg';

export default function Banner() {
  return (
    <Container background={OneImg}>
      <ContainerDescription>
        <Title>one punch man terá 3 temporada</Title>
        <Description>
          Como relatado anteriormente, a franquia baseada no mangá escrito por
          ONE e ilustrado por Yusuke Murat a, One Punch Man, divulgou um
          comunicado confirmando a pr odução de uma terceira temporada da
          adaptação para o anime […]
        </Description>
      </ContainerDescription>
    </Container>
  );
}
