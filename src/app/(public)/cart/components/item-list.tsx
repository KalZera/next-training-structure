import Image from "next/image";
import { Counter } from "../../components/counter";

import joystick from "@/public/joystick-product.png";
import closeIcon from "@/public/close-icon.svg";

export function ItemList() {
  return (
    <div className="flex py-7">
      <div className="flex w-[40%] items-start">
        <Image src={joystick.src} alt="" height={120} width={136} />
        <div className="flex flex-col gap-3 pl-2">
          <p className="font-semibold text-xl text-primary">Play Game</p>
          <p className="text-xl text-gray-800">Color: Green</p>
          <p className="text-xl text-gray-800">Size: 30</p>
        </div>
      </div>
      <div className="flex items-center w-[20%]">
        <p className="text-[22px] font-medium">$ 11,70</p>
      </div>
      <div className="flex items-center w-[20%]">
        <Counter />
      </div>
      <div className="flex items-center justify-between pr-2 w-[20%]">
        <p className="text-[22px] font-medium">$ 11,70</p>
        <Image src={closeIcon.src} alt="" height={24} width={24} />
      </div>
    </div>
  );
}
