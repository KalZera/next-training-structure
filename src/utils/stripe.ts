// eslint-disable-next-line @typescript-eslint/no-require-imports
export const stripe = require("stripe")(
  process.env.STRIPE_SECRET_KEY!
);

