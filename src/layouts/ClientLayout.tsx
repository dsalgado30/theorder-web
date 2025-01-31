import { Outlet } from "react-router-dom";
import NavbarApp from "../components/atomic/atoms/Navbar";
import { useAuth } from "../context/auth-context";
import { Button, NavbarItem } from "@heroui/react";
import { clientMenu } from "./Menu";

const ClientLayout = () => {
  const { isAuthenticated, user, onLogout } = useAuth();
  return (
    <>
      <NavbarApp
        isAuthenticated={isAuthenticated}
        email={user?.email}
        fullName={user?.fullName}
        menuItems={clientMenu}
        onLogOut={onLogout}
        centerContent={
          <>
            {clientMenu.map((item, index) => (
              <NavbarItem key={index}>
                <Button color="primary" startContent={item.icon} variant="bordered" >
                  {item.title}
                </Button>
              </NavbarItem>
            ))}
          </>
        }
      />
      <Outlet />
    </>
  );
};

export default ClientLayout;
