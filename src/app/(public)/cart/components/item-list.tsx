import { Counter } from "../../components/counter";
export function ItemList() {
  return (
    <div className="flex gap-20">
      <div>Image Name</div>
      <div>Price</div>
      <div className="flex">
        <Counter />
      </div>
      <div>Subtotal</div>
      <div>btn_clear</div>
    </div>
  );
}
