import React from 'react';

import { Container } from './styles';

//Componentes
import LoginBox from '../../components/LoginBox';

//Arquivos
import bg from '../../assets/bg.png';

function Login() {
  return (
    <Container background={bg}>
      <LoginBox />
    </Container>
  );
}

export default Login;