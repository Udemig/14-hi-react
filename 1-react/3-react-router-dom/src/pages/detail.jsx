import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Detail = () => {
  const [loading, setLoading] = useState(true);
  const [book, setBook] = useState(null);

  // navigate fonksiyonun kurulumu
  const navigate = useNavigate();

  // urldeki id parametresine eriş
  const { id } = useParams();

  // id'si bilenen ürün verisini api'dan al
  useEffect(() => {
    axios
      .get(`http://localhost:4000/books/${id}`)
      .then((res) => setBook(res.data))
      .catch((err) => navigate("/not-found", { state: "ürün bulunamadı" }))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <h1>Yükleniyor....</h1>;

  return (
    <div>
      <Link to={-1} className="btn btn-primary mb-4">
        Geri
      </Link>

      <h1>Detay Sayfası</h1>

      <div>
        <img src={book.image} style={{ maxHeight: "400px" }} className="img-fluid rounded shadow-sm" />

        <br />
        <br />

        <h1>{book.title}</h1>

        <br />

        <h4>Fiyat: {book.price}</h4>
        <h4>Yazar: {book.author}</h4>
        <h4>Yıl: {book.year}</h4>
      </div>
    </div>
  );
};

export default Detail;
