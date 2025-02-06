import { Card, CardBody, Divider } from "@heroui/react";
import { OrderStatusHistory } from "../../../models/order-status-history";
import OrderStatus from "./OrderStatus";

interface OrderStatusTimelineProps {
  timeline: OrderStatusHistory[];
  className?: string
}

const OrderStatusTimeline = ({ timeline, className }: OrderStatusTimelineProps) => {
  return (
    <Card className={`max-w-[400px] ${className}`}>
      <CardBody>
        <h2 className="text-center text-xl font-bold mb-4">Historial del pedido</h2>
        <ul className="timeline">
          {timeline.map((item, index) => (
            <li key={index} className="mb-4">
              <div className="flex justify-between">
                <OrderStatus state={item.status} label={item.statusName} />
                <span>{item.date} {item.time}</span>
              </div>
              {index < timeline.length - 1 && <Divider className="mt-2" />}
            </li>
          ))}
        </ul>
      </CardBody>
    </Card>
  );
};

export default OrderStatusTimeline;
