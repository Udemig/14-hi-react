import axios from "axios";
import { useEffect, useState } from "react";

const ListClassic = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  const fetchPlaces = () => {
    setLoading(true);

    axios
      .get("https://dummyjson.com/quotes")
      .then((res) => setData(res.data.quotes))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    fetchPlaces();
  }, []);

  if (loading) return <h1>Yükleniyor</h1>;

  if (error)
    return (
      <h1>
        <span>{error}</span>
        <button onClick={fetchPlaces}>Tekrar Dene</button>
      </h1>
    );

  return (
    <div>
      {data.map((i) => (
        <div>
          {iquote} <hr />
        </div>
      ))}
    </div>
  );
};

export default ListClassic;
