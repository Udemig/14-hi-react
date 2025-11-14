import axios from "axios";

// axios ayarlarını yapalım
const api = axios.create({
  baseURL: "https://api.coingecko.com/api/v3",
  headers: { "x-cg-demo-api-key": import.meta.env.VITE_API_KEY },
});

// API isteğini atan fonksiyonları bir arada tanımlayalım
const coinApi = {
  // top coinleri  getir
  async getTopCoins() {
    const res = await api.get("/coins/markets?vs_currency=usd");
    return res.data;
  },

  // coin detay getir
  async getCoinDetails() {},

  // coin fiyat geçmişini getir
  async getPriceHistory() {},
};

export default coinApi;
