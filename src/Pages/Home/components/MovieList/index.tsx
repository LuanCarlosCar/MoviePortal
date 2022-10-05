import Card from "../../../../components/Card";
import { Container, ContainerList, Title } from "./styles";

export default function MovieList() {
    return (
        <Container>
            <Title>Últimas atualizações</Title>
            <ContainerList>
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(movie => <Card />)}

            </ContainerList>
        </Container>
    )
}