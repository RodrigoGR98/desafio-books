import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 8px;
  background: rgba(255, 255, 255, 0.4);
  padding: 15px;
  position: absolute;
  border-radius: 4px;
  font-size: 16px;
  line-height: 16px;
  font-weight: 700; 
  color: #FFFFFF;
  visibility: hidden;
  opacity: 0;
  visibility: ${({ error }) => error === true && 'visible'};
  opacity: ${({ error }) => error === true && 1};
  transition: all 0.5s;
`;

export const Indicator = styled.div`
  content: " ";
  position: absolute;
  color: white;
  left: 17px;
  top: -8px;
  border-top: none;
  border-right: 8px solid transparent;
  border-left: 8px solid transparent;
  border-bottom: 8px solid rgba(255, 255, 255, 0.4);
`;
