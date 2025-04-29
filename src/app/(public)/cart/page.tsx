import { Breadcrumbs } from "@/app/components/breadcrumbs";
import { mockCart } from "../mock";
import { ItemList } from "./components/item-list";

export default function Cart() {
  const cartItems = mockCart;
  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  return (
    <div className="flex flex-col w-[90%] mx-auto">
      <div className="p-3">
        <Breadcrumbs homeElement={"Home"} separator=" / " capitalizeLinks />
      </div>
      <div className="grid grid-cols-[1fr_426px] p-3 mb-2 gap-5">
        <div className="flex flex-col">
          <div className="flex-1">
            <div className="bg-table-header flex py-3">
              <p className="text-xl font-medium pl-8 text-gray-800 w-[40%]">
                Product
              </p>
              <p className="text-xl font-medium text-gray-800 w-[20%]">Price</p>
              <p className="text-xl font-medium text-gray-800 w-[20%]">
                Quantity
              </p>
              <p className="text-xl font-medium text-gray-800 w-[20%]">
                Subtotal
              </p>
            </div>
            {cartItems.map((item) => (
              <ItemList
                key={item.id}
                color={item.color}
                image={item.image}
                name={item.name}
                quantity={item.quantity}
                price={item.price}
                size={item.size}
              />
            ))}
          </div>
          <div className="flex gap-6">
            <button className=" w-full bg-secondary py-3.5 px-8.5 rounded-r-default">
              <p className="text-xl font-semibold text-white">
                Continue shopping
              </p>
            </button>
            <button className=" w-full border-1 border-disabled py-3.5 px-8.5 rounded-r-default">
              <p className="text-xl font-semibold text-disabled">Update cart</p>
            </button>
            <button className=" w-full border-1 border-clear py-3.5 px-8.5 rounded-r-default">
              <p className="text-xl font-semibold text-clear">Clear cart</p>
            </button>
          </div>
        </div>
        <div className="flex flex-col gap-4 justify-around border-1 border-card ">
          <div className="bg-table-header py-2">
            <p className="text-center text-xl font-medium">Cart total</p>
          </div>
          <div className="px-9 py-5">
            <div className="flex justify-between pb-7">
              <p className="text-center text-xl font-medium">Subtotal</p>
              <p className="text-center text-xl font-medium">
                {Intl.NumberFormat("en-us", {
                  style: "currency",
                  currency: "USD",
                }).format(totalPrice)}
              </p>
            </div>
            <div className="py-7 border-y-2 border-card">
              <div className="flex border-1 border-card rounded-r-default">
                <input
                  type="text"
                  placeholder="Enter coupon code"
                  className="py-4 w-[80%] px-2 rounded-l-[1.25rem] text-primary "
                />
                <button className="">
                  <p className="font-semibold text-sm">Apply</p>
                </button>
              </div>
            </div>
            <div className="pt-7 ">
              <select className="py-4 px-3 border-1 border-card rounded-r-default w-full bg-white text-gray-1">
                <option>County</option>
              </select>
            </div>
            <div className="flex justify-between py-7">
              <p className="text-lg">Total amount</p>
              <p className="text-lg">
                {Intl.NumberFormat("en-us", {
                  style: "currency",
                  currency: "USD",
                }).format(totalPrice)}
              </p>
            </div>
            <div className="flex justify-between pb-3">
              <button className="w-full bg-secondary rounded-4xl py-3.5">
                <p className="text-white font-semibold">Proceed to Checkout</p>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-3 mt-3">
        <div className="p-12 border-1 border-card rounded-r-default">
          <p className="text-xl text-primary font-semibold">Customer reviews</p>
          <p className="text-lg text-gray-1 py-4">No reviews yet</p>
          <button className="px-6 py-2 bg-primary">
            <p className="text-lg text-white underline">Write a review</p>
          </button>
        </div>
      </div>
    </div>
  );
}
