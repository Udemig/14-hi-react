import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  return (
    <div className="container py-5">
      <div className="d-flex flex-column justify-content-center text-center">
        <h1 className="display-4 fw-bold mb-3">404</h1>
        <h1 className="lead mb-4">Sayfa İçeriği Bulunamadı</h1>

        <Link to="/ürünler" className="btn btn-primary">
          Ürünler'e Gözat
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
