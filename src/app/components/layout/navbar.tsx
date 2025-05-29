import { SignOutButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import Link from "next/link";

export async function Navbar() {
  const { userId } = await auth();
  return (
    <nav className=" h-[71px] bg-background-nav">
      <div className="w-[90%] mx-auto">
        <div className="relative flex h-16 items-center justify-between">
          <div className="flex items-center justify-between w-full">
            <div className="flex space-x-4">
              <Link
                href="/"
                className="rounded-md px-3 py-2 text-md text-first"
              >
                Home
              </Link>
              {/* coment while doesnt have a page */}
              {/* <a href="#" className="rounded-md px-3 py-2 text-md text-first ">
                Catalog
              </a>
              <a href="#" className="rounded-md px-3 py-2 text-md text-first ">
                Blog
              </a>
              <a href="#" className="rounded-md px-3 py-2 text-md text-first ">
                About Us
              </a> */}
            </div>
            <div className="flex space-x-4">
              {userId && (
                <SignOutButton>
                  <button className="cursor-pointer">Sign Out</button>
                </SignOutButton>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
