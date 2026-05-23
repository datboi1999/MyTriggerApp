import React, { createContext, useCallback, useEffect, useState } from 'react';

export type AuthUser = {
  id: string;
  name: string;
  email: string;
};

export type AuthContextType = {
  isAuthenticated: boolean;
  user: AuthUser | null;
  authReady: boolean;
  login: () => void;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType>({
  isAuthenticated: false,
  user: null,
  authReady: false,
  login: () => {},
  logout: () => {},
});

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState<AuthUser | null>(null);
  const [authReady, setAuthReady] = useState(false);

  useEffect(() => {
    const restoreSession = async () => {
      // Simulate secure session restoration.
      // Replace this with real secure storage or token verification.
      await new Promise((resolve) => setTimeout(resolve, 500));
      const activeSession = false;

      setIsAuthenticated(activeSession);
      setUser(activeSession ? { id: 'trigger-demo-user', name: 'TRIGGER User', email: 'user@trigger.app' } : null);
      setAuthReady(true);
    };

    restoreSession();
  }, []);

  const login = useCallback(() => {
    setIsAuthenticated(true);
    setUser({
      id: 'trigger-demo-user',
      name: 'TRIGGER User',
      email: 'user@trigger.app',
    });
  }, []);

  const logout = useCallback(() => {
    setIsAuthenticated(false);
    setUser(null);
  }, []);

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, authReady, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
