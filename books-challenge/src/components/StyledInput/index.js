import React from 'react';

import { Container, Label, Input } from './styles';

function StyledInput({ type, change }) {
  return (
    <Container>
      <Label>{type}</Label>
      <Input type={type === "Senha" && 'password'} autocomplete={type === 'Senha' && 'off'} onChange={e => change(e.target.value)} />
    </Container>
  );
}

export default StyledInput;