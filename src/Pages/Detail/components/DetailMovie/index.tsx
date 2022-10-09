import { Container, Title } from './styles';
import React, { useState, useEffect } from 'react';


interface Props {
    name: string;
    path_key: string;
}

export default function DetailMovie(props: Props) {
    const { name, path_key } = props

    const path = `https://www.youtube.com/embed/${path_key}`


    return (
        <Container>
            <Title>{name}</Title>
            <iframe width="100%" height="470" src={path} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ></iframe>
        </Container>
    );
}
