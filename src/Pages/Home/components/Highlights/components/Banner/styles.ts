import styled from 'styled-components';

export const Container = styled.main`
  margin-top: 2.5rem;
  position: relative;
  width: 76.8125rem;
  min-height: 25rem;
  max-height: 25rem;
  border-radius: 0.5rem;
  box-shadow: inset 0.4375rem -5.6875rem 21.8125rem 0.625rem #000;
`;

export const Title = styled.h2`
  font-family: 'Rubik';
  font-weight: 500;
  font-size: 2.25rem;
  color: #ffffff;
  text-transform: uppercase;
`;

export const Description = styled.p`
  margin-top: 1.25rem;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 1.125rem;
  color: #bfbfbf;
  line-height: 1.5625rem;
`;
export const ImgBanner = styled.img`
  min-width: 100%;
  min-height: 25rem;
  max-height: 25rem;
  position: absolute;
  z-index: -1;
`;
export const ContainerDescription = styled.div`
  position: absolute;
  bottom: 1.125rem;
  max-width: 44.1875rem;
  padding: 0 2.75rem;
`;
