import React from 'react';
import { Navigate } from 'react-router-dom';
import { routes } from './AppRoutes';

interface ProtectedRouteProps {
  component: React.ComponentType<any>;
  roles?: string[];
  userRole: string;
  isAuthenticated: boolean;
}

const ProtectedRoute = ({ component: Component, roles, userRole, isAuthenticated }: ProtectedRouteProps) => {
  if (!isAuthenticated) {
    return <Navigate to={routes.login} />;
  }

  if (roles && !roles.includes(userRole)) {
    if (userRole === 'admin' || userRole === 'cook') {
        return <Navigate to={routes.admin} />;
      } else if (userRole === 'client') {
        return <Navigate to={routes.clientCatalog} />;
      } else {
        return <Navigate to={routes.login} />;
      }
  }

  if (userRole === 'admin' && location.pathname.startsWith('/client')) {
    return <Navigate to={routes.admin} />;
  }

  if (userRole === 'client' && location.pathname.startsWith('/admin')) {
    return <Navigate to={routes.clientCatalog} />;
  }

  return <Component />;
};

export default ProtectedRoute;
