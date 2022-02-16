import styled from 'styled-components';

export const Container = styled.div`
  margin: 8px;
  height: 170px;
  width: 272px;
  position: relative;
  

  .wrap {
    position: absolute;
    left: 0px;
    top: 0px;
    height: 170px;
    width: 272px;
    background: #FFFFFF;
    padding: 19px 16px;
    display: flex;
    align-items: center;
    box-shadow: 0px 6px 24px rgba(84, 16, 95, 0.13);
    border-radius: 4px;
    cursor: pointer;
    transition: all 0.5s;

    &:hover {
      border: solid 1px black;
    }
  }
`;

export const Image = styled.img`
  width: 81px;
  margin-right: 16px;
`

export const NullImage = styled.div`
  min-width: 81px;
  height: 122px;
  margin-right: 16px;
  display: flex;
  align-items: center;
  place-content: center;
  background: #F5EFF3;

  svg {
    font-size: 30px;
    color: #AB2680;
  }
`

export const Info = styled.div`
  width: 100%;
  height: 100%;
`

export const Title = styled.h1`
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  color: #333333;
`

export const Author = styled.h2`
  font-weight: normal;
  font-size: 12px;
  line-height: 20px;
  color: #AB2680;
`

export const Details = styled.div`
  display: flex;
  flex-direction: column;

  span {
    font-weight: normal;
    font-size: 12px;
    line-height: 20px;
    color: #999999;
  }
`
