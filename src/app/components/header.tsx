import Image from "next/image";
import logo from "../../public/logo.svg";
import userIcon from "../../public/user-icon.svg";
import likeIcon from "../../public/like-icon.svg";
import cartIcon from "../../public/cart-icon.svg";
export function Header() {
  return (
    <header>
      <div className="h-[70px] flex p-4 justify-around items-center">
        <p>THIS IS NOT A REAL STORE, IS JUST FOR A PORTFOLIO</p>
        <p>
          Created by KalZera, based on Eletronic & gadgets e-commerce for figma
          community
        </p>
      </div>
      <div className="h-[100px] bg-primary  flex justify-between items-center px-12">
        <Image src={logo.src} alt="Logo" width={140} height={39} />
        <div className="flex items-center">
          <input
            type="text"
            placeholder="Search..."
            className="p-4 rounded-l-[1.25rem] w-96 h-14 bg-white text-primary "
          />
          <button className="bg-secondary text-white px-8 py-2 rounded-r-[1.25rem] h-14">
            <p className="font-semibold text-sm">Search</p>
          </button>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex gap-2 text-white px-4 py-2 rounded h-full">
            <Image src={userIcon.src} alt="Logo" width={24} height={24} />
            <p className="text-sm font-normal">Sign In</p>
          </button>
          <button className="flex gap-2 text-white px-4 py-2 rounded h-full">
            <Image src={likeIcon.src} alt="Logo" width={24} height={24} />
            <p className="text-sm font-normal">Favorites</p>
          </button>
          <button className="flex gap-2 text-white px-4 py-2 rounded h-full">
            <Image src={cartIcon.src} alt="Logo" width={24} height={24} />
            <p className="text-sm font-normal">Cart</p>
          </button>
        </div>
      </div>
    </header>
  );
}
