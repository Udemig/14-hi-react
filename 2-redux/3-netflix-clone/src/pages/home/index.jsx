import { useEffect, useState } from "react";
import Hero from "./hero";
import api from "../../api";

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    setLoading(true);

    api
      .get("/genre/movie/list?language=tr")
      .then((res) => setGenres(res.data.genres))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  console.log(loading, error, genres);

  return (
    <div>
      <Hero />
    </div>
  );
};

export default Home;
