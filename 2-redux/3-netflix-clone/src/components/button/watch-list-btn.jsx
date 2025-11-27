import { Plus } from "lucide-react";
import { useDispatch } from "react-redux";
import { toggleWatchList } from "../../pages/redux/actions";

const WatchListBtn = ({ movie }) => {
  const dispatch = useDispatch();

  return (
    <button onClick={() => dispatch(toggleWatchList(movie, true))} className="hero-btn from-blue-600 to-blue-700">
      <Plus className="size-5" />
      Listeye Ekle
    </button>
  );
};

export default WatchListBtn;
