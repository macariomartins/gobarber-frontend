import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import React, { useCallback, useContext, useRef } from 'react';
import { FiLock, FiLogIn, FiMail } from 'react-icons/fi';
import * as Yup from 'yup';
import logo from '../../assets/logo.svg';
import Button from '../../components/Button';
import Input from '../../components/Input';
import { AuthContext, SignInCredentials } from '../../context/AuthContext';
import getValidationErrors from '../../utils/getValidationErrors';
import { Background, Container, Content } from './styles';

const SignIn = (): JSX.Element => {
  const formRef = useRef<FormHandles>(null);
  const { user, signIn } = useContext(AuthContext);

  const handleSubmit = useCallback(
    async (signInData: SignInCredentials) => {
      try {
        const schema = Yup.object().shape({
          email: Yup.string()
            .required('E-mail obrigatório')
            .email('Digite um e-mail válido'),
          password: Yup.string().required('Senha obrigatória'),
        });

        formRef.current?.setErrors({});

        await schema.validate(signInData, {
          abortEarly: false,
        });

        signIn(signInData);
      } catch (error) {
        const errors = getValidationErrors(error);

        formRef.current?.setErrors(errors);
      }
    },
    [signIn]
  );

  return (
    <Container>
      <Content>
        <img src={logo} alt="Go Barber" />

        <Form ref={formRef} onSubmit={handleSubmit}>
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
        </Form>

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
