"use client";
import { usePathname } from "next/navigation";

export function SearchBox() {
  const pathname = usePathname();

  if (pathname === "/login") return;
  return (
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
  );
}
