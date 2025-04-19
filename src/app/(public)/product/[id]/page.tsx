import Image from "next/image";
import product from "@/public/joystick-product.png";
import { Stars } from "../../components/stars";
export default function Product() {
  return (
    <div className="flex flex-col w-11/12 mx-auto max-w-7xl">
      <div className="p-3">
        <p>bread crumbs</p>
      </div>
      <div className="grid grid-cols-2 p-3 mb-2 gap-3">
        <div className="border border-card rounded-[1.25rem]">
          <Image
            src={product.src}
            width={650}
            height={560}
            className="cover"
            alt=""
          />
        </div>
        <div>
          <p className="text-3xl font-medium text-primary">Play Game</p>
          <p className="text-3xl font-medium text-grey-1 py-4">$ 11,90</p>
          <div className="flex">
            <Stars />
            <p className="text-sm font-normal text-grey-1 p-3">No reviews</p>
          </div>
          <div className="flex">
            <p className="text-lg font-medium text-grey-800">Avaibility</p>
            <p className="text-lg font-medium text-grey-800"> In Stock</p>
          </div>
          <p className="text-sm font-normal text-grey-800">
            Hurry up! Only 34 product left in stock!{" "}
          </p>
          <div className="flex gap-3">
            <p className="text-lg font-medium"> Colors: </p>
            <button className="rounded-full p-3 w-2.5 h-2.5 bg-amber-200">
              <span className="w-2.5" />
            </button>
            <button className="rounded-full p-3 w-2.5 h-2.5 bg-amber-800">
              <span className="w-2.5" />
            </button>
          </div>
          <p>product details to buy</p>
        </div>
      </div>
      <div className="flex gap-3">
        <p>product description</p>
        <p>product review</p>
      </div>
      <div className="p-3">
        <p>other products</p>
      </div>
    </div>
  );
}
