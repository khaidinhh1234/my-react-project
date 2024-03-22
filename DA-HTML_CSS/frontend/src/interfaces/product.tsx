export interface IProduct {
  _id?: number | string;
  name: string;
  price: number;
  description: string;
  discount: number;
  featured: boolean;
  image: string;
}
