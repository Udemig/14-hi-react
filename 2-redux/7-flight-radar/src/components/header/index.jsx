import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { Radar } from "lucide-react";

const Header = () => {
  const { flights, isLoading, error } = useSelector((store) => store.flight);

  const statusText = isLoading
    ? "Radar çalışıyor..."
    : error
    ? `Hata: ${error}`
    : `${flights.length} uçuş bulundu`;

  return (
    <header className="flex justify-between items-center px-4 py-2.5 backdrop-blur-xl border-b border-white/10 bg-white/5 shadow-sm sticky top-0 z-50">
      {/* Logo */}
      <Link
        to="/"
        className="flex items-center gap-3 no-underline hover:scale-[1.02] transition-transform duration-200"
      >
        <img src="/logo.webp" alt="logo" width={40} className="drop-shadow-md" />
        <h2 className="text-[21px] font-semibold text-[#213547] m-0">Udemig Radar</h2>
      </Link>

      {/* Nav */}
      <nav className="flex bg-black/10 p-1 rounded-xl gap-0.5">
        <NavLink to="/">
          {({ isActive }) => (
            <button
              className={`px-4 py-1.5 text-sm font-semibold rounded-l-lg border transition-all duration-200 cursor-pointer ${
                isActive
                  ? "bg-linear-to-r from-primary to-primary-light border-transparent text-white shadow-lg shadow-primary/40"
                  : "bg-primary/10 border-primary/30 text-[#213547] hover:bg-primary/20 hover:-translate-y-0.5"
              }`}
            >
              Harita
            </button>
          )}
        </NavLink>
        <NavLink to="/list">
          {({ isActive }) => (
            <button
              className={`px-4 py-1.5 text-sm font-semibold rounded-r-lg border transition-all duration-200 cursor-pointer ${
                isActive
                  ? "bg-linear-to-r from-primary to-primary-light border-transparent text-white shadow-lg shadow-primary/40"
                  : "bg-primary/10 border-primary/30 text-[#213547] hover:bg-primary/20 hover:-translate-y-0.5"
              }`}
            >
              Liste
            </button>
          )}
        </NavLink>
      </nav>

      {/* Durum */}
      <div className="hidden md:flex items-center gap-2">
        <Radar size={15} className={`text-primary ${isLoading ? "animate-spin" : ""}`} />
        <span className="text-sm text-[#213547]/70 font-medium">{statusText}</span>
      </div>
    </header>
  );
};

export default Header;
