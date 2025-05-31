import ProductContent from "./components/layout/product-content";
import { redirect } from "next/navigation";
export default async function Product({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const paramsResolved = await params;
  if (!paramsResolved.id) {
    return redirect("/404");
  }
  return <ProductContent params={paramsResolved} />;
}
