import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import React, { useCallback, useRef } from 'react';
import { FiArrowLeft, FiLock, FiMail, FiUser } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';
import logo from '../../assets/logo.svg';
import Button from '../../components/Button';
import Input from '../../components/Input';
import getValidationErrors from '../../utils/getValidationErrors';
import { AnimationContainer, Background, Container, Content } from './styles';

const SignUp = (): JSX.Element => {
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(async (data = {}) => {
    try {
      const schema = Yup.object().shape({
        name: Yup.string().required('Nome obrigatório'),
        email: Yup.string()
          .required('E-mail obrigatório')
          .email('Digite um e-mail válido'),
        password: Yup.string().min(6, 'No mínimo 6 dígitos'),
      });

      formRef.current?.setErrors({});

      await schema.validate(data, {
        abortEarly: false,
      });
    } catch (error) {
      const errors = getValidationErrors(error);

      formRef.current?.setErrors(errors);
    }
  }, []);

  return (
    <Container>
      <Background />

      <Content>
        <AnimationContainer>
          <img src={logo} alt="Go Barber" />

          <Form ref={formRef} onSubmit={handleSubmit}>
            <h1>Faça seu cadastro</h1>

            <Input icon={FiUser} type="text" name="name" placeholder="Nome" />

            <Input
              icon={FiMail}
              type="email"
              name="email"
              placeholder="E-mail"
            />

            <Input
              icon={FiLock}
              type="password"
              name="password"
              placeholder="Senha"
            />

            <Button type="submit">Cadastrar</Button>
          </Form>

          <Link to="/">
            <FiArrowLeft />
            Voltar para Logon
          </Link>
        </AnimationContainer>
      </Content>
    </Container>
  );
};

export default SignUp;
