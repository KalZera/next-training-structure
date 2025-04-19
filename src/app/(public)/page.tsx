import {ProductItem} from "./components/product-item"
export default function Home() {
  return (
    <>
     <div className="p-auto max-w-1/2 m-auto flex justify-between items-center mt-4">
      <h1 className="text-3xl font-semibold text-second">Popular products</h1>
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
      </div>
      </div>  
      <div className="flex justify-center items-center mt-4">
        <div className="grid grid-cols-4 gap-4">
          <div className="w-[300px] h-[300px] bg-blue-300 rounded-[1.25rem]">
            <ProductItem />
          </div>
          <div className="w-[300px] h-[300px] bg-blue-300 rounded-[1.25rem]">
            <ProductItem />
          </div>
          <div className="w-[300px] h-[300px] bg-blue-300 rounded-[1.25rem]">
            <ProductItem />
          </div>
          <div className="w-[300px] h-[300px] bg-blue-300 rounded-[1.25rem]">
            <ProductItem />
          </div>
          <div className="w-[300px] h-[300px] bg-blue-300 rounded-[1.25rem]">
            <ProductItem />
          </div>
          <div className="w-[300px] h-[300px] bg-blue-300 rounded-[1.25rem]">
            <ProductItem />
          </div>
          <div className="w-[300px] h-[300px] bg-blue-300 rounded-[1.25rem]">
            <ProductItem />
          </div>
          <div className="w-[300px] h-[300px] bg-blue-300 rounded-[1.25rem]">
            <ProductItem />
          </div>
        </div>
      </div>
    </>
  )
}