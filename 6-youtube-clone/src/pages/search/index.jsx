import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import api from "../../utils/api";
import BasicLoader from "../../components/loader/basic-loader";
import Error from "../../components/error";
import Shorts from "../../components/shorts";
import Card from "../../components/card";

const Search = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);
  const [token, setToken] = useState(null);

  // url'den aratılan terimi al
  const [searchParams] = useSearchParams();
  const query = searchParams.get("search_query");

  // sayfa yüklenince api'dan verileri al
  useEffect(() => {
    setLoading(true);

    const params = {
      query,
    };

    api
      .get("/search", { params })
      .then((res) => {
        setData(res.data.data);
        setToken(res.data.token);
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [query]);

  // api'dan gelen yanıt içerisinden video | shorts | shorts_listing türündeki verileri filtrledik
  const filtredArr = data.filter((i) => i.type === "video" || i.type === "shorts" || i.type === "shorts_listing");

  return (
    <div className="page">
      {loading ? (
        <BasicLoader />
      ) : error ? (
        <Error message={error} />
      ) : (
        <>
          <h2 className="text-2xl my-3">
            <span className="font-bold">{query}</span> için sonuçlar
          </h2>

          <div className="flex flex-col gap-4 @container">
            {filtredArr.map((item, key) =>
              item.type === "shorts_listing" ? (
                <Shorts data={item.data} key={key} />
              ) : (
                <Card video={item} key={key} isRow />
              )
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default Search;
