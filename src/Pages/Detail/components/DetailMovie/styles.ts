import styled from 'styled-components';

export const Container = styled.div`
  min-height: 90vh;
  a {
    text-decoration: none;
    list-style: none;
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

export const ContainerComment = styled.div`
  a {
    text-decoration: none;
    list-style: none;
  }
`;

export const Line = styled.span`
  display: block;
  width: 100%;
  height: 2px;
  background-color: #151b26;
  color: transparent;
  margin: 1rem 0;
`;
