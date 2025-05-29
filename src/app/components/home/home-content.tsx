import { ProductItem } from "../ui/product-item";
import { mock } from "../../mock";
export default function HomeContent() {
  return (
    <div className="flex flex-col mx-auto w-[90%]">
      <div className="p-auto flex justify-between items-center mt-4">
        <h1 className="text-3xl font-semibold text-second my-4">
          Popular products
        </h1>
        {/* remove tags to button filter categories */}
        {/* <div className="flex flex-wrap gap-4">
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
        </div> */}
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-3 xl:grid-cols-4 gap-6.5">
        {mock.map((item) => (
          <ProductItem key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
}
