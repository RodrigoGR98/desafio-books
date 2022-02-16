import styled, { css } from 'styled-components';

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  background: rgba(0,0,0,0.5);
  
  ${({ background }) => css`
    background: url(${background});
    background-size: cover;
    background-position: center;

    @media(max-width: 425px) {
      place-content: center;
    }
  `};
`;
