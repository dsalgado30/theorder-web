import OrdersList from "../../components/admin/orders/OrdersList";
import { useRef } from "react";
import { Button } from "@heroui/react";
import Dialog from "../../components/atomic/molecules/Modal";
import OrdersForm from "../../components/admin/orders/OrdersForm";

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
      <Dialog

        ref={dialogRef}
        title="Actualizar Pedidos"
        content={
          <OrdersForm
            onSave={() => {
              dialogRef?.current?.onClose();
            }}
          ></OrdersForm>
        }
      />
      <OrdersList />
    </>
  );
};

  
  export default OrdersPage;