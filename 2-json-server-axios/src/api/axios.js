import axios from "axios";

// axios'un bazı ayarlını konfigüre ettiğimiz yeni bir versiyonunu oluştur
const api = axios.create({
  baseURL: "http://localhost:5000", // temel adres
  params: { lang: "tr" }, // parametreler
  headers: { Authorization: "api-key" }, // header
  timeout: 3000, // zaman aşımı süresi
});

export default api;
