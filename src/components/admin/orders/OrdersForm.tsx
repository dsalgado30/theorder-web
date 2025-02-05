import { Button, Form, Input } from "@heroui/react";
import React, { useState } from "react";
import { Action } from "../../../models/action";

interface OrdersFormProps {
  onSave?: () => void;
  actionType?: Action;
}

const OrdersForm = ({ actionType, onSave }: OrdersFormProps) => {
  const [action, setAction] = React.useState("");

  return (
    <Form
      className="w-full mx-auto flex-col items-center gap-4"
      validationBehavior="native"
      onReset={() => setAction("null")}
      onSubmit={(e) => {
        e.preventDefault();
        let data = Object.fromEntries(new FormData(e.currentTarget));
        setAction(`submit ${JSON.stringify(data)}`);
        if (onSave) onSave();
      }}
    >
      <Input
        isRequired
        labelPlacement="outside"
        name="code"
        placeholder="ID"
        type="text"
      />
      <Input
        isRequired
        labelPlacement="outside"
        name="lastName"
        placeholder="Apellidos"
        type="text"
      />
      <Input
        isRequired
        labelPlacement="outside"
        name="email"
        placeholder="Correo"
        type="text"
      />
      <Input
        isRequired
        labelPlacement="outside"
        name="role"
        placeholder="Rol"
        type="text"
      />
      <Input
        isRequired
        labelPlacement="outside"
        name="password"
        placeholder="Contraseña"
        type="password"
      />
      <Input
        isRequired
        labelPlacement="outside"
        name="password"
        placeholder="Confirmar Contraseña"
        type="password"
      />

      <Button color="primary" type="submit" className="w-1/2 mt-2 mx-auto">
            {actionType == Action.ADD ? 'Agregar':'Guardar'}
      </Button>
    </Form>
  );
};

export default OrdersForm;
