import Image from "next/image";
import { redirect } from "next/navigation";
// import { Productproduct } from "@/app/components/ui/product-product";
import { InfoProduct } from "../../components/info-product";
import { ListProducts } from "../../components/list-products";
import { RegistrationProductInfo } from "../../components/registration-product-info";
import { BoxDescription } from "../../components/box-description";
import { Breadcrumbs } from "@/app/components/layout/breadcrumbs";

import { stripe } from "@/utils/stripe";
import type { Stripe } from "stripe";

export default async function ProductContent({
  params,
}: {
  params: { id: string };
}) {
  const { id } = params;
  const product = await stripe.products.retrieve(id, {
    expand: ["default_price"],
  });

  if (!product) {
    return redirect("/404");
  }
  const productParsed = {
    id: product.id,
    name: product.name,
    price: ((product.default_price as Stripe.Price)?.unit_amount ?? 0) / 100,
    image: product.images[0],
    description: product.description as string,
    sku: product.unit_label ?? null,
    categories: [],
    availability: null,
    reviews: null,
    colors: [product.metadata.color],
    sizes: [product.metadata.size],
    quantity: 1,
    stars: 5,
  };
  return (
    <div className="flex flex-col w-[90%] mx-auto">
      <div className="p-3">
        <Breadcrumbs homeElement={"Home"} separator=" / " capitalizeLinks />
      </div>
      <div className="grid grid-cols-2 p-3 mb-2 gap-3">
        <div className="border border-card rounded-[1.25rem] flex justify-center">
          <Image
            src={productParsed.image}
            width={650}
            height={560}
            className="object-cover"
            alt=""
          />
        </div>
        <div className="flex flex-col gap-4 justify-around">
          <InfoProduct {...productParsed} />
        </div>
      </div>
      <div className="grid grid-cols-2 p-3 mb-2 gap-3">
        <ListProducts />
        <RegistrationProductInfo sku={productParsed.sku} />
      </div>
      <BoxDescription description={productParsed.description} />
      {/* <div className="p-3">
        <p className="text-2xl text-primary font-semibold">Related Products</p>
        <div className="grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-3 xl:grid-cols-4 gap-4">
          {productRelated.map((product) => (
            <Productproduct key={product.id} {...product} />
          ))}
        </div>
      </div> */}
    </div>
  );
}
