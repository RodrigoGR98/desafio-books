import React from 'react';

import { Container, Label, Input } from './styles';

function StyledInput({ type }) {
  return (
    <Container>
      <Label>{type}</Label>
      <Input type={type === "Senha" && 'password'} />
    </Container>
  );
}

export default StyledInput;