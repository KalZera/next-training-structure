export interface Product {
  id: string | number;
  name: string;
  price: number;
  image: StaticImageData;
  description: string;
  sku: string;
  categories: string[];
  availability: string;
  reviews: number;
  colors: string[];
  sizes: number[];
  quantity: number;
  stars: number;
}