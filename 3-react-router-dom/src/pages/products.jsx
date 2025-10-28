import { useEffect } from "react";
import axios from "axios";

const Products = () => {
  // Component ekrana basılınca
  useEffect(() => {
    // API'dan kitap verilerini almak için istek at
    axios.get("http://localhost:4000/books").then((res) => console.log(res.data));
  }, []);

  return (
    <div className="container py-5">
      <div className="d-flex flex-column justify-content-center text-center">
        <h1 className="display-4 fw-bold mb-3">Ürünler Sayfası</h1>
        <p className="lead mb-4">Binlerce kitap arasından favorilerinizi keşfedin</p>
      </div>
    </div>
  );
};

export default Products;
