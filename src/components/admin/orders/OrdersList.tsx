import React from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Button
} from "@heroui/react";
import OrderStatus from "../../atomic/organisms/OrderStatus";
import { useNavigate } from "react-router-dom";
import { routes } from "../../../routes/Routes";
import { Order, OrderState } from "../../../models/order";

export const columns = [
  { name: "Id", uid: "id" },
  { name: "Fecha y Hora", uid: "date" },
  { name: "Paquete", uid: "packageType" },
  { name: "Usuario", uid: "user" },
  { name: "Estado", uid: "statusCode" },
  { name: "Domicilio", uid: "homeDelivery" },
  { name: "Opciones", uid: "actions" },
];

export const orders: Order[] = [
  {
    id: "001",
    date: "2025-02-05 12:00:00",
    packageType: "Para llevar",
    user: "Daniela",
    statusCode: OrderState.EnEspera,
    statusName: "Despachado",
    homeDelivery: true,
    total: 20000,
    detail: []
  },
  {
    id: "002",
    date: "2025-02-05 12:00:00",
    packageType: "Para llevar",
    user: "Daniela",
    statusCode: OrderState.EnPreparacion,
    statusName: "En preparacion",
    homeDelivery: true,
    total: 34000,
    detail: []

  },
  {
    id: "003",
    date: "2025-02-05 12:00:00",
    packageType: "Para llevar",
    user: "Daniela",
    statusCode: OrderState.Listo,
    statusName: "Listo",
    homeDelivery: true,
    total: 10000,
    detail: []

  },
  {
    id: "004",
    date: "2025-02-05 12:00:00",
    packageType: "Para llevar",
    user: "Daniela",
    statusCode: OrderState.Despachado,
    statusName: "Despachado",
    homeDelivery: true,
    total: 40000,
    detail: []

  },
];

export default function OrdersList() {
  const navigate = useNavigate();

  const goToOrderDetail = (orderId: string) => {
    navigate(routes.orderDetail.replace(":orderId", orderId));
  };


  const renderCell = React.useCallback(
    (order: Order, columnKey: keyof Order | "actions") => {
      const cellValue = order[columnKey as keyof Order];
      switch (columnKey) {
        case "id":
          return (
            <p className="font-bold">
              #{cellValue.toString().padStart(3, "0")}
            </p>
          );
        case "date":
          return <p className="capitalize">{order.date}</p>;
        case "packageType":
          return (
            <p className="capitalize">
              <strong>{cellValue.toString()}</strong>
            </p>
          );
        case "user":
          return <p className="capitalize">{order.user}</p>;
        case "statusCode":
          return (
            <OrderStatus state={order.statusCode} label={order.statusName} />
          );
        case "homeDelivery":
          return <p className="capitalize">{cellValue ? 'Si':'No'}</p>;

        case "actions":
          return (
            <Button color="primary" size="sm" onPress={()=> goToOrderDetail(order.id)}>
              Ver detalle
            </Button>
          );
        default:
          return (<h1></h1>);
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
        <TableBody items={orders}>
          {(item) => (
            <TableRow key={item.packageType}>
              {(columnKey) => (
                <TableCell>
                  {renderCell(
                    item,
                    columnKey.toString() as keyof Order | "actions"
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
