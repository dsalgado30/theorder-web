import { Card, CardBody, Chip } from "@heroui/react";
import OrderStatus from "./OrderStatus";
import { formatPrice } from "../../../utils/price-format.utils";
import { OrderState } from "../../../models/order";

interface OrderDetailCardProps {
    id: string,
    date: string,
    statusCode: OrderState,
    statusName: string,
    packageType: string,
    user: string,
    homeDelivery: boolean,
    total: number
}
const OrderDetailCard = ({
    id,
    date,
    statusCode,
    statusName,
    packageType,
    user,
    homeDelivery,
    total
}: Readonly<OrderDetailCardProps>) => {
  return (
    <Card>
      <CardBody>
      <table className="w-full text-sm">
          <tbody>
            <tr>
              <td className="font-bold">Número de Pedido:</td>
              <td>#{id}</td>
            </tr>
            <tr>
              <td className="font-bold">Estado:</td>
              <td><OrderStatus state={statusCode} label={statusName} /></td>
            </tr>
            <tr>
              <td className="font-bold">Paquete:</td>
              <td>{packageType}</td>
            </tr>
            <tr>
              <td className="font-bold">A nombre de:</td>
              <td>{user}</td>
            </tr>
            <tr>
              <td className="font-bold">Domicilio:</td>
              <td>{homeDelivery ? "Sí" : "No"}</td>
            </tr>
            <tr>
              <td className="font-bold">Total:</td>
              <td>
                <Chip color="primary" variant="bordered">
                  {formatPrice(total)}
                </Chip>
              </td>
            </tr>
          </tbody>
        </table>
      </CardBody>
    </Card>
  );
};
export default OrderDetailCard;