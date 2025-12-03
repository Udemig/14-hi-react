import { Bookmark } from "lucide-react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Header = () => {
  const { watchlist } = useSelector((store) => store.watchlist);

  return (
    <header className="mb-10 flex justify-between items-center backdrop-blur-sm bg-black/30 px-5 md:px-10 lg:px-15 xl:px-20 py-4 border border-white/10 shadow-lg rounded-2xl">
      <Link to="/" className="transition duration-300 hover:scale-105">
        <img src="/logo.svg" alt="logo" className="max-w-[150px]" />
      </Link>

      <Link
        to="/watch-list"
        className="flex gap-4 md:gap-5 items-center hover:text-white transition duration-300 px-4 py-2 hover:bg-white/10 rounded-lg"
      >
        <div className="relative">
          <Bookmark />
          <span className="absolute right-[-13px] top-[-13px] bg-linear-to-r from-red-500 to-red-600 size-6 grid place-items-center rounded-full text-sm font-bold shadow-lg shadow-red-500/50">
            {watchlist.length}
          </span>
        </div>
        <span className="md:text-lg">İzleme Listesi</span>
      </Link>
    </header>
  );
};

export default Header;
