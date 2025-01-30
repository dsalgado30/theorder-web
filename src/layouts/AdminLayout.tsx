import { Outlet } from "react-router-dom";
import NavbarApp from "../components/atomic/atoms/Navbar";

const AdminLayout = () => {
  return (
    <>
      <NavbarApp />
      <h1>Admin</h1>
      <Outlet />
    </>
  );
};

export default AdminLayout;
