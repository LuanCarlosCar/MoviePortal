import { Container, ContainerComment, Line, Title } from './styles';
import SynopsisMovie from './components/SynopsisMovie';
import { DetailMovieProps } from '../../type';
import Profile1 from '../../../../assets/imgs/profile1.svg';
import Profile2 from '../../../../assets/imgs/profile2.svg';
import Comment from './components/Comment';

interface Props {
    path_key: string;
    detailMovie: DetailMovieProps;
}

export default function DetailMovie(props: Props) {
    const { path_key, detailMovie } = props;

    const path = `https://www.youtube.com/embed/${path_key}`;

    return (
        <Container>
            <Title>{detailMovie.title}</Title>
            <iframe
                width="100%"
                height="470"
                src={path}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            ></iframe>
            <SynopsisMovie detailMovie={detailMovie} />
            <ContainerComment>
                <Title>Comentários</Title>
                <Comment
                    path={Profile1}
                    name="Ana Júlia"
                    comment="Filme muito interessante. O que é vencer na vida para você?"
                />
                <Line>-</Line>
                <Comment
                    path={Profile2}
                    name="Bruno San"
                    comment='Impossível não comparar com o clássico "A Sombra E A Escuridão", os enredos tem o mesmo princípio, só não caminham pelo lado místico.'
                />
            </ContainerComment>
        </Container>
    );
}
