import { Stars } from "../stars";
interface InfoProductsProps {
  name: string;
  price: number;
  stars: number;
}

export function InfoProducts({ name, price }: InfoProductsProps) {
  return (
    <>
      <div className="">
        <p className="text-primary text-lg font-medium">{name}</p>
      </div>
      <div className="py-4">
        <p className="text-gray-1 text-lg font-semibold">
          {Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
          }).format(price)}
        </p>
      </div>
      <div className="">
        <Stars />
      </div>
    </>
  );
}
