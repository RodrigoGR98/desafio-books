import React, { useEffect } from 'react';

import { Container } from './styles';

//Services
import { isLogged } from '../../session';

//Componentes
import LoginBox from '../../components/LoginBox';

//Arquivos
import bg from '../../assets/bg.png';

function Login() {
  useEffect(() => {
    if (isLogged()) {
      window.location = '/home';
      return;
    }
  }, [])

  return (
    <Container background={bg}>
      <LoginBox />
    </Container>
  );
}

export default Login;