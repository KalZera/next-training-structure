import Image from "next/image";
import product from "@/public/joystick-product.png";
import { Stars } from "./stars";
import Link from "next/link";
import eyeIcon from "@/public/eye-icon.svg";
import cartIcon from "@/public/cart-button-icon.svg";
import { LikeButton } from "./like-button";

interface ProductItemProps {
  id: string | number;
}

export function ProductItem({ id }: ProductItemProps) {
  const isEven = Number(id) % 2 === 0;
  return (
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
        <div className="">
          <p className="text-primary text-lg font-medium">Play games</p>
        </div>
        <div className="py-4">
          <p className="text-gray-1 text-lg font-semibold">$ 11,70</p>
        </div>
        <div className="">
          <Stars />
        </div>
      </div>
      <div className="flex w-full justify-between px-2 gap-3  transition-all duration-300 ease-in-out opacity-0 translate-y-[0px] group-hover:flex group-hover:opacity-100 group-hover:translate-y-[-60px]">
        <button className="bg-button-cart flex flex-1 justify-between items-center text-gray-800 rounded-[1.25rem] h-[60px] p-5">
          <p className="font-semibold"> Add to cart </p>
          <Image src={cartIcon.src} alt="" width={32} height={32} />
        </button>
        <Link href={`/product/${id}`}>
          <button className="bg-button-cart text-gray-800 rounded-r-default h-[60px] min-w-[60px] p-5">
            <Image src={eyeIcon.src} alt="" width={24} height={24} />
          </button>
        </Link>
      </div>
    </div>
  );
}
