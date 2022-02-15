import styled, { css } from 'styled-components';

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  
  ${({ background }) => css`
    background: url(${background});
    background-size: cover;
    background-position: center;
  `};
`;
