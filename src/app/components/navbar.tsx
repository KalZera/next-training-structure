import Link from "next/link";

export function Navbar() {
  return (
    <nav className=" h-[71px] bg-background-nav">
      <div className="w-[90%] mx-auto">
        <div className="relative flex h-16 items-center justify-between">
          <div className="flex items-center ">
            <div className="flex space-x-4">
              <Link
                href="/"
                className="rounded-md px-3 py-2 text-md text-first"
              >
                Home
              </Link>
              <a href="#" className="rounded-md px-3 py-2 text-md text-first ">
                Catalog
              </a>
              <a href="#" className="rounded-md px-3 py-2 text-md text-first ">
                Blog
              </a>
              <a href="#" className="rounded-md px-3 py-2 text-md text-first ">
                About Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
