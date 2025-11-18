import { useParams } from "react-router-dom";
import CoinChart from "../../components/detail/coin-chart";
import CoinDescription from "../../components/detail/coin-description";
import CoinHeader from "../../components/detail/coin-header";
import CoinPrice from "../../components/detail/coin-price";
import CoinStats from "../../components/detail/coin-stats";
import { useEffect, useState } from "react";
import coinApi from "../../utils/api";
import Loader from "../../components/loader";
import Error from "../../components/error";

const Detail = () => {
  const { id } = useParams();
  // coin detay state'leri
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [selectedPeriod, setSelectedPeriod] = useState(7);
  const [error, setError] = useState(null);
  const [coin, setCoin] = useState(null);

  // fiyat geçmişi state'Leri
  const [historyLoading, setHistoryLoading] = useState(true);
  const [priceHistory, setPriceHistory] = useState([]);

  // coin detay verilerini api'dan al
  const fetchCoinDetails = (isRefresh = false) => {
    if (isRefresh) {
      setRefreshing(true);
    } else {
      setLoading(true);
    }

    coinApi
      .getCoinDetails(id)
      .then((data) => {
        setCoin(data);
        setError(null);
      })
      .catch((err) => setError(err.message))
      .finally(() => {
        setLoading(false);
        setRefreshing(false);
      });
  };

  // coin'in fiyat geçmişini api'dan al
  const fetchPriceHistory = () => {
    setHistoryLoading(true);

    coinApi
      .getPriceHistory(id, selectedPeriod)
      .then((data) => {
        setPriceHistory(data);
        setError(null);
      })
      .catch((err) => setError(err.message))
      .finally(() => setHistoryLoading(false));
  };

  // yenileme anında çalışıcak fonksiyon
  const refreshData = () => {
    fetchCoinDetails(true);
    fetchPriceHistory();
  };

  // sayfa yüklenme anında çalışır
  useEffect(() => {
    fetchCoinDetails();
    fetchPriceHistory();
  }, []);

  // seçili zaman periyodu değiştiğinde güncel verileri al
  useEffect(() => {
    if (coin) {
      refreshData();
    }
  }, [selectedPeriod]);

  if (loading) return <Loader />;

  if (error) return <Error message={error} refetch={fetchCoinDetails} />;

  return (
    <div className="space-y-6">
      <CoinHeader coin={coin} refreshing={refreshing} refreshData={refreshData} />

      <CoinPrice coin={coin} />

      <CoinChart
        symbol={coin.symbol}
        selectedPeriod={selectedPeriod}
        setSelectedPeriod={setSelectedPeriod}
        priceHistory={priceHistory}
        historyLoading={historyLoading}
      />

      <CoinStats coin={coin} />

      <CoinDescription coin={coin} />
    </div>
  );
};

export default Detail;
