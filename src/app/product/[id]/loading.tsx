import { Breadcrumbs } from "@/app/components/layout/breadcrumbs";

export default function ProductLoading() {
  return (
    <div className="flex flex-col w-[90%] mx-auto">
      <div className="p-3">
        <Breadcrumbs homeElement={"Home"} separator=" / " capitalizeLinks />
      </div>
      <div className="grid grid-cols-2 p-3 mb-2 gap-3">
        {/* Image skeleton */}
        <div className="border border-card rounded-[1.25rem] flex justify-center">
          <div className="w-[650px] h-[560px] bg-gray-2 animate-pulse rounded-[1.25rem]"></div>
        </div>

        {/* Product info skeleton */}
        <div className="flex flex-col gap-4">
          <div className="space-y-4">
            {/* Title */}
            <div className="h-8 bg-gray-2 rounded animate-pulse w-3/4"></div>

            {/* Price */}
            <div className="h-6 bg-gray-2 rounded animate-pulse w-1/4"></div>

            {/* Stars */}
            <div className="flex gap-1">
              {Array.from({ length: 5 }, (_, i) => (
                <div
                  key={i}
                  className="w-4 h-4 bg-gray-2 rounded animate-pulse"
                ></div>
              ))}
            </div>

            {/* Description lines */}
            <div className="space-y-2">
              <div className="h-4 bg-gray-2 rounded animate-pulse w-full"></div>
              <div className="h-4 bg-gray-2 rounded animate-pulse w-4/5"></div>
              <div className="h-4 bg-gray-2 rounded animate-pulse w-3/5"></div>
            </div>

            {/* Color/Size options */}
            <div className="space-y-2">
              <div className="h-4 bg-gray-2 rounded animate-pulse w-1/4"></div>
              <div className="flex gap-2">
                {Array.from({ length: 3 }, (_, i) => (
                  <div
                    key={i}
                    className="w-8 h-8 bg-gray-2 rounded animate-pulse"
                  ></div>
                ))}
              </div>
            </div>

            {/* Counter */}
            <div className="h-10 bg-gray-2 rounded animate-pulse w-32"></div>

            {/* Buy button */}
            <div className="h-12 bg-gray-2 rounded animate-pulse w-full"></div>
          </div>
        </div>
      </div>

      {/* Description section */}
      <div className="p-3 space-y-4">
        <div className="h-6 bg-gray-2 rounded animate-pulse w-1/4"></div>
        <div className="space-y-2">
          <div className="h-4 bg-gray-2 rounded animate-pulse w-full"></div>
          <div className="h-4 bg-gray-2 rounded animate-pulse w-5/6"></div>
          <div className="h-4 bg-gray-2 rounded animate-pulse w-4/5"></div>
          <div className="h-4 bg-gray-2 rounded animate-pulse w-3/4"></div>
        </div>
      </div>
    </div>
  );
}
