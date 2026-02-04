import { useQuery } from "@tanstack/react-query";
import api from "./api";
import type { PlacesResponse } from "../types";

// Api isteği atıp sate yönetimini yapam custom hook'lar tanımlayalım

/*
 * useQuery data state'inde queryFn fonksiyonun döndürdüğü veriyi tutar.
 * data state'inde tutulan veriyi değiştirmek isterseniz .then() veya select() yöntemlerinden birini tercih edebilirisniz
 */
export const useGetPlaces = () =>
  useQuery({
    queryKey: ["places"],
    queryFn: () => api.get<PlacesResponse>("/places"),
    select: (res) => res.data.places,
  });
