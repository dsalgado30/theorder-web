import { Button, Card, CardBody, Form, Input } from "@heroui/react";
import React from "react";
import { Link } from "react-router-dom";
import { routes } from "../../routes/AppRoutes";

const RegisterForm = () => {
  const [action, setAction] = React.useState("");
  return (
    <Card fullWidth={true} className="w-full max-w-md">
      <CardBody>
        <Form
          className="w-full mx-auto flex flex-col items-center gap-4"
          validationBehavior="native"
          onReset={() => setAction("null")}
          onSubmit={(e) => {
            e.preventDefault();
            let data = Object.fromEntries(new FormData(e.currentTarget));
            setAction(`submit ${JSON.stringify(data)}`);
          }}
        >
          <h1 className="text-center w-full">Registrarse</h1>
          
          <Input
            isRequired
            errorMessage="Por favor ingrese su nombre"
            labelPlacement="outside"
            name="firstName"
            placeholder="Nombre"
            type="text"
          />
          <Input
            isRequired
            errorMessage="Por favor ingrese sus apellidos"
            labelPlacement="outside"
            name="lastName"
            placeholder="Apellidos"
            type="text"
          />
          <Input
            isRequired
            errorMessage="Por favor ingrese un email válido"
            labelPlacement="outside"
            name="email"
            placeholder="Correo"
            type="email"
          />
          <Input
            isRequired
            errorMessage="Por favor ingrese una contraseña válida"
            labelPlacement="outside"
            name="password"
            placeholder="Ingrese su contraseña"
            type="password"
          />
          <Input
            isRequired
            errorMessage="Por favor confirme su contraseña"
            labelPlacement="outside"
            name="confirmPassword"
            placeholder="Confirme su contraseña"
            type="password"
          />
          <Button color="warning" type="submit" className="w-1/2 mt-2 mx-auto">
            Registrarse
          </Button>
          <Link to={routes.root} className="text-center w-1/2 mx-auto">
            Iniciar Sesión
          </Link>
          {action && (
            <div className="text-small text-default-500">
              Action: <code>{action}</code>
            </div>
          )}
        </Form>
      </CardBody>
    </Card>
  );
};

export default RegisterForm;
