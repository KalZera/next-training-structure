import Image from "next/image";
import product from "@/public/joystick-product.png";

import { LikeButton } from "./like-button";
import { GroupProductButtons } from "./products/group-product-buttons";
import { InfoProducts } from "./products/info-product";

interface ProductItemProps {
  id: string | number;
}

export function ProductItem({ id }: ProductItemProps) {
  const isEven = Number(id) % 2 === 0;
  return (
    <div className="w-[308px] h-[313px] border-1 border-card rounded-[1.725rem]">
      <div className="group flex flex-col h-full py-5.5 px-3.5 items-center justify-between">
        <div className="flex max-h-[168px] max-w-[282px]">
          <Image
            src={product.src}
            alt=""
            width={282}
            height={168}
            className="object-contain max-h-[168px] max-w-[282px]"
          />
          <LikeButton liked={isEven} />
        </div>
        <div className="flex flex-col w-full px-2 transition-all duration-300 ease-in-out opacity-100 group-hover:opacity-0 group-hover:translate-y-[110px]">
          <InfoProducts />
        </div>
        <div className="flex w-full justify-between px-2 gap-3  transition-all duration-300 ease-in-out opacity-0 translate-y-[0px] group-hover:flex group-hover:opacity-100 group-hover:translate-y-[-60px]">
          <GroupProductButtons id={id} />
        </div>
      </div>
    </div>
  );
}
