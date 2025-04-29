import Image from "next/image";
import { redirect } from "next/navigation";
import { ProductItem } from "../../components/product-item";
import { InfoProduct } from "./components/info-product";
import { ListProducts } from "./components/list-products";
import { RegistrationProductInfo } from "./components/registration-product-info";
import { BoxDescription } from "./components/box-description";
import { mock } from "../../mock";
import { Breadcrumbs } from "@/app/components/breadcrumbs";
export default async function Product({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const product = mock.find((item) => String(item.id) === id);
  if (!product) {
    return redirect("/404");
  }
  const mainCategory = product?.categories[0] || "";
  const productRelated = mock.filter((item) =>
    (item?.categories ?? []).includes(mainCategory)
  );
  const { name, price, reviews, quantity, colors, sizes } = product;
  return (
    <div className="flex flex-col w-[90%] mx-auto">
      <div className="p-3">
        <Breadcrumbs homeElement={"Home"} separator=" / " capitalizeLinks />
      </div>
      <div className="grid grid-cols-2 p-3 mb-2 gap-3">
        <div className="border border-card rounded-[1.25rem] flex justify-center">
          <Image
            src={product?.image.src}
            width={650}
            height={560}
            className="object-cover"
            alt=""
          />
        </div>
        <div className="flex flex-col gap-4 justify-around">
          <InfoProduct
            id={id}
            {...{ name, price, reviews, quantity, colors, sizes }}
          />
        </div>
      </div>
      <div className="grid grid-cols-2 p-3 mb-2 gap-3">
        <ListProducts />
        <RegistrationProductInfo />
      </div>
      <BoxDescription />
      <div className="p-3">
        <p className="text-2xl text-primary font-semibold">Related Products</p>
        <div className="grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4">
          {productRelated.map((item) => (
            <ProductItem key={item.id} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
}
