import Image from "next/image";
import product from "@/public/joystick-product.png";
import { ProductItem } from "../../components/product-item";
import { InfoProduct } from "./components/info-product";
import { ListProducts } from "./components/list-products";
import { RegistrationProductInfo } from "./components/registration-product-info";
import { BoxReviews } from "./components/box-reviews";
export default function Product() {
  const rows = [];
  for (let index = 0; index < 4; index++) {
    rows.push(<ProductItem id={index} />);
  }
  return (
    <div className="flex flex-col w-[90%] mx-auto">
      <div className="p-3">
        <p>bread crumbs</p>
      </div>
      <div className="grid grid-cols-2 p-3 mb-2 gap-3">
        <div className="border border-card rounded-[1.25rem] flex justify-center">
          <Image
            src={product.src}
            width={650}
            height={560}
            className="cover"
            alt=""
          />
        </div>
        <div className="flex flex-col gap-4 justify-around">
          <InfoProduct />
        </div>
      </div>
      <div className="grid grid-cols-2 p-3 mb-2 gap-3">
        <ListProducts />
        <RegistrationProductInfo />
      </div>
      <div className="flex flex-col gap-3 mt-3">
        <div className="flex gap-4 justify-center items-center my-6">
          <button className="border-1 border-gray-5 py-3.5 px-8.5 rounded-r-default">
            <p className="text-xl font-medium text-gray-6">Description</p>
          </button>
          <button className="border-1 border-primary bg-primary py-3.5 px-8.5 rounded-r-default">
            <p className="text-xl font-medium text-white">Reviews</p>
          </button>
        </div>
        <BoxReviews />
      </div>
      <div className="p-3">
        <p className="text-2xl text-primary font-semibold">Related Products</p>
        <div className="grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4">
          {rows.map((row) => row)}
        </div>
      </div>
    </div>
  );
}
