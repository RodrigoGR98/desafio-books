import React from 'react';

import { Container, Header, Logo, Button } from './styles';

//Arquivos
import logo from '../../assets/logo.png';

//Componentes
import StyledInput from '../StyledInput';

function LoginBox() {
  return (
    <Container>
      <Header>
        <Logo src={logo} />
        <span>Books</span>
      </Header>
      <StyledInput type={'Email'} />
      <StyledInput type={'Senha'} />
      <Button>Entrar</Button>
    </Container>
  )
}

export default LoginBox;