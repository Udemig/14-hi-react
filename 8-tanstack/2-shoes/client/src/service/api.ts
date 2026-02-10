import axios from "axios";

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
  (err) => {
    console.log("interceptor hatayı yakaladı", err);

    // hatayı fırlat
    return Promise.reject(err);
  },
);

export default api;
