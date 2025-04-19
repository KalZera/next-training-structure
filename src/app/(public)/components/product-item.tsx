import Image from "next/image"
import product from "@/public/joystick.png"

export function ProductItem() {
  return (
    <div className="flex flex-col h-full py-4 items-center justify-between hover:scale-105">
      <Image src={product.src} alt="" width={180} height={180} />
      <div className="flex flex-col justify-between items-center mt-4">
        <div className="">
          <p className="text-second text-sm font-normal">product Name</p>
        </div>
        <div className="">
          <p className="text-second text-sm font-normal">product avaliation</p>
        </div>
      </div>
    </div>
  )
}