"use client";

import { redirect } from "next/navigation";

interface InfoProductProps {
  defaultPriceId: string;
  // product: Record<string, string | number | null>;
}

export function ButtonBuy(props: InfoProductProps) {
  const handleClick = async () => {
    try {
      const fetchResponse = await fetch("/api/checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          products: [
            {
              productId: "prod_SOivOaXdda4t6N",
              default_price_id: "price_1RTvTlRlX9IWN9B1omyWeXRd",
              quantity: 1,
            },
          ],
        }),
      });

      if (!fetchResponse.ok) {
        throw new Error("Failed to create checkout session");
      }
      const data = await fetchResponse.json();

      window.location.href = data.url;
    } catch (error) {
      console.error("Error during checkout:", error);
      redirect("/404");
    }
  };

  return (
    <button
      className="bg-secondary p-4 rounded-4xl px-8 cursor-pointer"
      onClick={handleClick}
    >
      <p className="text-lg font-semibold text-white"> Buy it now</p>
    </button>
  );
}
