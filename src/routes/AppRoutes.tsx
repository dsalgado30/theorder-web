import { Route, Routes } from "react-router-dom";
import NotFound from "../components/atomic/atoms/NotFound";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import AuthLayout from "../layouts/AuthLayout";


export const routes = {
    home: "/",
    login: "login",
    register: "register",
    root: "..",
}

const AppRoutes = () => {
    return (
      <Routes>
        <Route element={<AuthLayout />}>
          <Route path={routes.login} element={<LoginPage />}></Route>
          <Route path={routes.home} element={<LoginPage />}></Route>
          <Route path={routes.register} element={<RegisterPage />}></Route>
        </Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    );
  };
  
  export default AppRoutes;
  