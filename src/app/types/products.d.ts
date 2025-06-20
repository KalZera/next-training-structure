export interface Product {
  id: string | number;
  name: string;
  price: number;
  image: StaticImageData;
  description: string;
  sku: string | null;
  categories: string[];
  availability: string | null;
  reviews: number | null;
  colors: string[];
  sizes: Array<string | number>;
  quantity: number;
  stars: number;
  default_price_id?: string;
}
