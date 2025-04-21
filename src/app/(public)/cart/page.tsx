import { ItemList } from "./components/item-list";

export default function Cart() {
  return (
    <div className="flex flex-col w-11/12 mx-auto max-w-7xl">
      <div className="p-3">
        <p>bread crumbs</p>
      </div>
      <div className="grid grid-cols-[872px_426px] p-3 mb-2 gap-3">
        <div className="flex flex-col">
          <div className="flex-1">
            <p>TODO LIST</p>
            <ItemList />
          </div>
          <div className="flex gap-6">
            <button className=" w-full bg-secondary py-3.5 px-8.5 rounded-r-default">
              <p className="text-xl font-semibold text-white">
                Continue shopping
              </p>
            </button>
            <button className=" w-full border-2 border-disabled py-3.5 px-8.5 rounded-r-default">
              <p className="text-xl font-semibold text-disabled">Update cart</p>
            </button>
            <button className=" w-full border-2 border-clear py-3.5 px-8.5 rounded-r-default">
              <p className="text-xl font-semibold text-clear">Clear cart</p>
            </button>
          </div>
        </div>
        <div className="flex flex-col gap-4 justify-around border-2 border-card ">
          <div className="bg-table-header py-2">
            <p className="text-center text-xl font-medium">Cart total</p>
          </div>
          <div className="px-3 py-4">
            <div className="flex justify-between py-4">
              <p className="text-center text-xl font-medium">Subtotal</p>
              <p className="text-center text-xl font-medium">$ 23.20</p>
            </div>
            <div className="py-8 border-y-2 border-card">
              <div className="flex border-2 border-card rounded-r-default">
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
            <div className="py-8 border-b-2 border-card mb-4">
              <select className="py-4 px-3 border-2 border-card rounded-r-default w-full bg-white text-gray-1">
                <option>County</option>
              </select>
            </div>
            <div className="flex justify-between mb-7">
              <p className="text-lg">Total amount</p>
              <p className="text-lg">$ 23.20</p>
            </div>
            <div className="flex justify-between py-3">
              <button className="w-full bg-secondary rounded-4xl py-3.5">
                <p className="text-white font-semibold">Proceed to Checkout</p>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-3 mt-3">
        <div className="p-12 border-2 border-card rounded-r-default">
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
