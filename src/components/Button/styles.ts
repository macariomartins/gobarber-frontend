import { shade } from 'polished';
import styled from 'styled-components';

export const Container = styled.button`
  background: #ff9000;
  color: #312e38;
  border-radius: 10px;
  border: 0;
  padding: 0 16px;
  width: 100%;
  height: 56px;
  font-weight: 500;
  margin-top: 16px;
  transition: background-color 200ms;

  &:hover {
    background: ${shade(0.2, '#FF9000')};
  }
`;
