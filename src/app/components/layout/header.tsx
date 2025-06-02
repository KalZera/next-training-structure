import Image from "next/image";
import Link from "next/link";
import logo from "../../../public/logo.svg";
import userIcon from "../../../public/user-icon.svg";
import likeIcon from "../../../public/like-icon.svg";
import cartIcon from "../../../public/cart-icon.svg";
import { SearchBox } from "./search-box";
import { currentUser } from "@clerk/nextjs/server";

export async function Header() {
  const user = await currentUser();
  const userName = user?.username ?? user?.firstName;
  return (
    <header>
      <div className="h-[70px] w-[90%] mx-auto ">
        <div className="h-[70px] flex p-4 justify-between items-center">
          <p>THIS IS NOT A REAL STORE, IS JUST FOR A PORTFOLIO</p>
          <p>
            Created by KalZera, based on Eletronic & gadgets e-commerce for
            figma community
          </p>
        </div>
      </div>
      <div className="h-[100px] bg-primary mx-auto">
        <div className="h-[100px] w-[90%] mx-auto flex justify-between ">
          <div className="flex justify-between items-center px-2 w-full">
            <Image src={logo.src} alt="Logo" width={140} height={39} />
            <SearchBox />
            <div className="flex items-center gap-3">
              <Link href={user ? "/account" : "/login"}>
                <button className="flex gap-2 text-white px-4 py-2 rounded h-full cursor-pointer justify-center items-center">
                  <Image src={userIcon.src} alt="Logo" width={24} height={24} />
                  <p className="text-sm font-normal capitalize">
                    {userName ?? "Sign In"}
                  </p>
                </button>
              </Link>
              <button className="flex gap-2 text-white px-4 py-2 rounded h-full">
                <Image src={likeIcon.src} alt="Logo" width={24} height={24} />
                <p className="text-sm font-normal">Favorites</p>
              </button>
              {/* <Link href="/cart"> */}
              <button className="flex gap-2 text-white px-4 py-2 rounded h-full cursor-pointer">
                <Image src={cartIcon.src} alt="Logo" width={24} height={24} />
                <p className="text-sm font-normal">Cart</p>
              </button>
              {/* </Link> */}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
