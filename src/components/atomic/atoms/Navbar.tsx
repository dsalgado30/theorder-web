import {
    Navbar,
    NavbarBrand,
    NavbarContent
  } from "@heroui/react";
  import logo from '../../../assets/images/logo.png';
  
  interface NavbarAppProps {
    leftContent?: React.ReactNode;
    centerContent?: React.ReactNode;
    rightContent?: React.ReactNode;
  }
  
  const NavbarApp: React.FC<NavbarAppProps> = ({ leftContent, centerContent, rightContent }) => {
    return (
      <Navbar isBordered>
        <NavbarBrand>
          <img src={logo}  alt={`Logo`} className="w-20 object-cover" />
          <p className="font-bold text-inherit">The Order</p>
        </NavbarBrand>
        {leftContent && (
          <NavbarContent className="hidden sm:flex gap-4" justify="start">
            {leftContent}
          </NavbarContent>
        )}
        {centerContent && (
          <NavbarContent className="hidden sm:flex gap-4" justify="center">
            {centerContent}
          </NavbarContent>
        )}
        {rightContent && (
          <NavbarContent justify="end">
            {rightContent}
          </NavbarContent>
        )}
      </Navbar>
    );
  };
  
  export default NavbarApp;
  