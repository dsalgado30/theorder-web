import {
  Button,
  Card,
  CardBody,
  Form,
  Input,
  Image,
  Alert,
} from "@heroui/react";
import React, { useState, useEffect } from "react";
import { useFindCompany, useUpdateCompany } from "../../hooks/use-company";
import { updateCompanyApi } from "../../services/company.service";
import { UpdateCompany } from "../../models/company";

const RestaurantForm = () => {
  const [action, setAction] = useState("");
  const [urlImage, setUrlImage] = useState<string>("");
  const [formData, setFormData] = useState({
    restaurantName: "",
    logo: "",
  });
  const [companyRequest, setCompanyRequest] = useState<UpdateCompany | null>(
    null
  );

  const { isLoading, isSuccess, data, error } = useFindCompany();
  const {
    isLoading: isLoadingUpdate,
    isSuccess: isSuccessUpdate,
    error: errorUpdate,
  } = useUpdateCompany(companyRequest);

  const onUpdate = async (request: UpdateCompany) => {
    setCompanyRequest(null);
    setTimeout(() => setCompanyRequest(request), 100);
  };

  useEffect(() => {
    if (isSuccess && data) {
      setFormData({
        restaurantName: data.name,
        logo: data.photo,
      });
      setUrlImage(data.photo);
    }
  }, [isSuccess, data]);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files || event.target.files.length === 0) return;
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
    <div className="w-full flex items-center justify-center">
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
              onUpdate(
                new UpdateCompany(data.restaurantName as string, urlImage)
              );
            }}
          >
            <h1 className="text-center w-full">Informacion</h1>
            <Input
              isRequired
              labelPlacement="outside"
              name="restaurantName"
              placeholder="Nombre del restaurante"
              type="text"
              value={formData.restaurantName}
              onChange={(e) =>
                setFormData({ ...formData, restaurantName: e.target.value })
              }
            />
            <Input
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
              color={isLoadingUpdate ? "default" : "primary"}
              type="submit"
              isLoading={isLoadingUpdate}
              className="w-1/2 mt-2 mx-auto"
              disabled={isLoadingUpdate}
            >
              {isLoadingUpdate ? "Cargando..." : "Guardar"}
            </Button>

            {isSuccessUpdate && (
              <div className="w-full flex items-center my-3">
                <Alert
                  color="success"
                  title={`Se ha actualizado correctamente la informacion.`}
                />
              </div>
            )}
          </Form>
        </CardBody>
      </Card>
    </div>
  );
};

export default RestaurantForm;
