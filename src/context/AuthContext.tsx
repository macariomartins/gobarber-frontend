import React, { createContext, useCallback, useState } from 'react';
import api from '../services/api';

export interface SignInCredentials {
  email: string;
  password: string;
}

export interface AuthContextData {
  user: object;
  signIn(credentials: SignInCredentials): Promise<void>;
}

export const AuthContext = createContext<AuthContextData>(
  {} as AuthContextData
);

export interface AuthProviderProps {
  children?: React.ReactNode;
}

interface AuthData {
  token: string;
  user: object;
}

export const AuthProvider = ({ children }: AuthProviderProps): JSX.Element => {
  const [authData, setAuthData] = useState<AuthData>(() => {
    const token = localStorage.getItem('@GoBarber:token');
    const user = localStorage.getItem('@GoBarber:user');

    if (token && user)
      return {
        token,
        user: JSON.parse(user),
      };

    return {} as AuthData;
  });

  const signIn = useCallback(async ({ email, password }: SignInCredentials) => {
    const response = await api.post('sessions', {
      email,
      password,
    });

    const { token, user } = response.data;

    localStorage.setItem('@GoBarber:token', token);
    localStorage.setItem('@GoBarber:user', JSON.stringify(user));

    setAuthData({ token, user });
  }, []);

  return (
    <AuthContext.Provider value={{ user: authData.user, signIn }}>
      {children}
    </AuthContext.Provider>
  );
};
