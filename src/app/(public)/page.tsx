import { ProductItem } from "./components/product-item";
export default function Home() {
  const rows = [];
  for (let index = 0; index < 9; index++) {
    rows.push(
      <div className="w-[300px] h-[300px] border-1 border-card rounded-[1.725rem]">
        <ProductItem id={index} />
      </div>
    );
  }
  return (
    <div className="flex flex-col w-11/12 mx-auto max-w-7xl">
      <div className="p-auto px-10 flex justify-between items-center mt-4">
        <h1 className="text-3xl font-semibold text-second my-4">
          Popular products
        </h1>
        <div className="flex flex-wrap gap-4">
          <span className="border rounded-4xl py-2 px-6 text-second border-second text-sm font-normal">
            Cameras
          </span>
          <span className="border rounded-4xl py-2 px-6 text-second border-second text-sm font-normal">
            Tablets
          </span>
          <span className="border rounded-4xl py-2 px-6 text-second border-second text-sm font-normal">
            Laptops
          </span>
          <span className="border rounded-4xl py-2 px-6 text-second border-second text-sm font-normal">
            Smartphones
          </span>
        </div>
      </div>
      <div className="flex justify-center items-center mt-4">
        <div className="grid grid-cols-3 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-3 xl:grid-cols-4 gap-4">
          {rows.map((row) => row)}
        </div>
      </div>
    </div>
  );
}
