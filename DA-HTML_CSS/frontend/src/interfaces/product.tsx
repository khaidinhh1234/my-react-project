export interface IProduct {
  id?: number | string;
  name: string;
  price: number;
  description: string;
  discount: number;
  featured: boolean;
  image: string;
}
