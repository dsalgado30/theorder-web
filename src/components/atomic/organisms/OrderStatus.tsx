import { Chip } from "@heroui/react";
import { OrderState } from "../../../models/order";

interface OrderStatusProps {
  label?: string;
  state: OrderState;
}

const statusColorMap = new Map<OrderState, "warning" | "danger" | "success" | "default">([
  [OrderState.EnEspera, "warning"],
  [OrderState.EnPreparacion, "danger"],
  [OrderState.Listo, "success"],
  [OrderState.Despachado, "default"],
]);

const getStatusColor = (state: OrderState): "warning" | "danger" | "success" | "default" => {
  return statusColorMap.get(state) || "default";
};

const OrderStatus = ({ label, state }: OrderStatusProps) => {
  return (
    <Chip
      className="capitalize"
      color={getStatusColor(state)}
      size="sm"
      variant="flat"
    >
      {label}
    </Chip>
  );
};

export default OrderStatus;
