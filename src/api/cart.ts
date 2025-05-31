import db from "../db/db.json";

type CartDetails = {
  quantity: number;
  size: string;
  color: string;
  [key: string]: unknown; // Allow additional properties
};
export const addCart = async (productId: string, details: CartDetails) => {
  const cart: { productId: string; details: CartDetails }[] = db.cart || [];
  const existingItemIndex = cart.findIndex(
    (item) => item.productId === productId
  );
  
  if (existingItemIndex !== -1) {
    cart[existingItemIndex].details.quantity += details.quantity;
    return;
  }
  cart.push({ productId, details });
  
  db.cart = cart;
};

export const getCart = async () => {
  const cart = db.cart || [];
  return cart;
};
export const removeCart = async (productId: string) => {
  const cart = db.cart || [];
  const index = cart.findIndex((item) => item.productId === productId);
  if (index !== -1) {
    cart.splice(index, 1);
  }
};
export const clearCart = async () => {
  db.cart = [];
  return;
};
