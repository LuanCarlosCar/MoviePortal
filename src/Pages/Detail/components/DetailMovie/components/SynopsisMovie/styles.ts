import styled from 'styled-components';

export const Container = styled.main`
  margin: 5rem 0;

  display: flex;
  width: 100%;
`;

export const ContainerImg = styled.div<{ background: string }>`
  background-image: url(${(props) => props.background});
  background-repeat: no-repeat;
  background-size: cover;
  min-width: 270px;
  height: 379px;
  border-radius: 12px;
  margin-right: 2.5rem;

  @media (max-width: 1052px) {
    display: none;
  }
`;

export const Label = styled.p`
  margin-bottom: 10px;
  font-family: 'Rubik';

  font-weight: 500;
  font-size: 20px;

  color: #ffffff;
`;

export const TextInfo = styled.span`
  font-family: 'Inter';

  font-weight: 400;
  font-size: 16px;

  color: #bfbfbf;
`;

export const LabelSynopsis = styled(Label)`
  margin-bottom: 0;
  margin-top: 2.5rem;
`;
