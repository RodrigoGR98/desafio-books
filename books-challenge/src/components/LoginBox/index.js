import React, { useEffect, useState } from 'react';

import { Container, Header, Logo, Button } from './styles';

//Services
import apiBooks from '../../services/api-books';
import { sessionSet } from '../../session';

//Arquivos
import logo from '../../assets/logo.png';

//Componentes
import StyledInput from '../StyledInput';
import ErrorMessage from '../ErrorMessage';

function LoginBox() {
  //Dados usuário
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  //Mensagem de erro
  const [hasError, setHasError] = useState(false);
  const [msgError, setMsgError] = useState('');

  const login = async (e) => {
    if (e) {
      e.preventDefault();
    }

    try {
      const response = await apiBooks.post('/auth/sign-in', { email, password });
      if (response.status === 200) {
        saveTokens(response.headers.authorization, response.headers["refresh-token"], response.data);

        window.location.href = "/home";
      }
    } catch (error) {
      setHasError(true);
      setTimeout(function () {
        setHasError(false);
      }, 5000)
      setTimeout(function () {
        setMsgError('');
      }, 6000)
      setMsgError(error.response.data.errors.message);
    }
  }

  const saveTokens = (authToken, refreshToken, data) => {

    console.log(data);

    const dados = {
      auth: authToken,
      refresh: refreshToken,
      name: data.name,
      gender: data.gender
    }

    sessionSet(dados);
  }

  return (
    <Container>
      <Header>
        <Logo src={logo} />
        <span>Books</span>
      </Header>
      <form onSubmit={login}>
        <StyledInput type={'Email'} value={email} change={setEmail} />
        <StyledInput type={'Senha'} value={password} change={setPassword} />
        <Button type="submit">Entrar</Button>
      </form>
      <ErrorMessage msg={msgError} hasError={hasError} />
    </Container>
  )
}

export default LoginBox;