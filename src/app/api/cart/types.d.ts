export interface CartService {
  addOrUpdateItem(productId: string, details: CartDetails): Promise<void>;
  getCartItems(): Promise<CartDetails[]>;
  removeItem(productId: string): Promise<void>;
  clearCart(): Promise<void>;
}

export type CartDetails = {
  productId: string;
  quantity: number;
  size: string;
  color: string;
  [key: string]: unknown; // Allow additional properties
};

export type CartItem = {
  productId: string;
  details: CartDetails;
};
