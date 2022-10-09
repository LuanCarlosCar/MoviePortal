import { AvatarImg, Container, Label, TextInfo } from './styles';

interface Props {
  path: string;
  name: string;
  comment: string;
}
export default function Comment(props: Props) {
  const { path, name, comment } = props;

  return (
    <Container>
      <AvatarImg src={path} />
      <div>
        <Label>{name}</Label>
        <TextInfo>{comment}</TextInfo>
      </div>
    </Container>
  );
}
