import { Button } from "@heroui/react";
import { Link } from "react-router-dom";
import { MenuItem } from "./MenuItem";
interface SidebarProps {
  menuItems: Array<MenuItem>;
}
const Sidebar = ({ menuItems }: SidebarProps) => {
  return (
    <div className="h-screen w-64 border-2 border-orange-500 text-black rounded-lg hidden sm:block">
      <div className="p-4">
        <h1 className="text-2xl font-bold text-center">The Order</h1>
      </div>
      <nav className="mt-10 flex flex-col items-center gap-4">
        {menuItems.map((item, index) => (
          <Link key={index.toString()} to={item.path}>
            <Button color="primary" variant="bordered" className="w-48">
              {item.icon}
              {item.title}
            </Button>
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
