import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  place-content: center;
  z-index: 1;
`;

export const Modal = styled.div`
  width: 769px;
  height: 608px;
  background: #FFFFFF;
  padding: 48px;
  display: flex;

  img {
    width: 350px;
    margin-right: 48px;
  }
`

export const ImageNull = styled.div`
  min-width: 350px;
  height: 513px;
  display: flex;
  align-items: center;
  place-content: center;
  background: #F5EFF3;
  margin-right: 48px;

  svg {
    font-size: 100px;
    color: #AB2680;
  }
`

export const Info = styled.div`
  h1 {
    font-weight: 500;
    font-size: 28px;
    line-height: 40px;
    color: #333333;
  }
`

export const Close = styled.button`
  position: absolute;
  top: 16px;
  right: 30px;
  height: 32px;
  width: 32px;
  border: 1px solid rgba(51, 51, 51, 0.2);
  border-radius: 50%;
  background: #FFFFFF;
  display: flex;
  align-items: center;
  place-content: center;

  svg {
    
  }
`
