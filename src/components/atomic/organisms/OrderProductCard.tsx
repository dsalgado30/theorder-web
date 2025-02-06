import { Card, CardBody, Image } from "@heroui/react";
import { formatPrice } from "../../../utils/price-format.utils";

interface OrderProductCardProps {
  image: string;
  name: string;
  price: number;
  quantity: number;
}
const OrderProductCard = ({
  image,
  name,
  price,
  quantity,
}: Readonly<OrderProductCardProps>) => {
  return (
    <Card className="mt-2">
      <CardBody>
        <div className="flex gap-3">
          <Image
            alt="heroui logo"
            height={40}
            radius="sm"
            src={image}
            width={40}
          />
          <div className="flex flex-col w-full">
            <p className="text-md">{name}</p>
            <div className="flex justify-between">
              <p className="text-small text-default-500">
                Cantidad: {quantity}
              </p>
              <p className="text-medium text-default-500">{formatPrice(price)}</p>
            </div>
          </div>
        </div>
      </CardBody>
    </Card>
  );
};
export default OrderProductCard;
