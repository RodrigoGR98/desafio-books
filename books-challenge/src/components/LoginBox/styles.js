import styled from 'styled-components';

export const Container = styled.div`
    width: 368px;
    height: 224px;
    margin-left: 115px;
    position: relative;
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
`
