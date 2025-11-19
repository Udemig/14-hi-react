import { useEffect, useState } from "react";
import Card from "../components/card";
import Form from "../components/form";
import axios from "axios";
import { useSearchParams } from "react-router-dom";

const Products = () => {
  const [searchParams, setSearhParams] = useSearchParams();
  const [books, setBooks] = useState([]);

  // urldeki arama parametresine eriş
  const searchText = searchParams.get("arama_terimi");

  // Component ekrana basılınca
  useEffect(() => {
    // api'a gönderilecek parametreleri hazırla
    const params = { q: searchText };

    // API'dan kitap verilerini almak için istek at
    axios
      .get("http://localhost:4000/books", { params }) //
      .then((res) => setBooks(res.data));
  }, [searchText]);

  return (
    <div className="container py-5">
      <div className="d-flex flex-column justify-content-center text-center">
        <h1 className="display-4 fw-bold mb-3">Ürünler Sayfası</h1>
        <p className="lead mb-4">Binlerce kitap arasından favorilerinizi keşfedin</p>
      </div>

      <Form />

      <div className="books-container">
        {books.map((book) => (
          <Card key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
};

export default Products;
