import { stripe } from "@/utils/stripe";
import {NextResponse, NextRequest} from 'next/server'

export async function POST(request: NextRequest) {
  console.log("Request body:", { request });
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

  return NextResponse.json({url:checkoutSession.url}, {status: 200});

}
