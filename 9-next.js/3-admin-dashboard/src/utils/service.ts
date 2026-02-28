import { Order, Product, User } from "@/types";

// api url'i
const BASE_URL = "http://localhost:4000";

// bütün siparişleri getir
export const getOrders = async (): Promise<Order[]> => {
  const res = await fetch(`${BASE_URL}/orders`);

  return res.json();
};

// bütün ürünleri getir
export const getProducts = async (): Promise<Product[]> => {
  const res = await fetch(`${BASE_URL}/products`);

  return res.json();
};

// bütün ürünleri getir
export const getOneProduct = async (id: string): Promise<Product> => {
  const res = await fetch(`${BASE_URL}/products/${id}`);

  return res.json();
};

// bir ürünü kaldır
export const deleteProduct = async (id: string): Promise<void> => {
  const res = await fetch(`${BASE_URL}/products/${id}`, { method: "DELETE" });

  return res.json();
};

// yeni bir ürün oluştur
export const createProduct = async (productData: Omit<Product, "id">): Promise<void> => {
  const res = await fetch(`${BASE_URL}/products`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(productData),
  });

  return res.json();
};

// yeni bir ürün oluştur
export const updateProduct = async (id: string, productData: Omit<Product, "id">): Promise<void> => {
  const res = await fetch(`${BASE_URL}/products/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(productData),
  });

  return res.json();
};

// kullanıcıları al
export const getUsers = async (): Promise<User[]> => {
  const res = await fetch(`${BASE_URL}/users`);

  return res.json();
};

// kullanıcıyı al
export const getOneUser = async (id: string): Promise<User> => {
  const res = await fetch(`${BASE_URL}/users/${id}`);

  return res.json();
};

// kullanıcıy sil
export const deleteUser = async (id: string): Promise<void> => {
  const res = await fetch(`${BASE_URL}/users/${id}`, {
    method: "DELETE",
  });

  return res.json();
};
