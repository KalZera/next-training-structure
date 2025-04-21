import Image from "next/image";
import { Counter } from "../../components/counter";

import joystick from "@/public/joystick-product.png";
import closeIcon from "@/public/close-icon.svg";

export function ItemList() {
  return (
    <div className="flex gap-[73px]">
      <div className="flex w-[285px] items-center">
        <Image src={joystick.src} alt="" height={120} width={136} />
        <div className="w-[285px]">
          <p className="font-semibold text-xl text-primary">Play Game</p>
          <p className="text-xl text-gray-800">Color: Green</p>
          <p className="text-xl text-gray-800">Size: 30</p>
        </div>
      </div>
      <div className="flex items-center w-[69px]">
        <p className="text-[22px] font-medium">$ 11,70</p>
      </div>
      <div className="flex items-center justify-center w-[133px]">
        <Counter />
      </div>
      <div className="flex items-center w-[69px]">
        <p className="text-[22px] font-medium">$ 11,70</p>
      </div>
      <div className="flex items-center p-0">
        <Image src={closeIcon.src} alt="" height={24} width={24} />
      </div>
    </div>
  );
}
