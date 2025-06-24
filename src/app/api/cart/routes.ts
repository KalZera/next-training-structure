import { CartDetails } from "./types.d";
import { CartUseCases } from "./services";
const cartService = new CartUseCases();

export const PUT = async (productId: string, details: CartDetails) => {
  //TODO: Implement the logic to add or update an item in the cart
  cartService.addOrUpdateItem(productId, details);
  return { message: "Item updated in the cart" };
};

export const GET = async () => {
  //TODO: Implement the logic to retrieve the cart items
  const cartItems = await cartService.getCartItems();
  return { cartItems };
};

export const PATCH = async (productId: string) => {
  //TODO: Implement the logic to remove an item from the cart
  await cartService.removeItem(productId);
  return { message: "Item removed from the cart"} 
};
export const DELETE = async () => {
  //TODO: Implement the logic to clear the cart
  await cartService.clearCart();
  return { message: "Cart cleared"}
};
