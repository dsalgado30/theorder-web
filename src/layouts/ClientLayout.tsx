import { Outlet } from "react-router-dom";
import NavbarApp from "../components/atomic/atoms/Navbar";

const ClientLayout = () => {
  return (
    <>
      <NavbarApp />
      <Outlet />
    </>
  );
};

export default ClientLayout;
