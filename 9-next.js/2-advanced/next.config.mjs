/** @type {import('next').NextConfig} */
const nextConfig = {
  /* url'leri güvenli hale getirmek ve next.js'in optimizasyonlarını yapmasını sağlamak için url ile ekrana bastığımız resimlerin host adreslerini burada tanımlarız */
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.pexels.com" },
      { protocol: "https", hostname: "cdn.dummyjson.com" },
    ],
  },
};

export default nextConfig;
