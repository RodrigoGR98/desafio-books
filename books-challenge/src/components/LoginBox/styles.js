import styled from 'styled-components';

export const Container = styled.div`
    width: 368px;
    height: 224px;
    margin-left: 115px;
    position: relative;

    @media(max-width: 768px) {
      margin-left: 75px;
      width: 300px;
    }

    @media(max-width: 425px) {
      margin-left: 0;
      width: 100%;
      margin: 0 30px;
      padding: 20px;
      height: 100%;
      border-radius: 15px;
      background: rgba(0,0,0,0.1);
    }
`;

export const Logo = styled.img`
`

export const Header = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 50px;

  span {
    margin-left: 16.6px;
    font-weight: 300;
    font-size: 28px;
    line-height: 40px;
    color: #FFFFFF;
  }
`

export const Button = styled.button`
  position: absolute;
  right: 12px;
  bottom: 12px;
  width: 85px;
  height: 36px;
  border: none;
  background: #FFFFFF;
  border-radius: 44px;
  color: #B22E6F;
  font-weight: bold;
  font-size: 16px;
  line-height: 20px;
  transition: all .5s;

  @media (max-width: 425px) {
    right: 30px;
    bottom: 48px;
  }

  &:hover {
    background: #B22E6F;
    color: #FFFFFF;
  }
`
