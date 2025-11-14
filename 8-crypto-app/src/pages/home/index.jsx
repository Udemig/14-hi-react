import { useCallback, useEffect, useMemo, useState } from "react";
import coinApi from "../../utils/api";
import Error from "../../components/error";
import Loader from "../../components/loader";
import CoinCard from "../../components/home/coin-card";
import Searchbar from "../../components/home/searchbar";
import RefreshButton from "../../components/home/refresh-button";
import RefreshInfo from "../../components/home/refresh-info";
import InfoList from "../../components/home/info-list";

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [error, setError] = useState(null);
  const [coins, setCoins] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [lastUpdated, setLastUpdated] = useState(new Date());

  // api'dan verileri çekip state'e aktaran fonk
  const fetchCoins = useCallback((isRefreshing = false) => {
    if (isRefreshing) {
      setRefreshing(true);
    } else {
      setLoading(true);
    }

    coinApi
      .getTopCoins()
      .then((data) => {
        setCoins(data);
        setLastUpdated(new Date());
        setError(null);
      })
      .catch((err) => setError(err.message))
      .finally(() => {
        setLoading(false);
        setRefreshing(false);
      });
  }, []);

  // component ekrana gelince verileri çek
  useEffect(() => {
    fetchCoins();
  }, []);

  // otomatik yenilenme - her 30sn de bir
  useEffect(() => {
    const id = setInterval(() => {
      fetchCoins(true);
    }, 30000);

    // component ekrandan ayrılınca intervalı temizle
    return () => clearInterval(id);
  }, []);

  // coin veya aratılan kelime her değiştiğinde filtrele
  const filtredCoins = useMemo(() => {
    // aratılan terimi küçük harfe çevir
    const term = searchTerm.toLowerCase();

    // filtreleme yap
    return coins.filter((coin) => coin.name.toLowerCase().includes(term) || coin.symbol.includes(term));
  }, [coins, searchTerm]);

  if (error) return <Error message={error} refetch={fetchCoins} />;

  return (
    <div>
      {/* Başlık */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Kripto Para Piyasası</h1>
          <p className="text-gray-600 dark:text-gray-400 mt-1">En popüler kripto para birimleri</p>
        </div>

        <div className="flex items-center gap-5">
          <Searchbar onSearch={setSearchTerm} />

          <RefreshButton fetchCoins={fetchCoins} disabled={refreshing} />
        </div>
      </div>

      {/* Bilgiler */}
      <InfoList total={coins.length} lastUpdated={lastUpdated?.toLocaleTimeString()} />

      {/* Listeleme */}
      {loading ? (
        <Loader />
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filtredCoins.map((coin, key) => (
            <CoinCard coin={coin} key={key} />
          ))}
        </div>
      )}

      {/* Yeniliyo Uyarısı */}
      <RefreshInfo show={refreshing} />
    </div>
  );
};

export default Home;
