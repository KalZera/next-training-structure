import Image from "next/image";
import joystick from "@/public/joystick.png";

export function ListProducts() {
  return (
    <div className="flex gap-3 max-h-36">
      <Image
        src={joystick.src}
        alt=""
        height={100}
        width={250}
        className="object-cover"
      />
      <Image
        src={joystick.src}
        alt=""
        height={100}
        width={250}
        className="object-cover"
      />
    </div>
  );
}
