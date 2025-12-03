import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { BASE_IMG_URL } from "../../constants";
import { BookmarkMinus } from "lucide-react";
import { toggleWatchList } from "../../redux/actions";
import Loader from "../../components/loader";
import Error from "../../components/error";

const WatchList = () => {
  const dispatch = useDispatch();
  const { loading, error, watchlist } = useSelector((store) => store.watchlist);

  const handleRemove = (movie) => {
    dispatch(toggleWatchList(movie, false));
  };

  return (
    <div>
      <h1 className="text-3xl md:text-4xl font-bold bg-linear-to-r from-red-500 via-red-600 to-red-700 text-back">
        İzleme Listesi
      </h1>

      {loading ? (
        <Loader />
      ) : error ? (
        <Error message={error} />
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-y-10 gap-x-5 my-10">
          {watchlist.map((movie) => (
            <div key={movie.id} className="group relative">
              <button
                onClick={() => handleRemove(movie)}
                className="hidden group-hover:flex absolute top-3 end-3 bg-red-500 p-2 rounded-lg z-10 hover:scale-110 transition-all duration-300 shadow-lg shadow-red-500/50 items-center justify-center cursor-pointer"
              >
                <BookmarkMinus />
              </button>

              <Link to={`/movie/${movie.id}`}>
                <img
                  src={BASE_IMG_URL + movie.poster_path}
                  alt={movie.title}
                  className="rounded-xl shadow-lg group-hover:scale-105 object-cover transition-all duration-300 group-hover:shadow-2xl group-hover:shadow-white/20 "
                />
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default WatchList;
