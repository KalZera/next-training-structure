import Image from "next/image";
import product from "@/public/joystick-product.png";
import joystick from "@/public/joystick.png";
import likeIcon from "@/public/like-icon-product.svg";
import { Stars } from "../../components/stars";
import { Counter } from "./components/counter";
import { ProductItem } from "../../components/product-item";
export default function Product() {
  const rows = [];
  for (let index = 0; index < 4; index++) {
    rows.push(
      <div className="w-[300px] h-[300px] border-2 border-card rounded-[1.725rem]">
        <ProductItem id={index} />
      </div>
    );
  }
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
        <div className="flex flex-col gap-4 justify-around">
          <p className="text-3xl font-medium text-primary">Play Game</p>
          <p className="text-3xl font-medium text-gray-1 py-4">$ 11,90</p>
          <div className="flex">
            <Stars />
            <p className="text-sm font-normal text-gray-1 p-3">No reviews</p>
          </div>
          <div className="flex">
            <p className="text-lg font-medium text-gray-800 pr-2">Avaibility</p>
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
              <p className="text-lg font-semibold text-white"> Add to Cart</p>
            </button>
            <button className="bg-secondary p-4 rounded-4xl px-8">
              <p className="text-lg font-semibold text-white"> Buy it now</p>
            </button>
            <button className="bg-red-200 min-h-16 min-w-16 flex items-center justify-center rounded-full">
              <Image src={likeIcon.src} width={36} height={36} alt="" />
            </button>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 p-3 mb-2 gap-3">
        <div className="flex gap-3 justify-center max-h-36">
          <Image
            src={joystick.src}
            alt=""
            height={100}
            width={250}
            className="object-cover"
          />
          <Image
            src={joystick.src}
            alt=""
            height={100}
            width={250}
            className="object-cover"
          />
        </div>
        <div className="flex flex-col gap-3 justify-around">
          <div className="flex gap-1">
            <p className="text-lg text-gray-3 font-medium">Sku:</p>
            <span className="px-3 text-lg text-gray-3 font-medium">
              01133-9-9
            </span>
          </div>
          <div className="flex gap-1">
            <p className="text-lg text-gray-3 font-medium">Categories:</p>
            <span className="px-3 text-sm text-gray-3">
              20% off, 49% off Alex remote
            </span>
          </div>
          <div className="flex gap-1">
            <p className="text-lg text-gray-3 font-medium">Share:</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-3 mt-3">
        <div className="flex gap-4 justify-center items-center my-6">
          <button className="border-2 border-gray-5 py-3.5 px-8.5 rounded-r-default">
            <p className="text-xl font-medium text-gray-6">Description</p>
          </button>
          <button className="border-2 border-primary bg-primary py-3.5 px-8.5 rounded-r-default">
            <p className="text-xl font-medium text-white">Reviews</p>
          </button>
        </div>
        <div className="p-12 border-2 border-card rounded-r-default">
          <p className="text-xl text-primary font-semibold">Customer reviews</p>
          <p className="text-lg text-gray-1 py-4">No reviews yet</p>
          <button className="px-6 py-2 bg-primary">
            <p className="text-lg text-white underline">Write a review</p>
          </button>
        </div>
      </div>
      <div className="p-3">
        <p className="text-2xl text-primary font-semibold">Related Products</p>
        <div className="grid grid-cols-4 gap-3">{rows.map((row) => row)}</div>
      </div>
    </div>
  );
}
