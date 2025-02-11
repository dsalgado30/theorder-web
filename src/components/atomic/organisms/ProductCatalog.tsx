import {
  Card,
  CardHeader,
  CardBody,
  Image,
  CardFooter,
  Button,
} from "@heroui/react";
import { formatPrice } from "../../../utils/price-format.utils";

interface ProductCatalogCardProps {
  name: string;
  description: string;
  image: string;
  price: number;
}
const ProductCatalogCard = ({
  name,
  description,
  image,
  price,
}: Readonly<ProductCatalogCardProps>) => {
  return (
    <Card className="py-4 w-50">
      <CardHeader className="pb-0 w-xs px-4 flex-col items-start">
        <Image
          alt="Card background"
          className="object-cover rounded-xl"
          src={image}
          width={270}
        />
      </CardHeader>
      <CardBody className="overflow-visible py-2">
        <p className="text-tiny uppercase font-bold">{name}</p>
        <small className="text-default-500 mb-2">{description}</small>
        <h4 className="font-bold text-large text-center">{formatPrice(price)}</h4>
      </CardBody>
      <CardFooter>
        <Button color="primary" className="w-1/2 mt-2 mx-auto">
          Agregar
        </Button>
      </CardFooter>
    </Card>
  );
};
export default ProductCatalogCard;
