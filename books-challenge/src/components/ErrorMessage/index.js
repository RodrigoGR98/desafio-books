import React from 'react';

import { Container, Indicator } from './styles';

function ErrorMessage({ msg, hasError }) {
  return (
    <Container error={hasError} >
      <Indicator />
      <p>{msg}</p>
    </Container>
  );
}

export default ErrorMessage;