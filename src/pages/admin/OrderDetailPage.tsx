import { useNavigate } from "react-router-dom";
import OrderDetailCard from "../../components/atomic/organisms/OrderDetailCard";
import OrderProductCard from "../../components/atomic/organisms/OrderProductCard";
import { Order, OrderState } from "../../models/order";
import { OrderDetail } from "../../models/order-detail";
import { Button } from "@heroui/react";
import OrderStatusTimeline from "../../components/atomic/organisms/OrderStatusTimeline";
import { OrderStatusHistory } from "../../models/order-status-history";

const orderDetail = new Order(
  "1",
  "2025-02-05",
  OrderState.EnEspera,
  "En Espera",
  "Standard",
  "user123",
  true,
  50000,
  [
    new OrderDetail(
      "P001",
      "Hamburguesa Especial",
      "https://media.istockphoto.com/id/1473452859/es/foto/sabrosa-hamburguesa-con-queso-vaso-de-cola-y-papas-fritas-en-primer-plano-de-bandeja-de-madera.jpg?s=612x612&w=0&k=20&c=cz14RIorGJFn3mFhBFL66PqvXD1nYC_28Cc_OO4mhps=",
      1,
      20000
    ),
    new OrderDetail(
      "P002",
      "Papas Fritas",
      "https://media.istockphoto.com/id/1473452859/es/foto/sabrosa-hamburguesa-con-queso-vaso-de-cola-y-papas-fritas-en-primer-plano-de-bandeja-de-madera.jpg?s=612x612&w=0&k=20&c=cz14RIorGJFn3mFhBFL66PqvXD1nYC_28Cc_OO4mhps=",
      3,
      15000
    ),
  ]
);

const orderTimeline: OrderStatusHistory[] = [
  {
    status: OrderState.EnEspera,
    statusName: "En Espera",
    date: "2025-02-05",
    time: "10:00 AM",
  },
  {
    status: OrderState.EnPreparacion,
    statusName: "En Preparación",
    date: "2025-02-05",
    time: "11:00 AM",
  },
  {
    status: OrderState.Listo,
    statusName: "Listo",
    date: "2025-02-05",
    time: "12:00 PM",
  },
  {
    status: OrderState.Despachado,
    statusName: "Despachado",
    date: "2025-02-05",
    time: "01:00 PM",
  },
];
const OrderDetailPage = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1); // Navega a la página anterior
  };
  return (
    <>
      <div className="mx-4">
        <div className="flex justify-between items-center mb-4 ">
          <h1 className="text-xl font-bold">Detalle del pedido</h1>
          <Button onPress={goBack} color="primary" variant="flat">
            Volver Atrás
          </Button>
        </div>
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/2  items-center pr-2 justify-center">
            {orderDetail.detail.map((item) => (
              <OrderProductCard
                key={item.id}
                image={item.productPhoto}
                name={item.productName}
                price={item.price}
                quantity={item.quantity}
              />
            ))}
          </div>
          <div className="w-full md:w-1/2  items-center pl-2 justify-center  mt-8 md:mt-0">
            <OrderDetailCard
              id={orderDetail.id}
              homeDelivery={orderDetail.homeDelivery}
              packageType={orderDetail.packageType}
              statusCode={orderDetail.statusCode}
              statusName={orderDetail.statusName}
              total={orderDetail.total}
              user={orderDetail.user}
              date={orderDetail.date}
            />
          </div>
        </div>
        <OrderStatusTimeline className="mt-4" timeline={orderTimeline} />
      </div>
    </>
  );
};
export default OrderDetailPage;
