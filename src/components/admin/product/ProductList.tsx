import React from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Image,
  Tooltip,
  Button,
} from "@heroui/react";
import { EditIcon } from "../../atomic/atoms/icons/EditIcon";
import { DeleteIcon } from "../../atomic/atoms/icons/DeleteIcon";

export const columns = [
  { name: "Codigo", uid: "code" },
  { name: "Nombre", uid: "name" },
  { name: "Precio", uid: "price" },
  { name: "Foto", uid: "photo" },
  { name: "Opciones", uid: "actions" },
];

export interface Product {
  code: number;
  name: string;
  price: number;
  photo: string;
}

export const products: Product[] = [
  {
    code: 1,
    name: "Pizza",
    price: 8000,
    photo:
      "https://imag.bonviveur.com/hamburguesa-clasica.webp",
  },
  {
    code: 2,
    name: "Hamburguesa",
    price: 8000,
    photo:
      "https://imag.bonviveur.com/hamburguesa-clasica.webp",
  },
];

const formatPrice = (price: number) => {
  return new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
  }).format(price);
};

export default function ProductList() {
  const renderCell = React.useCallback(
    (product: Product, columnKey: keyof Product | "actions") => {
      const cellValue = product[columnKey as keyof Product];

      switch (columnKey) {
        case "code":
          return <p className="font-bold">{cellValue}</p>;
        case "name":
          return <p className="capitalize">{cellValue}</p>;
        case "price":
          return (
            <p className="font-medium text-sm capitalize">
              {formatPrice(cellValue as number)}
            </p>
          );
        case "photo":
          return (
            <Image alt="hero Image" src={cellValue as string} width={50} />
          );
        case "actions":
          return (
            <div className="relative flex items-center gap-2">
              <Tooltip content="Edit user">
                <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                  <EditIcon />
                </span>
              </Tooltip>
              <Tooltip color="danger" content="Delete user">
                <span className="text-lg text-danger cursor-pointer active:opacity-50">
                  <DeleteIcon />
                </span>
              </Tooltip>
            </div>
          );
        default:
          return cellValue;
      }
    },
    []
  );

  return (
    <>
      <Button color="primary" type="submit" className="w-40 mb-2">
        Crear Nuevo
      </Button>

      <Table aria-label="Example table with custom cells">
        <TableHeader columns={columns}>
          {(column) => (
            <TableColumn
              key={column.uid}
              align={column.uid === "actions" ? "center" : "start"}
            >
              {column.name}
            </TableColumn>
          )}
        </TableHeader>
        <TableBody items={products}>
          {(item) => (
            <TableRow key={item.code}>
              {(columnKey) => (
                <TableCell>
                  {renderCell(
                    item,
                    columnKey.toString() as keyof Product | "actions"
                  )}
                </TableCell>
              )}
            </TableRow>
          )}
        </TableBody>
      </Table>
    </>
  );
}
