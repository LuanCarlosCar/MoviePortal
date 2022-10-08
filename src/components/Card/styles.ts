import styled from 'styled-components';

export const Container = styled.main`
  height: 300px;
  width: 188px;
  box-shadow: inset 0 -6.6875rem 2.8125rem -1.375rem #000;
  transform: translatey(0px);
  transition-duration: 0.5s;
  animation-timing-function: ease;
  cursor: pointer;

  &:hover {
    transform: translatey(-10px);
  }
`;
export const ContainerImg = styled.div<{ background: string }>`
  background-image: url(${(props) => props.background});
  box-shadow: inset 0 -2.6875rem 2.8125rem -1.375rem #000;
  border-radius: 6px;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  height: 254px;

  p {
    position: relative;
    bottom: -225px;

    display: block;
    margin: 0 auto;
    font-family: 'Inter';

    font-weight: 500;
    font-size: 18px;

    color: #bfbfbf;
    text-align: center;
  }
`;
export const Title = styled.h2`
  margin-top: 1rem;
  text-align: center;
  font-family: 'Rubik';
  font-weight: 400;
  font-size: 18px;
  color: #ffffff;
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
