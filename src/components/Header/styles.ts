import styled from 'styled-components';

export const Container = styled.header`
  padding-top: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  a {
    text-decoration: none !important;
  }
`;

export const ContainerMenuCell = styled.div`
  display: none;

  @media (max-width: 1312px) {
    display: block;
  }
`;

export const TitleLogo = styled.h1`
  font-family: 'Rubik';
  font-weight: 500;
  font-size: 2.5rem;
  color: #00a3ff;
`;

export const Navbar = styled.ul`
  display: flex;

  li {
    font-family: 'Inter';
    font-weight: 500;
    font-size: 1.125rem;
    color: #ffff;
    margin-right: 3.125rem;
    white-space: nowrap;
  }

  li:last-child {
    margin-right: 4.5rem;
  }

  li:hover {
    transition: 0.5s;
    color: #00a3ff;
    cursor: pointer;
  }
`;

export const Search = styled.input`
  padding: 0.5rem 1.5rem;
  border-radius: 2.3125rem;
  background: #151b26;
  color: #00a3ff;
  border: none;

  font-family: 'Inter';
  font-weight: 500;
  font-size: 1.125rem;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: 1312px) {
    display: none;
  }
`;
