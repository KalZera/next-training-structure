import ProductContent from "./components/layout/product-content";
export default async function Product({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  return <ProductContent params={params} />;
}
