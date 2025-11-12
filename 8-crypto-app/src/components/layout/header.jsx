import { Moon, Star, Sun, TrendingUp } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="container">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="bg-blue-600 p-2 rounded-lg">
              <TrendingUp className="text-gray-100" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">Udemig Tracker</h1>
              <p className="text-xs text-gray-500">Kripto para takip sistemi</p>
            </div>
          </div>

          {/* Iconlar */}
          <div className="flex items-center gap-4">
            {/* Favori */}
            <button className="flex items-center space-x-2 text-gray-600">
              <Star className="size-5" />
              <span className="text-sm">3</span>
            </button>

            {/* Tema Butonu */}
            <button className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition">
              <Moon className="size-5 text-gray-400" />
            </button>

            {/* Canlı */}
            <div className="flex items-center gap-2">
              <div className="size-2 rounded-full bg-green-500 animate-ping" />
              <span className="text-xs text-gray-500">Canlı</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
