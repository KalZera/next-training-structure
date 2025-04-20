import Image from "next/image";
import product from "@/public/joystick-product.png";
import likeIcon from "@/public/like-icon-product.svg";
import { Stars } from "../../components/stars";
import { Counter } from "./components/counter";
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
        <div className="flex flex-col gap-4">
          <p className="text-3xl font-medium text-primary">Play Game</p>
          <p className="text-3xl font-medium text-gray-1 py-4">$ 11,90</p>
          <div className="flex">
            <Stars />
            <p className="text-sm font-normal text-gray-1 p-3">No reviews</p>
          </div>
          <div className="flex">
            <p className="text-lg font-medium text-gray-800">Avaibility</p>
            <p className="text-lg font-medium text-gray-800"> In Stock</p>
          </div>
          <p className="text-sm font-normal text-gray-800">
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
          <div className="flex gap-3">
            <p className="text-lg font-medium"> Size: </p>
            {/* <input type="checkbox" className="hidden" name="size"/> */}
            <button className="px-3 bg-gray-2 border-gray-3 border-2">
              <p className="text-lg px-2 text-gray-3">30</p>
            </button>
            <button className="px-3 bg-gray-2">
              <p className="text-lg px-2 text-gray-3">42</p>
            </button>
            <button className="px-3 bg-gray-2">
              <p className="text-lg px-2 text-gray-3">48</p>
            </button>
            <button className="px-3 bg-gray-2">
              <p className="text-lg px-2 text-gray-3">56</p>
            </button>
          </div>
          <div className="flex pt-3">
            <p className="text-lg font-medium pr-3"> Quantity: </p>
            <Counter />
          </div>
          <div className="flex gap-3">
            <button className="bg-secondary p-4 rounded-4xl px-8">
              <p className="text-lg font-bold text-white"> Add to Cart</p>
            </button>
            <button className="bg-secondary p-4 rounded-4xl px-8">
              <p className="text-lg font-bold text-white"> Buy it now</p>
            </button>
            <button className="bg-red-200 min-h-16 min-w-16 flex items-center justify-center rounded-full">
              <Image src={likeIcon.src} width={36} height={36} alt="" />
            </button>
          </div>
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
