import { Button, Form, Input, Image } from "@heroui/react";
import React, { useState } from "react";
import { Action } from "../../../models/action";


interface ProductFormProps {
    onSave?: () => void,
    actionType?: Action;
}

const ProductForm = ({actionType, onSave}:ProductFormProps) => {

  const [action, setAction] = React.useState("");
  const [urlImage, setUrlImage] = useState<string>("");

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files || event.target.files.length == 0) return;
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUrlImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <Form
      className="w-full mx-auto flex-col items-center gap-4"
      validationBehavior="native"
      onReset={() => setAction("null")}
      onSubmit={(e) => {
        e.preventDefault();
        let data = Object.fromEntries(new FormData(e.currentTarget));
        setAction(`submit ${JSON.stringify(data)}`);
        if(onSave) onSave()
      }}
    >
      <Input
        isRequired
        labelPlacement="outside"
        name="productName"
        placeholder="Nombre del producto"
        type="text"
      />
      <Input
        isRequired
        labelPlacement="outside"
        name="description"
        placeholder="Descripcion"
        type="text"
      />
      <Input
        isRequired
        onChange={handleImageChange}
        errorMessage="Seleccione una imagen"
        labelPlacement="outside"
        name="logo"
        accept="image/*"
        placeholder="Seleccione una imagen"
        type="file"
      />
      <Input
        isRequired
        labelPlacement="outside"
        name="price"
        placeholder="Precio"
        type="float"
      />
      {urlImage && <Image alt="HeroUI hero Image" src={urlImage} width={300} />}
      <Button color="primary" type="submit" className="w-1/2 mt-2 mx-auto">
        {actionType == Action.ADD ? 'Agregar':'Guardar'}
      </Button>
    </Form>
  );
};

export default ProductForm;
