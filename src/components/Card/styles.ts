import styled from 'styled-components';

export const Container = styled.main`
  height: 300px;
  
width: 188px;
box-shadow: inset 0 -6.6875rem 2.8125rem -1.375rem #000;


`;
export const ContainerImg = styled.div`
position: relative;
height: 254px;
p{
  position: absolute;
bottom: 0;
left: 40%;
  font-family: 'Inter';

font-weight: 500;
font-size: 18px;


color: #BFBFBF;
text-align: center;
}
`;
export const Title = styled.h2`
margin-top:16px ;
text-align: center;
font-family: 'Rubik';
font-weight: 400;
font-size: 18px;
color: #FFFFFF;
`;

export const SubTitle = styled.h3`
  margin-top: 0.625rem;
  font-family: 'Inter';
  font-weight: 400;
  font-size: 1.5rem;
  color: #bfbfbf;
`;
export const MovieImg = styled.img`
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: -1;
`;

