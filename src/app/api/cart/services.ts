import { CartService, CartDetails } from './types.d';

export class CartUseCases implements CartService {
  private cart: CartDetails[] = [];

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  public async addOrUpdateItem(_productId: string, _details: CartDetails): Promise<void> {
    //TODO: Implement the logic to add or update an item in the cart
  }

  public async getCartItems(): Promise<CartDetails[]> {
    return this.cart;
  }

  public async removeItem(productId: string) {
    const itemIndex = this.cart.findIndex(item => item.productId === productId);
    if (itemIndex === -1) {
      throw new Error(`Item with productId ${productId} not found in the cart.`);
    }

    delete this.cart[itemIndex];
  }

  public async clearCart(): Promise<void> {
    this.cart = [];
  }
}