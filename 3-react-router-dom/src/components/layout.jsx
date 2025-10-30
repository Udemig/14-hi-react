import { NavLink, Outlet, useNavigate } from "react-router-dom";

const Layout = () => {
  const navigate = useNavigate();

  /*
   * Bu kapsayıcı route'ları kullanıcı yetkilendirme sisteme içerisinde kullanırız.
   * Örneğin bu kapsayıcı route içerisinde yer alan Hikaye / Roman sayfaları admin rolü dışındaki kullanıcılar tarafından erişilemeyecek.
   * Bu noktada her sayfaya gidip ayrı ayrı koşullar yazmak yerine tek noktada tanımlamış oluyoruz.
   */
  if ("kullanıcı rolü yazar değilse") {
    // ansasayfaya yönlendir
    // navigate("/");
  }

  return (
    <div className="d-flex">
      <nav className="border p-5 me-5 d-flex flex-column gap-5">
        <NavLink to="/kategori/hikaye" className="btn btn-outline-light">
          Hikaye
        </NavLink>
        <NavLink to="/kategori/roman" className="btn btn-outline-light">
          Roman
        </NavLink>
      </nav>

      {/* Outlet: Kapsayı route içerisinde alt route elementinin ekrana basılacağı konumu belirlememizi sağlar. Bir nevi iniş pisti. */}
      <Outlet />
    </div>
  );
};

export default Layout;
