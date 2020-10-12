import React from 'react';
import { AuthProvider } from './auth';
import { ToastProvider } from './toast';

interface AppProviderProps {
  children?: React.ReactNode;
}

const AppProvider = ({ children }: AppProviderProps): JSX.Element => {
  return (
    <AuthProvider>
      <ToastProvider>{children}</ToastProvider>
    </AuthProvider>
  );
};

export default AppProvider;
