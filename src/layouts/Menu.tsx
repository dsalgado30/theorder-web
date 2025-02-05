import {  BookmarkIcon, BuildingStorefrontIcon, HomeIcon, ShoppingCartIcon, TableCellsIcon, UserGroupIcon } from "@heroicons/react/16/solid";


import { MenuItem } from "../components/atomic/atoms/MenuItem";
import { routes } from "../routes/Routes";

export const adminMenu: MenuItem[] = [
  {
    code: "HOME",
    title: "Inicio",
    path: routes.home,
    icon: <HomeIcon className="h-5 w-5 mr-2" />
  },
  {
    code: "MY_RESTAURANT",
    title: "Mi Restaurante",
    path: routes.restaurant,
    icon: <BuildingStorefrontIcon className="h-5 w-5 mr-2" />
  },
  {
    code: "PRODUCTS",
    title: "Productos",
    path: routes.products,
    icon: <BookmarkIcon className="h-5 w-5 mr-2" />
  },
  {
    code: "USERS",
    title: "Usuarios",
    path: routes.users,
    icon: <UserGroupIcon className="h-5 w-5 mr-2" />
  },
  {
    code: "ORDERS",
    title: "Pedidos",
    path: routes.orders,
    icon: <ShoppingCartIcon className="h-5 w-5 mr-2" />
  },
  {
    code: "HISTORY",
    title: "Historial",
    path: routes.history,
    icon: <TableCellsIcon className="h-5 w-5 mr-2" />
  }
];


export const cookMenu: MenuItem[] = [
  {
    code: "HOME",
    title: "Inicio",
    path: routes.home,
    icon: <HomeIcon className="h-5 w-5 mr-2" />
  },
  {
    code: "ORDERS",
    title: "Pedidos",
    path: routes.home,
    icon: <ShoppingCartIcon className="h-5 w-5 mr-2" />
  },
  {
    code: "HISTORY",
    title: "Historial",
    path: routes.home,
    icon: <TableCellsIcon className="h-5 w-5 mr-2" />
  }
];


export const clientMenu: MenuItem[] = [
  {
    code: "HOME",
    title: "Inicio",
    path: routes.home,
    icon: <HomeIcon className="h-5 w-5 mr-2" />
  },
  {
    code: "VIEW_ORDER",
    title: "Ver pedido",
    path: routes.home,
    icon: <ShoppingCartIcon className="h-5 w-5 mr-2" />
  },
  {
    code: "HISTORY",
    title: "Historial",
    path: routes.home,
    icon: <TableCellsIcon className="h-5 w-5 mr-2" />
  }
];