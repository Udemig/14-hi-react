import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="container py-5">
      <div className="d-flex flex-column justify-content-center text-center">
        <h1 className="display-4 fw-bold mb-3">Kitap Kurdu'na Hoş Geldiniz</h1>
        <p className="lead mb-4">Binlerce kitap arasından favorilerinizi keşfedin</p>

        <div>
          <img src="/welcome.webp" style={{ maxWidth: "500px", width: "100%" }} />
        </div>

        <Link to="/ürünler" className="btn btn-primary btn-lg px-4 py-2">
          Kitaplara Gözat
        </Link>
      </div>
    </div>
  );
};

export default Home;
