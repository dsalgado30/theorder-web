import { Routes, Route, Navigate } from "react-router-dom";
import NotFound from "../components/atomic/atoms/NotFound";
import LoginPage from "../pages/auth/LoginPage";
import RegisterPage from "../pages/auth/RegisterPage";
import AuthLayout from "../layouts/AuthLayout";
import ClientLayout from "../layouts/ClientLayout";
import ClientCatalogPage from "../pages/client/ClientCatalogPage";
import ProtectedRoute from "./ProtectedRoute";
import AdminLayout from "../layouts/AdminLayout";
import AdminPage from "../pages/admin/AdminPage";
import RedirectIfAuthenticated from "./RedirectIfAuthenticated";

export const routes = {
  home: "/",
  login: "/login",
  register: "/register",
  clientCatalog: "/client/catalog",
  admin: "/admin",
  root: "..",
};

const AppRoutes = () => {
  const role: string = "client"; // Este valor debería venir de tu estado de autenticación
  const isAuthenticated = true; // Este valor debería venir de tu estado de autenticación

  return (
    <Routes>
      <Route path={routes.home} element={
        <RedirectIfAuthenticated isAuthenticated={isAuthenticated} role={role}>
          <Navigate to={routes.login} />
        </RedirectIfAuthenticated>
      } />
      <Route element={<AuthLayout />}>
        <Route path={routes.login} element={
          <RedirectIfAuthenticated isAuthenticated={isAuthenticated} role={role}>
            <LoginPage />
          </RedirectIfAuthenticated>
        } />
        <Route path={routes.register} element={
          <RedirectIfAuthenticated isAuthenticated={isAuthenticated} role={role}>
            <RegisterPage />
          </RedirectIfAuthenticated>
        } />
      </Route>
      <Route element={<ClientLayout />}>
        <Route
          path={routes.clientCatalog}
          element={
            <ProtectedRoute
              component={ClientCatalogPage}
              roles={['client']}
              userRole={role}
              isAuthenticated={isAuthenticated}
            />
          }
        />
      </Route>
      <Route element={<AdminLayout />}>
        <Route
          path={routes.admin}
          element={
            <ProtectedRoute
              component={AdminPage}
              roles={['admin']}
              userRole={role}
              isAuthenticated={isAuthenticated}
            />
          }
        />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
