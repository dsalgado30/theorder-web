import React, { useRef } from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Image,
  Tooltip
} from "@heroui/react";
import { EditIcon } from "../../atomic/atoms/icons/EditIcon";
import { DeleteIcon } from "../../atomic/atoms/icons/DeleteIcon";
import Alert from "../../atomic/molecules/Alert";
import { Product } from "../../../models/product";
import { formatPrice } from "../../../utils/price-format.utils";

export const columns = [
  { name: "Codigo", uid: "code" },
  { name: "Nombre", uid: "name" },
  { name: "Precio", uid: "price" },
  { name: "Foto", uid: "photo" },
  { name: "Opciones", uid: "actions" },
];


export const products: Product[] = [
  {
    code: "1",
    description: "",
    name: "Pizza",
    price: 8000,
    photo: "https://imag.bonviveur.com/hamburguesa-clasica.webp",
  },
  {
    code: "2",
    description: "",
    name: "Hamburguesa",
    price: 8000,
    photo: "https://imag.bonviveur.com/hamburguesa-clasica.webp",
  },
];



interface ProductListProps {
  onEdit?: () => void;
  onDelete?: () => void;
}

export default function ProductList({ onEdit, onDelete }: ProductListProps) {
  const alertRef = useRef<{ onOpen: () => void; onClose: () => void }>(null);

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
                  <EditIcon onClick={onEdit} />
                </span>
              </Tooltip>
              <Tooltip color="danger" content="Delete user">
                <span className="text-lg text-danger cursor-pointer active:opacity-50">
                  <DeleteIcon
                    onClick={() => {
                      alertRef.current?.onOpen();
                    }}
                  />
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
      <Alert
        ref={alertRef}
        onCloseCallback={(confirmed: boolean) => {
          console.log(confirmed);
        }}
        title="Notificacion"
        description="Esta seguro que desea eliminar este registro ?"
      />
    </>
  );
}
