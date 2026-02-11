import { useMutation, useQuery } from "@tanstack/react-query";
import type { Product, ProductValues, Response } from "../types";
import api from "./api";
import { toast } from "react-toastify";

const productService = {
  getAll: () => api.get<Response<Product[]>>("/shoes"),
  getOne: (id: string) => api.get<Response<Product>>(`/shoes/${id}`),
  create: (data: ProductValues) => api.post("/shoes", data),
  update: (id: string, data: ProductValues) => api.put(`/shoes/${id}`, data),
  delete: (id: string) => api.delete(`/shoes/${id}`),
};

export const useGetAllProducts = () =>
  useQuery({
    queryKey: ["products"],
    queryFn: () => productService.getAll(),
    select: (res) => res.data.data,
  });

export const useGetOneProduct = (id: string) =>
  useQuery({
    queryKey: ["product", id],
    queryFn: () => productService.getOne(id),
    select: (res) => res.data.data,
    enabled: !!id,
  });

export const useCreateProduct = () => {
  return useMutation({
    mutationFn: (data: ProductValues) => productService.create(data),
    onSuccess: () => {
      toast.success("Ürün oluşturuldu");
    },
    onError: () => toast.error("İşlem başarısız"),
  });
};

export const useDeleteProduct = () => {
  return useMutation({
    mutationFn: (id: string) => productService.delete(id),
    onSuccess: () => {
      toast.success("Ürün kaldırıldı");
    },
    onError: () => toast.error("İşlem başarısız"),
  });
};

export const useUpdateProduct = () => {
  return useMutation({
    mutationFn: ({ id, data }: { id: string; data: ProductValues }) => productService.update(id, data),
    onSuccess: () => {
      toast.success("Ürün güncellendi");
    },
    onError: () => toast.error("İşlem başarısız"),
  });
};
