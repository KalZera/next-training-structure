export function Navbar() {
  return (
    <nav className=" h-[71px] bg-background-nav">
      <div className="mx-auto max-w-7xl">
        <div className="relative flex h-16 items-center justify-between">
          <div className="flex items-center ">
            <div className="flex space-x-4">
              <a
                href="#"
                className="rounded-md px-3 py-2 text-md text-first"
                aria-current="page"
              >
                Home
              </a>
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
