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
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-gap: 20px;

`;


export const ButtonAddMovie = styled.button`
cursor: pointer;
padding: 8px ;
border-radius: 4px;
width: 182px;
height: 48px;
white-space: nowrap;
text-align: center;


background: #151B26;
border-radius: 4px;


font-family: 'Inter';

font-weight: 600;
font-size: 18px;

color: #FFFFFF;
display: block;

margin: auto;
`;
