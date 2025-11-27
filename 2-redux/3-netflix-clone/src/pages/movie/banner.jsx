import { BASE_IMG_URL } from "../../constants";

const Banner = ({ movie }) => {
  return (
    <div className="relative">
      <img src={BASE_IMG_URL + movie.backdrop_path} alt={movie.title} className="rounded-md size-full object-cover" />

      <div className="absolute bg-black/20 inset-0 grid place-items-center backdrop-blur-[0.5px]">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-shadow-lg text-shadow-black">
            {movie.title}
          </h2>
          {movie.tagline && <h4 className="text-shadow-lg text-shadow-black">{movie.tagline}</h4>}
        </div>
      </div>
    </div>
  );
};

export default Banner;
