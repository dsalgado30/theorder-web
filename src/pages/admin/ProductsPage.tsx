import { useRef, useState } from "react";
import ProductList from "../../components/admin/product/ProductList";
import { Button } from "@heroui/react";
import Dialog from "../../components/atomic/molecules/Modal";
import ProductForm from "../../components/admin/product/ProducForm";
import { Action } from "../../models/action";

const ProductsPage = () => {
  const [action, setAction] = useState<Action>(Action.ADD);
  const dialogRef = useRef<{ onOpen: () => void; onClose: () => void }>(null);
  return (
    <>
      <Button
        onPress={() => {
          setAction(Action.ADD)
          dialogRef?.current?.onOpen()
        }}
        color="primary"
        type="submit"
        className="w-40 mb-2"
      >
        Agregar Nuevo
      </Button>
      <Dialog
        ref={dialogRef}
        title={action== Action.ADD ? "Agregar Producto":'Editar Producto'}
        content={
          <ProductForm
            actionType={action}
            onSave={() => {
              dialogRef?.current?.onClose();
            }}
          ></ProductForm>
        }
      />
      <ProductList onEdit={()=> {
        setAction(Action.EDIT)
        dialogRef?.current?.onOpen()
      }} />
    </>
  );
};

export default ProductsPage;
