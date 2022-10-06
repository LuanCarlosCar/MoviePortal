import { useState } from "react";
import Card from "../../../../components/Card";
import { ButtonAddMovie, Container, ContainerList, Title } from "./styles";

export default function MovieList() {
    const [listMovie, setListMovie] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12])
    const [listMovie2, setListMovie2] = useState([1, 2, 3, 4, 5, 6])



    return (
        <Container>
            <Title>Últimas atualizações</Title>
            <ContainerList>
                {listMovie.map(movie => <Card />)}
            </ContainerList>
            {listMovie.length === 12 ? (<ButtonAddMovie onClick={() => setListMovie([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18])}>Ver mais</ButtonAddMovie>) : (<ButtonAddMovie onClick={() => setListMovie([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12])}>Ver menos</ButtonAddMovie>)}
            <Title>Animes recentes</Title>
            <ContainerList>
                {listMovie2.map(movie => <Card />)}
            </ContainerList>

        </Container>
    )
}