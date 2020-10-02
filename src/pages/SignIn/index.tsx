import React from 'react';
import { FiLock, FiLogIn, FiMail } from 'react-icons/fi';
import logo from '../../assets/logo.svg';
import Button from '../../components/Button';
import Input from '../../components/Input';
import { Background, Container, Content } from './styles';

const SignIn = (): JSX.Element => {
  return (
    <Container>
      <Content>
        <img src={logo} alt="Go Barber" />

        <form>
          <h1>Faça seu logon</h1>

          <Input icon={FiMail} type="email" name="email" placeholder="E-mail" />

          <Input
            icon={FiLock}
            type="password"
            name="password"
            placeholder="Senha"
          />

          <Button type="submit">Entrar</Button>

          <a href="forgot">Esqueci minha senha</a>
        </form>

        <a href="new-account">
          <FiLogIn />
          Criar conta
        </a>
      </Content>

      <Background />
    </Container>
  );
};

export default SignIn;
