import { Plus, Minus } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { toggleWatchList } from "../../redux/actions";

const WatchListBtn = ({ movie }) => {
  const dispatch = useDispatch();
  // izleme listesi verilerini reducer'dan al
  const { watchlist } = useSelector((store) => store.watchlist);

  // ekrana basılan film izleme listesinde var mı?
  const isAdded = watchlist.find((item) => item.id === movie.id);

  // thunk aksiyonu çalıştır
  const handleToggle = () => {
    dispatch(toggleWatchList(movie, !isAdded));
  };

  return (
    <button onClick={handleToggle} className="hero-btn from-blue-600 to-blue-700">
      {isAdded ? (
        <>
          <Minus className="size-5" />
          Listeden Kaldır
        </>
      ) : (
        <>
          <Plus className="size-5" />
          Listeye Ekle
        </>
      )}
    </button>
  );
};

export default WatchListBtn;
