import { stripe } from "@/utils/stripe";
import type { NextApiRequest, NextApiResponse } from "next";

export async function POST(request: NextApiRequest,
  response: NextApiResponse
) {
  const priceId = request.body.priceId;
  const successUrl = `${process.env.NEXT_URL}/success`;
  const cancelUrl = `${process.env.NEXT_URL}/`;

  const checkoutSession = await stripe.checkout.sessions.create({
    mode: "payment",
    line_items: [
      {
        price: priceId,
        quantity: 1,
      },
    ],

    success_url:successUrl,
    cancel_url: cancelUrl
  });

  return response.status(201).json({
    checkoutSession: checkoutSession.url,
  });
}
