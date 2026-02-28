export interface Product {
  _id: string;
  name: string;
  category: string;
  price: number;
  unit: string;
  stock: number;
  origin: string;
  isOrganic: boolean;
  description: string;
  nutritionalValue: string;
  expiryDays: number;
  photo: string;
  __v: number;
}

export interface BasketItem {
  _id: string;
  name: string;
  price: number;
  quantity: number;
  grocery: Product;
}

export interface Basket {
  _id: string;
  userId: string;
  totalAmaount: number;
  __v: number;
  items: BasketItem[];
}

export type ProductsRes = Promise<{ groceries: Product[] }>;
export type ProductRes = Promise<{ grocery: Product }>;
export type URLRes = Promise<{ url: string }>;
export type BasketRes = Promise<{ cart: Basket }>;
