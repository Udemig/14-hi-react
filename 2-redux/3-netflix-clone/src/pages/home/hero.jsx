import { useEffect, useState } from "react";
import api from "../../api";
import Loader from "../../components/loader";
import Error from "../../components/error";
import { Link } from "react-router-dom";
import { Play, Plus } from "lucide-react";
import { BASE_IMG_URL } from "../../constants";

const Hero = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    setLoading(true);

    // gönderilecek parametreleri hazırla
    const params = {
      region: "TUR",
      language: "en",
    };

    // popüler filmleri api'dan al
    api
      .get("/movie/popular", { params })
      .then((res) => {
        const i = Math.round(Math.random() * 19);

        setMovie(res.data.results[i]);
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="backdrop-blur-md bg-linear-to-r from-black/40 to-transparent p-8 rounded-3xl border border-white/10 shadow-2xl md:max-h-[400px] mb-10">
      {loading ? (
        <Loader />
      ) : error ? (
        <Error message={error} />
      ) : (
        <div className="grid md:grid-cols-2 gap-8">
          <div className="flex flex-col gap-6 items-center justify-center">
            <h1 className="text-4xl font-bold text-center bg-linear-to-r from-white text-gray-300 text-back">
              {movie.title}
            </h1>

            <p className="text-gray-300 line-clamp-5 leading-relaxed">{movie.overview}</p>

            <div className="flex items-center gap-2 bg-yellow-400/20 px-4 py-2 rounded-full border border-yellow-400/30">
              <span>IMDB</span>
              <span className="text-yellow-400 font-bold text-lg">{movie.vote_average}</span>
            </div>

            <div className="flex gap-5">
              <Link to={`/movie/${movie.id}`} className="hero-btn">
                <Play className="size-5" />
                Filmi İzle
              </Link>

              <Link to="/" className="hero-btn from-blue-600 to-blue-700">
                <Plus className="size-5" />
                Listeye Ekle
              </Link>
            </div>
          </div>

          <div className="flex justify-center items-center">
            <img
              src={BASE_IMG_URL + movie.backdrop_path}
              className="drop-shadow-[0_0_0_80px_rgba(255,255,255,0.4)] rounded-2xl object-contain max-h-[300px] transition duration-500 hover:scale-105"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Hero;
