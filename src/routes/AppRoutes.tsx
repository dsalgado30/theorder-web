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
import { useAuth } from "../hooks/use-auth";
import { routes } from "./Routes";
import { Role } from "../models/role";
import RestaurantPage from "../pages/admin/RestaurantPage";
import ProductsPage from "../pages/admin/ProductsPage";

const AppRoutes = () => {

  const {isAuthenticated, user} = useAuth()

  return (
    <Routes>
      <Route path={routes.home} element={
        <RedirectIfAuthenticated isAuthenticated={isAuthenticated} role={user?.role}>
          <Navigate to={routes.login} />
        </RedirectIfAuthenticated>
      } />
      <Route element={<AuthLayout />}>
        <Route path={routes.login} element={
          <RedirectIfAuthenticated isAuthenticated={isAuthenticated} role={user?.role}>
            <LoginPage />
          </RedirectIfAuthenticated>
        } />
        <Route path={routes.register} element={
          <RedirectIfAuthenticated isAuthenticated={isAuthenticated} role={user?.role}>
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
              roles={[Role.CLIENT]}
              userRole={user?.role}
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
              roles={[Role.ADMIN, Role.COOK]}
              userRole={user?.role}
              isAuthenticated={isAuthenticated}
            />
          }
        />
        <Route
          path={routes.restaurant}
          element={
            <ProtectedRoute
              component={RestaurantPage}
              roles={[Role.ADMIN]}
              userRole={user?.role}
              isAuthenticated={isAuthenticated}
            />
          }
        />
        <Route
          path={routes.products}
          element={
            <ProtectedRoute
              component={ProductsPage}
              roles={[Role.ADMIN]}
              userRole={user?.role}
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
