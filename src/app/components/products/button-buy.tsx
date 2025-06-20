"use client";

import Image from "next/image";
import cartIcon from "@/public/cart-button-icon.svg";
import { Product } from "@/app/types/products";

export function ButtonBuy({ product }: { product: Product }) {
  const { id, default_price_id } = product;
  const handleClick = async () => {
    try {
      const fetchResponse = await fetch("/api/checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          products: {
            productId: id,
            default_price_id,
            quantity: 1,
          },
        }),
      });
      if (!fetchResponse.ok) {
        throw new Error("Failed to create checkout session");
      }
      const data = await fetchResponse.json();
      window.location.href = data.url;
    } catch (error) {
      console.error("Error during checkout:", error);
    }
  };
  return (
    <button
      className="bg-button-cart flex flex-1 justify-between items-center text-gray-800 rounded-[1.25rem] h-[60px] p-5"
      onClick={handleClick}
    >
      <p className="font-semibold"> Buy now </p>
      <Image src={cartIcon.src} alt="" width={32} height={32} />
    </button>
  );
}
