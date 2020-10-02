import React from 'react';
import { FiArrowLeft, FiLock, FiMail, FiUser } from 'react-icons/fi';
import logo from '../../assets/logo.svg';
import Button from '../../components/Button';
import Input from '../../components/Input';
import { Background, Container, Content } from './styles';

const SignUp = (): JSX.Element => {
  return (
    <Container>
      <Background />

      <Content>
        <img src={logo} alt="Go Barber" />

        <form>
          <h1>Faça seu cadastro</h1>

          <Input icon={FiUser} type="text" name="name" placeholder="Nome" />

          <Input icon={FiMail} type="email" name="email" placeholder="E-mail" />

          <Input
            icon={FiLock}
            type="password"
            name="password"
            placeholder="Senha"
          />

          <Button type="submit">Cadastrar</Button>
        </form>

        <a href="new-account">
          <FiArrowLeft />
          Voltar para Logon
        </a>
      </Content>
    </Container>
  );
};

export default SignUp;
