import styled from 'styled-components';

export const Container = styled.main`
  margin-top: 80px;
`;

export const Title = styled.h2`
  font-family: 'Rubik';
  font-weight: 400;
  font-size: 2rem;
  color: #ffffff;
  margin-bottom: 40px;
`;

export const ContainerList = styled.main`
  display: grid;
  grid-gap: 1.25rem;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  max-width: 100%;

  @media (max-width: 1542px) {
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  }

  @media (max-width: 1345px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }

  @media (max-width: 1128px) {
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 0.5rem;
  }

  @media (max-width: 884px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 730px) {
    display: block;
  }
`;

export const ButtonAddMovie = styled.button`
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 4px;
  width: 11.375rem;
  height: 3rem;
  white-space: nowrap;
  text-align: center;

  background: #151b26;
  border-radius: 0.25rem;

  font-family: 'Inter';

  font-weight: 600;
  font-size: 1.125rem;

  color: #ffffff;
  display: block;

  margin: 2.5rem auto;
`;
