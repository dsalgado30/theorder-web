import React from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Button,
  Chip,
} from "@heroui/react";

export const columns = [
  { name: "Id", uid: "code" },
  { name: "Fecha y Hora", uid: "date" },
  { name: "Paquete", uid: "package" },
  { name: "Usuario", uid: "user" },
  { name: "Estado", uid: "state" },
  { name: "Domicilio", uid: "domicile" },
  { name: "Opciones", uid: "actions" },
];

export interface Product {
  code: number;
  date: string;
  package: string;
  user: string;
  state: string;
  domicile: string;
}

export const products: Product[] = [
  {
    code: 1,
    date: "24/01/2025 9:35 PM",
    package: "Para llevar",
    user: "Daniela",
    state: "En Espera",
    domicile: "Si",
  },
  {
    code: 2,
    date: "23/01/2025 8:30 PM",
    package: "Para consumo en el sitio",
    user: "Manuel",
    state: "Listo",
    domicile: "No",
  },
  {
    code: 3,
    date: "23/01/2025 8:30 PM",
    package: "Para consumo en el sitio",
    user: "Santiago",
    state: "Despachado",
    domicile: "No",
  },
  {
    code: 4,
    date: "23/01/2025 8:30 PM",
    package: "Para consumo en el sitio",
    user: "Pedro",
    state: "En Preparacion",
    domicile: "No",
  },
];
const statusColorMap = {
  "En Espera": "warning",
  "En Preparacion": "danger",
  Listo: "success",
  Despachado: "default",
};

export default function OrdersList() {
  const renderCell = React.useCallback(
    (product: Product, columnKey: keyof Product | "actions") => {
      const cellValue = product[columnKey as keyof Product];

      switch (columnKey) {
        case "code":
          return (
            <p className="font-bold">
              #{cellValue.toString().padStart(3, "0")}
            </p>
          );
        case "date":
          return <p className="capitalize">{cellValue}</p>;
        case "package":
          return (
            <p className="capitalize">
              <strong>{cellValue}</strong>
            </p>
          );
        case "user":
          return <p className="capitalize">{cellValue}</p>;
        case "state":
          return (
            <Chip
              className="capitalize"
              color={statusColorMap[product.state]}
              size="sm"
              variant="flat"
            >
              {cellValue}
            </Chip>
          );
        case "domicile":
          return <p className="capitalize">{cellValue}</p>;

        case "actions":
          return (
            <Button color="primary" size="sm">
              Ver detalle
            </Button>
          );
        default:
          return cellValue;
      }
    },
    []
  );

  return (
    <>
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
            <TableRow key={item.package}>
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
