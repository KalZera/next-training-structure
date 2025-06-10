import { ProductItem } from "@/app/components/ui/product-item";
import { stripe } from "@/utils/stripe";
import type { Stripe } from "stripe";

export default async function HomeContent() {
  const { data } = await stripe.products.list({
    limit: 8,
    expand: ["data.default_price"],
  });

  const products = data.map((item: Stripe.Product) => ({
    id: item.id,
    name: item.name,
    price: ((item.default_price as Stripe.Price)?.unit_amount ?? 0) / 100,
    image: item.images[0],
    description: item.description as string,
    sku: item.unit_label ?? null,
    categories: [],
    availability: null,
    reviews: null,
    colors: [item.metadata.color],
    sizes: [item.metadata.size],
    quantity: 1,
    stars: 5,
  }));

  return (
    <div className="flex flex-col mx-auto w-[90%]">
      <div className="p-auto flex justify-between items-center mt-4">
        <h1 className="text-3xl font-semibold text-second my-4">
          Popular products
        </h1>
        {/* remove tags to button filter categories */}
        {/* <div className="flex flex-wrap gap-4">
          <span className="border rounded-4xl py-2 px-6 text-second border-second text-sm font-normal">
            Cameras
          </span>
          <span className="border rounded-4xl py-2 px-6 text-second border-second text-sm font-normal">
            Tablets
          </span>
          <span className="border rounded-4xl py-2 px-6 text-second border-second text-sm font-normal">
            Laptops
          </span>
          <span className="border rounded-4xl py-2 px-6 text-second border-second text-sm font-normal">
            Smartphones
          </span>
        </div> */}
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-3 xl:grid-cols-4 gap-6.5">
        {products.map((item) => (
          <ProductItem key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
}
