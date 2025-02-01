// context/auth-context.ts
import { createContext, useState, useEffect, useContext } from 'react';
import { User } from "../models/user";
import { AuthLogin, AuthRegister } from '../models/auth';
import { Role } from '../models/role';

interface AuthContextType {
  isAuthenticated: boolean;
  user: User | null;
  onLogin: (request: AuthLogin) => void;
  onRegister: (request: AuthRegister) => void;
  onLogout: () => void;
}

export const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: any) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => {
    const savedAuth = localStorage.getItem('isAuthenticated');
    return savedAuth ? JSON.parse(savedAuth) : false;
  });

  const [user, setUser] = useState<User | null>(() => {
    const savedUser = localStorage.getItem('user');
    return savedUser ? JSON.parse(savedUser) : null;
  });

  useEffect(() => {
    localStorage.setItem('isAuthenticated', JSON.stringify(isAuthenticated));
    localStorage.setItem('user', JSON.stringify(user));
  }, [isAuthenticated, user]);

  const onLogin = (request: AuthLogin) => {
    const newUser = new User("Daniela Salgado", "daniela@example.com", Role.ADMIN);
    setUser(newUser);
    setIsAuthenticated(true);
  };

  const onRegister = (request: AuthRegister) => {};

  const onLogout = () => {
    setIsAuthenticated(false);
    setUser(null);
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('user');
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, onLogin, onRegister, onLogout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
