import Image from "next/image";
import product from "@/public/joystick.png";
import { Stars } from "./stars";
import Link from "next/link";

interface ProductItemProps {
  id: string | number;
}

export function ProductItem({ id }: ProductItemProps) {
  return (
    <div className="group flex flex-col h-full py-4 items-center justify-between">
      <Image src={product.src} alt="" width={180} height={180} />
      <div className="flex flex-col justify-between items-center mt-4 w-full px-2 transition-all duration-300 ease-in-out opacity-100 group-hover:opacity-0 group-hover:translate-y-[110px]">
        <div className="p-2">
          <p className="text-second text-sm font-normal">Play games</p>
        </div>
        <div className="p-2">
          <p className="text-second text-sm font-normal">$ 11,70</p>
        </div>
        <div className="p-2">
          <Stars />
        </div>
      </div>
      <div className="flex w-full justify-between px-2 gap-3  transition-all duration-300 ease-in-out opacity-0 translate-y-[85px] group-hover:flex group-hover:opacity-100 group-hover:translate-y-[-25px]">
        <button className="bg-button-cart flex flex-1 justify-between items-center text-gray-800 rounded-[1.25rem] h-[60px] p-5">
          <p className="font-semibold text-md"> Add to cart </p>
          <span>icon</span>
        </button>
        <Link href={`/product/${id}`}>
          <button className="bg-button-cart text-gray-800 rounded-r-default h-[60px] min-w-[60px] p-5">
            <span>icon</span>
          </button>
        </Link>
      </div>
    </div>
  );
}
