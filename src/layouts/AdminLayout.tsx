import { Outlet } from "react-router-dom";
import NavbarApp from "../components/atomic/atoms/Navbar";
import Sidebar from "../components/atomic/atoms/Sidebar";
import { useAuth } from "../hooks/use-auth";
import { adminMenu, cookMenu } from "./Menu";
import { Role } from "../models/role";

const AdminLayout = () => {
  const { isAuthenticated, user, onLogout } = useAuth();
  return (
    <>
      <NavbarApp
        menuItems={ user?.role == Role.ADMIN ? adminMenu: cookMenu}
        isAuthenticated={isAuthenticated}
        email={user?.email}
        fullName={user?.fullName}
        onLogOut={onLogout}
      />

      <div className="flex">
        <Sidebar menuItems={user?.role == Role.ADMIN ? adminMenu: cookMenu} />
        <div className="flex-1 p-4">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default AdminLayout;
