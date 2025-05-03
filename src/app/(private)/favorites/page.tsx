import joystick from "@/public/joystick.png";
import Image from "next/image";

export default function Favorites() {
  return (
    <div className="flex flex-col mx-auto w-[90%] my-6">
      <h1 className="text-2xl font-bold">Favorites</h1>
      <div className="mt-4">
        <div className="w-[308px] h-[313px] border-1 border-card rounded-[1.725rem]">
          <div className="group flex flex-col h-full py-5.5 px-3.5 items-center justify-between">
            <div className="flex max-h-[168px] max-w-[282px]">
              <Image
                src={joystick.src}
                alt=""
                width={282}
                height={168}
                className="object-contain max-h-[168px] max-w-[282px]"
              />
            </div>
            <div className="flex flex-col w-full px-2 transition-all duration-300 ease-in-out opacity-100 group-hover:opacity-0 group-hover:translate-y-[110px]"></div>
            <div className="flex w-full justify-between px-2 gap-3  transition-all duration-300 ease-in-out opacity-0 translate-y-[0px] group-hover:flex group-hover:opacity-100 group-hover:translate-y-[-60px]"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
