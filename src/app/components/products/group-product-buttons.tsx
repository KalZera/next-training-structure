import Image from "next/image";
import Link from "next/link";
import eyeIcon from "@/public/eye-icon.svg";
import cartIcon from "@/public/cart-button-icon.svg";

export function GroupProductButtons({ id }: { id: string | number }) {
  return (
    <>
      <Link href="/cart" className="flex flex-1">
        <button className="bg-button-cart flex flex-1 justify-between items-center text-gray-800 rounded-[1.25rem] h-[60px] p-5">
          <p className="font-semibold"> Buy now </p>
          <Image src={cartIcon.src} alt="" width={32} height={32} />
        </button>
      </Link>
      <Link href={`/product/${id}`}>
        <button className="bg-button-cart text-gray-800 rounded-r-default h-[60px] min-w-[60px] p-5 cursor-pointer">
          <Image src={eyeIcon.src} alt="" width={24} height={24} />
        </button>
      </Link>
    </>
  );
}
