import moment from 'moment';
import { DetailMovieProps } from '../../../../type';
import {
  Container,
  ContainerImg,
  Label,
  LabelSynopsis,
  TextInfo,
} from './styles';

interface Props {
  detailMovie: DetailMovieProps;
}

export default function SynopsisMovie(props: Props) {
  const { detailMovie } = props;

  const url = 'https://image.tmdb.org/t/p/w342';

  function renderAllString(list: { id: number; name: string }[]) {
    let newString = '';

    list.forEach((item, index) => {
      if (index === 0) {
        return (newString = newString + ` ${item.name}`);
      }

      newString = newString + `, ${item.name}`;
    });
    return newString;
  }

  return (
    <Container>
      <ContainerImg background={url + detailMovie.poster_path} />
      <div>
        <Label>
          Nome: <TextInfo>{detailMovie.title}</TextInfo>
        </Label>
        <Label>
          Gênero: <TextInfo>{renderAllString(detailMovie.genres)}</TextInfo>
        </Label>
        <Label>
          Produtores:{' '}
          <TextInfo>
            {renderAllString(detailMovie.production_companies)}
          </TextInfo>
        </Label>
        <Label>
          Data lançamento:{' '}
          <TextInfo>
            {moment(detailMovie.release_date).format('MMMM/YYYY')}
          </TextInfo>
        </Label>
        <LabelSynopsis>
          Sinopse: <TextInfo>{detailMovie.overview}</TextInfo>
        </LabelSynopsis>
      </div>
    </Container>
  );
}
