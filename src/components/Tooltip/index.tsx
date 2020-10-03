import React from 'react';
import { Container } from './styles';

interface TooltipProps {
  title: string;
  children?: React.ReactNode;
  className?: string;
}

const Tooltip = ({ title, children, className }: TooltipProps): JSX.Element => {
  return (
    <Container className={className}>
      <span>{title}</span>
      {children}
    </Container>
  );
};

export default Tooltip;
