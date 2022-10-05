import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  overflow-x: auto;
  margin-top: 3.125rem;
  padding-bottom: 1.875rem;

  &::-webkit-scrollbar {
    height: 0.25rem;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #00a3ff;
    border-radius: 1.25rem;
    border: 0.1875rem solid #00a3ff;
  }
`;

export const ButtonFilter = styled.button`
  padding: 0.5rem 0.25rem 0.375rem 0;
  margin-right: 2rem;
  min-width: 6.75rem;
  min-height: 2.875rem;
  background-color: transparent;
  border: 0.125rem solid #151b26;
  border-radius: 2.3125rem;
  font-family: 'Inter';
  font-weight: 400;
  font-size: 1.125rem;
  color: #ffff;
  cursor: pointer;

  &:last-child {
    margin-right: 0.625rem;
  }

  &:hover {
    transition: 0.5s;
    background: #151b26;
  }
`;
