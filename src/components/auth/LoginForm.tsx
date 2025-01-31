import { Button, Card, CardBody, Form, Input } from "@heroui/react";
import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/use-auth";
import { AuthLogin } from "../../models/auth";
import { routes } from "../../routes/Routes";

const LoginForm = () => {
  const [action, setAction] = React.useState("");
  const { onLogin } = useAuth();

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
            onLogin(new AuthLogin("",""))
          }}
        >
          <h1 className="text-center w-full">Iniciar Sesión</h1>
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
          <Button color="primary" type="submit" className="w-1/2 mt-2 mx-auto">
            Ingresar
          </Button>
          <Link to={routes.register} className="text-center w-1/2 mx-auto">
            Registrarse
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

export default LoginForm;
