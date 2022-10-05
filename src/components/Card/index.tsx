import { Container, ContainerImg, MovieImg, Title } from "./styles";
import Imgg from './img.svg'

export default function Card() {
    return (
        <Container>
            <ContainerImg>
                <MovieImg src={Imgg} />
                <p>1029</p>
            </ContainerImg>
            <Title>One Piece</Title>
        </Container>
    )
}