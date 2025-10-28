import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <nav className="navbar bg-dark navbar-dark px-4">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Kitap Kurdu
        </Link>

        <nav className="d-flex gap-3">
          <NavLink to="/" className="btn btn-outline-light">
            Anasayfa
          </NavLink>
          <NavLink to="/ürünler" className="btn btn-outline-light">
            Ürünler
          </NavLink>
        </nav>
      </div>
    </nav>
  );
};

export default Header;
