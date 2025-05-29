import Image, { type StaticImageData } from "next/image";
import { Counter } from "../../components/counter";

import closeIcon from "@/public/close-icon.svg";

interface ItemListProps {
  name: string;
  price: number;
  image: StaticImageData;
  color: string;
  size: number;
  quantity: number;
}

export function ItemList(props: ItemListProps) {
  const { name, price, image, color, size, quantity } = props;
  return (
    <>
      <div className="flex py-7">
        <div className="flex w-[40%] items-start">
          <Image src={image.src} alt="" height={120} width={136} />
          <div className="flex flex-col gap-3 pl-2">
            <p className="font-semibold text-xl text-primary">{name}</p>
            <p className="text-xl text-gray-800">Color: {color}</p>
            <p className="text-xl text-gray-800">Size: {size}</p>
          </div>
        </div>
        <div className="flex items-center w-[20%]">
          <p className="text-[22px] font-medium">
            {Intl.NumberFormat("en-us", {
              style: "currency",
              currency: "USD",
            }).format(price)}
          </p>
        </div>
        <div className="flex items-center w-[20%]">
          <Counter initialValue={quantity} />
        </div>
        <div className="flex items-center justify-between pr-2 w-[20%]">
          <p className="text-[22px] font-medium">
            {Intl.NumberFormat("en-us", {
              style: "currency",
              currency: "USD",
            }).format(price * quantity)}{" "}
          </p>
          <Image src={closeIcon.src} alt="" height={24} width={24} />
        </div>
      </div>
      <hr className="text-card" />
    </>
  );
}
