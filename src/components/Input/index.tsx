import React, { InputHTMLAttributes } from 'react';
import { IconBaseProps } from 'react-icons';
import { Container } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  icon: React.ComponentType<IconBaseProps>;
}

const Input = ({ icon: Icon, ...props }: InputProps): JSX.Element => {
  return (
    <Container>
      {Icon && <Icon size={20} />}
      <input {...props} />
    </Container>
  );
};

export default Input;
