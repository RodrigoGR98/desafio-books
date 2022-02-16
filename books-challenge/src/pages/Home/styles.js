import styled, { css } from 'styled-components';

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;

  ${({ bg1, bg2 }) => css`
    background: url(${bg1}), url(${bg2});
    background-size: cover;
    background-position: center;
    background-blend-mode: darken;
    transform: matrix(1, 0, 0, -1, 0, 0), rotate(-180deg);
  `};
`;

export const Header = styled.div`
  height: 120px;
  width: 100%;
  display: flex;
  align-items: center;
  padding: 0 180px;
  place-content: space-between;

  .left-header {
    display: flex;
    align-items: center;

    span {
      margin-left: 16.6px;
      font-weight: 300;
      font-size: 28px;
      line-height: 40px;
      color: #333333;
    }
  }

  .right-header {
    display: flex;
    align-items: center;

    svg {
      margin-left: 16px;
      border: 1px solid rgba(51, 51, 51, 0.2);
      border-radius: 50%;
      height: 32px;
      width: 32px;
      padding: 5px;

      &:hover {
        cursor: pointer;
      }
    }
  }
`

export const Filter = styled.div`

`

export const Books = styled.div`
  padding: 0 300px;
  width: 100%;
  display: flex;
  place-content: center;
  flex-wrap: wrap;
`

export const Pagination = styled.div`
  padding: 0 90px;
  height: 100px;
  display: flex;
  align-items: center;
  place-content: end;
  padding-right: 110px;

  span {
    margin-right: 16px;
    font-weight: normal;
    font-size: 12px;
    line-height: 20px;
    color: #333333;
  }

  button {
    border: 1px solid rgba(51, 51, 51, 0.2);
    border-radius: 50%;
    height: 32px;
    width: 32px;
    background: none;
    margin-right: 8px;
    display: flex;
    align-items: center;
    place-content: center;
    color: #333333;
    transition: all 0.5s;

    &:disabled {
      color: rgba(51, 51, 51, 0.2);
    }

    &:hover {
      background: #333333;
      color: white;
    }

    svg {
      font-size: 16px;
    }
  }
`
