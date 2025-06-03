"use client";

// import { redirect } from "next/navigation";

interface InfoProductProps {
  defaultPriceId: string;
}

export function ButtonBuy(props: InfoProductProps) {
  const handleClick = async () => {
    try {
      // console.log("Buy it now clicked", { priceId: props.defaultPriceId });
      const fetchResponse = await fetch("/api/checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          priceId: props.defaultPriceId,
        }),
      });
      console.log("Fetch response:", fetchResponse);
      if (!fetchResponse.ok) {
        throw new Error("Failed to create checkout session");
      }

      console.log({ fetchResponse });
    } catch (error) {
      console.error("Error during checkout:", error);
      // redirect("/404");
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
