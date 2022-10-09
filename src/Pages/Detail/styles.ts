import styled from 'styled-components';

export const Container = styled.div`
  a {
    text-decoration: none;
  }
`;

export const RecommendedMovie = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
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

export const Title = styled.h2`
  font-family: 'Rubik';
  font-weight: 400;
  font-size: 2rem;
  color: #ffffff;

  margin-top: 80px;
  margin-bottom: 2rem;
`;

export const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
`;
