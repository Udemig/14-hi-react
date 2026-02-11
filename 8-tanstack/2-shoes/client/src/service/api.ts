import axios from "axios";
import { authService } from "./auth";

const api = axios.create({
  baseURL: "http://localhost:5000/api", // temel api url
  withCredentials: true, // çerezleri backende göndermeye yarar
});

// axios interceptor (middleware)
// api'a atılan her istekte veya api'dan gelen her cevapta fonksiyon çalıştırmaya yarar
api.interceptors.response.use(
  // api'dan olumlu cevap gelince çalışır
  (res) => res,
  // api'nda olumsuz cevap gelince çalışır
  async (err) => {
    // hata aldığımız api isteğinin bilgilerini değişkene aktar
    const originalRequest = err.config;

    // hata access tokenın süresi dolmasından kaynaklı bir hata ise
    if (err.response.status === 401 && err.response.data?.message === "Access token expired") {
      try {
        // access tokenını yenile
        await authService.refresh();

        // hata aldığımız api isteğini tekrar at
        return api.request(originalRequest);
      } catch (error) {
        // refersh token geçersiz ise: çıkış yap
        await authService.logout();

        // login sayfasına yönlendir
        window.location.href = "/login";
      }
    }

    // hatayı fırlat
    return Promise.reject(err);
  },
);

export default api;
