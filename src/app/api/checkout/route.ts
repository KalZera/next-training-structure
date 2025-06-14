import { stripe } from "@/utils/stripe";
import {NextResponse} from 'next/server'

export async function POST(request: Request) {
  console.log("Request body:", { body: request });
  // const priceId = request.body.priceId;
  const successUrl = `${process.env.NEXT_URL}/success`;
  const cancelUrl = `${process.env.NEXT_URL}/`;

  const checkoutSession = await stripe.checkout.sessions.create({
    mode: "payment",
    line_items: [
      {
        price: 'price_1RTvTlRlX9IWN9B1omyWeXRd',
        quantity: 1,
      },
    ],

    success_url:successUrl,
    cancel_url: cancelUrl
  });
  

  return NextResponse.redirect(new URL(checkoutSession.url))
  // .status(201).json({
  //   checkoutSession: 'checkoutSession.url',
  // });
}
