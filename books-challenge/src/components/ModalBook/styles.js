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
  width: 100%;

  h1 {
    font-weight: 600;
    font-size: 28px;
    line-height: 40px;
    color: #333333;
  }
  
  h2 {
    font-weight: 600;
    font-size: 12px;
    line-height: 20px;
    color: #AB2680;
  }
`

export const Information = styled.div`
  width: 100%;

  h3 {
    margin-top: 20px;
    margin-bottom: 10px;
    font-weight: 600;
    font-size: 12px;
    line-height: 28px;
    color: #333333;
  }

  .row {
    width: 100%;
    display: flex;
    place-content: space-between;

    .title {
      font-weight: 600;
      font-size: 12px;
      line-height: 24px;
      color: #333333;
    }

    .info {
      font-weight: 500;
      font-size: 12px;
      line-height: 24px;
      color: #6e6e6e;
    }
  }

  p {
      font-weight: 500;
      font-size: 12px;
      line-height: 18px;
      color: #6e6e6e;
      text-align: justify;

      svg {
        font-size: 18px;
        margin-right: 10px;
      }
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
