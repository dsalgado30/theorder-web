import React from 'react';
import { Navigate } from 'react-router-dom';
import { Role } from '../models/role';
import { routes } from './Routes';

interface RedirectIfAuthenticatedProps {
  isAuthenticated: boolean;
  role?: string;
  children: React.ReactNode;
}

const RedirectIfAuthenticated = ({ isAuthenticated, role, children }: RedirectIfAuthenticatedProps) => {
  if (isAuthenticated) {
    if (role === Role.ADMIN || role === Role.COOK) {
      return <Navigate to={routes.admin} />;
    } else if (role === Role.CLIENT) {
      return <Navigate to={routes.clientCatalog} />;
    }
  }
  return <>{children}</>;
};

export default RedirectIfAuthenticated;
