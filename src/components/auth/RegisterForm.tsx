import { Alert, Button, Card, CardBody, Form, Input } from "@heroui/react";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { routes } from "../../routes/Routes";
import { AuthRegister } from "../../models/auth";
import { useAuth } from "../../context/auth-context";
import { useRegister } from "../../hooks/use-auth";
import { User } from "../../models/user";

const RegisterForm = () => {
  const [action, setAction] = React.useState("");
  const [registerRequest, setRegisterRequest] = useState<AuthRegister | null>(
    null
  );
  const { onLoginSuccess } = useAuth();
  const { isLoading, isSuccess, data, error } = useRegister(registerRequest);

  const onRegister = async (request: AuthRegister) => {
    setRegisterRequest(null);
    setTimeout(()=>setRegisterRequest(request),100)
  };

  useEffect(() => {
    if (isSuccess && data) {
      const newUser = new User(
        data.user.fullName,
        data.user.email,
        data.user.role
      );
      onLoginSuccess(newUser);
    }
  }, [isSuccess, data]);


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
            onRegister(new AuthRegister(
              data.firstName as string, 
              data.lastName as string,
              data.email as string,
              data.confirmPassword as string
            ));
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
          <Button isLoading={isLoading} color={isLoading ? "default":"primary"} type="submit" className="w-1/2 mt-2 mx-auto" disabled={isLoading}>
            {isLoading ? 'Cargando...' : 'Registrarse'}
          </Button>
          <Link to={routes.root} className="text-center w-1/2 mx-auto">
            Iniciar Sesión
          </Link>
          {error && (
            <div className="w-full flex items-center my-3">
              <Alert
                color="danger"
                title={`Ocurrio un error al intentar registrarse`}
              />
            </div>
          )}
        </Form>
      </CardBody>
    </Card>
  );
};

export default RegisterForm;
