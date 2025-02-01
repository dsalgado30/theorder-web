import { Button, Card, CardBody, Form, Input, Image } from "@heroui/react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/use-auth";
import { AuthLogin } from "../../models/auth";
import { routes } from "../../routes/Routes";

const RestaurantForm = () => {
  const [action, setAction] = React.useState("");
  const [urlImage, setUrlImage] = useState<string>("");

  const { onLogin } = useAuth();

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
    <div className="w-full  flex items-center justify-center">
      <Card fullWidth={true} className="w-full max-w-lg">
        <CardBody>
          <Form
            className="w-full mx-auto flex-col items-center gap-4"
            validationBehavior="native"
            onReset={() => setAction("null")}
            onSubmit={(e) => {
              e.preventDefault();
              let data = Object.fromEntries(new FormData(e.currentTarget));
              setAction(`submit ${JSON.stringify(data)}`);
              onLogin(new AuthLogin("", ""));
            }}
          >
            <h1 className="text-center w-full">Informacion</h1>
            <Input
              isRequired
              labelPlacement="outside"
              name="restaurantName"
              placeholder="Nombre del restaurante"
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

            {urlImage && (
              <Image alt="HeroUI hero Image" src={urlImage} width={300} />
            )}
            <Button
              color="primary"
              type="submit"
              className="w-1/2 mt-2 mx-auto"
            >
              Guardar
            </Button>
          </Form>
        </CardBody>
      </Card>
    </div>
  );
};

export default RestaurantForm;
