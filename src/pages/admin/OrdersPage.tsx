import OrdersList from "../../components/admin/orders/OrdersList";
import { useRef } from "react";
import { Button } from "@heroui/react";

const OrdersPage = () => {
  const dialogRef = useRef<{ onOpen: () => void; onClose: () => void }>(null);

  return (
    <>
      <Button
        onPress={() => dialogRef?.current?.onOpen()}
        color="primary"
        type="submit"
        className="w-40 mb-2"
      >
        Actualizar
      </Button>
      <OrdersList />
    </>
  );
};

  
  export default OrdersPage;