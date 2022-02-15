import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 60px;
  position: relative;
  background: rgba(0, 0, 0, 0.32);
  backdrop-filter: blur(2px);
  border-radius: 4px;
  margin-bottom: 16px;
`;

export const Label = styled.label`
  position: absolute;
  top: 8px;
  left: 16px;
  font-size: 12px;
  line-height: 16px;
  color: #FFFFFF;
  opacity: 0.5;
`;

export const Input = styled.input`
  position: absolute;
  background: none;
  border: none;
  top: 28px;
  left: 16px;
  line-height: 24px;
  color: #FFFFFF;
`;

