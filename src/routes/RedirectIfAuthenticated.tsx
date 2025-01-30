import React from 'react';
import { Navigate } from 'react-router-dom';
import { routes } from './AppRoutes';

interface RedirectIfAuthenticatedProps {
  isAuthenticated: boolean;
  role: string;
  children: React.ReactNode;
}

const RedirectIfAuthenticated = ({ isAuthenticated, role, children }: RedirectIfAuthenticatedProps) => {
  if (isAuthenticated) {
    if (role === 'admin') {
      return <Navigate to={routes.admin} />;
    } else if (role === 'client') {
      return <Navigate to={routes.clientCatalog} />;
    }
  }
  return <>{children}</>;
};

export default RedirectIfAuthenticated;
