import { useMutation, useQuery } from "@tanstack/react-query";
import api from "./api";
import type { FilterParams, PlaceFormValues, PlaceResponse, PlacesResponse } from "../types";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

// Api isteği atıp sate yönetimini yapam custom hook'lar tanımlayalım

/*
 * useQuery data state'inde queryFn fonksiyonun döndürdüğü veriyi tutar.
 * data state'inde tutulan veriyi değiştirmek isterseniz .then() veya select() yöntemlerinden birini tercih edebilirisniz
 */
export const useGetPlaces = (params: FilterParams) =>
  useQuery({
    queryKey: ["places", params], // bağımlılık dizisi
    queryFn: () => api.get<PlacesResponse>("/places", { params }),
    select: (res) => res.data.places,
  });

// useQuery: sayfa yüklendiği anda istek atar
// useMutation: istediğimiz zaman istek atar
// isPending: api isteğinin yüklenme durumunun state'i
// mutate: api isteğini atmaya yarayan fonksiyon
export const useCreatePlace = () => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: (data: PlaceFormValues) => api.post("/places", data),
    onSuccess: (res) => {
      // bildirim gönder
      toast.success("Yeni konaklama alanı oluşturuldu");

      // detay sayfasına yönlendir
      navigate(`/place/${res.data.place.id}`);
    },
    onError: (err) => {
      toast.error(`Bir hata oluştu: ${err.message}`);
    },
  });
};

// konaklama alanının detayını almak için:
export const useGetPlace = (id?: string) =>
  useQuery({
    queryKey: ["place", id],
    queryFn: () => api.get<PlaceResponse>(`/place/${id}`),
    // data state'inde tutulacak veriyi belirler
    select: (res) => res.data.place,
    // api isteği atılacak mı: boolean
    enabled: !!id,
  });

// konaklama alanını kaldırmak için:
export const useDeletePlace = () => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: (id: string) => api.delete(`/place/${id}`),
    onSuccess: () => {
      toast.success("Konaklama alanı kaldırıldı");
      navigate("/");
    },
    onError: (err) => {
      toast.error(`Bir hata oluştu: ${err.message}`);
    },
  });
};
