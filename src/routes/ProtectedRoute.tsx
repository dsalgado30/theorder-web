import React from 'react';
import { Navigate } from 'react-router-dom';
import { Role } from '../models/role';
import { routes } from './Routes';

interface ProtectedRouteProps {
  component: React.ComponentType<any>;
  roles?: string[];
  userRole?: string;
  isAuthenticated: boolean;
}

const ProtectedRoute = ({ component: Component, roles, userRole, isAuthenticated }: ProtectedRouteProps) => {
  if (!isAuthenticated) {
    return <Navigate to={routes.login} />;
  }
  
  if (roles && !roles.includes(userRole??"")) {
    if (userRole === Role.ADMIN || userRole === Role.COOK) {
        return <Navigate to={routes.admin} />;
      } else if (userRole === Role.CLIENT) {
        return <Navigate to={routes.clientCatalog} />;
      } else {
        return <Navigate to={routes.login} />;
      }
  }

  if ((userRole === Role.ADMIN || userRole === Role.COOK) && location.pathname.startsWith('/client')) {
    return <Navigate to={routes.admin} />;
  }

  if (userRole === Role.CLIENT && location.pathname.startsWith('/admin')) {
    return <Navigate to={routes.clientCatalog} />;
  }

  return <Component />;
};

export default ProtectedRoute;
