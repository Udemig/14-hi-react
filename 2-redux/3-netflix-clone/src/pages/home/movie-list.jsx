import { useEffect, useState } from "react";
import api from "../../api";
import { BASE_IMG_URL } from "../../constants";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { Link } from "react-router-dom";

const MovieList = ({ genre }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const params = {
      with_genres: genre.id,
    };

    api
      .get("/discover/movie", { params })
      .then((res) => setMovies(res.data.results))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="my-10">
      <h1 className="text-3xl font-bold mb-5 bg-linear-to-r from-white via-gray-200 to-gray-400 text-back">
        {genre.name}
      </h1>

      <Splide
        options={{
          gap: "20px",
          autoWidth: true,
          pagination: false,
          type: "loop",
        }}
      >
        {movies.map((movie) => (
          <SplideSlide className="overflow-hidden max-w-[300px] rounded-xl">
            <Link to={`/movie/${movie.id}`}>
              <img
                src={BASE_IMG_URL + movie.poster_path}
                className="h-full cursor-pointer  transition duration hover:scale-105 hover:shadow-2xl hover:shadow-white/20 border rounded-xl border-transparent hover:border-white/20 "
              />
            </Link>
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
};

export default MovieList;
