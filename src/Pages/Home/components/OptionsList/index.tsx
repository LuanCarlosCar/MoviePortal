import { ButtonFilter, Container } from './styles';

const optionsData = [
  'Todos',
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z',
];

export default function OptionsList() {
  return (
    <Container>
      {optionsData.map((option) => (
        <ButtonFilter key={option}>{option}</ButtonFilter>
      ))}
    </Container>
  );
}
